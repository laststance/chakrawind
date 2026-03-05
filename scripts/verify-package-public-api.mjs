#!/usr/bin/env node

import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const PACKAGE_API_CONTRACTS = Object.freeze([
  {
    packageName: "@laststance/chakrawind-system",
    packageJsonPath: resolve(process.cwd(), "packages/chakrawind-system/package.json"),
    sourcePath: resolve(process.cwd(), "packages/chakrawind-system/src/index.ts"),
    expectedValueExports: ["CHAKRAWIND_DEFAULT_TOKENS", "getChakraWindTokenContract"],
    expectedTypeExports: ["ChakraWindTokenContract"]
  },
  {
    packageName: "@laststance/chakrawind-tailwind",
    packageJsonPath: resolve(process.cwd(), "packages/chakrawind-tailwind/package.json"),
    sourcePath: resolve(process.cwd(), "packages/chakrawind-tailwind/src/index.ts"),
    expectedValueExports: ["createChakraWindTailwindPreset"],
    expectedTypeExports: ["ChakraWindTailwindPreset"]
  },
  {
    packageName: "@laststance/chakrawind-react",
    packageJsonPath: resolve(process.cwd(), "packages/chakrawind-react/package.json"),
    sourcePath: resolve(process.cwd(), "packages/chakrawind-react/src/index.ts"),
    expectedValueExports: [
      "Box",
      "Button",
      "ChakraWindProvider",
      "Text",
      "createChakraWindProviderContract"
    ],
    expectedTypeExports: [
      "BoxProps",
      "ButtonProps",
      "ChakraWindProviderContract",
      "ChakraWindProviderProps",
      "TextProps"
    ]
  }
])

/**
 * Reads UTF-8 text file.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File content.
 * @example
 * readTextFile("/repo/package.json")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Parses JSON file.
 * @param {string} filePath - Absolute file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("/repo/package.json")
 */
const readJsonFile = (filePath) => {
  return JSON.parse(readTextFile(filePath))
}

/**
 * Returns unique sorted string values.
 * @param {string[]} values - Input values.
 * @returns {string[]} Unique sorted values.
 * @example
 * uniqueSorted(["b", "a", "a"]) // => ["a", "b"]
 */
const uniqueSorted = (values) => {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right))
}

/**
 * Extracts named exports from source text.
 * @param {string} sourceText - TypeScript source text.
 * @returns {{ valueExports: string[]; typeExports: string[]; hasDefaultExport: boolean }} Parsed exports.
 * @example
 * extractNamedExports("export const x = 1")
 */
const extractNamedExports = (sourceText) => {
  const valueExports = []
  const typeExports = []

  const valuePattern = /^export\s+(?:const|function|class)\s+([A-Za-z0-9_]+)/gm
  const typePattern = /^export\s+(?:type|interface)\s+([A-Za-z0-9_]+)/gm

  for (const match of sourceText.matchAll(valuePattern)) {
    const exportName = match[1]?.trim()
    if (exportName) {
      valueExports.push(exportName)
    }
  }

  for (const match of sourceText.matchAll(typePattern)) {
    const exportName = match[1]?.trim()
    if (exportName) {
      typeExports.push(exportName)
    }
  }

  return {
    valueExports: uniqueSorted(valueExports),
    typeExports: uniqueSorted(typeExports),
    hasDefaultExport: /export\s+default\s+/m.test(sourceText)
  }
}

/**
 * Compares actual exports against expected exports.
 * @param {string} label - Export category label.
 * @param {string[]} actual - Actual export names.
 * @param {string[]} expected - Expected export names.
 * @returns {string[]} Validation findings.
 * @example
 * compareExactExports("values", ["a"], ["a", "b"])
 */
const compareExactExports = (label, actual, expected) => {
  const findings = []
  const sortedActual = uniqueSorted(actual)
  const sortedExpected = uniqueSorted(expected)

  for (const expectedName of sortedExpected) {
    if (!sortedActual.includes(expectedName)) {
      findings.push(`${label}: missing export ${expectedName}`)
    }
  }

  for (const actualName of sortedActual) {
    if (!sortedExpected.includes(actualName)) {
      findings.push(`${label}: unexpected export ${actualName}`)
    }
  }

  return findings
}

/**
 * Validates package public API contract.
 * @param {{ packageName: string; packageJsonPath: string; sourcePath: string; expectedValueExports: string[]; expectedTypeExports: string[] }} contract - API contract object.
 * @returns {string[]} Validation findings.
 * @example
 * validatePackageContract(PACKAGE_API_CONTRACTS[0])
 */
const validatePackageContract = (contract) => {
  const findings = []
  const packageJson = readJsonFile(contract.packageJsonPath)
  const sourceText = readTextFile(contract.sourcePath)

  if (packageJson.name !== contract.packageName) {
    findings.push(`package name mismatch: expected ${contract.packageName}, found ${packageJson.name}`)
  }

  const exportsField = packageJson.exports ?? {}
  const exportKeys = Object.keys(exportsField)

  if (exportKeys.length !== 1 || exportKeys[0] !== ".") {
    findings.push(`package exports must expose only ".", found ${exportKeys.join(", ") || "<none>"}`)
  }

  const parsedExports = extractNamedExports(sourceText)
  findings.push(
    ...compareExactExports("value exports", parsedExports.valueExports, contract.expectedValueExports)
  )
  findings.push(
    ...compareExactExports("type exports", parsedExports.typeExports, contract.expectedTypeExports)
  )

  if (parsedExports.hasDefaultExport) {
    findings.push("default export is not allowed in skeleton API")
  }

  return findings
}

/**
 * Runs public API contract checks for all core packages.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = []

  for (const contract of PACKAGE_API_CONTRACTS) {
    const packageFindings = validatePackageContract(contract)
    for (const packageFinding of packageFindings) {
      findings.push(`${contract.packageName}: ${packageFinding}`)
    }
  }

  if (findings.length > 0) {
    console.error("package public API contract verification failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    return 1
  }

  console.log("package public API contract verification passed")
  return 0
}

process.exit(main())
