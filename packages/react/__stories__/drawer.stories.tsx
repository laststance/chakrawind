import type { Meta } from "@storybook/react-vite"
import { DrawerBasic } from "compositions/examples/drawer-basic"
import { DrawerNonModal } from "compositions/examples/drawer-non-modal"
import { DrawerWithConditionalVariants } from "compositions/examples/drawer-with-conditional-variants"
import { DrawerWithContext } from "compositions/examples/drawer-with-context"
import { DrawerWithCustomContainer } from "compositions/examples/drawer-with-custom-container"
import { DrawerWithHeaderActions } from "compositions/examples/drawer-with-header-actions"
import { DrawerWithInitialFocus } from "compositions/examples/drawer-with-initial-focus"
import { DrawerWithOffset } from "compositions/examples/drawer-with-offset"
import { DrawerWithPlacement } from "compositions/examples/drawer-with-placement"
import { DrawerWithSizes } from "compositions/examples/drawer-with-sizes"
import { Box } from "../src"

export default {
  title: "Components / Drawer",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DrawerBasic
export const Context = DrawerWithContext
export const CustomContainer = DrawerWithCustomContainer
export const HeaderActions = DrawerWithHeaderActions
export const InitialFocus = DrawerWithInitialFocus
export const Offset = DrawerWithOffset
export const Placement = DrawerWithPlacement
export const ConditionalVariants = DrawerWithConditionalVariants
export const Sizes = DrawerWithSizes
export const NonModal = DrawerNonModal
