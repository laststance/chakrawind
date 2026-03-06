import type { Meta } from "@storybook/react-vite"
import { DialogBasic } from "compositions/examples/dialog-basic"
import { DialogControlled } from "compositions/examples/dialog-controlled"
import { DialogNested } from "compositions/examples/dialog-nested"
import { DialogNonModal } from "compositions/examples/dialog-non-modal"
import { DialogOpenFromMenu } from "compositions/examples/dialog-open-from-menu"
import { DialogOpenFromPopover } from "compositions/examples/dialog-open-from-popover"
import { DialogWithBackdropBlur } from "compositions/examples/dialog-with-backdrop-blur"
import { DialogWithCloseOutside } from "compositions/examples/dialog-with-close-outside"
import { DialogWithContext } from "compositions/examples/dialog-with-context"
import { DialogWithCover } from "compositions/examples/dialog-with-cover"
import { DialogWithDatalist } from "compositions/examples/dialog-with-datalist"
import { DialogWithFinalFocus } from "compositions/examples/dialog-with-final-focus"
import { DialogWithFullscreen } from "compositions/examples/dialog-with-fullscreen"
import { DialogWithInitialFocus } from "compositions/examples/dialog-with-initial-focus"
import { DialogWithInsideScroll } from "compositions/examples/dialog-with-inside-scroll"
import { DialogWithOutsideScroll } from "compositions/examples/dialog-with-outside-scroll"
import { DialogWithPlacement } from "compositions/examples/dialog-with-placement"
import { DialogWithResponsiveSize } from "compositions/examples/dialog-with-responsive-size"
import { DialogWithRole } from "compositions/examples/dialog-with-role"
import { DialogWithSizes } from "compositions/examples/dialog-with-sizes"
import { DialogWithStore } from "compositions/examples/dialog-with-store"
import { Box } from "../src"

export default {
  title: "Components / Dialog",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DialogBasic
export const OpenFromMenu = DialogOpenFromMenu
export const OpenFromPopover = DialogOpenFromPopover
export const Controlled = DialogControlled
export const Nested = DialogNested
export const NonModal = DialogNonModal
export const BackdropBlur = DialogWithBackdropBlur
export const CloseOutside = DialogWithCloseOutside
export const Context = DialogWithContext
export const Cover = DialogWithCover
export const Datalist = DialogWithDatalist
export const FinalFocus = DialogWithFinalFocus
export const Fullscreen = DialogWithFullscreen
export const InitialFocus = DialogWithInitialFocus
export const InsideScroll = DialogWithInsideScroll
export const OutsideScroll = DialogWithOutsideScroll
export const Placement = DialogWithPlacement
export const ResponsiveSize = DialogWithResponsiveSize
export const Role = DialogWithRole
export const Sizes = DialogWithSizes
export const Store = DialogWithStore
