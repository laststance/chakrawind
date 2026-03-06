import type { Meta } from "@storybook/react-vite"
import { TooltipBasic } from "compositions/examples/tooltip-basic"
import { TooltipControlled } from "compositions/examples/tooltip-controlled"
import { TooltipControlledMultiple } from "compositions/examples/tooltip-controlled-multiple"
import { TooltipMultiple } from "compositions/examples/tooltip-multiple"
import { TooltipWithArrow } from "compositions/examples/tooltip-with-arrow"
import { TooltipWithAvatar } from "compositions/examples/tooltip-with-avatar"
import { TooltipWithCheckbox } from "compositions/examples/tooltip-with-checkbox"
import { TooltipWithCustomBg } from "compositions/examples/tooltip-with-custom-bg"
import { TooltipWithDelay } from "compositions/examples/tooltip-with-delay"
import { TooltipWithDialog } from "compositions/examples/tooltip-with-dialog"
import { TooltipWithDisabled } from "compositions/examples/tooltip-with-disabled"
import { TooltipWithInteractive } from "compositions/examples/tooltip-with-interactive"
import { TooltipWithMenuItem } from "compositions/examples/tooltip-with-menu-item"
import { TooltipWithMenuTrigger } from "compositions/examples/tooltip-with-menu-trigger"
import { TooltipWithOffset } from "compositions/examples/tooltip-with-offset"
import { TooltipWithPlacement } from "compositions/examples/tooltip-with-placement"
import { TooltipWithStore } from "compositions/examples/tooltip-with-store"
import { TooltipWithSwitch } from "compositions/examples/tooltip-with-switch"
import { TooltipWithTab } from "compositions/examples/tooltip-with-tab"
import { Box } from "../src"

export default {
  title: "Components / Tooltip",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TooltipBasic
export const Controlled = TooltipControlled
export const ControlledMultiple = TooltipControlledMultiple
export const Multiple = TooltipMultiple
export const Arrow = TooltipWithArrow
export const WithAvatar = TooltipWithAvatar
export const WithCheckbox = TooltipWithCheckbox
export const CustomBg = TooltipWithCustomBg
export const Delay = TooltipWithDelay
export const WithDialog = TooltipWithDialog
export const Disabled = TooltipWithDisabled
export const Interactive = TooltipWithInteractive
export const WithMenuItem = TooltipWithMenuItem
export const WithMenuTrigger = TooltipWithMenuTrigger
export const Offset = TooltipWithOffset
export const Placement = TooltipWithPlacement
export const WithStore = TooltipWithStore
export const WithSwitch = TooltipWithSwitch
export const WithTab = TooltipWithTab
