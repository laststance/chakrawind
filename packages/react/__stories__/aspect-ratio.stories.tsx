import type { Meta } from "@storybook/react-vite"
import { AspectRatioResponsive } from "compositions/examples/aspect-ratio-responsive"
import { AspectRatioWithImage } from "compositions/examples/aspect-ratio-with-image"
import { AspectRatioWithMap } from "compositions/examples/aspect-ratio-with-map"
import { AspectRatioWithVideo } from "compositions/examples/aspect-ratio-with-video"
import { Box } from "../src"

export default {
  title: "Layout / AspectRatio",
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Responsive = AspectRatioResponsive
export const Image = AspectRatioWithImage
export const Map = AspectRatioWithMap
export const Video = AspectRatioWithVideo
