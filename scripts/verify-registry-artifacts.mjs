#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const REGISTRY_INDEX_PATH = resolve(process.cwd(), "registry.json")
const REGISTRY_ITEM_PATH = resolve(process.cwd(), "public", "r", "chakrawind-react.json")
const OUTPUT_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m5",
  "registry-verify.json"
)

/**
 * Reads JSON file from disk.
 * @param {string} filePath - Absolute file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("/repo/registry.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readFileSync(filePath, "utf8"))
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
 * Runs registry artifact verification checks.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []

  if (!existsSync(REGISTRY_INDEX_PATH)) {
    findings.push("registry.json is missing")
  }
  if (!existsSync(REGISTRY_ITEM_PATH)) {
    findings.push("public/r/chakrawind-react.json is missing")
  }

  let registryIndex = null
  let registryItem = null

  if (findings.length === 0) {
    registryIndex = readJsonFile(REGISTRY_INDEX_PATH)
    registryItem = readJsonFile(REGISTRY_ITEM_PATH)

    if (registryIndex.$schema !== "https://ui.shadcn.com/schema/registry.json") {
      findings.push("registry.json schema URL is invalid")
    }

    const indexItems = Array.isArray(registryIndex.items) ? registryIndex.items : []
    if (indexItems.length === 0) {
      findings.push("registry.json must include at least one item")
    }

    const indexItem = indexItems.find((item) => item.name === "chakrawind-react")
    if (!indexItem) {
      findings.push("registry.json missing chakrawind-react item")
    } else if (typeof indexItem.url !== "string" || !indexItem.url.includes("/public/r/")) {
      findings.push("registry item URL must reference public/r/*.json output")
    }

    if (registryItem.$schema !== "https://ui.shadcn.com/schema/registry-item.json") {
      findings.push("registry item schema URL is invalid")
    }
    if (registryItem.name !== "chakrawind-react") {
      findings.push("registry item name must be chakrawind-react")
    }

    const files = Array.isArray(registryItem.files) ? registryItem.files : []
    if (files.length === 0) {
      findings.push("registry item must include files entries")
    } else {
      const hasContentFile = files.some((fileEntry) => {
        return typeof fileEntry.content === "string" && fileEntry.content.length > 0
      })
      if (!hasContentFile) {
        findings.push("registry item files must include embedded source content")
      }
    }
  }

  const reportPayload = {
    gate: "registry-verify",
    generatedAt: new Date().toISOString(),
    status: findings.length === 0 ? "pass" : "fail",
    registryIndexPath: REGISTRY_INDEX_PATH,
    registryItemPath: REGISTRY_ITEM_PATH,
    findings
  }
  writeJsonFile(OUTPUT_REPORT_PATH, reportPayload)

  if (findings.length > 0) {
    console.error("registry artifact verification failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    console.error(`report: ${OUTPUT_REPORT_PATH}`)
    return 1
  }

  console.log("registry artifact verification passed")
  console.log(`- report: ${OUTPUT_REPORT_PATH}`)
  return 0
}

process.exit(main())
