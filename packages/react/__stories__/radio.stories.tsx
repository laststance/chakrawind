import type { Meta } from "@storybook/react-vite"
import { RadioBasic } from "compositions/examples/radio-basic"
import { RadioControlled } from "compositions/examples/radio-controlled"
import { RadioSizeTable } from "compositions/examples/radio-size-table"
import { RadioVariantTable } from "compositions/examples/radio-variant-table"
import { RadioWithColors } from "compositions/examples/radio-with-colors"
import { RadioWithHookForm } from "compositions/examples/radio-with-hook-form"
import { RadioWithVariants } from "compositions/examples/radio-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Radio",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = RadioBasic
export const Controlled = RadioControlled
export const Sizes = RadioSizeTable
export const Variants = RadioVariantTable
export const Colors = RadioWithColors
export const HookForm = RadioWithHookForm
export const DocsVariants = RadioWithVariants
