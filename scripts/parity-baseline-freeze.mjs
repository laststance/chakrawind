#!/usr/bin/env node

import { join, relative, resolve } from "node:path"
import {
  BASELINE_PACKAGE_NAME,
  BASELINE_VERSION,
  CHECKSUM_MANIFEST_FILE,
  COMPONENT_MANIFEST_FILE,
  EXPORT_MANIFEST_FILE,
  PARITY_ARTIFACT_DIRECTORY,
  TYPE_MANIFEST_FILE,
  assertBaselineVersion,
  collectFilesByExtension,
  createManifest,
  getInstalledBaselinePackage,
  readText,
  sha256FromText,
  uniqueSorted,
  writeJson
} from "./parity-baseline-shared.mjs"

/**
 * Extracts export paths from TypeScript declaration text.
 * @param {string} declarationText - Declaration source text.
 * @returns {string[]} Export target paths.
 * @example
 * parseExportTargets('export * from "./components"') // => ["./components"]
 */
const parseExportTargets = (declarationText) => {
  const targets = []
  const exportFromPattern = /export\s+(?:\*|\{[^}]+\}|type\s+\{[^}]+\})\s+from\s+"([^"]+)"/g

  for (const match of declarationText.matchAll(exportFromPattern)) {
    const target = match[1]?.trim()
    if (target) {
      targets.push(target)
    }
  }

  return uniqueSorted(targets)
}

/**
 * Extracts type symbols from TypeScript declaration text.
 * @param {string} declarationText - Declaration source text.
 * @returns {string[]} Type-like symbols.
 * @example
 * parseTypeNames("export interface ButtonProps {}") // => ["ButtonProps"]
 */
const parseTypeNames = (declarationText) => {
  const names = []
  const declarationPatterns = [
    /export\s+(?:declare\s+)?interface\s+([A-Za-z0-9_]+)/g,
    /export\s+(?:declare\s+)?type\s+([A-Za-z0-9_]+)/g,
    /export\s+type\s+\{([^}]+)\}/g
  ]

  for (const pattern of declarationPatterns) {
    for (const match of declarationText.matchAll(pattern)) {
      if (match[1]?.includes(",")) {
        const splitNames = match[1]
          .split(",")
          .map((value) => value.trim().replace(/\s+as\s+.+$/, ""))
          .filter(Boolean)
        names.push(...splitNames)
      } else {
        const name = match[1]?.trim()
        if (name) {
          names.push(name)
        }
      }
    }
  }

  return uniqueSorted(names)
}

/**
 * Reads all declaration files and extracts type symbols.
 * @param {string} typesRootDirectory - dist types root path.
 * @returns {string[]} Unique type symbol list.
 * @example
 * collectTypeEntries("/repo/node_modules/@chakra-ui/react/dist/types")
 */
const collectTypeEntries = (typesRootDirectory) => {
  const declarationFiles = collectFilesByExtension(typesRootDirectory, ".ts")
  const typeNames = []

  for (const declarationFile of declarationFiles) {
    if (!declarationFile.endsWith(".d.ts")) {
      continue
    }

    const declarationText = readText(declarationFile)
    const parsedNames = parseTypeNames(declarationText)
    typeNames.push(...parsedNames)
  }

  return uniqueSorted(typeNames)
}

/**
 * Collects component roots from Chakra components index declaration.
 * @param {string} componentsIndexPath - components/index.d.ts path.
 * @returns {string[]} Component root IDs.
 * @example
 * collectComponentEntries(".../components/index.d.ts")
 */
const collectComponentEntries = (componentsIndexPath) => {
  const declarationText = readText(componentsIndexPath)
  const entries = []
  const pattern = /export\s+\*\s+from\s+"\.\/([a-z0-9-]+)"/g

  for (const match of declarationText.matchAll(pattern)) {
    const componentId = match[1]?.trim()
    if (componentId) {
      entries.push(componentId)
    }
  }

  return uniqueSorted(entries)
}

/**
 * Builds export denominator entries from package exports and index declarations.
 * @param {any} packageJson - Baseline package.json object.
 * @param {string} indexDeclarationPath - dist/types/index.d.ts path.
 * @returns {string[]} Public export entries.
 * @example
 * collectExportEntries(packageJson, ".../index.d.ts")
 */
const collectExportEntries = async (packageJson, indexDeclarationPath) => {
  const indexDeclarationText = readText(indexDeclarationPath)
  const declarationTargets = parseExportTargets(indexDeclarationText).map(
    (targetPath) => `dts:${targetPath}`
  )

  const exportsObject = packageJson.exports ?? {}
  const exportEntrypoints = Object.keys(exportsObject).map((entrypoint) => `entry:${entrypoint}`)

  const chakraModule = await import(BASELINE_PACKAGE_NAME)
  const runtimeExports = Object.keys(chakraModule).map((name) => `symbol:${name}`)

  return uniqueSorted([...exportEntrypoints, ...declarationTargets, ...runtimeExports])
}

/**
 * Writes all baseline manifests and checksum report.
 * @returns {Promise<void>} Completion promise.
 * @example
 * await main()
 */
const main = async () => {
  const { packagePath, packageJson } = getInstalledBaselinePackage()
  assertBaselineVersion(packageJson)

  const typesRootDirectory = resolve(packagePath, "dist/types")
  const indexDeclarationPath = resolve(typesRootDirectory, "index.d.ts")
  const componentsIndexPath = resolve(typesRootDirectory, "components/index.d.ts")

  const exportManifest = createManifest(await collectExportEntries(packageJson, indexDeclarationPath))
  const typeManifest = createManifest(collectTypeEntries(typesRootDirectory))
  const componentManifest = createManifest(collectComponentEntries(componentsIndexPath))

  const exportManifestPath = join(PARITY_ARTIFACT_DIRECTORY, EXPORT_MANIFEST_FILE)
  const typeManifestPath = join(PARITY_ARTIFACT_DIRECTORY, TYPE_MANIFEST_FILE)
  const componentManifestPath = join(PARITY_ARTIFACT_DIRECTORY, COMPONENT_MANIFEST_FILE)

  writeJson(exportManifestPath, exportManifest)
  writeJson(typeManifestPath, typeManifest)
  writeJson(componentManifestPath, componentManifest)

  const checksumEntries = [
    exportManifestPath,
    typeManifestPath,
    componentManifestPath
  ].map((manifestPath) => {
    const fileName = relative(PARITY_ARTIFACT_DIRECTORY, manifestPath)
    const fileText = readText(manifestPath)
    return {
      file: fileName,
      sha256: sha256FromText(fileText)
    }
  })

  const checksumManifestPath = join(PARITY_ARTIFACT_DIRECTORY, CHECKSUM_MANIFEST_FILE)
  writeJson(checksumManifestPath, {
    baselinePackage: BASELINE_PACKAGE_NAME,
    baselineVersion: BASELINE_VERSION,
    generatedAt: new Date().toISOString(),
    entries: checksumEntries
  })

  console.log("parity baseline manifests generated")
  console.log(`- ${exportManifestPath}`)
  console.log(`- ${typeManifestPath}`)
  console.log(`- ${componentManifestPath}`)
  console.log(`- ${checksumManifestPath}`)
}

main().catch((error) => {
  console.error("parity baseline freeze failed")
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
