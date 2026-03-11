/**
 * Coexistence test setup.
 * Validates that Chakra Wind and shadcn/ui can coexist without regressions.
 *
 * Test matrix:
 * - preflight: on/off
 * - color mode: light/dark
 * - token override: off/on
 */
import "@testing-library/jest-dom/vitest"

export interface CoexistMatrixEntry {
  preflight: "on" | "off"
  colorMode: "light" | "dark"
  tokenOverride: "on" | "off"
}

export const COEXIST_MATRIX: CoexistMatrixEntry[] = [
  { preflight: "on", colorMode: "light", tokenOverride: "off" },
  { preflight: "on", colorMode: "light", tokenOverride: "on" },
  { preflight: "on", colorMode: "dark", tokenOverride: "off" },
  { preflight: "on", colorMode: "dark", tokenOverride: "on" },
  { preflight: "off", colorMode: "light", tokenOverride: "off" },
  { preflight: "off", colorMode: "light", tokenOverride: "on" },
  { preflight: "off", colorMode: "dark", tokenOverride: "off" },
  { preflight: "off", colorMode: "dark", tokenOverride: "on" },
]
