import type { Meta } from "@storybook/react-vite"
import { SimpleGridBasic } from "compositions/examples/simple-grid-basic"
import { SimpleGridWithAutofit } from "compositions/examples/simple-grid-with-autofit"
import { SimpleGridWithColSpan } from "compositions/examples/simple-grid-with-col-span"
import { SimpleGridWithColumns } from "compositions/examples/simple-grid-with-columns"
import { SimpleGridWithRowAndColGap } from "compositions/examples/simple-grid-with-row-and-col-gap"
import { Box } from "../src"

export default {
  title: "Layout / SimpleGrid",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SimpleGridBasic
export const AutoFit = SimpleGridWithAutofit
export const ColSpan = SimpleGridWithColSpan
export const Columns = SimpleGridWithColumns
export const RowColGap = SimpleGridWithRowAndColGap
