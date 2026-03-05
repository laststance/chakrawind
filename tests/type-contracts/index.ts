import {
  getChakraWindTokenContract,
  type ChakraWindTokenContract
} from "@laststance/chakrawind-system"
import {
  createChakraWindTailwindPreset,
  type ChakraWindTailwindPreset
} from "@laststance/chakrawind-tailwind"
import {
  createChakraWindProviderContract,
  type ChakraWindProviderContract
} from "@laststance/chakrawind-react"

const tokenContract: ChakraWindTokenContract = getChakraWindTokenContract()
const tailwindPreset: ChakraWindTailwindPreset = createChakraWindTailwindPreset()
const providerContract: ChakraWindProviderContract = createChakraWindProviderContract({
  children: "contract-ok"
})

const presetNameLiteral: "chakrawind" = tailwindPreset.name
const providerPresetNameLiteral: "chakrawind" = providerContract.preset.name
const accentColor: string = tokenContract.colors.accent

void presetNameLiteral
void providerPresetNameLiteral
void accentColor

// @ts-expect-error createChakraWindProviderContract requires children.
createChakraWindProviderContract({})

// @ts-expect-error preset name literal must remain "chakrawind".
const invalidPresetName: "chakra" = tailwindPreset.name

// @ts-expect-error token contract must be readonly and immutable.
tokenContract.colors.accent = "#000000"

// @ts-expect-error provider contract has no unknown property.
providerContract.unknownProperty
