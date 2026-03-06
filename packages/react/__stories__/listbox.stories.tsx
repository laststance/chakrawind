import type { Meta } from "@storybook/react-vite"
import { ListboxBasic } from "compositions/examples/listbox-basic"
import { ListboxControlled } from "compositions/examples/listbox-controlled"
import { ListboxDisabledItem } from "compositions/examples/listbox-disabled-item"
import { ListboxExtendedSelect } from "compositions/examples/listbox-extended-select"
import { ListboxGrouped } from "compositions/examples/listbox-grouped"
import { ListboxHorizontal } from "compositions/examples/listbox-horizontal"
import { ListboxImageExplorer } from "compositions/examples/listbox-image-explorer"
import { ListboxMultiselect } from "compositions/examples/listbox-multiselect"
import { ListboxSelectAll } from "compositions/examples/listbox-select-all"
import { ListboxTransferList } from "compositions/examples/listbox-transfer-list"
import { ListboxVirtualized } from "compositions/examples/listbox-virtualized"
import { ListboxWithCheckmark } from "compositions/examples/listbox-with-checkmark"
import { ListboxWithDescription } from "compositions/examples/listbox-with-description"
import { ListboxWithDialog } from "compositions/examples/listbox-with-dialog"
import { ListboxWithEmojiGrid } from "compositions/examples/listbox-with-emoji-grid"
import { ListboxWithIcon } from "compositions/examples/listbox-with-icon"
import { ListboxWithInput } from "compositions/examples/listbox-with-input"
import { ListboxWithPopover } from "compositions/examples/listbox-with-popover"
import { ListboxWithStore } from "compositions/examples/listbox-with-store"
import { Box } from "../src"

export default {
  title: "Components / Listbox",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ListboxBasic
export const Controlled = ListboxControlled
export const DisabledItem = ListboxDisabledItem
export const ExtendedSelect = ListboxExtendedSelect
export const Grouped = ListboxGrouped
export const Horizontal = ListboxHorizontal
export const ImageExplorer = ListboxImageExplorer
export const Multiselect = ListboxMultiselect
export const SelectAll = ListboxSelectAll
export const TransferList = ListboxTransferList
export const Virtualized = ListboxVirtualized
export const Checkmark = ListboxWithCheckmark
export const Description = ListboxWithDescription
export const Dialog = ListboxWithDialog
export const EmojiGrid = ListboxWithEmojiGrid
export const Icon = ListboxWithIcon
export const Input = ListboxWithInput
export const Popover = ListboxWithPopover
export const Store = ListboxWithStore
