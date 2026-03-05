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
