import { RadarChartBasic } from "compositions/examples/charts/radar-chart-basic"
import { RadarChartLinesOnly } from "compositions/examples/charts/radar-chart-lines-only"
import { RadarChartMultiple } from "compositions/examples/charts/radar-chart-multiple"
import { RadarChartWithCircleGrid } from "compositions/examples/charts/radar-chart-with-circle-grid"
import { RadarChartWithDots } from "compositions/examples/charts/radar-chart-with-dots"
import { RadarChartWithFilledGrid } from "compositions/examples/charts/radar-chart-with-filled-grid"
import { RadarChartWithPointLabel } from "compositions/examples/charts/radar-chart-with-point-label"
import { RadarChartWithTooltip } from "compositions/examples/charts/radar-chart-with-tooltip"
import { Box } from "../src"

export default {
  title: "Charts / Radar Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = RadarChartBasic
export const LinesOnly = RadarChartLinesOnly
export const Multiple = RadarChartMultiple
export const CircleGrid = RadarChartWithCircleGrid
export const Dots = RadarChartWithDots
export const FilledGrid = RadarChartWithFilledGrid
export const PointLabel = RadarChartWithPointLabel
export const Tooltip = RadarChartWithTooltip
