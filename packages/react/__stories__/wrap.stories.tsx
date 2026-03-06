import type { Meta } from "@storybook/react-vite"
import { WrapBasic } from "compositions/examples/wrap-basic"
import { WrapResponsive } from "compositions/examples/wrap-responsive"
import { WrapWithAlign } from "compositions/examples/wrap-with-align"
import { WrapWithGap } from "compositions/examples/wrap-with-gap"
import { WrapWithJustify } from "compositions/examples/wrap-with-justify"
import { WrapWithRowColumnGap } from "compositions/examples/wrap-with-row-column-gap"
import { Box } from "../src"

export default {
  title: "Layout / Wrap",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = WrapBasic
export const Responsive = WrapResponsive
export const Align = WrapWithAlign
export const Gap = WrapWithGap
export const Justify = WrapWithJustify
export const RowColumnGap = WrapWithRowColumnGap
