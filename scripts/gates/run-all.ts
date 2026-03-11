/**
 * Runs all parity gates in sequence and reports results.
 *
 * @example
 * pnpm gate:all  # Run all gates
 */
import { execSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "../..")

const GATES = [
  { name: "api", script: "gate:api", required: true },
  { name: "types", script: "gate:types", required: true },
  { name: "runtime", script: "gate:runtime", required: true },
  { name: "a11y", script: "gate:a11y", required: true },
  { name: "visual", script: "gate:visual", required: true },
  { name: "coexist", script: "gate:coexist", required: true },
  { name: "install", script: "gate:install", required: true },
  { name: "realworld", script: "gate:realworld", required: true },
] as const

interface GateResult {
  name: string
  status: "pass" | "fail" | "skip"
  required: boolean
}

function main() {
  console.log("🏁 Running all parity gates...\n")
  const results: GateResult[] = []

  for (const gate of GATES) {
    console.log(`\n${"=".repeat(60)}`)
    console.log(`  Gate: ${gate.name.toUpperCase()}`)
    console.log(`${"=".repeat(60)}`)

    try {
      execSync(`pnpm ${gate.script}`, {
        cwd: ROOT,
        stdio: "inherit",
      })
      results.push({ name: gate.name, status: "pass", required: gate.required })
    } catch (err: unknown) {
      const exitCode =
        err && typeof err === "object" && "status" in err
          ? (err as { status: number }).status
          : 1
      if (exitCode === 2) {
        results.push({
          name: gate.name,
          status: "skip",
          required: gate.required,
        })
      } else {
        results.push({
          name: gate.name,
          status: "fail",
          required: gate.required,
        })
      }
    }
  }

  // Report
  console.log(`\n${"=".repeat(60)}`)
  console.log("  PARITY GATE REPORT")
  console.log(`${"=".repeat(60)}\n`)

  for (const r of results) {
    const icon = r.status === "pass" ? "✅" : r.status === "skip" ? "⚠️ " : "❌"
    const req = r.required ? "[required]" : "[optional]"
    console.log(`  ${icon} ${r.name.padEnd(12)} ${r.status.padEnd(6)} ${req}`)
  }

  const requiredFailed = results.filter(
    (r) => r.required && r.status === "fail",
  )
  const requiredSkipped = results.filter(
    (r) => r.required && r.status === "skip",
  )
  const totalPassed = results.filter((r) => r.status === "pass").length
  const totalSkipped = results.filter((r) => r.status === "skip").length

  console.log(
    `\n  Total: ${totalPassed}/${results.length} passed` +
      (totalSkipped > 0 ? `, ${totalSkipped} skipped` : ""),
  )

  if (requiredFailed.length > 0) {
    console.error(
      `\n❌ ${requiredFailed.length} required gate(s) failed: ${requiredFailed.map((r) => r.name).join(", ")}`,
    )
    process.exit(1)
  }

  if (requiredSkipped.length > 0 && process.env.CI) {
    console.error(
      `\n❌ ${requiredSkipped.length} required gate(s) skipped in CI: ${requiredSkipped.map((r) => r.name).join(", ")}`,
    )
    console.error(
      "   All required gates must pass in CI. Configure missing tokens/secrets.",
    )
    process.exit(1)
  }

  if (requiredSkipped.length > 0) {
    console.warn(
      `\n⚠️  ${requiredSkipped.length} required gate(s) skipped locally: ${requiredSkipped.map((r) => r.name).join(", ")}`,
    )
    console.warn("   These must pass in CI before release.")
  }

  console.log("\n✅ All required parity gates passed!")
  process.exit(0)
}

main()
