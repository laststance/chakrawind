import type { Meta } from "@storybook/react-vite"
import { SeparatorBasic } from "compositions/examples/separator-basic"
import { SeparatorVertical } from "compositions/examples/separator-vertical"
import { SeparatorWithLabel } from "compositions/examples/separator-with-label"
import { SeparatorWithResponsiveOrientation } from "compositions/examples/separator-with-responsive-orientation"
import { SeparatorWithSizes } from "compositions/examples/separator-with-sizes"
import { SeparatorWithVariants } from "compositions/examples/separator-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Separator",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SeparatorBasic
export const Vertical = SeparatorVertical
export const Label = SeparatorWithLabel
export const ResponsiveOrientation = SeparatorWithResponsiveOrientation
export const Sizes = SeparatorWithSizes
export const Variants = SeparatorWithVariants
