import type { Meta } from "@storybook/react-vite"
import { ContainerBasic } from "compositions/examples/container-basic"
import { ContainerWithFluid } from "compositions/examples/container-with-fluid"
import { ContainerWithSizes } from "compositions/examples/container-with-sizes"
import { Box } from "../src"

export default {
  title: "Layout / Container",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ContainerBasic
export const Sizes = ContainerWithSizes
export const Fluid = ContainerWithFluid
