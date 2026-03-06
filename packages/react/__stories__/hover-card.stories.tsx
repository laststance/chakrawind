import type { Meta } from "@storybook/react-vite"
import { HoverCardBasic } from "compositions/examples/hover-card-basic"
import { HoverCardControlled } from "compositions/examples/hover-card-controlled"
import { HoverCardOpenFromDialog } from "compositions/examples/hover-card-open-from-dialog"
import { HoverCardRTL } from "compositions/examples/hover-card-rtl"
import { HoverCardWithDelay } from "compositions/examples/hover-card-with-delay"
import { HoverCardWithPlacement } from "compositions/examples/hover-card-with-placement"
import { Box } from "../src"

export default {
  title: "Components / HoverCard",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = HoverCardBasic
export const Controlled = HoverCardControlled
export const OpenFromDialog = HoverCardOpenFromDialog
export const Delay = HoverCardWithDelay
export const Placement = HoverCardWithPlacement
export const RTL = HoverCardRTL
