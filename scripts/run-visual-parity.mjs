#!/usr/bin/env node

import { spawnSync } from "node:child_process"

const PLAYWRIGHT_PARITY_CONFIG_PATH = "playwright.visual.config.ts"
const PLAYWRIGHT_PARITY_TEST_GLOB = "tests/visual/parity"
const PLAYWRIGHT_PARITY_PROJECT_NAME = "chromium"

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

const extraArguments = process.argv.slice(2)
const exitCode = runVisualParity(extraArguments)
process.exit(exitCode)
