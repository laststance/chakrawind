#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const NOTICE_PATH = resolve(process.cwd(), "NOTICE")
const LICENSE_POLICY_SPEC_PATH = resolve(process.cwd(), "docs", "specs", "license-attribution-policy.md")
const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m5",
  "legal-notice-verify.json"
)
const REQUIRED_NOTICE_TERMS = Object.freeze([
  "chakra wind notice",
  "third-party attribution",
  "license",
  "source",
  "docs/specs/license-attribution-policy.md"
])

/**
 * Reads UTF-8 text from file path.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File contents.
 * @example
 * readTextFile("/repo/NOTICE")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Writes deterministic JSON report file.
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
 * Runs legal NOTICE verification.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []

  if (!existsSync(NOTICE_PATH)) {
    findings.push("NOTICE file is missing")
  }
  if (!existsSync(LICENSE_POLICY_SPEC_PATH)) {
    findings.push("license attribution policy spec is missing")
  }

  if (findings.length === 0) {
    const noticeText = readTextFile(NOTICE_PATH).toLowerCase()
    for (const requiredNoticeTerm of REQUIRED_NOTICE_TERMS) {
      if (!noticeText.includes(requiredNoticeTerm)) {
        findings.push(`NOTICE missing required term: ${requiredNoticeTerm}`)
      }
    }
  }

  const reportPayload = {
    gate: "legal-notice-verify",
    generatedAt: new Date().toISOString(),
    status: findings.length === 0 ? "pass" : "fail",
    noticePath: NOTICE_PATH,
    policySpecPath: LICENSE_POLICY_SPEC_PATH,
    findings
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (findings.length > 0) {
    console.error("legal notice verification failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    console.error(`report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("legal notice verification passed")
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
