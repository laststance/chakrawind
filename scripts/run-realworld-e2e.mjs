#!/usr/bin/env node

import { spawnSync } from "node:child_process"

const PLAYWRIGHT_REALWORLD_CONFIG_PATH = "playwright.realworld.config.ts"
const PLAYWRIGHT_REALWORLD_TEST_GLOB = "tests/realworld-e2e"

/**
 * Builds CLI arguments for scoped realworld Playwright execution.
 * @param {string[]} extraArguments - Additional CLI arguments.
 * @returns {string[]} Playwright command arguments.
 * @example
 * buildPlaywrightArguments(["--update-snapshots"])
 */
const buildPlaywrightArguments = (extraArguments) => {
  return [
    "exec",
    "playwright",
    "test",
    `--config=${PLAYWRIGHT_REALWORLD_CONFIG_PATH}`,
    PLAYWRIGHT_REALWORLD_TEST_GLOB,
    ...extraArguments
  ]
}

/**
 * Runs scoped realworld Playwright tests.
 * @param {string[]} extraArguments - Additional CLI arguments.
 * @returns {number} Process exit code.
 * @example
 * runRealworldE2E([])
 */
const runRealworldE2E = (extraArguments) => {
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

const extraArguments = process.argv.slice(2).filter((argument) => argument !== "--")
const exitCode = runRealworldE2E(extraArguments)
process.exit(exitCode)
