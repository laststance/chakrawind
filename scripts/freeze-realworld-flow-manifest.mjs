#!/usr/bin/env node

import { createHash } from "node:crypto"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const FLOW_MANIFEST_PATH = resolve(process.cwd(), "artifacts", "realworld", "flow-manifest.json")
const FLOW_MANIFEST_CHECKSUM_PATH = resolve(
  process.cwd(),
  "artifacts",
  "realworld",
  "flow-manifest-checksums.json"
)

/**
 * Reads file as UTF-8 text.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File text.
 * @example
 * readTextFile("/repo/artifacts/realworld/flow-manifest.json")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Computes SHA-256 checksum from text.
 * @param {string} text - Source text.
 * @returns {string} Hex digest.
 * @example
 * calculateSha256("hello")
 */
const calculateSha256 = (text) => {
  return createHash("sha256").update(text).digest("hex")
}

/**
 * Writes JSON with deterministic formatting.
 * @param {string} filePath - Absolute output path.
 * @param {unknown} payload - Serializable payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/a.json", { ok: true })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8")
}

/**
 * Generates checksum artifact for realworld flow manifest.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const manifestText = readTextFile(FLOW_MANIFEST_PATH)
  const checksumPayload = {
    generatedAt: new Date().toISOString(),
    algorithm: "sha256",
    checksums: [
      {
        path: "artifacts/realworld/flow-manifest.json",
        sha256: calculateSha256(manifestText)
      }
    ]
  }

  writeJsonFile(FLOW_MANIFEST_CHECKSUM_PATH, checksumPayload)
  console.log("realworld flow manifest checksums generated")
  console.log(`- ${FLOW_MANIFEST_CHECKSUM_PATH}`)
  return 0
}

process.exit(main())
