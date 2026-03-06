#!/usr/bin/env node

import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const REALWORLD_CATALOG_SPEC_PATH = resolve(
  process.cwd(),
  "docs",
  "specs",
  "realworld-transition-catalog.md"
)
const REALWORLD_FLOW_MANIFEST_PATH = resolve(
  process.cwd(),
  "artifacts",
  "realworld",
  "flow-manifest.json"
)
const REALWORLD_TEST_DIRECTORY_PATH = resolve(process.cwd(), "tests", "realworld-e2e")
const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m4",
  "realworld-catalog-verify.json"
)
const CATALOG_ID_PATTERN = /^RW-[A-Z]+-\d{3}$/

/**
 * Reads file as UTF-8 text.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File text.
 * @example
 * readTextFile("/repo/docs/spec.md")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Writes JSON file with deterministic formatting.
 * @param {string} filePath - Absolute output path.
 * @param {unknown} payload - Serializable payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/report.json", { status: "pass" })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8")
}

/**
 * Lists realworld test files recursively.
 * @param {string} directoryPath - Absolute directory path.
 * @returns {string[]} Absolute file paths.
 * @example
 * listFilesRecursively("/repo/tests/realworld-e2e")
 */
const listFilesRecursively = (directoryPath) => {
  const filePaths = []
  const entries = readdirSync(directoryPath)

  for (const entry of entries) {
    const fullPath = resolve(directoryPath, entry)
    const isDirectory = statSync(fullPath).isDirectory()
    if (isDirectory) {
      filePaths.push(...listFilesRecursively(fullPath))
      continue
    }

    filePaths.push(fullPath)
  }

  return filePaths
}

/**
 * Returns sorted unique string values.
 * @param {string[]} values - Input values.
 * @returns {string[]} Unique sorted values.
 * @example
 * uniqueSorted(["b", "a", "a"])
 */
const uniqueSorted = (values) => {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right))
}

/**
 * Parses catalog rows from markdown table.
 * @param {string} catalogSpecText - Catalog markdown text.
 * @returns {{ rows: Array<{ id: string; screenshotName: string }>; duplicateIds: string[] }} Parsed rows and duplicate IDs.
 * @example
 * parseCatalogRows("| RW-INIT-001 | Home | Guest | Initial render | Stable | `rw-home-initial.png` |")
 */
const parseCatalogRows = (catalogSpecText) => {
  const rows = []
  const encounteredIds = new Set()
  const duplicateIds = []

  for (const line of catalogSpecText.split("\n")) {
    if (!line.startsWith("| RW-")) {
      continue
    }

    const columns = line
      .split("|")
      .slice(1, -1)
      .map((columnText) => columnText.trim())
    if (columns.length < 6) {
      continue
    }

    const id = columns[0]
    const screenshotName = columns[5].replaceAll("`", "")
    if (encounteredIds.has(id)) {
      duplicateIds.push(id)
    }
    encounteredIds.add(id)

    rows.push({ id, screenshotName })
  }

  return { rows, duplicateIds: uniqueSorted(duplicateIds) }
}

/**
 * Parses catalog references and screenshot checkpoints from test files.
 * @param {string[]} testFilePaths - Absolute test file paths.
 * @returns {{ mappings: Array<{ id: string; screenshotName: string; filePath: string }>; findings: string[] }} Parsed mappings and findings.
 * @example
 * parseTestCatalogMappings(["/repo/tests/realworld-e2e/spec.ts"])
 */
