#!/usr/bin/env node

import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const REQUIRED_BASELINE_VERSIONS = Object.freeze({
  "@chakra-ui/react": "3.34.0",
  "@emotion/react": "11.14.0",
  react: "19.0.0",
  "react-dom": "19.0.0"
})

const EXIT_SUCCESS = 0
const EXIT_FAILURE = 1

/**
 * Reads a UTF-8 text file.
 * @param {string} filePath - The target file path.
 * @returns {string} The file contents.
 * @example
 * readTextFile("/repo/package.json")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Escapes text so it can be safely used inside a regular expression.
 * @param {string} value - Raw text.
 * @returns {string} Escaped text.
 * @example
 * escapeForRegExp("@chakra-ui/react") // => "@chakra-ui/react"
 */
const escapeForRegExp = (value) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * Returns dependency version from dependencies/devDependencies/peerDependencies.
 * @param {Record<string, unknown>} packageJson - Parsed package.json object.
 * @param {string} packageName - Package name to resolve.
 * @returns {string | undefined} Declared version when present.
 * @example
 * getDeclaredVersion({ dependencies: { react: "19.0.0" } }, "react") // => "19.0.0"
 */
const getDeclaredVersion = (packageJson, packageName) => {
  const dependencySections = ["dependencies", "devDependencies", "peerDependencies"]

  for (const sectionName of dependencySections) {
    const section = packageJson[sectionName]
    if (typeof section === "object" && section !== null && packageName in section) {
      return section[packageName]
    }
  }

  return undefined
}

/**
 * Validates root package.json against required baseline versions.
 * @param {Record<string, unknown>} packageJson - Parsed package.json object.
 * @returns {string[]} Validation error messages.
 * @example
 * collectPackageJsonErrors({ dependencies: { react: "19.0.0" } })
 */
const collectPackageJsonErrors = (packageJson) => {
  const errors = []

  for (const [packageName, expectedVersion] of Object.entries(REQUIRED_BASELINE_VERSIONS)) {
    const actualVersion = getDeclaredVersion(packageJson, packageName)

    if (!actualVersion) {
      errors.push(`package.json missing required dependency: ${packageName}@${expectedVersion}`)
      continue
    }

    if (actualVersion !== expectedVersion) {
      errors.push(
        `package.json version mismatch for ${packageName}: expected ${expectedVersion}, found ${actualVersion}`
      )
    }
  }

  return errors
}

/**
 * Extracts the root importer section from pnpm-lock.yaml.
 * @param {string} lockfileContent - Full lockfile text.
 * @returns {string | undefined} Root importer block.
 * @example
 * extractRootImporterBlock("importers:\n  .:\n    dependencies: ...")
 */
const extractRootImporterBlock = (lockfileContent) => {
  const rootImporterStartMarker = "\n  .:\n"
  const packagesSectionMarker = "\npackages:\n"
  const importersSectionIndex = lockfileContent.indexOf("importers:")

  if (importersSectionIndex === -1) {
    return undefined
  }

  const rootImporterStartIndex = lockfileContent.indexOf(
    rootImporterStartMarker,
    importersSectionIndex
  )
  if (rootImporterStartIndex === -1) {
    return undefined
  }

  const contentStartIndex = rootImporterStartIndex + rootImporterStartMarker.length
  const packagesSectionIndex = lockfileContent.indexOf(packagesSectionMarker, contentStartIndex)
  const contentEndIndex =
    packagesSectionIndex === -1 ? lockfileContent.length : packagesSectionIndex

  return lockfileContent.slice(contentStartIndex, contentEndIndex)
}

/**
 * Validates root importer lock entries against required baseline versions.
 * @param {string | undefined} rootImporterBlock - Root importer section text.
 * @returns {string[]} Validation error messages.
 * @example
 * collectLockfileErrors("    dependencies:\n      react:\n        specifier: 19.0.0\n        version: 19.0.0")
 */
const collectLockfileErrors = (rootImporterBlock) => {
  if (!rootImporterBlock) {
    return ["pnpm-lock.yaml missing root importer block (importers -> .)"]
  }

  const errors = []

  for (const [packageName, expectedVersion] of Object.entries(REQUIRED_BASELINE_VERSIONS)) {
    const escapedPackageName = escapeForRegExp(packageName)
    const escapedVersion = escapeForRegExp(expectedVersion)
    const packageNamePattern = `(?:'${escapedPackageName}'|${escapedPackageName})`
    const packagePattern = new RegExp(
      `${packageNamePattern}:\\n\\s+specifier:\\s+${escapedVersion}\\n\\s+version:\\s+${escapedVersion}(?:\\(|\\b)`,
      "m"
    )

    if (!packagePattern.test(rootImporterBlock)) {
      errors.push(
        `pnpm-lock.yaml root importer mismatch for ${packageName}: expected specifier/version ${expectedVersion}`
      )
    }
  }

  return errors
}

/**
 * Prints validation result and exits process.
 * @param {string[]} errors - Validation errors.
 * @returns {never} Process exits with success or failure code.
 * @example
 * reportResultAndExit([])
 */
const reportResultAndExit = (errors) => {
  if (errors.length === 0) {
    console.log("baseline lock verification passed")
    process.exit(EXIT_SUCCESS)
  }

  console.error("baseline lock verification failed")
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(EXIT_FAILURE)
}

const packageJsonPath = resolve(process.cwd(), "package.json")
const lockfilePath = resolve(process.cwd(), "pnpm-lock.yaml")
const packageJson = JSON.parse(readTextFile(packageJsonPath))
const lockfileContent = readTextFile(lockfilePath)
const rootImporterBlock = extractRootImporterBlock(lockfileContent)

const errors = [
  ...collectPackageJsonErrors(packageJson),
  ...collectLockfileErrors(rootImporterBlock)
]

reportResultAndExit(errors)
