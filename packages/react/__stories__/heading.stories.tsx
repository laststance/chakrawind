import type { Meta } from "@storybook/react-vite"
import { HeadingBasic } from "compositions/examples/heading-basic"
import { HeadingWithAsProp } from "compositions/examples/heading-with-as-prop"
import { HeadingWithComposition } from "compositions/examples/heading-with-composition"
import { HeadingWithGradient } from "compositions/examples/heading-with-gradient"
import { HeadingWithHighlight } from "compositions/examples/heading-with-highlight"
import { HeadingWithSizes } from "compositions/examples/heading-with-sizes"
import { HeadingWithWeights } from "compositions/examples/heading-with-weights"
import { Box } from "../src"

export default {
  title: "Typography / Heading",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = HeadingBasic
export const Sizes = HeadingWithSizes
export const AsProps = HeadingWithAsProp
export const Weights = HeadingWithWeights
export const Highlight = HeadingWithHighlight
export const Composition = HeadingWithComposition
export const Gradient = HeadingWithGradient
