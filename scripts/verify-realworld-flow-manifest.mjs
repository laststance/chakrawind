#!/usr/bin/env node

import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const FLOW_MANIFEST_PATH = resolve(process.cwd(), "artifacts", "realworld", "flow-manifest.json")
const FLOW_MANIFEST_CHECKSUM_PATH = resolve(
  process.cwd(),
  "artifacts",
  "realworld",
  "flow-manifest-checksums.json"
)
const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m4",
  "flow-manifest-verify.json"
)
const FLOW_ID_PATTERN = /^RW-[A-Z]+-\d{3}$/
const IMPLEMENTED_STATUS = "implemented"

/**
 * Reads UTF-8 text from file.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File text.
 * @example
 * readTextFile("/repo/artifacts/realworld/flow-manifest.json")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Reads JSON from file path.
 * @param {string} filePath - Absolute file path.
 * @returns {any} Parsed JSON value.
 * @example
 * readJsonFile("/repo/config.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readTextFile(filePath))
}

/**
 * Writes JSON report with deterministic formatting.
 * @param {string} filePath - Absolute output path.
 * @param {unknown} payload - Serializable report payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/report.json", { status: "pass" })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8")
}

/**
 * Computes SHA-256 checksum from string text.
 * @param {string} text - Input text.
 * @returns {string} Hex digest.
 * @example
 * sha256("hello")
 */
const sha256 = (text) => {
  return createHash("sha256").update(text).digest("hex")
}

/**
 * Validates flow manifest schema and returns findings.
 * @param {any} manifest - Parsed flow manifest payload.
 * @returns {string[]} Validation findings.
 * @example
 * validateManifestSchema({ manifestVersion: "1.0.0", baseline: "x", flows: [] })
 */
const validateManifestSchema = (manifest) => {
  const findings = []

  if (typeof manifest.manifestVersion !== "string" || manifest.manifestVersion.length === 0) {
    findings.push("manifestVersion is missing or invalid")
  }

  if (typeof manifest.baseline !== "string" || manifest.baseline.length === 0) {
    findings.push("baseline is missing or invalid")
  }

  if (!Array.isArray(manifest.flows)) {
    findings.push("flows must be an array")
    return findings
  }

  for (const flow of manifest.flows) {
    if (typeof flow.flowId !== "string" || !FLOW_ID_PATTERN.test(flow.flowId)) {
      findings.push(`invalid flowId format: ${String(flow.flowId)}`)
    }
    if (typeof flow.required !== "boolean") {
      findings.push(`flow ${String(flow.flowId)} has non-boolean required`)
    }
    if (typeof flow.screen !== "string" || flow.screen.length === 0) {
      findings.push(`flow ${String(flow.flowId)} has invalid screen`)
    }
    if (typeof flow.description !== "string" || flow.description.length === 0) {
      findings.push(`flow ${String(flow.flowId)} has invalid description`)
    }
    if (!["implemented", "planned", "deprecated"].includes(flow.status)) {
      findings.push(`flow ${String(flow.flowId)} has invalid status ${String(flow.status)}`)
    }
  }

  return findings
}

/**
 * Verifies flow manifest checksum payload.
 * @param {string} manifestText - Raw manifest text.
 * @param {any} checksumsPayload - Parsed checksums payload.
 * @returns {string[]} Checksum findings.
 * @example
 * validateChecksumPayload("{\"ok\":true}", { checksums: [] })
 */
const validateChecksumPayload = (manifestText, checksumsPayload) => {
  const findings = []
  if (checksumsPayload.algorithm !== "sha256") {
    findings.push("checksum algorithm must be sha256")
  }

  const checksums = checksumsPayload.checksums
  if (!Array.isArray(checksums) || checksums.length === 0) {
    findings.push("checksums array is missing")
    return findings
  }

  const manifestChecksum = checksums.find((checksumEntry) => {
    return checksumEntry.path === "artifacts/realworld/flow-manifest.json"
  })
  if (!manifestChecksum) {
    findings.push("checksum entry missing for artifacts/realworld/flow-manifest.json")
    return findings
  }

  const expectedChecksum = sha256(manifestText)
  if (manifestChecksum.sha256 !== expectedChecksum) {
    findings.push("flow manifest checksum mismatch")
  }

  return findings
}

/**
 * Runs flow manifest verification command.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []

  if (!existsSync(FLOW_MANIFEST_PATH)) {
    findings.push("flow manifest file is missing")
  }
  if (!existsSync(FLOW_MANIFEST_CHECKSUM_PATH)) {
    findings.push("flow manifest checksum file is missing")
  }

  let manifest = null
  let denominatorFlowCount = 0
  let checksumValidated = false

  if (findings.length === 0) {
    const manifestText = readTextFile(FLOW_MANIFEST_PATH)
    const checksumPayload = readJsonFile(FLOW_MANIFEST_CHECKSUM_PATH)
    manifest = JSON.parse(manifestText)

    findings.push(...validateManifestSchema(manifest))
    findings.push(...validateChecksumPayload(manifestText, checksumPayload))
    checksumValidated = findings.length === 0
    denominatorFlowCount = manifest.flows.filter((flow) => {
      return flow.required === true && flow.status === IMPLEMENTED_STATUS
    }).length
  }

  const reportPayload = {
    gate: "realworld-flow-manifest-verify",
    generatedAt: new Date().toISOString(),
    manifestPath: FLOW_MANIFEST_PATH,
    checksumPath: FLOW_MANIFEST_CHECKSUM_PATH,
    checksumValidated,
    denominatorFlowCount,
    status: findings.length === 0 ? "pass" : "fail",
    findings
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (findings.length > 0) {
    console.error("realworld flow manifest verify failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    console.error(`report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("realworld flow manifest verify passed")
  console.log(`- manifest path: ${FLOW_MANIFEST_PATH}`)
  console.log(`- checksum validation: ok`)
  console.log(`- denominator flow count: ${denominatorFlowCount}`)
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
