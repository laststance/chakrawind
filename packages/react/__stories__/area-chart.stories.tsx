import { AreaChartBasic } from "compositions/examples/charts/area-chart-basic"
import { AreaChartFillWithValue } from "compositions/examples/charts/area-chart-fill-with-value"
import { AreaChartPercent } from "compositions/examples/charts/area-chart-percent"
import { AreaChartWithAxisLabel } from "compositions/examples/charts/area-chart-with-axis-label"
import { AreaChartWithDashedArea } from "compositions/examples/charts/area-chart-with-dashed-area"
import { AreaChartWithDots } from "compositions/examples/charts/area-chart-with-dots"
import { AreaChartWithGradient } from "compositions/examples/charts/area-chart-with-gradient"
import { AreaChartWithNulls } from "compositions/examples/charts/area-chart-with-nulls"
import { AreaChartWithPointLabel } from "compositions/examples/charts/area-chart-with-point-label"
import { AreaChartWithReferenceArea } from "compositions/examples/charts/area-chart-with-reference-area"
import { AreaChartWithReferenceLines } from "compositions/examples/charts/area-chart-with-reference-lines"
import { AreaChartWithTypes } from "compositions/examples/charts/area-chart-with-types"
import { AreaChartWithValueAxis } from "compositions/examples/charts/area-chart-with-value-axis"
import { Box } from "../src"

export default {
  title: "Charts / Area Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = AreaChartBasic
export const FillWithValue = AreaChartFillWithValue
export const Percent = AreaChartPercent
export const AxisLabel = AreaChartWithAxisLabel
export const DashedArea = AreaChartWithDashedArea
export const Dots = AreaChartWithDots
export const Gradient = AreaChartWithGradient
export const Nulls = AreaChartWithNulls
export const PointLabel = AreaChartWithPointLabel
export const ReferenceArea = AreaChartWithReferenceArea
export const ReferenceLines = AreaChartWithReferenceLines
export const Types = AreaChartWithTypes
export const ValueAxis = AreaChartWithValueAxis
