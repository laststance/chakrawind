import type { Meta } from "@storybook/react-vite"
import { OverlayBasic } from "compositions/examples/overlay-basic"
import { OverlayWithAlert } from "compositions/examples/overlay-with-alert"
import { OverlayWithDrawer } from "compositions/examples/overlay-with-drawer"
import { OverlayWithForm } from "compositions/examples/overlay-with-form"
import { OverlayWithMenuItem } from "compositions/examples/overlay-with-menu-item"
import { OverlayWithReturnValue } from "compositions/examples/overlay-with-return-value"
import { OverlayWithUpdate } from "compositions/examples/overlay-with-update"
import { Box } from "../src"

export default {
  title: "Hooks / createOverlay",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = OverlayBasic
export const Alert = OverlayWithAlert
export const ReturnValue = OverlayWithReturnValue
export const Update = OverlayWithUpdate
export const Drawer = OverlayWithDrawer
export const Form = OverlayWithForm
export const MenuItem = OverlayWithMenuItem
