import type { Meta } from "@storybook/react-vite"
import { EditableBasic } from "compositions/examples/editable-basic"
import { EditableControlled } from "compositions/examples/editable-controlled"
import { EditableDisabled } from "compositions/examples/editable-disabled"
import { EditableWithControls } from "compositions/examples/editable-with-controls"
import { EditableWithDoubleClick } from "compositions/examples/editable-with-double-click"
import { EditableWithFinalFocus } from "compositions/examples/editable-with-final-focus"
import { EditableWithStore } from "compositions/examples/editable-with-store"
import { EditableWithTextarea } from "compositions/examples/editable-with-textarea"
import { Box } from "../src"

export default {
  title: "Components / Editable",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = EditableBasic
export const Controlled = EditableControlled
export const Disabled = EditableDisabled
export const Controls = EditableWithControls
export const DoubleClick = EditableWithDoubleClick
export const FinalFocus = EditableWithFinalFocus
export const Store = EditableWithStore
export const Textarea = EditableWithTextarea
