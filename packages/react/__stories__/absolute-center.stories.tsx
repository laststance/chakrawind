import { AbsoluteCenterBasic } from "compositions/examples/absolute-center-basic"
import { AbsoluteCenterWithAxis } from "compositions/examples/absolute-center-with-axis"
import { AbsoluteCenterWithContent } from "compositions/examples/absolute-center-with-content"
import { AbsoluteCenterWithOverlay } from "compositions/examples/absolute-center-with-overlay"
import { AbsoluteCenterWithRtl } from "compositions/examples/absolute-center-with-rtl"
import { Box } from "../src"

export default {
  title: "Layout / AbsoluteCenter",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = AbsoluteCenterBasic
export const WithAxis = AbsoluteCenterWithAxis
export const WithContent = AbsoluteCenterWithContent
export const WithOverlay = AbsoluteCenterWithOverlay
export const WithRtl = AbsoluteCenterWithRtl
