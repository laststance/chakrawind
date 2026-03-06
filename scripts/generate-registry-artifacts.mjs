#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const REGISTRY_INDEX_PATH = resolve(process.cwd(), "registry.json")
const REGISTRY_ITEM_PATH = resolve(process.cwd(), "public", "r", "chakrawind-react.json")
const REACT_SOURCE_PATH = resolve(process.cwd(), "packages", "chakrawind-react", "src", "index.ts")
const REGISTRY_ITEM_URL = "https://github.com/laststance/chakrawind/raw/main/public/r/chakrawind-react.json"

/**
 * Reads UTF-8 text from file.
 * @param {string} filePath - Absolute file path.
 * @returns {string} File text.
 * @example
 * readTextFile("/repo/packages/chakrawind-react/src/index.ts")
 */
const readTextFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Writes JSON payload with deterministic formatting.
 * @param {string} filePath - Absolute output path.
 * @param {unknown} payload - Serializable payload.
 * @returns {void}
 * @example
 * writeJsonFile("/tmp/item.json", { name: "item" })
 */
const writeJsonFile = (filePath, payload) => {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8")
}

/**
 * Builds shadcn registry index payload.
 * @returns {object} Registry index JSON payload.
 * @example
 * buildRegistryIndex()
 */
const buildRegistryIndex = () => {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "chakrawind",
    homepage: "https://github.com/laststance/chakrawind",
    items: [
      {
        name: "chakrawind-react",
        type: "registry:item",
        url: REGISTRY_ITEM_URL
      }
    ]
  }
}

/**
 * Builds shadcn registry item payload.
 * @param {string} reactSourceText - React entry source code.
 * @returns {object} Registry item JSON payload.
 * @example
 * buildRegistryItem("export const Box = () => null")
 */
const buildRegistryItem = (reactSourceText) => {
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "chakrawind-react",
    type: "registry:item",
    title: "Chakra Wind React Entry",
    description: "Chakra Wind React compatibility entrypoint for Box/Text/Button/provider.",
    dependencies: ["@laststance/chakrawind-react"],
    files: [
      {
        path: "registry/chakrawind/chakrawind-react.ts",
        type: "registry:file",
        target: "~/lib/chakrawind/chakrawind-react.ts",
        content: reactSourceText
      }
    ]
  }
}

/**
 * Generates shadcn registry artifacts.
 * @returns {number} Process exit code.
 * @example
 * process.exit(main())
 */
const main = () => {
  const reactSourceText = readTextFile(REACT_SOURCE_PATH)
  const registryIndex = buildRegistryIndex()
  const registryItem = buildRegistryItem(reactSourceText)

  writeJsonFile(REGISTRY_INDEX_PATH, registryIndex)
  writeJsonFile(REGISTRY_ITEM_PATH, registryItem)

  console.log("registry artifacts generated")
  console.log(`- ${REGISTRY_INDEX_PATH}`)
  console.log(`- ${REGISTRY_ITEM_PATH}`)
  return 0
}

process.exit(main())
