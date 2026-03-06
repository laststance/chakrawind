import type { Meta } from "@storybook/react-vite"
import { NumberInputBasic } from "compositions/examples/number-input-basic"
import { NumberInputControlled } from "compositions/examples/number-input-controlled"
import { NumberInputWithDisabled } from "compositions/examples/number-input-with-disabled"
import { NumberInputWithElement } from "compositions/examples/number-input-with-element"
import { NumberInputWithField } from "compositions/examples/number-input-with-field"
import { NumberInputWithFormatOptions } from "compositions/examples/number-input-with-format-options"
import { NumberInputWithHookForm } from "compositions/examples/number-input-with-hook-form"
import { NumberInputWithInvalid } from "compositions/examples/number-input-with-invalid"
import { NumberInputWithMinMax } from "compositions/examples/number-input-with-min-max"
import { NumberInputWithMouseWheel } from "compositions/examples/number-input-with-mouse-wheel"
import { NumberInputWithScrubber } from "compositions/examples/number-input-with-scrubber"
import { NumberInputWithSizes } from "compositions/examples/number-input-with-sizes"
import { NumberInputWithStep } from "compositions/examples/number-input-with-step"
import { NumberInputWithStepper } from "compositions/examples/number-input-with-stepper"
import { Box } from "../src"

export default {
  title: "Components / NumberInput",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = NumberInputBasic
export const Controlled = NumberInputControlled
export const Disabled = NumberInputWithDisabled
export const Field = NumberInputWithField
export const FormatOptions = NumberInputWithFormatOptions
export const HookForm = NumberInputWithHookForm
export const Invalid = NumberInputWithInvalid
export const MinMax = NumberInputWithMinMax
export const MouseWheel = NumberInputWithMouseWheel
export const Scrubber = NumberInputWithScrubber
export const Sizes = NumberInputWithSizes
export const Step = NumberInputWithStep
export const Stepper = NumberInputWithStepper
export const Element = NumberInputWithElement
