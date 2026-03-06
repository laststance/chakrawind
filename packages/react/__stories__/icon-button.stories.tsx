import type { Meta } from "@storybook/react-vite"
import { IconButtonBasic } from "compositions/examples/icon-button-basic"
import { IconButtonRounded } from "compositions/examples/icon-button-rounded"
import { IconButtonWithColors } from "compositions/examples/icon-button-with-colors"
import { IconButtonWithSizes } from "compositions/examples/icon-button-with-sizes"
import { IconButtonWithVariants } from "compositions/examples/icon-button-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Icon Button",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = IconButtonBasic
export const Rounded = IconButtonRounded
export const Colors = IconButtonWithColors
export const Sizes = IconButtonWithSizes
export const Variants = IconButtonWithVariants
