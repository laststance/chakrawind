import type { Meta } from "@storybook/react-vite"
import { ThemeBasic } from "compositions/examples/theme-basic"
import { ThemeNested } from "compositions/examples/theme-nested"
import { ThemeWithPortalled } from "compositions/examples/theme-with-portalled"
import { Box } from "../src"

export default {
  title: "Foundations / Theme",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ThemeBasic
export const Nested = ThemeNested
export const Portalled = ThemeWithPortalled
