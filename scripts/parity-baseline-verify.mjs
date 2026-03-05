#!/usr/bin/env node

import { join, resolve } from "node:path"
import {
  BASELINE_PACKAGE_NAME,
  BASELINE_VERSION,
  CHECKSUM_MANIFEST_FILE,
  COMPONENT_MANIFEST_FILE,
  EXPORT_MANIFEST_FILE,
  PARITY_ARTIFACT_DIRECTORY,
  TYPE_MANIFEST_FILE,
  assertBaselineVersion,
  getInstalledBaselinePackage,
  readJson,
  readText,
  sha256FromText
} from "./parity-baseline-shared.mjs"

/**
 * Ensures baseline metadata fields are valid.
 * @param {string} manifestName - Logical manifest name.
 * @param {any} manifest - Parsed manifest object.
 * @returns {string[]} Validation errors.
 * @example
 * validateManifestShape("export", manifest)
 */
const validateManifestShape = (manifestName, manifest) => {
  const errors = []

  if (!manifest || typeof manifest !== "object") {
    return [`${manifestName}: manifest is not an object`]
  }

  if (manifest.baselinePackage !== BASELINE_PACKAGE_NAME) {
    errors.push(`${manifestName}: baselinePackage must be ${BASELINE_PACKAGE_NAME}`)
  }

  if (manifest.baselineVersion !== BASELINE_VERSION) {
    errors.push(`${manifestName}: baselineVersion must be ${BASELINE_VERSION}`)
  }

  if (typeof manifest.generatedAt !== "string" || manifest.generatedAt.length === 0) {
    errors.push(`${manifestName}: generatedAt must be a non-empty string`)
  }

  if (!Array.isArray(manifest.entries) || manifest.entries.length === 0) {
    errors.push(`${manifestName}: entries must be a non-empty array`)
  }

  return errors
}

/**
 * Computes checksum map for target manifest files.
 * @param {string[]} manifestFiles - Relative file names under artifacts/parity.
 * @returns {Record<string, string>} File-to-checksum mapping.
 * @example
 * computeChecksums(["baseline-export-manifest.json"])
 */
const computeChecksums = (manifestFiles) => {
  const result = {}

  for (const manifestFile of manifestFiles) {
    const absolutePath = join(PARITY_ARTIFACT_DIRECTORY, manifestFile)
    const fileText = readText(absolutePath)
    result[manifestFile] = sha256FromText(fileText)
  }

  return result
}

/**
 * Verifies checksum manifest against generated checksums.
 * @param {any} checksumManifest - Parsed checksum manifest object.
 * @param {Record<string, string>} actualChecksums - Calculated checksums.
 * @returns {string[]} Validation errors.
 * @example
 * validateChecksums(checksumManifest, {"a.json": "abc"})
 */
const validateChecksums = (checksumManifest, actualChecksums) => {
  const errors = validateManifestShape("checksum", checksumManifest)

  if (!Array.isArray(checksumManifest?.entries)) {
    return errors
  }

  for (const checksumEntry of checksumManifest.entries) {
    const file = checksumEntry?.file
    const expectedHash = checksumEntry?.sha256

    if (typeof file !== "string" || typeof expectedHash !== "string") {
      errors.push("checksum: each entry must include string file and sha256")
      continue
    }

    const actualHash = actualChecksums[file]
    if (!actualHash) {
      errors.push(`checksum: missing target file ${file}`)
      continue
    }

    if (actualHash !== expectedHash) {
      errors.push(`checksum: hash mismatch for ${file}`)
    }
  }

  return errors
}

/**
 * Runs full baseline manifest verification.
 * @returns {number} Exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const { packageJson } = getInstalledBaselinePackage()
  assertBaselineVersion(packageJson)

  const exportManifestPath = join(PARITY_ARTIFACT_DIRECTORY, EXPORT_MANIFEST_FILE)
  const typeManifestPath = join(PARITY_ARTIFACT_DIRECTORY, TYPE_MANIFEST_FILE)
  const componentManifestPath = join(PARITY_ARTIFACT_DIRECTORY, COMPONENT_MANIFEST_FILE)
  const checksumManifestPath = resolve(PARITY_ARTIFACT_DIRECTORY, CHECKSUM_MANIFEST_FILE)

  const exportManifest = readJson(exportManifestPath)
  const typeManifest = readJson(typeManifestPath)
  const componentManifest = readJson(componentManifestPath)
  const checksumManifest = readJson(checksumManifestPath)

  const errors = [
    ...validateManifestShape("export", exportManifest),
    ...validateManifestShape("type", typeManifest),
    ...validateManifestShape("component", componentManifest)
  ]

  const actualChecksums = computeChecksums([
    EXPORT_MANIFEST_FILE,
    TYPE_MANIFEST_FILE,
    COMPONENT_MANIFEST_FILE
  ])
  errors.push(...validateChecksums(checksumManifest, actualChecksums))

  if (errors.length > 0) {
    console.error("parity baseline verification failed")
    for (const error of errors) {
      console.error(`- ${error}`)
    }
    return 1
  }

  console.log("parity baseline verification passed")
  return 0
}

try {
  process.exit(main())
} catch (error) {
  console.error("parity baseline verification failed")
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
}
