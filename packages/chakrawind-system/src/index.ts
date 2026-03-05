export const CHAKRAWIND_DEFAULT_TOKENS = {
  colors: {
    accent: "#2563eb",
    background: "#ffffff",
    foreground: "#0f172a"
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px"
  },
  spacing: {
    x1: "4px",
    x2: "8px",
    x4: "16px",
    x5: "20px",
    x6: "24px"
  }
} as const

export type ChakraWindTokenContract = typeof CHAKRAWIND_DEFAULT_TOKENS

/**
 * Returns baseline token contract for Chakra Wind system layer.
 * @returns {ChakraWindTokenContract} Immutable token contract.
 * @example
 * getChakraWindTokenContract().colors.accent // => "#2563eb"
 */
export const getChakraWindTokenContract = (): ChakraWindTokenContract => {
  return CHAKRAWIND_DEFAULT_TOKENS
}
