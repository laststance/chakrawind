#!/usr/bin/env node

import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { join, resolve } from "node:path"

const BASELINE_PACKAGE_NAME = "@chakra-ui/react"
const BASELINE_VERSION = "3.34.0"

const ALLOWED_GATES = Object.freeze([
  "api",
  "types",
  "runtime",
  "a11y",
  "visual-parity",
  "visual-policy",
  "command-scope-policy",
  "coexist",
  "install-npm",
  "install-registry"
])

const COMMAND_SCOPE_FORBIDDEN_PATTERNS = Object.freeze([
  {
    id: "forbidden-direct-playwright",
    regex: /pnpm\s+exec\s+playwright\s+test(?!:)/,
    message: "Do not call playwright directly in gate definitions. Use scoped wrapper commands."
  }
])

const REQUIRED_WRAPPER_COMMANDS = Object.freeze([
  "test:visual:parity",
  "test:coexist",
  "test:command-scope:policy"
])

const PATHS = Object.freeze({
  rootPackageJson: resolve(process.cwd(), "package.json"),
  m1PhaseSpec: resolve(
    process.cwd(),
    "docs",
    "plans",
    "phases",
    "M1-compatibility-harness-and-parity-gates.md"
  ),
  coexistSpec: resolve(process.cwd(), "docs", "specs", "coexistence-test-matrix.md"),
  installSpec: resolve(process.cwd(), "docs", "specs", "install-smoke-matrix.md"),
  visualPolicySpec: resolve(process.cwd(), "docs", "specs", "visual-diff-policy.md"),
  visualAllowlist: resolve(process.cwd(), "artifacts", "parity", "visual-allowlist.json"),
  exportManifest: resolve(
    process.cwd(),
    "artifacts",
    "parity",
    "baseline-export-manifest.json"
  ),
  typeManifest: resolve(process.cwd(), "artifacts", "parity", "baseline-type-manifest.json"),
  componentManifest: resolve(
    process.cwd(),
    "artifacts",
    "parity",
    "baseline-component-manifest.json"
  ),
  reportDirectory: resolve(process.cwd(), "artifacts", "reports", "m1"),
  workflowDirectory: resolve(process.cwd(), ".github", "workflows")
})

const MINIMUM_EXPORT_ENTRY_COUNT = 300
const MINIMUM_TYPE_ENTRY_COUNT = 500
const MINIMUM_COMPONENT_ENTRY_COUNT = 80
const REQUIRED_COEXIST_MATRIX_ROWS = 8
const REQUIRED_INSTALL_ROWS_PER_PATH = 3

/**
 * Returns gate argument from CLI.
 * @returns {string} Gate identifier.
 * @example
 * getGateName()
 */
const getGateName = () => {
  const gateName = process.argv[2]
  if (!gateName || !ALLOWED_GATES.includes(gateName)) {
    throw new Error(`Invalid gate name. Allowed: ${ALLOWED_GATES.join(", ")}`)
  }
  return gateName
}

/**
 * Reads UTF-8 text file.
 * @param {string} filePath - Target file path.
 * @returns {string} File text content.
 * @example
 * readTextFile("./package.json")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Reads and parses JSON file.
 * @param {string} filePath - Target file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("./package.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readTextFile(filePath))
}

/**
 * Reads root package.json.
 * @returns {{ scripts?: Record<string, string> }} Parsed package JSON.
 * @example
 * readRootPackageJson()
 */
const readRootPackageJson = () => {
  return readJsonFile(PATHS.rootPackageJson)
}

/**
 * Creates output directory for M1 reports.
 * @returns {string} Output directory path.
 * @example
 * ensureReportDirectory()
 */
const ensureReportDirectory = () => {
  mkdirSync(PATHS.reportDirectory, { recursive: true })
  return PATHS.reportDirectory
}

