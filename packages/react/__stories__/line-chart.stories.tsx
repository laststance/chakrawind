import { LineChartAxesLabel } from "compositions/examples/charts/line-chart-axes-label"
import { LineChartBasic } from "compositions/examples/charts/line-chart-basic"
import { LineChartBiaxial } from "compositions/examples/charts/line-chart-biaxial"
import { LineChartComposition } from "compositions/examples/charts/line-chart-composition"
import { LineChartCustomTooltip } from "compositions/examples/charts/line-chart-custom-tooltip"
import { LineChartLegendInteraction } from "compositions/examples/charts/line-chart-legend-interaction"
import { LineChartMultiple } from "compositions/examples/charts/line-chart-multiple"
import { LineChartNoDots } from "compositions/examples/charts/line-chart-no-dots"
import { LineChartStartEndTick } from "compositions/examples/charts/line-chart-start-end-tick"
import { LineChartValueFormatter } from "compositions/examples/charts/line-chart-value-formatter"
import { LineChartWithCustomDot } from "compositions/examples/charts/line-chart-with-custom-dot"
import { LineChartWithDashed } from "compositions/examples/charts/line-chart-with-dashed"
import { LineChartWithGradient } from "compositions/examples/charts/line-chart-with-gradient"
import { LineChartWithNulls } from "compositions/examples/charts/line-chart-with-nulls"
import { LineChartWithPointLabel } from "compositions/examples/charts/line-chart-with-point-label"
import { LineChartWithReferencePoint } from "compositions/examples/charts/line-chart-with-reference-point"
import { LineChartWithSeriesLabel } from "compositions/examples/charts/line-chart-with-series-label"
import { LineChartWithStrokeWidth } from "compositions/examples/charts/line-chart-with-stroke-width"
import { LineChartWithTypes } from "compositions/examples/charts/line-chart-with-types"
import { LineChartWithValueDomain } from "compositions/examples/charts/line-chart-with-value-domain"
import { Box } from "../src"

export default {
  title: "Charts / Line Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const AxesLabel = LineChartAxesLabel
export const Basic = LineChartBasic
export const Biaxial = LineChartBiaxial
export const Composition = LineChartComposition
export const CustomTooltip = LineChartCustomTooltip
export const LegendInteraction = LineChartLegendInteraction
export const Multiple = LineChartMultiple
export const NoDots = LineChartNoDots
export const StartEndTick = LineChartStartEndTick
export const ValueFormatter = LineChartValueFormatter
export const CustomDot = LineChartWithCustomDot
export const Dashed = LineChartWithDashed
export const Gradient = LineChartWithGradient
export const Nulls = LineChartWithNulls
export const PointLabel = LineChartWithPointLabel
export const ReferencePoint = LineChartWithReferencePoint
export const SeriesLabel = LineChartWithSeriesLabel
export const StrokeWidth = LineChartWithStrokeWidth
export const Types = LineChartWithTypes
export const ValueDomain = LineChartWithValueDomain
