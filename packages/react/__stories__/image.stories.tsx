import type { Meta } from "@storybook/react-vite"
import { ImageBasic } from "compositions/examples/image-basic"
import { ImageCircular } from "compositions/examples/image-circular"
import { ImageWithAspectRatio } from "compositions/examples/image-with-aspect-ratio"
import { ImageWithFit } from "compositions/examples/image-with-fit"
import { ImageWithHeight } from "compositions/examples/image-with-height"
import { ImageWithHtmlHeight } from "compositions/examples/image-with-html-height"
import { Box } from "../src"

export default {
  title: "Components / Image",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ImageBasic
export const Circular = ImageCircular
export const AspectRatio = ImageWithAspectRatio
export const Fit = ImageWithFit
export const Height = ImageWithHeight
export const HtmlHeight = ImageWithHtmlHeight
