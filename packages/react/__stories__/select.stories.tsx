import type { Meta } from "@storybook/react-vite"
import { SelectAsyncLoading } from "compositions/examples/select-async-loading"
import { SelectBasic } from "compositions/examples/select-basic"
import { SelectControlled } from "compositions/examples/select-controlled"
import { SelectOpenFromDialog } from "compositions/examples/select-open-from-dialog"
import { SelectOpenFromPopover } from "compositions/examples/select-open-from-popover"
import { SelectVirtualized } from "compositions/examples/select-virtualized"
import { SelectWithAvatar } from "compositions/examples/select-with-avatar"
import { SelectWithClear } from "compositions/examples/select-with-clear"
import { SelectWithColorPalette } from "compositions/examples/select-with-color-palette"
import { SelectWithCountry } from "compositions/examples/select-with-country"
import { SelectWithDisabled } from "compositions/examples/select-with-disabled"
import { SelectWithDisabledOption } from "compositions/examples/select-with-disabled-option"
import { SelectWithHookForm } from "compositions/examples/select-with-hook-form"
import { SelectWithIconButton } from "compositions/examples/select-with-icon-button"
import { SelectWithInvalid } from "compositions/examples/select-with-invalid"
import { SelectWithItemDescription } from "compositions/examples/select-with-item-description"
import { SelectWithMultiple } from "compositions/examples/select-with-multiple"
import { SelectWithNativeForm } from "compositions/examples/select-with-native-form"
import { SelectWithOptionGroup } from "compositions/examples/select-with-option-group"
import { SelectWithOverflow } from "compositions/examples/select-with-overflow"
import { SelectWithPositioning } from "compositions/examples/select-with-positioning"
import { SelectWithSizes } from "compositions/examples/select-with-sizes"
import { SelectWithVariants } from "compositions/examples/select-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Select",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const AsyncLoading = SelectAsyncLoading
export const Basic = SelectBasic
export const Controlled = SelectControlled
export const OpenFromDialog = SelectOpenFromDialog
export const OpenFromPopover = SelectOpenFromPopover
export const Avatar = SelectWithAvatar
export const Clear = SelectWithClear
export const Country = SelectWithCountry
export const Disabled = SelectWithDisabled
export const DisabledOption = SelectWithDisabledOption
export const HookForm = SelectWithHookForm
export const IconButton = SelectWithIconButton
export const Invalid = SelectWithInvalid
export const ItemDescription = SelectWithItemDescription
export const Multiple = SelectWithMultiple
export const NativeForm = SelectWithNativeForm
export const OptionGroup = SelectWithOptionGroup
export const Overflow = SelectWithOverflow
export const Positioning = SelectWithPositioning
export const Sizes = SelectWithSizes
export const Variants = SelectWithVariants
export const ColorPalette = SelectWithColorPalette
export const Virtualized = SelectVirtualized
