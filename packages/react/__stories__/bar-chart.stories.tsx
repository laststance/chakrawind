import { BarChartBarColor } from "compositions/examples/charts/bar-chart-bar-color"
import { BarChartBasic } from "compositions/examples/charts/bar-chart-basic"
import { BarChartCandlestick } from "compositions/examples/charts/bar-chart-candlestick"
import { BarChartComposition } from "compositions/examples/charts/bar-chart-composition"
import { BarChartFillWithValue } from "compositions/examples/charts/bar-chart-fill-with-value"
import { BarChartHistogram } from "compositions/examples/charts/bar-chart-histogram"
import { BarChartHorizontal } from "compositions/examples/charts/bar-chart-horizontal"
import { BarChartLegendPosition } from "compositions/examples/charts/bar-chart-legend-position"
import { BarChartMultiple } from "compositions/examples/charts/bar-chart-multiple"
import { BarChartPercent } from "compositions/examples/charts/bar-chart-percent"
import { BarChartRange } from "compositions/examples/charts/bar-chart-range"
import { BarChartRounded } from "compositions/examples/charts/bar-chart-rounded"
import { BarChartStacked } from "compositions/examples/charts/bar-chart-stacked"
import { BarChartStackedMix } from "compositions/examples/charts/bar-chart-stacked-mix"
import { BarChartWithAvatarTicks } from "compositions/examples/charts/bar-chart-with-avatar-ticks"
import { BarChartWithBarLabel } from "compositions/examples/charts/bar-chart-with-bar-label"
import { BarChartWithFormatter } from "compositions/examples/charts/bar-chart-with-formatter"
import { BarChartWithNoGap } from "compositions/examples/charts/bar-chart-with-no-gap"
import { BarChartWithReferenceLines } from "compositions/examples/charts/bar-chart-with-reference-lines"
import { Box } from "../src"

export default {
  title: "Charts / Bar Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const BarColor = BarChartBarColor
export const Basic = BarChartBasic
export const Candlestick = BarChartCandlestick
export const Composition = BarChartComposition
export const FillWithValue = BarChartFillWithValue
export const Histogram = BarChartHistogram
export const Horizontal = BarChartHorizontal
export const LegendPosition = BarChartLegendPosition
export const Multiple = BarChartMultiple
export const Percent = BarChartPercent
export const Range = BarChartRange
export const Rounded = BarChartRounded
export const Stacked = BarChartStacked
export const StackedMix = BarChartStackedMix
export const AvatarTicks = BarChartWithAvatarTicks
export const BarLabel = BarChartWithBarLabel
export const Formatter = BarChartWithFormatter
export const NoGap = BarChartWithNoGap
export const ReferenceLines = BarChartWithReferenceLines
