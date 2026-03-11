/**
 * Realworld Parity Gate
 * Builds the package first, then runs builds against sandbox applications
 * that use @laststance/chakrawind-ui.
 *
 * @example
 * pnpm gate:realworld  # Run realworld parity check
 */
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")
const SANDBOX_DIR = path.join(ROOT, "sandbox")

function main() {
  console.log("🔍 Running realworld parity tests...")

  if (!fs.existsSync(SANDBOX_DIR)) {
    console.warn("⚠️  No sandbox directory found. Skipping realworld gate.")
    process.exit(0)
  }

  // Build the package first so sandboxes can resolve types
  console.log("\n  📦 Building package (build:fast)...")
  try {
    execSync("pnpm build:fast", { cwd: ROOT, stdio: "pipe", timeout: 120_000 })
    console.log("  ✅ Package build passed\n")
  } catch {
    console.error(
      "  ❌ Package build failed — sandbox builds will likely fail too",
    )
  }

  const sandboxes = fs
    .readdirSync(SANDBOX_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  if (sandboxes.length === 0) {
    console.warn("⚠️  No sandbox projects found.")
    process.exit(0)
  }

  let passed = 0
  let failed = 0

  for (const sandbox of sandboxes) {
    const sandboxPath = path.join(SANDBOX_DIR, sandbox)
    const pkgJsonPath = path.join(sandboxPath, "package.json")

    if (!fs.existsSync(pkgJsonPath)) continue

    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"))
    const hasBuild = pkgJson.scripts?.build
    if (!hasBuild) continue

    console.log(`\n  📱 Building sandbox: ${sandbox}`)
    try {
      execSync("pnpm build", {
        cwd: sandboxPath,
        stdio: "pipe",
        timeout: 120_000,
      })
      console.log(`  ✅ ${sandbox}: build passed`)
      passed++
    } catch {
      console.error(`  ❌ ${sandbox}: build failed`)
      failed++
    }
  }

  console.log(`\n  Results: ${passed} passed, ${failed} failed`)

  if (failed > 0) {
    console.error("❌ Realworld parity failed")
    process.exit(1)
  }

  console.log("✅ Realworld parity: all sandbox builds passed")
  process.exit(0)
}

main()
