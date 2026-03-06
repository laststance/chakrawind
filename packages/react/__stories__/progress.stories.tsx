import type { Meta } from "@storybook/react-vite"
import { ProgressBasic } from "compositions/examples/progress-basic"
import { ProgressComposition } from "compositions/examples/progress-composition"
import { ProgressSizeTable } from "compositions/examples/progress-size-table"
import { ProgressVariantTable } from "compositions/examples/progress-variant-table"
import { ProgressWithAnimatedStripes } from "compositions/examples/progress-with-animated-stripes"
import { ProgressWithColors } from "compositions/examples/progress-with-colors"
import { ProgressWithInlineLabel } from "compositions/examples/progress-with-inline-label"
import { ProgressWithLabel } from "compositions/examples/progress-with-label"
import { ProgressWithLabelInfo } from "compositions/examples/progress-with-label-info"
import { ProgressWithStripes } from "compositions/examples/progress-with-stripes"
import { Box } from "../src"

export default {
  title: "Components / Progress",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ProgressBasic
export const Composition = ProgressComposition
export const Sizes = ProgressSizeTable
export const Variants = ProgressVariantTable
export const AnimatedStripes = ProgressWithAnimatedStripes
export const Colors = ProgressWithColors
export const InlineLabel = ProgressWithInlineLabel
export const Label = ProgressWithLabel
export const LabelInfo = ProgressWithLabelInfo
export const Stripes = ProgressWithStripes
