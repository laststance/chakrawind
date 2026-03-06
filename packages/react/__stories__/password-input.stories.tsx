import type { Meta } from "@storybook/react-vite"
import { PasswordInputBasic } from "compositions/examples/password-input-basic"
import { PasswordInputControlled } from "compositions/examples/password-input-controlled"
import { PasswordInputControlledVisibility } from "compositions/examples/password-input-controlled-visibility"
import { PasswordInputWithHookForm } from "compositions/examples/password-input-with-hook-form"
import { PasswordInputWithSizes } from "compositions/examples/password-input-with-sizes"
import { PasswordInputWithStrengthIndicator } from "compositions/examples/password-input-with-strength-indicator"
import { Box } from "../src"

export default {
  title: "Components / Password Input",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = PasswordInputBasic
export const Controlled = PasswordInputControlled
export const ControlledVisibility = PasswordInputControlledVisibility
export const HookForm = PasswordInputWithHookForm
export const Sizes = PasswordInputWithSizes
export const StrengthIndicator = PasswordInputWithStrengthIndicator
