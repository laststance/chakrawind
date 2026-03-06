import type { Meta } from "@storybook/react-vite"
import { BlockquoteBasic } from "compositions/examples/blockquote-basic"
import { BlockquoteVariantTable } from "compositions/examples/blockquote-variant-table"
import { BlockquoteWithAvatar } from "compositions/examples/blockquote-with-avatar"
import { BlockquoteWithCite } from "compositions/examples/blockquote-with-cite"
import { BlockquoteWithCustomIcon } from "compositions/examples/blockquote-with-custom-icon"
import { BlockquoteWithIcon } from "compositions/examples/blockquote-with-icon"
import { BlockquoteWithJustify } from "compositions/examples/blockquote-with-justify"
import { Box } from "../src"

export default {
  title: "Components / Blockquote",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = BlockquoteBasic
export const Variants = BlockquoteVariantTable
export const Avatar = BlockquoteWithAvatar
export const Cite = BlockquoteWithCite
export const CustomIcon = BlockquoteWithCustomIcon
export const Icon = BlockquoteWithIcon
export const Justify = BlockquoteWithJustify
