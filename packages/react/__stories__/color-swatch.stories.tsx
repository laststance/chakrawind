import type { Meta } from "@storybook/react-vite"
import { ColorSwatchBasic } from "compositions/examples/color-swatch-basic"
import { ColorSwatchMixed } from "compositions/examples/color-swatch-mixed"
import { ColorSwatchPalette } from "compositions/examples/color-swatch-palette"
import { ColorSwatchWithAlpha } from "compositions/examples/color-swatch-with-alpha"
import { ColorSwatchWithBadge } from "compositions/examples/color-swatch-with-badge"
import { ColorSwatchWithSizes } from "compositions/examples/color-swatch-with-sizes"
import { ColorSwatchWithTransparent } from "compositions/examples/color-swatch-with-transparent"
import { Box } from "../src"

export default {
  title: "Components / Color Swatch",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ColorSwatchBasic
export const Mixed = ColorSwatchMixed
export const Palette = ColorSwatchPalette
export const WithAlpha = ColorSwatchWithAlpha
export const WithBadge = ColorSwatchWithBadge
export const WithSizes = ColorSwatchWithSizes
export const WithTransparent = ColorSwatchWithTransparent
