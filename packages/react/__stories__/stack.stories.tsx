import type { Meta } from "@storybook/react-vite"
import { StackBasic } from "compositions/examples/stack-basic"
import { StackHorizontal } from "compositions/examples/stack-horizontal"
import { StackWithCustomSeparator } from "compositions/examples/stack-with-custom-separator"
import { StackWithHstack } from "compositions/examples/stack-with-hstack"
import { StackWithResponsiveDirection } from "compositions/examples/stack-with-responsive-direction"
import { StackWithResponsiveSeparator } from "compositions/examples/stack-with-responsive-separator"
import { StackWithSeparator } from "compositions/examples/stack-with-separator"
import { StackWithVstack } from "compositions/examples/stack-with-vstack"
import { Box } from "../src"

export default {
  title: "Layout / Stack",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = StackBasic
export const Horizontal = StackHorizontal
export const HStack = StackWithHstack
export const VStack = StackWithVstack
export const Separator = StackWithSeparator
export const ResponsiveDirection = StackWithResponsiveDirection
export const CustomSeparator = StackWithCustomSeparator
export const ResponsiveSeparator = StackWithResponsiveSeparator
