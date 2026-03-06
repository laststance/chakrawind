import type { Meta } from "@storybook/react-vite"
import { PopoverBasic } from "compositions/examples/popover-basic"
import { PopoverControlled } from "compositions/examples/popover-controlled"
import { PopoverLazyMounted } from "compositions/examples/popover-lazy-mounted"
import { PopoverNested } from "compositions/examples/popover-nested"
import { PopoverOpenFromDialog } from "compositions/examples/popover-open-from-dialog"
import { PopoverSizeTable } from "compositions/examples/popover-size-table"
import { PopoverWithCustomBg } from "compositions/examples/popover-with-custom-bg"
import { PopoverWithForm } from "compositions/examples/popover-with-form"
import { PopoverWithInitialFocus } from "compositions/examples/popover-with-initial-focus"
import { PopoverWithOffset } from "compositions/examples/popover-with-offset"
import { PopoverWithPlacement } from "compositions/examples/popover-with-placement"
import { PopoverWithSameWidth } from "compositions/examples/popover-with-same-width"
import { Box } from "../src"

export default {
  title: "Components / Popover",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = PopoverBasic
export const Controlled = PopoverControlled
export const OpenFromDialog = PopoverOpenFromDialog
export const LazyMounted = PopoverLazyMounted
export const Nested = PopoverNested
export const Sizes = PopoverSizeTable
export const CustomBg = PopoverWithCustomBg
export const Form = PopoverWithForm
export const InitialFocus = PopoverWithInitialFocus
export const Offset = PopoverWithOffset
export const Placement = PopoverWithPlacement
export const SameWidth = PopoverWithSameWidth
