#!/usr/bin/env node

import { createHash } from "node:crypto"
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, extname, join, resolve } from "node:path"

export const BASELINE_PACKAGE_NAME = "@chakra-ui/react"
export const BASELINE_VERSION = "3.34.0"
export const PARITY_ARTIFACT_DIRECTORY = resolve(process.cwd(), "artifacts/parity")
export const EXPORT_MANIFEST_FILE = "baseline-export-manifest.json"
export const TYPE_MANIFEST_FILE = "baseline-type-manifest.json"
export const COMPONENT_MANIFEST_FILE = "baseline-component-manifest.json"
export const CHECKSUM_MANIFEST_FILE = "baseline-manifest-checksums.json"

/**
 * Reads UTF-8 text from a file path.
 * @param {string} filePath - Target file path.
 * @returns {string} Raw text content.
 * @example
 * readText(resolve(process.cwd(), "package.json"))
 */
export const readText = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Reads JSON content from a file path.
 * @param {string} filePath - Target JSON file path.
 * @returns {unknown} Parsed JSON value.
 * @example
 * readJson(resolve(process.cwd(), "package.json"))
 */
export const readJson = (filePath) => {
  return JSON.parse(readText(filePath))
}

/**
 * Writes a JSON file with deterministic formatting.
 * @param {string} filePath - Destination file path.
 * @param {unknown} data - Serializable object.
 * @returns {void}
 * @example
 * writeJson("/tmp/a.json", { ok: true })
 */
export const writeJson = (filePath, data) => {
  mkdirSync(dirname(filePath), { recursive: true })
  const text = `${JSON.stringify(data, null, 2)}\n`
  writeFileSync(filePath, text, "utf8")
}

/**
 * Creates SHA-256 hash for a UTF-8 text payload.
 * @param {string} text - Input text.
 * @returns {string} Hex digest.
 * @example
 * sha256FromText("abc") // => "ba7816bf..."
 */
export const sha256FromText = (text) => {
  return createHash("sha256").update(text, "utf8").digest("hex")
}

/**
 * Gets installed Chakra baseline package metadata.
 * @returns {{ packagePath: string; packageJsonPath: string; packageJson: any }} Metadata and JSON data.
 * @example
 * getInstalledBaselinePackage()
 */
export const getInstalledBaselinePackage = () => {
  const packageJsonPath = resolve(
    process.cwd(),
    "node_modules",
    BASELINE_PACKAGE_NAME,
    "package.json"
  )
  const packageJson = readJson(packageJsonPath)
  return {
    packagePath: dirname(packageJsonPath),
    packageJsonPath,
    packageJson
  }
}

/**
 * Ensures installed baseline version matches project contract.
 * @param {{ version?: string }} packageJson - Parsed package JSON object.
 * @returns {void}
 * @example
 * assertBaselineVersion({ version: "3.34.0" })
 */
export const assertBaselineVersion = (packageJson) => {
  if (packageJson.version !== BASELINE_VERSION) {
    throw new Error(
      `Baseline package version mismatch: expected ${BASELINE_VERSION}, found ${String(packageJson.version)}`
    )
  }
}

/**
 * Recursively collects files under a directory matching a target extension.
 * @param {string} directoryPath - Root directory path.
 * @param {string} extension - File extension filter.
 * @returns {string[]} Sorted list of absolute file paths.
 * @example
 * collectFilesByExtension("/repo/dist/types", ".d.ts")
 */
export const collectFilesByExtension = (directoryPath, extension) => {
  const result = []
  const queue = [directoryPath]

  while (queue.length > 0) {
    const currentDirectory = queue.pop()
    const entries = readdirSync(currentDirectory)

    for (const entry of entries) {
      const absolutePath = join(currentDirectory, entry)
      const fileStat = statSync(absolutePath)

      if (fileStat.isDirectory()) {
        queue.push(absolutePath)
      } else if (fileStat.isFile() && extname(absolutePath) === extension) {
        result.push(absolutePath)
      }
    }
  }

  return result.sort()
}

/**
 * Returns unique sorted string array.
 * @param {string[]} values - Raw values.
 * @returns {string[]} Unique sorted values.
 * @example
 * uniqueSorted(["b", "a", "a"]) // => ["a", "b"]
 */
export const uniqueSorted = (values) => {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right))
}

/**
 * Builds baseline manifest envelope.
 * @param {string[]} entries - Denominator entries.
 * @returns {{ baselinePackage: string; baselineVersion: string; generatedAt: string; entries: string[] }}
 * @example
 * createManifest(["Button", "Input"])
 */
export const createManifest = (entries) => {
  return {
    baselinePackage: BASELINE_PACKAGE_NAME,
    baselineVersion: BASELINE_VERSION,
    generatedAt: new Date().toISOString(),
    entries: uniqueSorted(entries)
  }
}
