import { RadialChartBasic } from "compositions/examples/charts/radial-chart-basic"
import { RadialChartWithLabel } from "compositions/examples/charts/radial-chart-with-label"
import { RadialChartWithLegend } from "compositions/examples/charts/radial-chart-with-legend"
import { Box } from "../src"

export default {
  title: "Charts / Radial Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = RadialChartBasic
export const Legend = RadialChartWithLegend
export const Label = RadialChartWithLabel
