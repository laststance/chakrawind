#!/usr/bin/env node

import { spawnSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m5",
  "legal-attribution-verify.json"
)
const CODE_FILE_PATTERN = /\.(ts|tsx|js|jsx|mjs|cjs|html)$/
const ATTRIBUTION_HEADER_LOOKUP_LINES = 40
const ATTRIBUTION_INDICATOR_PATTERN = /copied from|adapted from|derived from|original project|source:/i
const REQUIRED_ATTRIBUTION_FIELDS = Object.freeze([
  {
    label: "original project/repository",
    pattern: /original project|repository/i
  },
  {
    label: "source path or url",
    pattern: /source path|source url|source:|https?:\/\//i
  },
  {
    label: "license identifier",
    pattern: /license|mit|apache|bsd|mpl/i
  },
  {
    label: "modification note",
    pattern: /modification|modified|changes/i
  }
])

/**
 * Writes deterministic JSON report.
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
 * Returns tracked repository files from git.
 * @returns {string[]} Relative file paths.
 * @example
 * listTrackedFiles()
 */
const listTrackedFiles = () => {
  const child = spawnSync("git", ["ls-files"], {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  })
  if (child.status !== 0) {
    throw new Error(`git ls-files failed: ${child.stderr}`)
  }

  return child.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
}

/**
 * Reads first N lines from a file.
 * @param {string} filePath - Absolute file path.
 * @param {number} lineCount - Number of lines to include.
 * @returns {string} Header text.
 * @example
 * readFileHead("/repo/src/index.ts", 20)
 */
const readFileHead = (filePath, lineCount) => {
  const text = readFileSync(filePath, "utf8")
  return text.split("\n").slice(0, lineCount).join("\n")
}

/**
 * Runs legal attribution verification for adapted third-party files.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []
  const trackedFiles = listTrackedFiles()
  const codeFiles = trackedFiles.filter((trackedFilePath) => CODE_FILE_PATTERN.test(trackedFilePath))
  const attributionCandidateFiles = []

  for (const relativeFilePath of codeFiles) {
    const absoluteFilePath = resolve(process.cwd(), relativeFilePath)
    const fileHeader = readFileHead(absoluteFilePath, ATTRIBUTION_HEADER_LOOKUP_LINES)
    if (!ATTRIBUTION_INDICATOR_PATTERN.test(fileHeader)) {
      continue
    }

    attributionCandidateFiles.push(relativeFilePath)
    for (const requiredField of REQUIRED_ATTRIBUTION_FIELDS) {
      if (!requiredField.pattern.test(fileHeader)) {
        findings.push(`${relativeFilePath}: missing attribution header field "${requiredField.label}"`)
      }
    }
  }

  const reportPayload = {
    gate: "legal-attribution-verify",
    generatedAt: new Date().toISOString(),
    status: findings.length === 0 ? "pass" : "fail",
    scannedCodeFileCount: codeFiles.length,
    attributionCandidateFileCount: attributionCandidateFiles.length,
    attributionCandidateFiles,
    findings
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (findings.length > 0) {
    console.error("legal attribution verification failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    console.error(`report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("legal attribution verification passed")
  console.log(`- scanned code files: ${codeFiles.length}`)
  console.log(`- attribution candidate files: ${attributionCandidateFiles.length}`)
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
