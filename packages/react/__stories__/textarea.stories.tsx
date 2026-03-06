import type { Meta } from "@storybook/react-vite"
import { TextareaBasic } from "compositions/examples/textarea-basic"
import { TextareaSizeTable } from "compositions/examples/textarea-size-table"
import { TextareaVariantTable } from "compositions/examples/textarea-variant-table"
import { TextareaWithAutoresize } from "compositions/examples/textarea-with-autoresize"
import { TextareaWithAutoresizeMaxRows } from "compositions/examples/textarea-with-autoresize-max-rows"
import { TextareaWithErrorText } from "compositions/examples/textarea-with-error-text"
import { TextareaWithField } from "compositions/examples/textarea-with-field"
import { TextareaWithForm } from "compositions/examples/textarea-with-form"
import { TextareaWithHelperText } from "compositions/examples/textarea-with-helper-text"
import { TextareaWithHookForm } from "compositions/examples/textarea-with-hook-form"
import { TextareaWithResize } from "compositions/examples/textarea-with-resize"
import { Box } from "../src"

export default {
  title: "Components / Textarea",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TextareaBasic
export const Sizes = TextareaSizeTable
export const Variants = TextareaVariantTable
export const Autoresize = TextareaWithAutoresize
export const AutoresizeMaxRows = TextareaWithAutoresizeMaxRows
export const ErrorText = TextareaWithErrorText
export const Field = TextareaWithField
export const Form = TextareaWithForm
export const HelperText = TextareaWithHelperText
export const HookForm = TextareaWithHookForm
export const Resize = TextareaWithResize
