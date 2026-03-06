import type { Meta } from "@storybook/react-vite"
import { ToggleBasic } from "compositions/examples/toggle-basic"
import { ToggleControlled } from "compositions/examples/toggle-controlled"
import { ToggleWithIndicator } from "compositions/examples/toggle-with-indicator"
import { ToggleWithPressedIcon } from "compositions/examples/toggle-with-pressed-icon"
import { Box } from "../src"

export default {
  title: "Components / Toggle",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ToggleBasic
export const Controlled = ToggleControlled
export const Indicator = ToggleWithIndicator
export const PressedIcon = ToggleWithPressedIcon
