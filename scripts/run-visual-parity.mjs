#!/usr/bin/env node

import { spawnSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"

const PLAYWRIGHT_PARITY_CONFIG_PATH = "playwright.visual.config.ts"
const PLAYWRIGHT_PARITY_TEST_GLOB = "tests/visual/parity"
const PLAYWRIGHT_PARITY_PROJECT_NAME = "chromium"
const VISUAL_PARITY_REPORT_PATH = resolve(
  process.cwd(),
  "artifacts",
  "reports",
  "m1",
  "visual-parity.json"
)

/**
 * Builds scoped playwright CLI arguments for visual parity.
 * @param {string[]} extraArguments - Additional CLI arguments.
 * @returns {string[]} Argument list for `pnpm exec playwright test`.
 * @example
 * buildPlaywrightArguments(["--update-snapshots"])
 */
const buildPlaywrightArguments = (extraArguments) => {
  return [
    "exec",
    "playwright",
    "test",
    `--config=${PLAYWRIGHT_PARITY_CONFIG_PATH}`,
    `--project=${PLAYWRIGHT_PARITY_PROJECT_NAME}`,
    PLAYWRIGHT_PARITY_TEST_GLOB,
    ...extraArguments
  ]
}

/**
 * Executes scoped playwright visual parity tests.
 * @param {string[]} extraArguments - Additional CLI arguments.
 * @returns {number} Process exit code.
 * @example
 * runVisualParity([])
 */
const runVisualParity = (extraArguments) => {
  const playwrightArguments = buildPlaywrightArguments(extraArguments)
  const child = spawnSync("pnpm", playwrightArguments, {
    stdio: "inherit",
    shell: false
  })

  if (typeof child.status === "number") {
    return child.status
  }

  return 1
}

/**
 * Writes deterministic visual parity gate report.
 * @param {number} exitCode - Visual parity command exit code.
 * @returns {void}
 * @example
 * writeVisualParityReport(0)
 */
const writeVisualParityReport = (exitCode) => {
  const isPass = exitCode === 0
  const reportPayload = {
    gate: "visual-parity",
    generatedAt: new Date().toISOString(),
    status: isPass ? "pass" : "fail",
    mode: "playwright",
    findings: isPass ? [] : ["Visual parity checks failed. Inspect Playwright diff output."]
  }

  mkdirSync(dirname(VISUAL_PARITY_REPORT_PATH), { recursive: true })
  writeFileSync(VISUAL_PARITY_REPORT_PATH, `${JSON.stringify(reportPayload, null, 2)}\n`, "utf8")
}

const extraArguments = process.argv.slice(2).filter((argument) => argument !== "--")
const exitCode = runVisualParity(extraArguments)
writeVisualParityReport(exitCode)
process.exit(exitCode)
