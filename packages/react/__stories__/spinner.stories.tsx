import type { Meta } from "@storybook/react-vite"
import { SpinnerBasic } from "compositions/examples/spinner-basic"
import { SpinnerCustomColor } from "compositions/examples/spinner-custom-color"
import { SpinnerSizeTable } from "compositions/examples/spinner-size-table"
import { SpinnerWithCustomSpeed } from "compositions/examples/spinner-with-custom-speed"
import { SpinnerWithCustomThickness } from "compositions/examples/spinner-with-custom-thickness"
import { SpinnerWithLabel } from "compositions/examples/spinner-with-label"
import { SpinnerWithOverlay } from "compositions/examples/spinner-with-overlay"
import { SpinnerWithTrackColor } from "compositions/examples/spinner-with-track-color"
import { Box } from "../src"

export default {
  title: "Components / Spinner",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SpinnerBasic
export const CustomColor = SpinnerCustomColor
export const Sizes = SpinnerSizeTable
export const CustomSpeed = SpinnerWithCustomSpeed
export const CustomThickness = SpinnerWithCustomThickness
export const TrackColor = SpinnerWithTrackColor
export const Label = SpinnerWithLabel
export const Overlay = SpinnerWithOverlay
