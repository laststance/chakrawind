import type { Meta } from "@storybook/react-vite"
import { HighlightBasic } from "compositions/examples/highlight-basic"
import { HighlightMultiple } from "compositions/examples/highlight-multiple"
import { HighlightSearchQuery } from "compositions/examples/highlight-search-query"
import { HighlightWithCustomStyle } from "compositions/examples/highlight-with-custom-style"
import { HighlightWithSquiggle } from "compositions/examples/highlight-with-squiggle"
import { Box } from "../src"

export default {
  title: "Typography / Highlight",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = HighlightBasic
export const Multiple = HighlightMultiple
export const SearchQuery = HighlightSearchQuery
export const CustomStyle = HighlightWithCustomStyle
export const Squiggle = HighlightWithSquiggle
