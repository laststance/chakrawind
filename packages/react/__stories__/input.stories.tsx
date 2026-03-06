import type { Meta } from "@storybook/react-vite"
import { InputBasic } from "compositions/examples/input-basic"
import { InputSizeTable } from "compositions/examples/input-size-table"
import { InputVariantTable } from "compositions/examples/input-variant-table"
import { InputWithCardDetails } from "compositions/examples/input-with-card-details"
import { InputWithCardNumber } from "compositions/examples/input-with-card-number"
import { InputWithCharacterCounter } from "compositions/examples/input-with-character-counter"
import { InputWithClearButton } from "compositions/examples/input-with-clear-button"
import { InputWithEndAddon } from "compositions/examples/input-with-end-addon"
import { InputWithEndButton } from "compositions/examples/input-with-end-button"
import { InputWithEndIcon } from "compositions/examples/input-with-end-icon"
import { InputWithEndText } from "compositions/examples/input-with-end-text"
import { InputWithErrorText } from "compositions/examples/input-with-error-text"
import { InputWithField } from "compositions/examples/input-with-field"
import { InputWithFloatingLabel } from "compositions/examples/input-with-floating-label"
import { InputWithFocusErrorColor } from "compositions/examples/input-with-focus-error-color"
import { InputWithHelperText } from "compositions/examples/input-with-helper-text"
import { InputWithHookForm } from "compositions/examples/input-with-hook-form"
import { InputWithKbd } from "compositions/examples/input-with-kbd"
import { InputWithMask } from "compositions/examples/input-with-mask"
import { InputWithSelect } from "compositions/examples/input-with-select"
import { InputWithStartAddon } from "compositions/examples/input-with-start-addon"
import { InputWithStartAndEndAddon } from "compositions/examples/input-with-start-and-end-addon"
import { InputWithStartAndEndText } from "compositions/examples/input-with-start-and-end-text"
import { InputWithStartElementEndAddon } from "compositions/examples/input-with-start-element-end-addon"
import { InputWithStartIcon } from "compositions/examples/input-with-start-icon"
import { InputWithStartText } from "compositions/examples/input-with-start-text"
import { Box } from "../src"

export default {
  title: "Components / Input",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = InputBasic
export const Sizes = InputSizeTable
export const Variants = InputVariantTable
export const CardDetails = InputWithCardDetails
export const CardNumber = InputWithCardNumber
export const CharacterCounter = InputWithCharacterCounter
export const ClearButton = InputWithClearButton
export const EndAddon = InputWithEndAddon
export const EndButton = InputWithEndButton
export const EndIcon = InputWithEndIcon
export const EndText = InputWithEndText
export const ErrorText = InputWithErrorText
export const Field = InputWithField
export const FloatingLabel = InputWithFloatingLabel
export const FocusErrorColor = InputWithFocusErrorColor
export const HelperText = InputWithHelperText
export const HookForm = InputWithHookForm
export const Kbd = InputWithKbd
export const Mask = InputWithMask
export const Select = InputWithSelect
export const StartAddon = InputWithStartAddon
export const StartAndEndAddon = InputWithStartAndEndAddon
export const StartAndEndText = InputWithStartAndEndText
export const StartElementEndAddon = InputWithStartElementEndAddon
export const StartIcon = InputWithStartIcon
export const StartText = InputWithStartText
