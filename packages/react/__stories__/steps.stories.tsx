import type { Meta } from "@storybook/react-vite"
import { StepsBasic } from "compositions/examples/steps-basic"
import { StepsControlled } from "compositions/examples/steps-controlled"
import { StepsSizeTable } from "compositions/examples/steps-size-table"
import { StepsVariantTable } from "compositions/examples/steps-variant-table"
import { StepsVertical } from "compositions/examples/steps-vertical"
import { StepsWithDescription } from "compositions/examples/steps-with-description"
import { StepsWithIcon } from "compositions/examples/steps-with-icon"
import { StepsWithLines } from "compositions/examples/steps-with-lines"
import { StepsWithNumberOnly } from "compositions/examples/steps-with-number-only"
import { StepsWithStore } from "compositions/examples/steps-with-store"
import { StepsWithTrigger } from "compositions/examples/steps-with-trigger"
import { StepsWithValidation } from "compositions/examples/steps-with-validation"
import { Box } from "../src"

export default {
  title: "Components / Steps",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = StepsBasic
export const Controlled = StepsControlled
export const Sizes = StepsSizeTable
export const Validation = StepsWithValidation
export const Variants = StepsVariantTable
export const Vertical = StepsVertical
export const Description = StepsWithDescription
export const Icon = StepsWithIcon
export const Lines = StepsWithLines
export const Store = StepsWithStore
export const Trigger = StepsWithTrigger
export const NumberOnly = StepsWithNumberOnly
