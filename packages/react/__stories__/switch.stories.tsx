import type { Meta } from "@storybook/react-vite"
import { SwitchBasic } from "compositions/examples/switch-basic"
import { SwitchControlled } from "compositions/examples/switch-controlled"
import { SwitchSizeTable } from "compositions/examples/switch-size-table"
import { SwitchVariantTable } from "compositions/examples/switch-variant-table"
import { SwitchWithDisabled } from "compositions/examples/switch-with-disabled"
import { SwitchWithHookForm } from "compositions/examples/switch-with-hook-form"
import { SwitchWithInvalid } from "compositions/examples/switch-with-invalid"
import { SwitchWithSizes } from "compositions/examples/switch-with-sizes"
import { SwitchWithThumbIndicator } from "compositions/examples/switch-with-thumb-indicator"
import { SwitchWithTooltip } from "compositions/examples/switch-with-tooltip"
import { SwitchWithTrackIndicator } from "compositions/examples/switch-with-track-indicator"
import { Box } from "../src"

export default {
  title: "Components / Switch",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SwitchBasic
export const Controlled = SwitchControlled
export const Sizes = SwitchWithSizes
export const SizeTable = SwitchSizeTable
export const Variants = SwitchVariantTable
export const Disabled = SwitchWithDisabled
export const HookForm = SwitchWithHookForm
export const Invalid = SwitchWithInvalid
export const ThumbIndicator = SwitchWithThumbIndicator
export const Tooltip = SwitchWithTooltip
export const TrackIndicator = SwitchWithTrackIndicator
