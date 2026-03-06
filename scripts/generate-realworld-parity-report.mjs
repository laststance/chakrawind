#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const FLOW_MANIFEST_VERIFY_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m4",
  "flow-manifest-verify.json"
)
const CATALOG_VERIFY_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m4",
  "realworld-catalog-verify.json"
)
const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m4",
  "realworld-parity.json"
)
const PARITY_FORMULA_TEXT =
  "realworld_parity_pass = (numerator / denominator) * 100 where denominator is required=true && status=implemented flows"

/**
 * Reads JSON file from disk.
 * @param {string} filePath - Absolute JSON file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("/repo/artifacts/reports/m4/report.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readFileSync(filePath, "utf8"))
}

/**
 * Writes deterministic JSON file.
 * @param {string} filePath - Absolute output path.
 * @param {unknown} payload - Serializable payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/out.json", { status: "pass" })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8")
}

/**
 * Generates realworld parity report from verification reports.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const flowManifestVerifyReport = readJsonFile(FLOW_MANIFEST_VERIFY_REPORT_PATH)
  const catalogVerifyReport = readJsonFile(CATALOG_VERIFY_REPORT_PATH)

  const denominator = Number(flowManifestVerifyReport.denominatorFlowCount ?? 0)
  const numerator = Number((catalogVerifyReport.referencedCatalogIds ?? []).length)
  const passRate = denominator === 0 ? 0 : Number(((numerator / denominator) * 100).toFixed(2))
  const hasRequiredPasses =
    flowManifestVerifyReport.status === "pass" && catalogVerifyReport.status === "pass"
  const status = hasRequiredPasses && denominator > 0 && numerator === denominator ? "pass" : "fail"

  const reportPayload = {
    gate: "realworld-parity-report",
    generatedAt: new Date().toISOString(),
    status,
    denominator,
    numerator,
    realworldParityPass: passRate,
    formula: PARITY_FORMULA_TEXT,
    inputs: {
      flowManifestVerifyReportPath: FLOW_MANIFEST_VERIFY_REPORT_PATH,
      catalogVerifyReportPath: CATALOG_VERIFY_REPORT_PATH
    }
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (status !== "pass") {
    console.error("realworld parity report generation failed")
    console.error(`- denominator: ${denominator}`)
    console.error(`- numerator: ${numerator}`)
    console.error(`- report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("realworld parity report generated")
  console.log(`- realworld_parity_pass: ${passRate}%`)
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
