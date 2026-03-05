#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"

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
    message: "Do not call playwright directly in root scripts. Use scoped wrapper commands."
  }
])

const VISUAL_ALLOWLIST_PATH = resolve(
  process.cwd(),
  "artifacts",
  "parity",
  "visual-allowlist.json"
)

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
 * Reads root package.json.
 * @returns {{ scripts?: Record<string, string> }} Parsed package JSON.
 * @example
 * readRootPackageJson()
 */
const readRootPackageJson = () => {
  const packageJsonPath = resolve(process.cwd(), "package.json")
  const text = readFileSync(packageJsonPath, "utf8")
  return JSON.parse(text)
}

/**
 * Reads visual allowlist payload.
 * @returns {{ entries?: Array<Record<string, unknown>> } | Array<Record<string, unknown>>} Parsed allowlist payload.
 * @example
 * readVisualAllowlist()
 */
const readVisualAllowlist = () => {
  const text = readFileSync(VISUAL_ALLOWLIST_PATH, "utf8")
  return JSON.parse(text)
}

/**
 * Creates output directory for M1 reports.
 * @returns {string} Output directory path.
 * @example
 * ensureReportDirectory()
 */
const ensureReportDirectory = () => {
  const reportDirectoryPath = resolve(process.cwd(), "artifacts", "reports", "m1")
  mkdirSync(reportDirectoryPath, { recursive: true })
  return reportDirectoryPath
}

/**
 * Writes gate result report.
 * @param {string} gateName - Gate identifier.
 * @param {{ status: string; mode: string; findings: string[] }} result - Result payload.
 * @returns {void}
 * @example
 * writeReport("api", { status: "pass", mode: "stub", findings: [] })
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
 * Runs command scope policy checks against root scripts.
 * @returns {{ status: string; mode: string; findings: string[] }} Policy check result.
 * @example
 * runCommandScopePolicyCheck()
 */
const runCommandScopePolicyCheck = () => {
  const packageJson = readRootPackageJson()
  const scripts = packageJson.scripts ?? {}
  const findings = []

  for (const [scriptName, scriptCommand] of Object.entries(scripts)) {
    for (const forbiddenPattern of COMMAND_SCOPE_FORBIDDEN_PATTERNS) {
      if (forbiddenPattern.regex.test(scriptCommand)) {
        findings.push(
          `${forbiddenPattern.id} in script ${scriptName}: ${forbiddenPattern.message}`
        )
      }
    }
  }

  return {
    status: findings.length === 0 ? "pass" : "fail",
    mode: "policy",
    findings
  }
}

/**
 * Validates visual allowlist schema and expiration policy.
 * @returns {{ status: string; mode: string; findings: string[] }} Validation result.
 * @example
 * runVisualPolicyCheck()
 */
const runVisualPolicyCheck = () => {
  const today = new Date().toISOString().slice(0, 10)
  const allowlistPayload = readVisualAllowlist()
  const entries = Array.isArray(allowlistPayload)
    ? allowlistPayload
    : Array.isArray(allowlistPayload.entries)
      ? allowlistPayload.entries
      : null

  if (!entries) {
    return {
      status: "fail",
      mode: "policy",
      findings: ["visual allowlist schema invalid: expected array or { entries: [] }"]
    }
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
      const isDateFormatValid = /^\\d{4}-\\d{2}-\\d{2}$/.test(entry.expiresAt)
      if (!isDateFormatValid) {
        findings.push(`allowlist entry ${index} has invalid expiresAt format: ${entry.expiresAt}`)
      } else if (entry.expiresAt < today) {
        findings.push(`allowlist entry ${index} expired: ${entry.expiresAt}`)
      }
    }
  }

  return {
    status: findings.length === 0 ? "pass" : "fail",
    mode: "policy",
    findings
  }
}

/**
 * Runs gate logic for the specified gate.
 * @param {string} gateName - Gate identifier.
 * @returns {{ status: string; mode: string; findings: string[] }} Gate result.
 * @example
 * runGate("api")
 */
const runGate = (gateName) => {
  if (gateName === "command-scope-policy") {
    return runCommandScopePolicyCheck()
  }

  if (gateName === "visual-policy") {
    return runVisualPolicyCheck()
  }

  return {
    status: "pass",
    mode: "stub",
    findings: [
      `Gate ${gateName} is scaffolded for M1. Detailed assertions will be added in M2/M3.`
    ]
  }
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
} catch (error) {
  console.error("M1 gate execution failed")
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
}
