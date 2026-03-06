#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const MATRIX_SPEC_PATH = resolve(process.cwd(), "docs", "specs", "component-parity-matrix.md")
const M1_GATE_REPORT_PATHS = Object.freeze({
  api: resolve(process.cwd(), "artifacts", "reports", "m1", "api.json"),
  types: resolve(process.cwd(), "artifacts", "reports", "m1", "types.json"),
  runtime: resolve(process.cwd(), "artifacts", "reports", "m1", "runtime.json"),
  a11y: resolve(process.cwd(), "artifacts", "reports", "m1", "a11y.json"),
  visual: resolve(process.cwd(), "artifacts", "reports", "m1", "visual-parity.json")
})
const OUTPUT_PATHS = Object.freeze({
  componentMatrix: resolve(
    process.cwd(),
    "artifacts",
    "reports",
    "m3",
    "component-parity-matrix.json"
  ),
  parityReport: resolve(process.cwd(), "artifacts", "reports", "m3", "parity-report.json"),
  regressionDiff: resolve(process.cwd(), "artifacts", "reports", "m3", "regression-diff.json")
})
const PARITY_FORMULA_TEXT =
  "compatibilityRate = (passedComponents / totalComponents) * 100 where component pass requires api/types/runtime/a11y/visual pass"

/**
 * Reads UTF-8 file contents.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File contents.
 * @example
 * readTextFile("/repo/docs/spec.md")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Reads JSON file contents.
 * @param {string} filePath - Absolute JSON file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("/repo/artifacts/report.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readTextFile(filePath))
}

/**
 * Writes a JSON payload with deterministic formatting.
 * @param {string} filePath - Output file path.
 * @param {unknown} payload - Serializable payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/output.json", { ok: true })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8")
}

/**
 * Parses component matrix rows from markdown table.
 * @param {string} matrixSpecText - Markdown document text.
 * @returns {Array<{ matrixId: string; component: string; acceptanceRule: string }>} Parsed component rows.
 * @example
 * parseComponentMatrixRows("| M3-CMP-001 | Box | pass | pass | pass | pass | pass | rule |")
 */
const parseComponentMatrixRows = (matrixSpecText) => {
  const componentRows = []
  const lines = matrixSpecText.split("\n")

  for (const line of lines) {
    if (!line.startsWith("| M3-CMP-")) {
      continue
    }

    const columns = line
      .split("|")
      .slice(1, -1)
      .map((value) => value.trim())

    if (columns.length < 8) {
      continue
    }

    componentRows.push({
      matrixId: columns[0],
      component: columns[1],
      acceptanceRule: columns[7]
    })
  }

  return componentRows
}

/**
 * Returns current M1 gate statuses used by M3 matrix judgement.
 * @returns {{ api: "pass" | "fail"; types: "pass" | "fail"; runtime: "pass" | "fail"; a11y: "pass" | "fail"; visual: "pass" | "fail" }} Gate statuses.
 * @example
 * getM1GateStatuses()
 */
const getM1GateStatuses = () => {
  return {
    api: readJsonFile(M1_GATE_REPORT_PATHS.api).status,
    types: readJsonFile(M1_GATE_REPORT_PATHS.types).status,
    runtime: readJsonFile(M1_GATE_REPORT_PATHS.runtime).status,
    a11y: readJsonFile(M1_GATE_REPORT_PATHS.a11y).status,
    visual: readJsonFile(M1_GATE_REPORT_PATHS.visual).status
  }
}

/**
 * Converts component rows into machine-judged parity matrix rows.
 * @param {Array<{ matrixId: string; component: string; acceptanceRule: string }>} componentRows - Matrix rows from spec.
 * @param {{ api: string; types: string; runtime: string; a11y: string; visual: string }} gateStatuses - M1 gate statuses.
 * @returns {Array<{ matrixId: string; component: string; layers: { api: string; types: string; runtime: string; a11y: string; visual: string }; status: "pass" | "fail"; acceptanceRule: string }>} Machine rows.
 * @example
 * buildMachineParityRows([{ matrixId: "M3-CMP-001", component: "Box", acceptanceRule: "..." }], { api: "pass", types: "pass", runtime: "pass", a11y: "pass", visual: "pass" })
 */
const buildMachineParityRows = (componentRows, gateStatuses) => {
  return componentRows.map((componentRow) => {
    const status =
      gateStatuses.api === "pass" &&
      gateStatuses.types === "pass" &&
      gateStatuses.runtime === "pass" &&
      gateStatuses.a11y === "pass" &&
      gateStatuses.visual === "pass"
        ? "pass"
        : "fail"

    return {
      matrixId: componentRow.matrixId,
      component: componentRow.component,
      layers: {
        api: gateStatuses.api,
        types: gateStatuses.types,
        runtime: gateStatuses.runtime,
        a11y: gateStatuses.a11y,
        visual: gateStatuses.visual
      },
      status,
      acceptanceRule: componentRow.acceptanceRule
    }
  })
}

