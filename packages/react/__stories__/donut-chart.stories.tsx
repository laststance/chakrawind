import type { Meta } from "@storybook/react-vite"
import { DonutChartBasic } from "compositions/examples/charts/donut-chart-basic"
import { DonutChartWithAnglePadding } from "compositions/examples/charts/donut-chart-with-angle-padding"
import { DonutChartWithCenteredText } from "compositions/examples/charts/donut-chart-with-centered-text"
import { DonutChartWithDetachedSegment } from "compositions/examples/charts/donut-chart-with-detached-segment"
import { DonutChartWithOtherLabel } from "compositions/examples/charts/donut-chart-with-other-label"
import { DonutChartWithPointLabel } from "compositions/examples/charts/donut-chart-with-point-label"
import { DonutChartWithStartAndEndAngle } from "compositions/examples/charts/donut-chart-with-start-and-end-angle"
import { Box } from "../src"

export default {
  title: "Charts / Donut Chart",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DonutChartBasic
export const PointLabel = DonutChartWithPointLabel
export const CenteredText = DonutChartWithCenteredText
export const AnglePadding = DonutChartWithAnglePadding
export const StartAndEndAngle = DonutChartWithStartAndEndAngle
export const DetachedSegment = DonutChartWithDetachedSegment
export const OtherLabel = DonutChartWithOtherLabel
