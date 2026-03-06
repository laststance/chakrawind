import type { Meta } from "@storybook/react-vite"
import { StatusBasic } from "compositions/examples/status-basic"
import { StatusSizeTable } from "compositions/examples/status-size-table"
import { StatusWithLabel } from "compositions/examples/status-with-label"
import { Box } from "../src"

export default {
  title: "Components / Status",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = StatusBasic
export const Label = StatusWithLabel
export const Sizes = StatusSizeTable
