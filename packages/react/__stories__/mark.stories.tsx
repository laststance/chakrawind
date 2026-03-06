import type { Meta } from "@storybook/react-vite"
import { MarkBasic } from "compositions/examples/mark-basic"
import { MarkWithVariants } from "compositions/examples/mark-with-variants"
import { Box } from "../src"

export default {
  title: "Typography / Mark",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = MarkBasic
export const Variants = MarkWithVariants
