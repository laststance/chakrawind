import {
  getChakraWindTokenContract,
  type ChakraWindTokenContract
} from "@laststance/chakrawind-system"
import {
  createChakraWindTailwindPreset,
  type ChakraWindTailwindPreset
} from "@laststance/chakrawind-tailwind"
import {
  Box,
  Button,
  Text,
  type BoxProps,
  type ButtonProps,
  createChakraWindProviderContract,
  type ChakraWindProviderContract,
  type TextProps
} from "@laststance/chakrawind-react"

const tokenContract: ChakraWindTokenContract = getChakraWindTokenContract()
const tailwindPreset: ChakraWindTailwindPreset = createChakraWindTailwindPreset()
const providerContract: ChakraWindProviderContract = createChakraWindProviderContract({
  children: "contract-ok"
})

const presetNameLiteral: "chakrawind" = tailwindPreset.name
const providerPresetNameLiteral: "chakrawind" = providerContract.preset.name
const accentColor: string = tokenContract.colors.accent
const boxProps: BoxProps = { id: "box-1" }
const textProps: TextProps = { children: "text" }
const buttonProps: ButtonProps = { children: "button", type: "button" }

void presetNameLiteral
void providerPresetNameLiteral
void accentColor
void boxProps
void textProps
void buttonProps

Box(boxProps)
Text(textProps)
Button(buttonProps)

// @ts-expect-error createChakraWindProviderContract requires children.
createChakraWindProviderContract({})

// @ts-expect-error preset name literal must remain "chakrawind".
const invalidPresetName: "chakra" = tailwindPreset.name

// @ts-expect-error token contract must be readonly and immutable.
tokenContract.colors.accent = "#000000"

// @ts-expect-error provider contract has no unknown property.
providerContract.unknownProperty

// @ts-expect-error button type must match intrinsic button type union.
const invalidButtonProps: ButtonProps = { type: "link" }
void invalidButtonProps
