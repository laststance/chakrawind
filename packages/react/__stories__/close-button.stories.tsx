import type { Meta } from "@storybook/react-vite"
import { CloseButtonBasic } from "compositions/examples/close-button-basic"
import { CloseButtonWithCustomIcon } from "compositions/examples/close-button-with-custom-icon"
import { CloseButtonWithSizes } from "compositions/examples/close-button-with-sizes"
import { CloseButtonWithVariants } from "compositions/examples/close-button-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Close Button",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CloseButtonBasic
export const Sizes = CloseButtonWithSizes
export const Variants = CloseButtonWithVariants
export const CustomIcon = CloseButtonWithCustomIcon
