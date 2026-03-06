import { ScatterChartBasic } from "compositions/examples/charts/scatter-chart-basic"
import { ScatterChartConnectDots } from "compositions/examples/charts/scatter-chart-connect-dots"
import { ScatterChartLegend } from "compositions/examples/charts/scatter-chart-legend"
import { ScatterChartMultiple } from "compositions/examples/charts/scatter-chart-multiple"
import { ScatterChartTrendLine } from "compositions/examples/charts/scatter-chart-trend-line"
import { Box } from "../src"

export default {
  title: "Charts / Scatter Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = ScatterChartBasic
export const Legend = ScatterChartLegend
export const Multiple = ScatterChartMultiple
export const ConnectDots = ScatterChartConnectDots
export const TrendLine = ScatterChartTrendLine
