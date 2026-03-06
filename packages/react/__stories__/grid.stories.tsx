import type { Meta } from "@storybook/react-vite"
import { GridBasic } from "compositions/examples/grid-basic"
import { GridSpanningColumns } from "compositions/examples/grid-spanning-columns"
import { GridWithColSpan } from "compositions/examples/grid-with-col-span"
import { GridWithTemplateAreas } from "compositions/examples/grid-with-template-areas"
import { Box } from "../src"

export default {
  title: "Layout / Grid",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = GridBasic
export const SpanningColumns = GridSpanningColumns
export const ColSpan = GridWithColSpan
export const TemplateAreas = GridWithTemplateAreas
