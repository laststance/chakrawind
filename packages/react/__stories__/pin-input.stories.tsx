import type { Meta } from "@storybook/react-vite"
import { PinInputAlphanumeric } from "compositions/examples/pin-input-alphanumeric"
import { PinInputAttached } from "compositions/examples/pin-input-attached"
import { PinInputBasic } from "compositions/examples/pin-input-basic"
import { PinInputControlled } from "compositions/examples/pin-input-controlled"
import { PinInputWithField } from "compositions/examples/pin-input-with-field"
import { PinInputWithHookForm } from "compositions/examples/pin-input-with-hook-form"
import { PinInputWithMask } from "compositions/examples/pin-input-with-mask"
import { PinInputWithOtp } from "compositions/examples/pin-input-with-otp"
import { PinInputWithPlaceholder } from "compositions/examples/pin-input-with-placeholder"
import { PinInputWithSizes } from "compositions/examples/pin-input-with-sizes"
import { PinInputWithStore } from "compositions/examples/pin-input-with-store"
import { Box } from "../src"

export default {
  title: "Components / PinInput",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Alphanumeric = PinInputAlphanumeric
export const Attached = PinInputAttached
export const Basic = PinInputBasic
export const Controlled = PinInputControlled
export const WithField = PinInputWithField
export const WithHookForm = PinInputWithHookForm
export const WithMask = PinInputWithMask
export const WithOtp = PinInputWithOtp
export const WithPlaceholder = PinInputWithPlaceholder
export const Sizes = PinInputWithSizes
export const WithStore = PinInputWithStore