/**
 * Calculates compatibility summary from parity matrix rows.
 * @param {Array<{ status: "pass" | "fail" }>} machineRows - Machine matrix rows.
 * @returns {{ totalComponents: number; passedComponents: number; failedComponents: number; compatibilityRate: number; formula: string }} Summary object.
 * @example
 * calculateParitySummary([{ status: "pass" }])
 */
const calculateParitySummary = (machineRows) => {
  const totalComponents = machineRows.length
  const passedComponents = machineRows.filter((row) => row.status === "pass").length
  const failedComponents = totalComponents - passedComponents
  const compatibilityRate = totalComponents === 0 ? 0 : Number(((passedComponents / totalComponents) * 100).toFixed(2))

  return {
    totalComponents,
    passedComponents,
    failedComponents,
    compatibilityRate,
    formula: PARITY_FORMULA_TEXT
  }
}

/**
 * Builds regression diff against previous parity report.
 * @param {Array<{ matrixId: string; component: string; status: "pass" | "fail" }>} machineRows - Current machine rows.
 * @param {{ api: string; types: string; runtime: string; a11y: string; visual: string }} gateStatuses - Current gate statuses.
 * @returns {{ previousReportFound: boolean; previousGeneratedAt: string | null; componentStatusChanges: Array<{ component: string; previous: string; current: string }>; gateStatusChanges: Array<{ gate: string; previous: string; current: string }> }} Regression diff.
 * @example
 * buildRegressionDiff([{ matrixId: "M3-CMP-001", component: "Box", status: "pass" }], { api: "pass", types: "pass", runtime: "pass", a11y: "pass", visual: "pass" })
 */
const buildRegressionDiff = (machineRows, gateStatuses) => {
  if (!existsSync(OUTPUT_PATHS.parityReport)) {
    return {
      previousReportFound: false,
      previousGeneratedAt: null,
      componentStatusChanges: [],
      gateStatusChanges: []
    }
  }

  const previousReport = readJsonFile(OUTPUT_PATHS.parityReport)
  const previousComponents = new Map(
    (previousReport.components ?? []).map((componentRow) => [componentRow.component, componentRow.status])
  )
  const previousGateStatuses = previousReport.gateStatuses ?? {}

  const componentStatusChanges = machineRows
    .map((componentRow) => {
      const previousStatus = previousComponents.get(componentRow.component)
      if (!previousStatus || previousStatus === componentRow.status) {
        return null
      }

      return {
        component: componentRow.component,
        previous: previousStatus,
        current: componentRow.status
      }
    })
    .filter(Boolean)

  const gateStatusChanges = Object.entries(gateStatuses)
    .map(([gateName, currentStatus]) => {
      const previousStatus = previousGateStatuses[gateName]
      if (!previousStatus || previousStatus === currentStatus) {
        return null
      }

      return {
        gate: gateName,
        previous: previousStatus,
        current: currentStatus
      }
    })
    .filter(Boolean)

  return {
    previousReportFound: true,
    previousGeneratedAt: previousReport.generatedAt ?? null,
    componentStatusChanges,
    gateStatusChanges
  }
}

/**
 * Generates and writes M3 artifacts.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const matrixSpecText = readTextFile(MATRIX_SPEC_PATH)
  const parsedMatrixRows = parseComponentMatrixRows(matrixSpecText)

  if (parsedMatrixRows.length === 0) {
    console.error("M3 artifact generation failed: no component matrix rows found")
    return 1
  }

  const gateStatuses = getM1GateStatuses()
  const machineRows = buildMachineParityRows(parsedMatrixRows, gateStatuses)
  const summary = calculateParitySummary(machineRows)
  const regressionDiff = buildRegressionDiff(machineRows, gateStatuses)

  const matrixArtifact = {
    phase: "M3",
    generatedAt: new Date().toISOString(),
    matrixVersion: "1.0.0",
    components: machineRows
  }
  const parityReport = {
    phase: "M3",
    generatedAt: matrixArtifact.generatedAt,
    gateStatuses,
    summary,
    components: machineRows
  }

  writeJsonFile(OUTPUT_PATHS.componentMatrix, matrixArtifact)
  writeJsonFile(OUTPUT_PATHS.parityReport, parityReport)
  writeJsonFile(OUTPUT_PATHS.regressionDiff, regressionDiff)

  console.log("m3 artifacts generated")
  console.log(`- ${OUTPUT_PATHS.componentMatrix}`)
  console.log(`- ${OUTPUT_PATHS.parityReport}`)
  console.log(`- ${OUTPUT_PATHS.regressionDiff}`)
  console.log(`- compatibilityRate: ${summary.compatibilityRate}%`)
  return 0
}

process.exit(main())
