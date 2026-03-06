import type { Meta } from "@storybook/react-vite"
import { ColorPickerBasic } from "compositions/examples/color-picker-basic"
import { ColorPickerChangeEnd } from "compositions/examples/color-picker-change-end"
import { ColorPickerChannelSliderOnly } from "compositions/examples/color-picker-channel-slider-only"
import { ColorPickerControlled } from "compositions/examples/color-picker-controlled"
import { ColorPickerInline } from "compositions/examples/color-picker-inline"
import { ColorPickerInputOnly } from "compositions/examples/color-picker-input-only"
import { ColorPickerOpenFromDialog } from "compositions/examples/color-picker-open-from-dialog"
import { ColorPickerSwatchOnly } from "compositions/examples/color-picker-swatch-only"
import { ColorPickerTriggerOnly } from "compositions/examples/color-picker-trigger-only"
import { ColorPickerWithChannelInput } from "compositions/examples/color-picker-with-channel-input"
import { ColorPickerWithDisabled } from "compositions/examples/color-picker-with-disabled"
import { ColorPickerWithFitContent } from "compositions/examples/color-picker-with-fit-content"
import { ColorPickerWithFormat } from "compositions/examples/color-picker-with-format"
import { ColorPickerWithHookForm } from "compositions/examples/color-picker-with-hook-form"
import { ColorPickerWithReadonly } from "compositions/examples/color-picker-with-readonly"
import { ColorPickerWithSaveSwatch } from "compositions/examples/color-picker-with-save-swatch"
import { ColorPickerWithSizes } from "compositions/examples/color-picker-with-sizes"
import { ColorPickerWithSwatchAndInput } from "compositions/examples/color-picker-with-swatch-and-input"
import { ColorPickerWithSwatches } from "compositions/examples/color-picker-with-swatches"
import { ColorPickerWithSwatchesAndTrigger } from "compositions/examples/color-picker-with-swatches-and-trigger"
import { ColorPickerWithTriggerInInput } from "compositions/examples/color-picker-with-trigger-in-input"
import { ColorPickerWithVariants } from "compositions/examples/color-picker-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Color Picker",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ColorPickerBasic
export const ChangeEnd = ColorPickerChangeEnd
export const OpenFromDialog = ColorPickerOpenFromDialog
export const ChannelSliderOnly = ColorPickerChannelSliderOnly
export const Controlled = ColorPickerControlled
export const HookForm = ColorPickerWithHookForm
export const Inline = ColorPickerInline
export const InputOnly = ColorPickerInputOnly
export const SwatchOnly = ColorPickerSwatchOnly
export const TriggerOnly = ColorPickerTriggerOnly
export const ChannelInput = ColorPickerWithChannelInput
export const Disabled = ColorPickerWithDisabled
export const FitContent = ColorPickerWithFitContent
export const Format = ColorPickerWithFormat
export const Readonly = ColorPickerWithReadonly
export const SaveSwatch = ColorPickerWithSaveSwatch
export const Sizes = ColorPickerWithSizes
export const SwatchAndInput = ColorPickerWithSwatchAndInput
export const Swatches = ColorPickerWithSwatches
export const SwatchesAndTrigger = ColorPickerWithSwatchesAndTrigger
export const TriggerInInput = ColorPickerWithTriggerInInput
export const Variants = ColorPickerWithVariants
