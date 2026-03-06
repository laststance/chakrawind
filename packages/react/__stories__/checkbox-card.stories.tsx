import type { Meta } from "@storybook/react-vite"
import { CheckboxCardBasic } from "compositions/examples/checkbox-card-basic"
import { CheckboxCardDisabled } from "compositions/examples/checkbox-card-disabled"
import { CheckboxCardNoIndicator } from "compositions/examples/checkbox-card-no-indicator"
import { CheckboxCardSizeTable } from "compositions/examples/checkbox-card-size-table"
import { CheckboxCardVariantTable } from "compositions/examples/checkbox-card-variant-table"
import { CheckboxCardWithAddon } from "compositions/examples/checkbox-card-with-addon"
import { CheckboxCardWithDescription } from "compositions/examples/checkbox-card-with-description"
import { CheckboxCardWithGroup } from "compositions/examples/checkbox-card-with-group"
import { CheckboxCardWithIcon } from "compositions/examples/checkbox-card-with-icon"
import { CheckboxCardWithStates } from "compositions/examples/checkbox-card-with-states"
import { Box } from "../src"

export default {
  title: "Components / Checkbox Card",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CheckboxCardBasic
export const Description = CheckboxCardWithDescription
export const Disabled = CheckboxCardDisabled
export const States = CheckboxCardWithStates
export const Addon = CheckboxCardWithAddon
export const Icon = CheckboxCardWithIcon
export const Variants = CheckboxCardVariantTable
export const Sizes = CheckboxCardSizeTable
export const Group = CheckboxCardWithGroup
export const NoIndicator = CheckboxCardNoIndicator
