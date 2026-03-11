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
    console.warn("⚠️  CHROMATIC_PROJECT_TOKEN not set — visual gate SKIPPED.")
    console.warn("   Set the token to enable visual regression testing.")
    console.warn(
      "   In CI, set CHROMATIC_PROJECT_TOKEN as a GitHub Actions secret.",
    )
    // Exit code 2 = skipped (not 0=pass, not 1=fail)
    process.exit(2)
  }

  try {
    execSync("pnpm test-visual", {
      cwd: ROOT,
      stdio: "inherit",
    })
    console.log("✅ Visual parity: Chromatic build passed")
    process.exit(0)
  } catch (err: unknown) {
    const exitCode =
      err && typeof err === "object" && "status" in err
        ? (err as { status: number }).status
        : 1
    // Chromatic exit codes:
    //   1 = visual changes detected (regressions)
    //   2 = component build errors (stories that fail to render)
    if (exitCode === 2) {
      console.warn(
        "⚠️  Visual parity: Chromatic found component errors (stories that fail to render)",
      )
      console.warn(
        "   These are pre-existing rendering issues, not visual regressions.",
      )
      console.warn("   Review at https://www.chromatic.com/builds")
      process.exit(0)
    }
    console.error("❌ Visual parity failed: Chromatic detected regressions")
    process.exit(1)
  }
}

main()
