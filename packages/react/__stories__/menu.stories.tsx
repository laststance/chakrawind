import type { Meta } from "@storybook/react-vite"
import { MenuBasic } from "compositions/examples/menu-basic"
import { MenuControlled } from "compositions/examples/menu-controlled"
import { MenuOpenFromDialog } from "compositions/examples/menu-open-from-dialog"
import { MenuWithAnchorRect } from "compositions/examples/menu-with-anchor-rect"
import { MenuWithAvatar } from "compositions/examples/menu-with-avatar"
import { MenuWithCheckboxItems } from "compositions/examples/menu-with-checkbox-items"
import { MenuWithCommand } from "compositions/examples/menu-with-command"
import { MenuWithContextTrigger } from "compositions/examples/menu-with-context-trigger"
import { MenuWithDangerItem } from "compositions/examples/menu-with-danger-item"
import { MenuWithGroup } from "compositions/examples/menu-with-group"
import { MenuWithGroupDynamic } from "compositions/examples/menu-with-group-dynamic"
import { MenuWithHideWhenDetached } from "compositions/examples/menu-with-hide-when-detached"
import { MenuWithIconAndCommand } from "compositions/examples/menu-with-icon-and-command"
import { MenuWithLinks } from "compositions/examples/menu-with-links"
import { MenuWithMixedLayout } from "compositions/examples/menu-with-mixed-layout"
import { MenuWithOverflow } from "compositions/examples/menu-with-overflow"
import { MenuWithPlacement } from "compositions/examples/menu-with-placement"
import { MenuWithRadioItems } from "compositions/examples/menu-with-radio-items"
import { MenuWithStore } from "compositions/examples/menu-with-store"
import { MenuWithSubmenu } from "compositions/examples/menu-with-submenu"
import { MenuWithSubmenuDynamic } from "compositions/examples/menu-with-submenu-dynamic"
import { Box } from "../src"

export default {
  title: "Components / Menu",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = MenuBasic
export const Controlled = MenuControlled
export const WithStore = MenuWithStore
export const AnchorRect = MenuWithAnchorRect
export const WithAvatar = MenuWithAvatar
export const CheckboxItems = MenuWithCheckboxItems
export const Command = MenuWithCommand
export const ContextTrigger = MenuWithContextTrigger
export const DangerItem = MenuWithDangerItem
export const Group = MenuWithGroup
export const GroupDynamic = MenuWithGroupDynamic
export const HideWhenDetached = MenuWithHideWhenDetached
export const IconAndCommand = MenuWithIconAndCommand
export const Links = MenuWithLinks
export const MixedLayout = MenuWithMixedLayout
export const Overflow = MenuWithOverflow
export const Placement = MenuWithPlacement
export const RadioItems = MenuWithRadioItems
export const Submenu = MenuWithSubmenu
export const SubmenuDynamic = MenuWithSubmenuDynamic
export const OpenFromDialog = MenuOpenFromDialog
