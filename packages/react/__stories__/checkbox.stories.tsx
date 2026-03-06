import type { Meta } from "@storybook/react-vite"
import { CheckboxBasic } from "compositions/examples/checkbox-basic"
import { CheckboxControlled } from "compositions/examples/checkbox-controlled"
import { CheckboxIndeterminate } from "compositions/examples/checkbox-indeterminate"
import { CheckboxSizeTable } from "compositions/examples/checkbox-size-table"
import { CheckboxVariantTable } from "compositions/examples/checkbox-variant-table"
import { CheckboxWithColors } from "compositions/examples/checkbox-with-colors"
import { CheckboxWithCustomIcon } from "compositions/examples/checkbox-with-custom-icon"
import { CheckboxWithDescription } from "compositions/examples/checkbox-with-description"
import { CheckboxWithForm } from "compositions/examples/checkbox-with-form"
import { CheckboxWithGroup } from "compositions/examples/checkbox-with-group"
import { CheckboxWithGroupHookForm } from "compositions/examples/checkbox-with-group-hook-form"
import { CheckboxWithHookForm } from "compositions/examples/checkbox-with-hook-form"
import { CheckboxWithLabelPosition } from "compositions/examples/checkbox-with-label-position"
import { CheckboxWithLink } from "compositions/examples/checkbox-with-link"
import { CheckboxWithStates } from "compositions/examples/checkbox-with-states"
import { CheckboxWithStore } from "compositions/examples/checkbox-with-store"
import { Box } from "../src"

export default {
  title: "Components / Checkbox",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CheckboxBasic
export const Controlled = CheckboxControlled
export const Sizes = CheckboxSizeTable
export const Variants = CheckboxVariantTable
export const Colors = CheckboxWithColors
export const CustomIcon = CheckboxWithCustomIcon
export const Description = CheckboxWithDescription
export const Form = CheckboxWithForm
export const Group = CheckboxWithGroup
export const GroupHookForm = CheckboxWithGroupHookForm
export const HookForm = CheckboxWithHookForm
export const Indeterminate = CheckboxIndeterminate
export const Link = CheckboxWithLink
export const States = CheckboxWithStates
export const Store = CheckboxWithStore
export const LabelPosition = CheckboxWithLabelPosition
