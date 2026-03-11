/**
 * Runtime Parity Gate
 * Runs unit tests to verify runtime behavior matches baseline.
 *
 * @example
 * pnpm gate:runtime  # Run runtime parity check
 */
import { execSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")

function main() {
  console.log("🔍 Running runtime parity tests...")

  try {
    execSync("pnpm test --run", {
      cwd: ROOT,
      stdio: "inherit",
    })
    console.log("✅ Runtime parity: all unit tests passed")
    process.exit(0)
  } catch {
    console.error("❌ Runtime parity failed: unit tests have failures")
    process.exit(1)
  }
}

main()
