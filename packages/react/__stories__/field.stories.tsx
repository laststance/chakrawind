import type { Meta } from "@storybook/react-vite"
import { FieldBasic } from "compositions/examples/field-basic"
import { FieldHorizontal } from "compositions/examples/field-horizontal"
import { FieldWithDisabled } from "compositions/examples/field-with-disabled"
import { FieldWithErrorIcon } from "compositions/examples/field-with-error-icon"
import { FieldWithErrorText } from "compositions/examples/field-with-error-text"
import { FieldWithHelperText } from "compositions/examples/field-with-helper-text"
import { FieldWithNativeSelect } from "compositions/examples/field-with-native-select"
import { FieldWithOptional } from "compositions/examples/field-with-optional"
import { FieldWithRequired } from "compositions/examples/field-with-required"
import { Box } from "../src"

export default {
  title: "Components / Field",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = FieldBasic
export const Horizontal = FieldHorizontal
export const Disabled = FieldWithDisabled
export const ErrorIcon = FieldWithErrorIcon
export const ErrorText = FieldWithErrorText
export const HelperText = FieldWithHelperText
export const NativeSelect = FieldWithNativeSelect
export const Optional = FieldWithOptional
export const Required = FieldWithRequired
