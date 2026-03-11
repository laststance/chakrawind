/**
 * Accessibility Parity Gate
 * Runs axe-based accessibility tests on Storybook stories.
 *
 * @example
 * pnpm gate:a11y  # Run a11y parity check
 */
import { execSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")

function main() {
  console.log("🔍 Running accessibility parity tests...")

  try {
    execSync("pnpm test-storybook", {
      cwd: ROOT,
      stdio: "inherit",
    })
    console.log(
      "✅ A11y parity: all storybook tests passed (includes a11y addon)",
    )
    process.exit(0)
  } catch {
    console.error("❌ A11y parity failed: storybook tests have failures")
    process.exit(1)
  }
}

main()
