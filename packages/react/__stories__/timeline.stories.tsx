import type { Meta } from "@storybook/react-vite"
import { TimelineAlternating } from "compositions/examples/timeline-alternating"
import { TimelineBasic } from "compositions/examples/timeline-basic"
import { TimelineComposition } from "compositions/examples/timeline-composition"
import { TimelineWithContentBefore } from "compositions/examples/timeline-with-content-before"
import { TimelineWithSizes } from "compositions/examples/timeline-with-sizes"
import { TimelineWithVariants } from "compositions/examples/timeline-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Timeline",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Alternating = TimelineAlternating
export const Basic = TimelineBasic
export const Composition = TimelineComposition
export const ContentBefore = TimelineWithContentBefore
export const Sizes = TimelineWithSizes
export const Variants = TimelineWithVariants
