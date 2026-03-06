import type { Meta } from "@storybook/react-vite"
import { RadioCardBasic } from "compositions/examples/radio-card-basic"
import { RadioCardCentered } from "compositions/examples/radio-card-centered"
import { RadioCardComposition } from "compositions/examples/radio-card-composition"
import { RadioCardWithAddon } from "compositions/examples/radio-card-with-addon"
import { RadioCardWithColors } from "compositions/examples/radio-card-with-colors"
import { RadioCardWithCustomIndicator } from "compositions/examples/radio-card-with-custom-indicator"
import { RadioCardWithDescription } from "compositions/examples/radio-card-with-description"
import { RadioCardWithIcon } from "compositions/examples/radio-card-with-icon"
import { RadioCardWithResponsiveOrientation } from "compositions/examples/radio-card-with-responsive-orientation"
import { RadioCardWithSizes } from "compositions/examples/radio-card-with-sizes"
import { RadioCardWithVariants } from "compositions/examples/radio-card-with-variants"
import { RadioCardWithoutIndicator } from "compositions/examples/radio-card-without-indicator"
import { RadioCardWithoutIndicatorVertical } from "compositions/examples/radio-card-without-indicator-vertical"
import { Box } from "../src"

export default {
  title: "Components / Radio Card",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = RadioCardBasic
export const Centered = RadioCardCentered
export const Composition = RadioCardComposition
export const Addon = RadioCardWithAddon
export const Colors = RadioCardWithColors
export const CustomIndicator = RadioCardWithCustomIndicator
export const Icon = RadioCardWithIcon
export const Sizes = RadioCardWithSizes
export const Variants = RadioCardWithVariants
export const WithoutIndicator = RadioCardWithoutIndicator
export const WithoutIndicatorVertical = RadioCardWithoutIndicatorVertical
export const ResponsiveOrientation = RadioCardWithResponsiveOrientation
export const Description = RadioCardWithDescription
