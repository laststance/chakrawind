import type { Meta } from "@storybook/react-vite"
import { ProgressCircleBasic } from "compositions/examples/progress-circle-basic"
import { ProgressCircleIndeterminate } from "compositions/examples/progress-circle-indeterminate"
import { ProgressCircleWithColors } from "compositions/examples/progress-circle-with-colors"
import { ProgressCircleWithRangeColor } from "compositions/examples/progress-circle-with-range-color"
import { ProgressCircleWithRoundCap } from "compositions/examples/progress-circle-with-round-cap"
import { ProgressCircleWithSizes } from "compositions/examples/progress-circle-with-sizes"
import { ProgressCircleWithThickness } from "compositions/examples/progress-circle-with-thickness"
import { ProgressCircleWithValueText } from "compositions/examples/progress-circle-with-value-text"
import { Box } from "../src"

export default {
  title: "Components / Progress Circle",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ProgressCircleBasic
export const Indeterminate = ProgressCircleIndeterminate
export const Colors = ProgressCircleWithColors
export const RangeColor = ProgressCircleWithRangeColor
export const RoundCap = ProgressCircleWithRoundCap
export const Sizes = ProgressCircleWithSizes
export const CustomThickness = ProgressCircleWithThickness
export const ValueText = ProgressCircleWithValueText
