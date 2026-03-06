import { SparklineBarChart } from "compositions/examples/charts/sparkline-bar-chart"
import { SparklineBasic } from "compositions/examples/charts/sparkline-basic"
import { SparklineCompositionStat } from "compositions/examples/charts/sparkline-composition-stat"
import { SparklineCompositionStock } from "compositions/examples/charts/sparkline-composition-stock"
import { SparklineLineChart } from "compositions/examples/charts/sparkline-line-chart"
import { SparklineWithGradient } from "compositions/examples/charts/sparkline-with-gradient"
import { SparklineWithInteraction } from "compositions/examples/charts/sparkline-with-interaction"
import { SparklineWithReference } from "compositions/examples/charts/sparkline-with-reference"
import { Box } from "../src"

export default {
  title: "Charts / Sparkline",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const BarChart = SparklineBarChart
export const Basic = SparklineBasic
export const Stock = SparklineCompositionStock
export const LineChart = SparklineLineChart
export const Gradient = SparklineWithGradient
export const Interaction = SparklineWithInteraction
export const Reference = SparklineWithReference
export const Stat = SparklineCompositionStat
