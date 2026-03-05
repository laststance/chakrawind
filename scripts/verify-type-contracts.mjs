#!/usr/bin/env node

import { spawnSync } from "node:child_process"

const TYPE_CONTRACT_TSC_PROJECT_PATH = "tests/type-contracts/tsconfig.json"

/**
 * Executes TypeScript type-contract compilation.
 * @returns {number} Process exit code.
 * @example
 * runTypeContractCompilation()
 */
const runTypeContractCompilation = () => {
  const result = spawnSync(
    "pnpm",
    ["exec", "tsc", "-p", TYPE_CONTRACT_TSC_PROJECT_PATH, "--pretty", "false"],
    {
      stdio: "inherit",
      shell: false
    }
  )

  if (typeof result.status === "number") {
    return result.status
  }

  return 1
}

const exitCode = runTypeContractCompilation()
if (exitCode === 0) {
  console.log("type contract verification passed")
}
process.exit(exitCode)
