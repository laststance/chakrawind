import { PieChartBasic } from "compositions/examples/charts/pie-chart-basic"
import { PieChartNoStroke } from "compositions/examples/charts/pie-chart-no-stroke"
import { PieChartWithLabelInside } from "compositions/examples/charts/pie-chart-with-label-inside"
import { PieChartWithLabelOutside } from "compositions/examples/charts/pie-chart-with-label-outside"
import { PieChartWithLegend } from "compositions/examples/charts/pie-chart-with-legend"
import { PieChartWithPointLabel } from "compositions/examples/charts/pie-chart-with-point-label"
import { PieChartWithStartAngle } from "compositions/examples/charts/pie-chart-with-start-angle"
import { Box } from "../src"

export default {
  title: "Charts / Pie Chart",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = PieChartBasic
export const NoStroke = PieChartNoStroke
export const LabelInside = PieChartWithLabelInside
export const LabelOutside = PieChartWithLabelOutside
export const Legend = PieChartWithLegend
export const PointLabel = PieChartWithPointLabel
export const StartAngle = PieChartWithStartAngle
