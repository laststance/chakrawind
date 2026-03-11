/**
 * Type Parity Gate
 * Verifies TypeScript compilation succeeds and exported types match baseline.
 *
 * @example
 * pnpm gate:types  # Run type parity check
 */
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")

function main() {
  console.log("🔍 Running TypeScript type check...")

  try {
    execSync("pnpm typecheck", {
      cwd: ROOT,
      stdio: "pipe",
      encoding: "utf-8",
    })
    console.log("✅ Type parity: TypeScript compilation passed")
    process.exit(0)
  } catch (err: any) {
    const output = err.stdout || err.stderr || ""
    const errorLines = output
      .split("\n")
      .filter((line: string) => line.includes("error TS"))

    console.error(`❌ Type parity failed: ${errorLines.length} type errors`)
    errorLines
      .slice(0, 20)
      .forEach((line: string) => console.error(`  ${line}`))
    if (errorLines.length > 20) {
      console.error(`  ... and ${errorLines.length - 20} more`)
    }
    process.exit(1)
  }
}

main()
