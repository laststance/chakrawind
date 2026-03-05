#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const PACKAGE_DEFINITIONS = Object.freeze([
  {
    id: "system",
    packageJsonPath: resolve(process.cwd(), "packages/chakrawind-system/package.json"),
    sourcePath: resolve(process.cwd(), "packages/chakrawind-system/src/index.ts")
  },
  {
    id: "tailwind",
    packageJsonPath: resolve(process.cwd(), "packages/chakrawind-tailwind/package.json"),
    sourcePath: resolve(process.cwd(), "packages/chakrawind-tailwind/src/index.ts")
  },
  {
    id: "react",
    packageJsonPath: resolve(process.cwd(), "packages/chakrawind-react/package.json"),
    sourcePath: resolve(process.cwd(), "packages/chakrawind-react/src/index.ts")
  }
])

const OUTPUT_PATHS = Object.freeze({
  publicApi: resolve(process.cwd(), "artifacts/m2/public-api.json"),
  dependencyGraph: resolve(process.cwd(), "artifacts/m2/dependency-graph.json")
})

/**
 * Reads UTF-8 text from a file.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File text.
 * @example
 * readTextFile("/repo/package.json")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Parses JSON from a file.
 * @param {string} filePath - Absolute file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("/repo/package.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readTextFile(filePath))
}

/**
 * Writes JSON file with deterministic formatting.
 * @param {string} filePath - Output file path.
 * @param {unknown} payload - Serializable payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/a.json", { ok: true })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  const text = `${JSON.stringify(payload, null, 2)}\n`
  writeFileSync(filePath, text, "utf8")
}

/**
 * Returns unique sorted values.
 * @param {string[]} values - Input values.
 * @returns {string[]} Unique sorted values.
 * @example
 * uniqueSorted(["b", "a", "a"]) // => ["a", "b"]
 */
const uniqueSorted = (values) => {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right))
}

/**
 * Extracts value and type exports from package source.
 * @param {string} sourceText - Source text.
 * @returns {{ values: string[]; types: string[] }} Parsed exports.
 * @example
 * extractExports("export const x = 1")
 */
const extractExports = (sourceText) => {
  const valueExports = []
  const typeExports = []

  const valuePattern = /^export\s+(?:const|function|class)\s+([A-Za-z0-9_]+)/gm
  const typePattern = /^export\s+(?:type|interface)\s+([A-Za-z0-9_]+)/gm

  for (const match of sourceText.matchAll(valuePattern)) {
    if (match[1]) {
      valueExports.push(match[1])
    }
  }

  for (const match of sourceText.matchAll(typePattern)) {
    if (match[1]) {
      typeExports.push(match[1])
    }
  }

  return {
    values: uniqueSorted(valueExports),
    types: uniqueSorted(typeExports)
  }
}

/**
 * Builds public API artifact payload.
 * @returns {{ generatedAt: string; packages: Array<{id: string; name: string; valueExports: string[]; typeExports: string[]}> }} Public API payload.
 * @example
 * buildPublicApiArtifact()
 */
const buildPublicApiArtifact = () => {
  const packages = PACKAGE_DEFINITIONS.map((packageDefinition) => {
    const packageJson = readJsonFile(packageDefinition.packageJsonPath)
    const sourceText = readTextFile(packageDefinition.sourcePath)
    const parsedExports = extractExports(sourceText)

    return {
      id: packageDefinition.id,
      name: packageJson.name,
      valueExports: parsedExports.values,
      typeExports: parsedExports.types
    }
  })

  return {
    generatedAt: new Date().toISOString(),
    packages
  }
}

/**
 * Builds dependency graph artifact payload.
 * @returns {{ generatedAt: string; nodes: Array<{id: string; name: string}>; edges: Array<{from: string; to: string}> }} Dependency graph payload.
 * @example
 * buildDependencyGraphArtifact()
 */
const buildDependencyGraphArtifact = () => {
  const nodes = []
  const edges = []

  const packageNameToId = new Map()

  for (const packageDefinition of PACKAGE_DEFINITIONS) {
    const packageJson = readJsonFile(packageDefinition.packageJsonPath)
    packageNameToId.set(packageJson.name, packageDefinition.id)
    nodes.push({
      id: packageDefinition.id,
      name: packageJson.name
    })
  }

  for (const packageDefinition of PACKAGE_DEFINITIONS) {
    const packageJson = readJsonFile(packageDefinition.packageJsonPath)
    const dependencies = packageJson.dependencies ?? {}

    for (const dependencyName of Object.keys(dependencies)) {
      const dependencyId = packageNameToId.get(dependencyName)
      if (!dependencyId) {
        continue
      }

      edges.push({
        from: packageDefinition.id,
        to: dependencyId
      })
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    nodes,
    edges: uniqueSorted(edges.map((edge) => `${edge.from}->${edge.to}`)).map((edgeKey) => {
      const [from, to] = edgeKey.split("->")
      return { from, to }
    })
  }
}

/**
 * Main entrypoint for generating M2 artifacts.
 * @returns {void}
 * @example
 * main()
 */
const main = () => {
  const publicApiArtifact = buildPublicApiArtifact()
  const dependencyGraphArtifact = buildDependencyGraphArtifact()

  writeJsonFile(OUTPUT_PATHS.publicApi, publicApiArtifact)
  writeJsonFile(OUTPUT_PATHS.dependencyGraph, dependencyGraphArtifact)

  console.log("m2 artifacts generated")
  console.log(`- ${OUTPUT_PATHS.publicApi}`)
  console.log(`- ${OUTPUT_PATHS.dependencyGraph}`)
}

main()
