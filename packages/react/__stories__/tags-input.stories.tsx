import type { Meta } from "@storybook/react-vite"
import { TagsInputBasic } from "compositions/examples/tags-input-basic"
import { TagsInputControlled } from "compositions/examples/tags-input-controlled"
import { TagsInputDisabled } from "compositions/examples/tags-input-disabled"
import { TagsInputEditable } from "compositions/examples/tags-input-editable"
import { TagsInputExplorerDemo } from "compositions/examples/tags-input-explorer-demo"
import { TagsInputInvalid } from "compositions/examples/tags-input-invalid"
import { TagsInputReadOnly } from "compositions/examples/tags-input-read-only"
import { TagsInputValidation } from "compositions/examples/tags-input-validation"
import { TagsInputWithBlurBehavior } from "compositions/examples/tags-input-with-blur-behavior"
import { TagsInputWithClear } from "compositions/examples/tags-input-with-clear"
import { TagsInputWithColors } from "compositions/examples/tags-input-with-colors"
import { TagsInputWithCombobox } from "compositions/examples/tags-input-with-combobox"
import { TagsInputWithDelimiter } from "compositions/examples/tags-input-with-delimiter"
import { TagsInputWithField } from "compositions/examples/tags-input-with-field"
import { TagsInputWithForm } from "compositions/examples/tags-input-with-form"
import { TagsInputWithLongTags } from "compositions/examples/tags-input-with-long-tags"
import { TagsInputWithMax } from "compositions/examples/tags-input-with-max"
import { TagsInputWithPaste } from "compositions/examples/tags-input-with-paste"
import { TagsInputWithSizes } from "compositions/examples/tags-input-with-sizes"
import { TagsInputWithStore } from "compositions/examples/tags-input-with-store"
import { TagsInputWithVariants } from "compositions/examples/tags-input-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Tags Input",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TagsInputBasic
export const Controlled = TagsInputControlled
export const Disabled = TagsInputDisabled
export const Editable = TagsInputEditable
export const Invalid = TagsInputInvalid
export const ReadOnly = TagsInputReadOnly
export const Validation = TagsInputValidation
export const BlurBehavior = TagsInputWithBlurBehavior
export const Clear = TagsInputWithClear
export const Colors = TagsInputWithColors
export const Combobox = TagsInputWithCombobox
export const Delimiter = TagsInputWithDelimiter
export const Field = TagsInputWithField
export const Form = TagsInputWithForm
export const Max = TagsInputWithMax
export const Paste = TagsInputWithPaste
export const Sizes = TagsInputWithSizes
export const Store = TagsInputWithStore
export const Variants = TagsInputWithVariants
export const LongTags = TagsInputWithLongTags
export const _Explorer = TagsInputExplorerDemo
