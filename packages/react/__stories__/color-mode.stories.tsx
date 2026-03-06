import type { Meta } from "@storybook/react-vite"
import { ColorModeBasic } from "compositions/examples/color-mode-basic"
import { ColorModeForced } from "compositions/examples/color-mode-forced"
import { ColorModeIconButton } from "compositions/examples/color-mode-icon-button"
import { ColorModeValue } from "compositions/examples/color-mode-value"
import { ColorModeValueFallback } from "compositions/examples/color-mode-value-fallback"
import { Box } from "../src"

export default {
  title: "Components / Color Mode",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ColorModeBasic
export const Forced = ColorModeForced
export const IconButton = ColorModeIconButton
export const Value = ColorModeValue
export const ValueFallback = ColorModeValueFallback
