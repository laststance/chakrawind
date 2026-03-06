import type { Meta } from "@storybook/react-vite"
import { CodeBasic } from "compositions/examples/code-basic"
import { CodeSizeTable } from "compositions/examples/code-size-table"
import { CodeVariantTable } from "compositions/examples/code-variant-table"
import { CodeWithColors } from "compositions/examples/code-with-colors"
import { Box } from "../src"

export default {
  title: "Typography / Code",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CodeBasic
export const Colors = CodeWithColors
export const Sizes = CodeSizeTable
export const Variants = CodeVariantTable
