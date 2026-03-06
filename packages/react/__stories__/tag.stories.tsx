import type { Meta } from "@storybook/react-vite"
import { TagBasic } from "compositions/examples/tag-basic"
import { TagSizeTable } from "compositions/examples/tag-size-table"
import { TagVariantTable } from "compositions/examples/tag-variant-table"
import { TagWithAvatar } from "compositions/examples/tag-with-avatar"
import { TagWithClose } from "compositions/examples/tag-with-close"
import { TagWithColors } from "compositions/examples/tag-with-colors"
import { TagWithOverflow } from "compositions/examples/tag-with-overflow"
import { Box } from "../src"

export default {
  title: "Components / Tag",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TagBasic
export const Avatar = TagWithAvatar
export const Close = TagWithClose
export const Colors = TagWithColors
export const Variants = TagVariantTable
export const Sizes = TagSizeTable
export const Overflow = TagWithOverflow