/**
 * Writes gate result report.
 * @param {string} gateName - Gate identifier.
 * @param {{ status: string; mode: string; findings: string[] }} result - Result payload.
 * @returns {void}
 * @example
 * writeReport("api", { status: "pass", mode: "policy", findings: [] })
 */
const writeReport = (gateName, result) => {
  const reportDirectoryPath = ensureReportDirectory()
  const reportPath = resolve(reportDirectoryPath, `${gateName}.json`)
  const reportPayload = {
    gate: gateName,
    generatedAt: new Date().toISOString(),
    ...result
  }
  writeFileSync(reportPath, `${JSON.stringify(reportPayload, null, 2)}\n`, "utf8")
}

/**
 * Creates a standardized gate result object.
 * @param {string} mode - Gate mode label.
 * @param {string[]} findings - Validation findings.
 * @returns {{ status: string; mode: string; findings: string[] }} Result payload.
 * @example
 * toResult("policy", [])
 */
const toResult = (mode, findings) => {
  return {
    status: findings.length === 0 ? "pass" : "fail",
    mode,
    findings
  }
}

/**
 * Lists all files in a directory recursively.
 * @param {string} directoryPath - Directory path.
 * @returns {string[]} Absolute file paths.
 * @example
 * listFilesRecursively(".github/workflows")
 */
const listFilesRecursively = (directoryPath) => {
  const paths = []

  if (!statSafe(directoryPath)?.isDirectory()) {
    return paths
  }

  const stack = [directoryPath]

  while (stack.length > 0) {
    const currentDirectory = stack.pop()
    const entries = readdirSync(currentDirectory)

    for (const entry of entries) {
      const absolutePath = join(currentDirectory, entry)
      const entryStat = statSafe(absolutePath)

      if (!entryStat) {
        continue
      }

      if (entryStat.isDirectory()) {
        stack.push(absolutePath)
      } else if (entryStat.isFile()) {
        paths.push(absolutePath)
      }
    }
  }

  return paths
}

/**
 * Safe wrapper of statSync.
 * @param {string} filePath - Target path.
 * @returns {import("node:fs").Stats | null} File stats or null.
 * @example
 * statSafe("package.json")
 */
const statSafe = (filePath) => {
  try {
    return statSync(filePath)
  } catch {
    return null
  }
}

/**
 * Validates baseline manifest metadata and entry count.
 * @param {string} manifestName - Logical manifest name.
 * @param {any} manifest - Parsed manifest object.
 * @param {number} minimumEntryCount - Minimum entry count.
 * @returns {string[]} Validation findings.
 * @example
 * validateManifest("export", manifest, 100)
 */
const validateManifest = (manifestName, manifest, minimumEntryCount) => {
  const findings = []

  if (manifest?.baselinePackage !== BASELINE_PACKAGE_NAME) {
    findings.push(`${manifestName}: baselinePackage must be ${BASELINE_PACKAGE_NAME}`)
  }
  if (manifest?.baselineVersion !== BASELINE_VERSION) {
    findings.push(`${manifestName}: baselineVersion must be ${BASELINE_VERSION}`)
  }
  if (!Array.isArray(manifest?.entries)) {
    findings.push(`${manifestName}: entries must be an array`)
    return findings
  }
  if (manifest.entries.length < minimumEntryCount) {
    findings.push(
      `${manifestName}: entries count must be >= ${minimumEntryCount}, found ${manifest.entries.length}`
    )
  }

  return findings
}

/**
 * Validates required entries in a manifest.
 * @param {string} manifestName - Logical manifest name.
 * @param {string[]} entries - Manifest entries.
 * @param {string[]} requiredEntries - Required symbols or IDs.
 * @returns {string[]} Validation findings.
 * @example
 * validateRequiredEntries("export", ["entry:."], ["entry:."])
 */
const validateRequiredEntries = (manifestName, entries, requiredEntries) => {
  const findings = []

  for (const requiredEntry of requiredEntries) {
    if (!entries.includes(requiredEntry)) {
      findings.push(`${manifestName}: missing required entry ${requiredEntry}`)
    }
  }

  return findings
}

