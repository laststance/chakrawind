import {
  getChakraWindTokenContract,
  type ChakraWindTokenContract
} from "@laststance/chakrawind-system"

export interface ChakraWindTailwindPreset {
  name: "chakrawind"
  tokens: ChakraWindTokenContract
}

/**
 * Creates Chakra Wind Tailwind preset object from system tokens.
 * @returns {ChakraWindTailwindPreset} Tailwind preset contract.
 * @example
 * const preset = createChakraWindTailwindPreset()
 * preset.name // => "chakrawind"
 */
export const createChakraWindTailwindPreset = (): ChakraWindTailwindPreset => {
  return {
    name: "chakrawind",
    tokens: getChakraWindTokenContract()
  }
}
