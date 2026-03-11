/**
 * API Parity Gate
 * Uses TypeScript compiler API to resolve all exports from @chakra-ui/react,
 * including `export *` chains, and compares against the baseline manifest.
 *
 * @example
 * pnpm gate:api          # Check API parity
 * pnpm gate:api --update # Update baseline manifest
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import ts from "typescript"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const BASELINE_PATH = path.join(dirname, "../baselines/api-manifest.json")
const PACKAGE_INDEX = path.join(dirname, "../../packages/react/src/index.ts")

interface ExportEntry {
  name: string
  kind: "component" | "hook" | "type" | "utility" | "constant"
}

interface ApiManifest {
  version: string
  generated: string
  exports: ExportEntry[]
}

/**
 * Resolves all named exports from the package entry point using TypeScript compiler API.
 * Follows `export *` chains recursively.
 * @returns Sorted array of export names
 * @example
 * resolveExports() // => ["Accordion", "AccordionItem", "Button", "useDisclosure", ...]
 */
function resolveExports(): string[] {
  const configPath = path.join(dirname, "../../tsconfig.json")
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
  const parsedConfig = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.join(dirname, "../.."),
  )

  const program = ts.createProgram([PACKAGE_INDEX], parsedConfig.options)
  const checker = program.getTypeChecker()
  const sourceFile = program.getSourceFile(PACKAGE_INDEX)

  if (!sourceFile) {
    throw new Error(`Could not find source file: ${PACKAGE_INDEX}`)
  }

  const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
  if (!moduleSymbol) {
    throw new Error("Could not get module symbol")
  }

  const exports = checker.getExportsOfModule(moduleSymbol)
  return exports
    .map((s) => s.getName())
    .filter((name) => name !== "default" && name !== "__esModule")
    .sort()
}

async function loadBaseline(): Promise<ApiManifest | null> {
  try {
    const raw = await fs.promises.readFile(BASELINE_PATH, "utf-8")
    return JSON.parse(raw) as ApiManifest
  } catch {
    return null
  }
}

/**
 * Classifies an export name by naming convention.
 * @param name - The export name
 * @returns The classification kind
 * @example
 * classifyExport("Button") // => "component"
 * classifyExport("useDisclosure") // => "hook"
 * classifyExport("ButtonProps") // => "type"
 */
function classifyExport(name: string): ExportEntry["kind"] {
  if (name.startsWith("use")) return "hook"
  if (
    name.endsWith("Props") ||
    name.endsWith("Options") ||
    name.endsWith("Context")
  )
    return "type"
  if (name[0] === name[0].toUpperCase() && /^[A-Z]/.test(name))
    return "component"
  if (name === name.toUpperCase()) return "constant"
  return "utility"
}

async function main() {
  const isUpdate = process.argv.includes("--update")

  console.log("🔍 Resolving exports via TypeScript compiler...")
  const currentExports = resolveExports()
  console.log(`   Found ${currentExports.length} exports`)

  if (isUpdate) {
    const manifest: ApiManifest = {
      version: "3.34.0",
      generated: new Date().toISOString(),
      exports: currentExports.map((name) => ({
        name,
        kind: classifyExport(name),
      })),
    }
    await fs.promises.mkdir(path.dirname(BASELINE_PATH), { recursive: true })
    await fs.promises.writeFile(
      BASELINE_PATH,
      JSON.stringify(manifest, null, 2) + "\n",
    )
    console.log(
      `✅ API manifest updated: ${manifest.exports.length} exports captured`,
    )
    return
  }

  const baseline = await loadBaseline()
  if (!baseline) {
    console.error("❌ No baseline manifest found. Run with --update first.")
    process.exit(1)
  }

  const baselineNames = new Set(baseline.exports.map((e) => e.name))
  const currentNames = new Set(currentExports)

  const missing = [...baselineNames].filter((n) => !currentNames.has(n))
  const added = [...currentNames].filter((n) => !baselineNames.has(n))

  if (missing.length === 0 && added.length === 0) {
    console.log(
      `✅ API parity: ${currentNames.size}/${baselineNames.size} exports match`,
    )
    process.exit(0)
  }

  if (missing.length > 0) {
    console.error(`\n❌ Missing exports (${missing.length}):`)
    missing.forEach((n) => console.error(`  - ${n}`))
  }
  if (added.length > 0) {
    console.warn(`\n⚠️  New exports (${added.length}):`)
    added.forEach((n) => console.warn(`  + ${n}`))
  }

  console.error(
    `\n❌ API parity failed: ${missing.length} missing, ${added.length} added`,
  )
  process.exit(missing.length > 0 ? 1 : 0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
