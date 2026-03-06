import type { Meta } from "@storybook/react-vite"
import { BadgeBasic } from "compositions/examples/badge-basic"
import { BadgeSizeTable } from "compositions/examples/badge-size-table"
import { BadgeVariantTable } from "compositions/examples/badge-variant-table"
import { BadgeWithContext } from "compositions/examples/badge-with-context"
import { BadgeWithGroup } from "compositions/examples/badge-with-group"
import { BadgeWithIcon } from "compositions/examples/badge-with-icon"
import { Box } from "../src"

export default {
  title: "Components / Badge",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = BadgeBasic
export const Sizes = BadgeSizeTable
export const Variants = BadgeVariantTable
export const Context = BadgeWithContext
export const Group = BadgeWithGroup
export const Icon = BadgeWithIcon
