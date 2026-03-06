import type { Meta } from "@storybook/react-vite"
import { FieldsetBasic } from "compositions/examples/fieldset-basic"
import { FieldsetWithDisabled } from "compositions/examples/fieldset-with-disabled"
import { FieldsetWithInvalid } from "compositions/examples/fieldset-with-invalid"
import { Box } from "../src"

export default {
  title: "Components / Fieldset",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = FieldsetBasic
export const Disabled = FieldsetWithDisabled
export const Invalid = FieldsetWithInvalid
