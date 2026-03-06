import type { Meta } from "@storybook/react-vite"
import { KbdBasic } from "compositions/examples/kbd-basic"
import { KbdFunctionKeys } from "compositions/examples/kbd-function-keys"
import { KbdSizeTable } from "compositions/examples/kbd-size-table"
import { KbdVariantTable } from "compositions/examples/kbd-variant-table"
import { KbdWithCombinations } from "compositions/examples/kbd-with-combinations"
import { Box } from "../src"

export default {
  title: "Components / Kbd",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = KbdBasic
export const FunctionKeys = KbdFunctionKeys
export const Sizes = KbdSizeTable
export const Variants = KbdVariantTable
export const Combinations = KbdWithCombinations