/**
 * Runs API gate checks using export baseline manifest.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runApiGateCheck()
 */
const runApiGateCheck = () => {
  const exportManifest = readJsonFile(PATHS.exportManifest)
  const findings = [
    ...validateManifest("export", exportManifest, MINIMUM_EXPORT_ENTRY_COUNT),
    ...validateRequiredEntries("export", exportManifest.entries ?? [], [
      "entry:.",
      "entry:./*",
      "symbol:Button",
      "symbol:Input",
      "symbol:Dialog"
    ])
  ]

  return toResult("policy-contract", findings)
}

/**
 * Runs type contract gate checks using type baseline manifest.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runTypesGateCheck()
 */
const runTypesGateCheck = () => {
  const typeManifest = readJsonFile(PATHS.typeManifest)
  const findings = [
    ...validateManifest("types", typeManifest, MINIMUM_TYPE_ENTRY_COUNT),
    ...validateRequiredEntries("types", typeManifest.entries ?? [], [
      "ButtonProps",
      "BoxProps",
      "ChakraProviderProps",
      "AccordionRootProps"
    ])
  ]

  return toResult("policy-contract", findings)
}

/**
 * Runs runtime gate checks using component baseline manifest.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runRuntimeGateCheck()
 */
const runRuntimeGateCheck = () => {
  const componentManifest = readJsonFile(PATHS.componentManifest)
  const findings = [
    ...validateManifest("runtime", componentManifest, MINIMUM_COMPONENT_ENTRY_COUNT),
    ...validateRequiredEntries("runtime", componentManifest.entries ?? [], [
      "button",
      "input",
      "dialog",
      "menu",
      "table"
    ])
  ]

  return toResult("policy-contract", findings)
}

/**
 * Runs accessibility contract checks against M1 spec text.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runA11yGateCheck()
 */
const runA11yGateCheck = () => {
  const m1SpecText = readTextFile(PATHS.m1PhaseSpec).toLowerCase()
  const coexistSpecText = readTextFile(PATHS.coexistSpec).toLowerCase()
  const findings = []

  const requiredM1Terms = ["role", "aria", "keyboard", "focus"]
  for (const requiredTerm of requiredM1Terms) {
    if (!m1SpecText.includes(requiredTerm)) {
      findings.push(`a11y spec term missing in M1 phase doc: ${requiredTerm}`)
    }
  }

  if (!coexistSpecText.includes("focus-visible styles remain accessible")) {
    findings.push("a11y requirement missing in coexist spec: focus-visible assertion")
  }

  return toResult("policy-contract", findings)
}

/**
 * Runs visual allowlist schema and expiration policy checks.
 * @returns {{ status: string; mode: string; findings: string[] }} Validation result.
 * @example
 * runVisualPolicyCheck()
 */
const runVisualPolicyCheck = () => {
  const today = new Date().toISOString().slice(0, 10)
  const allowlistPayload = readJsonFile(PATHS.visualAllowlist)
  const entries = Array.isArray(allowlistPayload)
    ? allowlistPayload
    : Array.isArray(allowlistPayload.entries)
      ? allowlistPayload.entries
      : null

  if (!entries) {
    return toResult("policy", ["visual allowlist schema invalid: expected array or { entries: [] }"])
  }

  const findings = []

  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index]
    const requiredFields = ["snapshotName", "reason", "owner", "ticket", "expiresAt"]

    for (const requiredField of requiredFields) {
      if (typeof entry?.[requiredField] !== "string" || entry[requiredField].trim().length === 0) {
        findings.push(`allowlist entry ${index} missing required field ${requiredField}`)
      }
    }

    if (typeof entry?.expiresAt === "string") {
      const isDateFormatValid = /^\d{4}-\d{2}-\d{2}$/.test(entry.expiresAt)
      if (!isDateFormatValid) {
        findings.push(`allowlist entry ${index} has invalid expiresAt format: ${entry.expiresAt}`)
      } else if (entry.expiresAt < today) {
        findings.push(`allowlist entry ${index} expired: ${entry.expiresAt}`)
      }
    }
  }

  const visualSpecText = readTextFile(PATHS.visualPolicySpec)
  if (!visualSpecText.includes("maxDiffPixels = 0")) {
    findings.push("visual policy spec must define maxDiffPixels = 0 default")
  }

  return toResult("policy", findings)
}

