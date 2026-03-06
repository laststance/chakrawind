import type { Meta } from "@storybook/react-vite"
import { AccordionBasic } from "compositions/examples/accordion-basic"
import { AccordionControlled } from "compositions/examples/accordion-controlled"
import { AccordionSizeTable } from "compositions/examples/accordion-size-table"
import { AccordionVariantTable } from "compositions/examples/accordion-variant-table"
import { AccordionWithActions } from "compositions/examples/accordion-with-actions"
import { AccordionWithAvatar } from "compositions/examples/accordion-with-avatar"
import { AccordionWithDisabledItem } from "compositions/examples/accordion-with-disabled-item"
import { AccordionWithExpandedStyle } from "compositions/examples/accordion-with-expanded-style"
import { AccordionWithIcon } from "compositions/examples/accordion-with-icon"
import { AccordionWithMultiple } from "compositions/examples/accordion-with-multiple"
import { AccordionWithSubtext } from "compositions/examples/accordion-with-subtext"
import { Box } from "../src"

export default {
  title: "Components / Accordion",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = AccordionBasic
export const Controlled = AccordionControlled
export const Sizes = AccordionSizeTable
export const Variants = AccordionVariantTable
export const Actions = AccordionWithActions
export const Avatar = AccordionWithAvatar
export const DisabledItem = AccordionWithDisabledItem
export const ExpandedStyle = AccordionWithExpandedStyle
export const Icon = AccordionWithIcon
export const Multiple = AccordionWithMultiple
export const Subtext = AccordionWithSubtext
