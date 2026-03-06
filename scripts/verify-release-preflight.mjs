#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const PACKAGE_JSON_PATH = resolve(process.cwd(), "package.json")
const RELEASE_CHECKLIST_PATH = resolve(process.cwd(), "docs", "specs", "release-preflight-checklist.md")
const REGISTRY_INDEX_PATH = resolve(process.cwd(), "registry.json")
const REGISTRY_DIRECTORY_PATH = resolve(process.cwd(), "public", "r")
const NOTICE_PATH = resolve(process.cwd(), "NOTICE")
const NPM_PACK_DIRECTORY_PATH = resolve(process.cwd(), "artifacts", "release", "npm-pack")
const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m5",
  "release-preflight-verify.json"
)

/**
 * Reads UTF-8 text from file.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File text.
 * @example
 * readTextFile("/repo/docs/specs/release-preflight-checklist.md")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

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
 * Extracts required `pnpm` commands from release preflight checklist.
 * @param {string} checklistText - Markdown checklist text.
 * @returns {string[]} Required commands in order of appearance.
 * @example
 * parseRequiredCommands("- `pnpm build`")
 */
const parseRequiredCommands = (checklistText) => {
  return [...checklistText.matchAll(/`(pnpm [^`]+)`/g)].map((match) => match[1].trim())
}

/**
 * Verifies script command availability in package.json.
 * @param {string[]} requiredCommands - Required commands from checklist.
 * @param {Record<string, string>} packageScripts - package.json scripts map.
 * @returns {string[]} Validation findings.
 * @example
 * verifyCommandAvailability(["pnpm build"], { build: "tsc -p tsconfig.json" })
 */
const verifyCommandAvailability = (requiredCommands, packageScripts) => {
  const findings = []

  for (const requiredCommand of requiredCommands) {
    if (requiredCommand === "pnpm pack") {
      continue
    }

    const commandParts = requiredCommand.split(" ")
    const scriptName = commandParts[1]
    if (!scriptName || !(scriptName in packageScripts)) {
      findings.push(`missing package script for required command: ${requiredCommand}`)
    }
  }

  return findings
}

/**
 * Runs release preflight verification checks.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []
  const packageJson = JSON.parse(readTextFile(PACKAGE_JSON_PATH))
  const checklistText = readTextFile(RELEASE_CHECKLIST_PATH)
  const requiredCommands = parseRequiredCommands(checklistText)
  const packageScripts = packageJson.scripts ?? {}

  findings.push(...verifyCommandAvailability(requiredCommands, packageScripts))

  if (!existsSync(REGISTRY_INDEX_PATH)) {
    findings.push("registry.json is missing")
  }
  if (!existsSync(REGISTRY_DIRECTORY_PATH)) {
    findings.push("public/r directory is missing")
  } else {
    const registryItems = readdirSync(REGISTRY_DIRECTORY_PATH).filter((entry) => entry.endsWith(".json"))
    if (registryItems.length === 0) {
      findings.push("public/r has no generated registry JSON files")
    }
  }

  if (!existsSync(NOTICE_PATH)) {
    findings.push("NOTICE file is missing")
  }
  if (!existsSync(NPM_PACK_DIRECTORY_PATH)) {
    findings.push("npm pack output directory is missing: artifacts/release/npm-pack")
  } else {
    const packedArtifacts = readdirSync(NPM_PACK_DIRECTORY_PATH).filter((entry) => entry.endsWith(".tgz"))
    if (packedArtifacts.length === 0) {
      findings.push("npm pack output directory has no .tgz artifact")
    }
  }

  const reportPayload = {
    gate: "release-preflight-verify",
    generatedAt: new Date().toISOString(),
    status: findings.length === 0 ? "pass" : "fail",
    requiredCommands,
    findings
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (findings.length > 0) {
    console.error("release preflight verification failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    console.error(`report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("release preflight verification passed")
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
