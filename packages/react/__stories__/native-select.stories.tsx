import type { Meta } from "@storybook/react-vite"
import { NativeSelectBasic } from "compositions/examples/native-select-basic"
import { NativeSelectControlled } from "compositions/examples/native-select-controlled"
import { NativeSelectWithDisabled } from "compositions/examples/native-select-with-disabled"
import { NativeSelectWithHookForm } from "compositions/examples/native-select-with-hook-form"
import { NativeSelectWithInputGroup } from "compositions/examples/native-select-with-input-group"
import { NativeSelectWithInvalid } from "compositions/examples/native-select-with-invalid"
import { NativeSelectWithInvalidRoot } from "compositions/examples/native-select-with-invalid-root"
import { NativeSelectWithSizes } from "compositions/examples/native-select-with-sizes"
import { NativeSelectWithVariants } from "compositions/examples/native-select-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Native Select",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = NativeSelectBasic
export const Controlled = NativeSelectControlled
export const Disabled = NativeSelectWithDisabled
export const HookForm = NativeSelectWithHookForm
export const Invalid = NativeSelectWithInvalid
export const InvalidRoot = NativeSelectWithInvalidRoot
export const Sizes = NativeSelectWithSizes
export const Variants = NativeSelectWithVariants
export const InputGroup = NativeSelectWithInputGroup
