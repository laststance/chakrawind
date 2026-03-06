import type { Meta } from "@storybook/react-vite"
import { ComboboxAutoHighlight } from "compositions/examples/combobox-autohighlight"
import { ComboboxBasic } from "compositions/examples/combobox-basic"
import { ComboboxColorPicker } from "compositions/examples/combobox-color-picker"
import { ComboboxControlled } from "compositions/examples/combobox-controlled"
import { ComboboxMinCharacter } from "compositions/examples/combobox-min-character"
import { ComboboxOpenControlled } from "compositions/examples/combobox-open-controlled"
import { ComboboxOpenFromPopover } from "compositions/examples/combobox-open-from-popover"
import { ComboboxOpenOnClick } from "compositions/examples/combobox-open-on-click"
import { ComboboxRehydrateValue } from "compositions/examples/combobox-rehydrate-value"
import { ComboboxVirtualized } from "compositions/examples/combobox-virtualized"
import { ComboboxWithAsyncContent } from "compositions/examples/combobox-with-async-content"
import { ComboboxWithCreateable } from "compositions/examples/combobox-with-createable"
import { ComboboxWithCustomAnimation } from "compositions/examples/combobox-with-custom-animation"
import { ComboboxWithCustomFilter } from "compositions/examples/combobox-with-custom-filter"
import { ComboboxWithCustomItem } from "compositions/examples/combobox-with-custom-item"
import { ComboboxWithCustomObject } from "compositions/examples/combobox-with-custom-object"
import { ComboboxWithDisabled } from "compositions/examples/combobox-with-disabled"
import { ComboboxWithDisabledItem } from "compositions/examples/combobox-with-disabled-item"
import { ComboboxWithField } from "compositions/examples/combobox-with-field"
import { ComboboxWithFormSubmit } from "compositions/examples/combobox-with-form-submit"
import { ComboboxWithHighlight } from "compositions/examples/combobox-with-highlight"
import { ComboboxWithHookForm } from "compositions/examples/combobox-with-hook-form"
import { ComboboxWithInputGroup } from "compositions/examples/combobox-with-input-group"
import { ComboboxWithInputInContent } from "compositions/examples/combobox-with-input-in-content"
import { ComboboxWithInvalid } from "compositions/examples/combobox-with-invalid"
import { ComboboxWithLimit } from "compositions/examples/combobox-with-limit"
import { ComboboxWithLinks } from "compositions/examples/combobox-with-links"
import { ComboboxWithMultiple } from "compositions/examples/combobox-with-multiple"
import { ComboboxWithOptionGroup } from "compositions/examples/combobox-with-option-group"
import { ComboboxWithPositioning } from "compositions/examples/combobox-with-positioning"
import { ComboboxWithSelectionBehavior } from "compositions/examples/combobox-with-selection-behavior"
import { ComboboxWithSizes } from "compositions/examples/combobox-with-sizes"
import { ComboboxWithStore } from "compositions/examples/combobox-with-store"
import { ComboboxWithVariants } from "compositions/examples/combobox-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Combobox",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ComboboxBasic
export const AutoHighlight = ComboboxAutoHighlight
export const Controlled = ComboboxControlled
export const Multiple = ComboboxWithMultiple
export const OptionGroup = ComboboxWithOptionGroup
export const MinCharacter = ComboboxMinCharacter
export const Disabled = ComboboxWithDisabled
export const DisabledItem = ComboboxWithDisabledItem
export const Async = ComboboxWithAsyncContent
export const OpenFromPopover = ComboboxOpenFromPopover
export const RehydrateValue = ComboboxRehydrateValue
export const CustomItem = ComboboxWithCustomItem
export const OpenControlled = ComboboxOpenControlled
export const Highlight = ComboboxWithHighlight
export const Sizes = ComboboxWithSizes
export const Variants = ComboboxWithVariants
export const Links = ComboboxWithLinks
export const OpenOnClick = ComboboxOpenOnClick
export const Store = ComboboxWithStore
export const Virtualized = ComboboxVirtualized
export const Limit = ComboboxWithLimit
export const Positioning = ComboboxWithPositioning
export const CustomAnimation = ComboboxWithCustomAnimation
export const Invalid = ComboboxWithInvalid
export const InputGroup = ComboboxWithInputGroup
export const Field = ComboboxWithField
export const CustomFilter = ComboboxWithCustomFilter
export const CustomObject = ComboboxWithCustomObject
export const InputInContent = ComboboxWithInputInContent
export const FormSubmit = ComboboxWithFormSubmit
export const HookForm = ComboboxWithHookForm
export const Createable = ComboboxWithCreateable
export const SelectionBehavior = ComboboxWithSelectionBehavior
export const ColorPicker = ComboboxColorPicker
