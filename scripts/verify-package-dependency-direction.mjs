#!/usr/bin/env node

import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const PACKAGE_PATHS = Object.freeze({
  system: resolve(process.cwd(), "packages/chakrawind-system/package.json"),
  tailwind: resolve(process.cwd(), "packages/chakrawind-tailwind/package.json"),
  react: resolve(process.cwd(), "packages/chakrawind-react/package.json")
})

const PACKAGE_NAMES = Object.freeze({
  system: "@laststance/chakrawind-system",
  tailwind: "@laststance/chakrawind-tailwind",
  react: "@laststance/chakrawind-react"
})

/**
 * Reads and parses JSON file.
 * @param {string} filePath - Absolute file path.
 * @returns {any} Parsed JSON object.
 * @example
 * readJsonFile("/repo/package.json")
 */
const readJsonFile = (filePath) => {
  const text = readFileSync(filePath, "utf8")
  return JSON.parse(text)
}

/**
 * Returns whether dependency exists in dependencies/devDependencies/peerDependencies.
 * @param {any} packageJson - Parsed package object.
 * @param {string} dependencyName - Dependency package name.
 * @returns {boolean} True when declared in any supported section.
 * @example
 * hasDependency(packageJson, "react")
 */
const hasDependency = (packageJson, dependencyName) => {
  const sections = [
    packageJson.dependencies ?? {},
    packageJson.devDependencies ?? {},
    packageJson.peerDependencies ?? {}
  ]

  return sections.some((section) => typeof section[dependencyName] === "string")
}

/**
 * Validates core package dependency direction rules.
 * @returns {string[]} Validation findings.
 * @example
 * validateDependencyDirection()
 */
const validateDependencyDirection = () => {
  const findings = []
  const systemPackageJson = readJsonFile(PACKAGE_PATHS.system)
  const tailwindPackageJson = readJsonFile(PACKAGE_PATHS.tailwind)
  const reactPackageJson = readJsonFile(PACKAGE_PATHS.react)

  if (hasDependency(systemPackageJson, "react") || hasDependency(systemPackageJson, "react-dom")) {
    findings.push("system package must not depend on react/react-dom")
  }

  if (!hasDependency(tailwindPackageJson, PACKAGE_NAMES.system)) {
    findings.push("tailwind package must depend on @laststance/chakrawind-system")
  }

  if (hasDependency(tailwindPackageJson, "react") || hasDependency(tailwindPackageJson, "react-dom")) {
    findings.push("tailwind package must not depend on react/react-dom")
  }

  if (!hasDependency(reactPackageJson, PACKAGE_NAMES.system)) {
    findings.push("react package must depend on @laststance/chakrawind-system")
  }

  if (!hasDependency(reactPackageJson, PACKAGE_NAMES.tailwind)) {
    findings.push("react package must depend on @laststance/chakrawind-tailwind")
  }

  return findings
}

/**
 * Entrypoint for dependency direction verifier.
 * @returns {number} Exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const findings = validateDependencyDirection()

  if (findings.length > 0) {
    console.error("package dependency direction verification failed")
    for (const finding of findings) {
      console.error(`- ${finding}`)
    }
    return 1
  }

  console.log("package dependency direction verification passed")
  return 0
}

process.exit(main())
