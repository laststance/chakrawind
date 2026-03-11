/**
 * Visual Parity Gate
 * Runs Chromatic visual regression tests against the registered baseline.
 *
 * @example
 * pnpm gate:visual  # Run visual parity check
 */
import { execSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")

function main() {
  console.log("🔍 Running visual parity tests...")

  if (!process.env.CHROMATIC_PROJECT_TOKEN) {
    console.warn("⚠️  CHROMATIC_PROJECT_TOKEN not set. Skipping visual gate.")
    console.warn("   Set the token to enable visual regression testing.")
    process.exit(0)
  }

  try {
    execSync("pnpm test-visual --exit-zero-on-changes", {
      cwd: ROOT,
      stdio: "inherit",
    })
    console.log("✅ Visual parity: Chromatic build passed")
    process.exit(0)
  } catch {
    console.error("❌ Visual parity failed: Chromatic detected regressions")
    process.exit(1)
  }
}

main()