const parseTestCatalogMappings = (testFilePaths) => {
  const mappings = []
  const findings = []

  for (const testFilePath of testFilePaths) {
    const lines = readTextFile(testFilePath).split("\n")
    let pendingCatalogId = null

    for (const line of lines) {
      const trimmedLine = line.trim()
      if (
        trimmedLine.startsWith("*") ||
        trimmedLine.startsWith("/*") ||
        trimmedLine.startsWith("*/")
      ) {
        continue
      }

      const catalogMatch = line.match(/\/\/\s*catalog:\s*(RW-[A-Z]+-\d{3})/)
      if (catalogMatch) {
        if (pendingCatalogId !== null) {
          findings.push(
            `${testFilePath}: catalog ${pendingCatalogId} has no screenshot checkpoint before next catalog marker`
          )
        }
        pendingCatalogId = catalogMatch[1]
        continue
      }

      const screenshotMatch =
        line.match(/toHaveScreenshot\(\s*["']([^"']+)["']/) ??
        line.match(/takeCheckpoint\(\s*page\s*,\s*["']([^"']+)["']\s*\)/)
      if (!screenshotMatch) {
        continue
      }

      if (pendingCatalogId === null) {
        findings.push(`${testFilePath}: screenshot ${screenshotMatch[1]} has no catalog marker`)
        continue
      }

      mappings.push({
        id: pendingCatalogId,
        screenshotName: screenshotMatch[1],
        filePath: testFilePath
      })
      pendingCatalogId = null
    }

    if (pendingCatalogId !== null) {
      findings.push(`${testFilePath}: catalog ${pendingCatalogId} has no screenshot checkpoint`)
    }
  }

  return { mappings, findings }
}

/**
 * Computes set difference.
 * @param {Set<string>} leftSet - Left set.
 * @param {Set<string>} rightSet - Right set.
 * @returns {string[]} Sorted values present in left only.
 * @example
 * difference(new Set(["a"]), new Set(["b"]))
 */
const difference = (leftSet, rightSet) => {
  return [...leftSet].filter((value) => !rightSet.has(value)).sort((left, right) => left.localeCompare(right))
}

/**
 * Runs realworld catalog verification.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []
  const catalogSpecText = readTextFile(REALWORLD_CATALOG_SPEC_PATH)
  const flowManifest = JSON.parse(readTextFile(REALWORLD_FLOW_MANIFEST_PATH))
  const testFilePaths = listFilesRecursively(REALWORLD_TEST_DIRECTORY_PATH).filter((filePath) =>
    filePath.endsWith(".ts")
  )

  const parsedCatalog = parseCatalogRows(catalogSpecText)
  if (parsedCatalog.rows.length === 0) {
    findings.push("catalog table rows were not found")
  }
  if (parsedCatalog.duplicateIds.length > 0) {
    findings.push(`duplicate catalog IDs found: ${parsedCatalog.duplicateIds.join(", ")}`)
  }

  const invalidCatalogIds = parsedCatalog.rows
    .map((row) => row.id)
    .filter((catalogId) => !CATALOG_ID_PATTERN.test(catalogId))
  if (invalidCatalogIds.length > 0) {
    findings.push(`invalid catalog ID format detected: ${uniqueSorted(invalidCatalogIds).join(", ")}`)
  }

  const parsedMappings = parseTestCatalogMappings(testFilePaths)
  findings.push(...parsedMappings.findings)

  const mappingById = new Map(parsedMappings.mappings.map((mapping) => [mapping.id, mapping]))
  const duplicateReferenceIds = parsedMappings.mappings
    .map((mapping) => mapping.id)
    .filter((id, index, values) => values.indexOf(id) !== index)
  if (duplicateReferenceIds.length > 0) {
    findings.push(`duplicate catalog references in tests: ${uniqueSorted(duplicateReferenceIds).join(", ")}`)
  }

  for (const catalogRow of parsedCatalog.rows) {
    const mapping = mappingById.get(catalogRow.id)
    if (!mapping) {
      findings.push(`dead catalog ID not referenced by tests: ${catalogRow.id}`)
      continue
    }

    if (mapping.screenshotName !== catalogRow.screenshotName) {
      findings.push(
        `catalog screenshot mismatch for ${catalogRow.id}: expected ${catalogRow.screenshotName}, found ${mapping.screenshotName}`
      )
    }
  }

  const requiredImplementedFlowIds = flowManifest.flows
    .filter((flow) => flow.required === true && flow.status === "implemented")
    .map((flow) => flow.flowId)
  const requiredImplementedFlowIdSet = new Set(requiredImplementedFlowIds)
  const referencedCatalogIdSet = new Set(parsedMappings.mappings.map((mapping) => mapping.id))
  const catalogIdSet = new Set(parsedCatalog.rows.map((row) => row.id))

  const missingFromTests = difference(requiredImplementedFlowIdSet, referencedCatalogIdSet)
  if (missingFromTests.length > 0) {
    findings.push(
      `required implemented flow IDs missing from tests: ${missingFromTests.join(", ")}`
    )
  }

  const unexpectedInTests = difference(referencedCatalogIdSet, requiredImplementedFlowIdSet)
  if (unexpectedInTests.length > 0) {
    findings.push(
      `test catalog IDs not present in required implemented flow IDs: ${unexpectedInTests.join(", ")}`
    )
  }

  const missingFromCatalog = difference(requiredImplementedFlowIdSet, catalogIdSet)
  if (missingFromCatalog.length > 0) {
    findings.push(`required implemented flow IDs missing from catalog table: ${missingFromCatalog.join(", ")}`)
  }

  const reportPayload = {
    gate: "realworld-catalog-verify",
    generatedAt: new Date().toISOString(),
    status: findings.length === 0 ? "pass" : "fail",
    catalogSpecPath: REALWORLD_CATALOG_SPEC_PATH,
    flowManifestPath: REALWORLD_FLOW_MANIFEST_PATH,
    testFilePaths,
    catalogIds: uniqueSorted([...catalogIdSet]),
    requiredImplementedFlowIds: uniqueSorted([...requiredImplementedFlowIdSet]),
    referencedCatalogIds: uniqueSorted([...referencedCatalogIdSet]),
    findings
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (findings.length > 0) {
    console.error("realworld catalog verify failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    console.error(`report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("realworld catalog verify passed")
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
