import { BarSegmentBasic } from "compositions/examples/charts/bar-segment-basic"
import { BarSegmentWithBarSize } from "compositions/examples/charts/bar-segment-with-bar-size"
import { BarSegmentWithLegend } from "compositions/examples/charts/bar-segment-with-legend"
import { BarSegmentWithReference } from "compositions/examples/charts/bar-segment-with-reference"
import { BarSegmentWithTooltip } from "compositions/examples/charts/bar-segment-with-tooltip"
import { Box } from "../src"

export default {
  title: "Charts / Bar Segment",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = BarSegmentBasic
export const Reference = BarSegmentWithReference
export const Legend = BarSegmentWithLegend
export const BarSize = BarSegmentWithBarSize
export const Tooltip = BarSegmentWithTooltip
