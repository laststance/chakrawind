import type { Meta } from "@storybook/react-vite"
import { DataListBasic } from "compositions/examples/data-list-basic"
import { DataListSizeTable } from "compositions/examples/data-list-size-table"
import { DataListVertical } from "compositions/examples/data-list-vertical"
import { DataListWithInfo } from "compositions/examples/data-list-with-info"
import { DataListWithSeparator } from "compositions/examples/data-list-with-separator"
import { DataListWithVariants } from "compositions/examples/data-list-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Data List",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DataListBasic
export const Sizes = DataListSizeTable
export const Vertical = DataListVertical
export const Info = DataListWithInfo
export const Separator = DataListWithSeparator
export const Variants = DataListWithVariants