/**
 * Runs command scope policy checks against package scripts and workflows.
 * @returns {{ status: string; mode: string; findings: string[] }} Policy check result.
 * @example
 * runCommandScopePolicyCheck()
 */
const runCommandScopePolicyCheck = () => {
  const packageJson = readRootPackageJson()
  const scripts = packageJson.scripts ?? {}
  const findings = []

  for (const requiredScript of REQUIRED_WRAPPER_COMMANDS) {
    if (typeof scripts[requiredScript] !== "string") {
      findings.push(`missing required wrapper script: ${requiredScript}`)
    }
  }

  for (const [scriptName, scriptCommand] of Object.entries(scripts)) {
    for (const forbiddenPattern of COMMAND_SCOPE_FORBIDDEN_PATTERNS) {
      if (forbiddenPattern.regex.test(scriptCommand)) {
        findings.push(
          `${forbiddenPattern.id} in script ${scriptName}: ${forbiddenPattern.message}`
        )
      }
    }
  }

  const workflowFiles = listFilesRecursively(PATHS.workflowDirectory).filter((filePath) => {
    return filePath.endsWith(".yml") || filePath.endsWith(".yaml")
  })

  for (const workflowFile of workflowFiles) {
    const workflowText = readTextFile(workflowFile)
    for (const forbiddenPattern of COMMAND_SCOPE_FORBIDDEN_PATTERNS) {
      if (forbiddenPattern.regex.test(workflowText)) {
        findings.push(`${forbiddenPattern.id} in workflow ${workflowFile}`)
      }
    }
  }

  return toResult("policy", findings)
}

/**
 * Runs coexistence matrix contract checks against spec text.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runCoexistGateCheck()
 */
const runCoexistGateCheck = () => {
  const coexistSpecText = readTextFile(PATHS.coexistSpec)
  const lowerText = coexistSpecText.toLowerCase()
  const findings = []

  const requiredTerms = ["total combinations", "2 x 2 x 2 = 8", "focus-visible styles remain accessible"]

  for (const requiredTerm of requiredTerms) {
    if (!lowerText.includes(requiredTerm)) {
      findings.push(`coexist spec missing required term: ${requiredTerm}`)
    }
  }

  const requiredAxisPatterns = [
    { axis: "preflight", pattern: /1\.\s*preflight[\s\S]*?-\s*`on`[\s\S]*?-\s*`off`/i },
    { axis: "color mode", pattern: /2\.\s*color mode[\s\S]*?-\s*`light`[\s\S]*?-\s*`dark`/i },
    { axis: "token override", pattern: /3\.\s*token override[\s\S]*?-\s*`off`[\s\S]*?-\s*`on`/i }
  ]

  let matrixAxesCount = 0
  for (const requiredAxisPattern of requiredAxisPatterns) {
    if (requiredAxisPattern.pattern.test(coexistSpecText)) {
      matrixAxesCount += 1
    } else {
      findings.push(`coexist axis definition mismatch: ${requiredAxisPattern.axis}`)
    }
  }

  if (matrixAxesCount !== 3) {
    findings.push(`coexist matrix axis count mismatch: expected 3, found ${matrixAxesCount}`)
  }

  const declaredCombinationCount = lowerText.includes(`2 x 2 x 2 = ${REQUIRED_COEXIST_MATRIX_ROWS}`)
  if (!declaredCombinationCount) {
    findings.push(
      `coexist required combination count mismatch: expected ${REQUIRED_COEXIST_MATRIX_ROWS}`
    )
  }

  return toResult("policy-contract", findings)
}

