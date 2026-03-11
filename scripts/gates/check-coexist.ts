/**
 * Coexistence Parity Gate
 * Verifies Chakra Wind and shadcn/ui can coexist in the same application.
 * Tests the fixed matrix: preflight on/off × color mode light/dark × token override off/on
 *
 * @example
 * pnpm gate:coexist  # Run coexistence parity check
 */
import { execSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")
const COEXIST_DIR = path.join(ROOT, "tests/coexist")

interface MatrixEntry {
  preflight: "on" | "off"
  colorMode: "light" | "dark"
  tokenOverride: "on" | "off"
}

const MATRIX: MatrixEntry[] = [
  { preflight: "on", colorMode: "light", tokenOverride: "off" },
  { preflight: "on", colorMode: "light", tokenOverride: "on" },
  { preflight: "on", colorMode: "dark", tokenOverride: "off" },
  { preflight: "on", colorMode: "dark", tokenOverride: "on" },
  { preflight: "off", colorMode: "light", tokenOverride: "off" },
  { preflight: "off", colorMode: "light", tokenOverride: "on" },
  { preflight: "off", colorMode: "dark", tokenOverride: "off" },
  { preflight: "off", colorMode: "dark", tokenOverride: "on" },
]

function main() {
  console.log("🔍 Running coexistence parity tests...")
  console.log(`   Matrix: ${MATRIX.length} combinations`)

  try {
    execSync(`pnpm vitest run --project=coexist`, {
      cwd: ROOT,
      stdio: "inherit",
      env: {
        ...process.env,
        COEXIST_MATRIX: JSON.stringify(MATRIX),
      },
    })
    console.log("✅ Coexistence parity: all matrix combinations passed")
    process.exit(0)
  } catch {
    console.error("❌ Coexistence parity failed")
    process.exit(1)
  }
}

main()