/**
 * Extracts install matrix rows from markdown table.
 * @param {string} installSpecText - Install spec text.
 * @returns {Array<{ id: string; path: string }>} Parsed matrix rows.
 * @example
 * extractInstallMatrixRows(specText)
 */
const extractInstallMatrixRows = (installSpecText) => {
  const rows = []
  const lines = installSpecText.split("\n")

  for (const line of lines) {
    const rowMatch = line.match(/^\|\s(ISM-\d{3})\s\|.*\|\s(npm|registry)\s\|\s*$/)
    if (!rowMatch) {
      continue
    }

    rows.push({
      id: rowMatch[1],
      path: rowMatch[2]
    })
  }

  return rows
}

/**
 * Runs install smoke contract checks for npm or registry path.
 * @param {"npm" | "registry"} installPath - Install path selector.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runInstallGateCheck("npm")
 */
const runInstallGateCheck = (installPath) => {
  const installSpecText = readTextFile(PATHS.installSpec)
  const rows = extractInstallMatrixRows(installSpecText)
  const findings = []

  const rowsForPath = rows.filter((row) => row.path === installPath)
  if (rowsForPath.length !== REQUIRED_INSTALL_ROWS_PER_PATH) {
    findings.push(
      `${installPath} install matrix row count mismatch: expected ${REQUIRED_INSTALL_ROWS_PER_PATH}, found ${rowsForPath.length}`
    )
  }

  const expectedRowIds =
    installPath === "npm" ? ["ISM-001", "ISM-003", "ISM-005"] : ["ISM-002", "ISM-004", "ISM-006"]

  for (const expectedRowId of expectedRowIds) {
    if (!rowsForPath.some((row) => row.id === expectedRowId)) {
      findings.push(`${installPath} install matrix missing row ${expectedRowId}`)
    }
  }

  if (installPath === "registry" && !installSpecText.includes("npx shadcn@latest add")) {
    findings.push("registry install command pattern missing: npx shadcn@latest add")
  }

  if (installPath === "npm" && !installSpecText.toLowerCase().includes("npm install")) {
    findings.push("npm install command pattern missing: npm install")
  }

  return toResult("policy-contract", findings)
}

/**
 * Runs gate logic for the specified gate.
 * @param {string} gateName - Gate identifier.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runGate("api")
 */
const runGate = (gateName) => {
  if (gateName === "api") return runApiGateCheck()
  if (gateName === "types") return runTypesGateCheck()
  if (gateName === "runtime") return runRuntimeGateCheck()
  if (gateName === "a11y") return runA11yGateCheck()
  if (gateName === "visual-parity") {
    return {
      status: "pass",
      mode: "stub",
      findings: [
        "Gate visual-parity is scaffolded for M1. Pixel diff assertions will be added with Playwright integration."
      ]
    }
  }
  if (gateName === "visual-policy") return runVisualPolicyCheck()
  if (gateName === "command-scope-policy") return runCommandScopePolicyCheck()
  if (gateName === "coexist") return runCoexistGateCheck()
  if (gateName === "install-npm") return runInstallGateCheck("npm")
  if (gateName === "install-registry") return runInstallGateCheck("registry")

  return toResult("stub", [`Unexpected gate path: ${gateName}`])
}

try {
  const gateName = getGateName()
  const result = runGate(gateName)
  writeReport(gateName, result)

  if (result.status === "fail") {
    console.error(`M1 gate failed: ${gateName}`)
    for (const finding of result.findings) {
      console.error(`- ${finding}`)
    }
    process.exit(1)
  }

  console.log(`M1 gate passed: ${gateName} (${result.mode})`)
  if (result.findings.length > 0) {
    for (const finding of result.findings) {
      console.log(`- ${finding}`)
    }
  }
} catch (error) {
  console.error("M1 gate execution failed")
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
}
