import type { Meta } from "@storybook/react-vite"
import { TableBasic } from "compositions/examples/table-basic"
import { TableSizeTable } from "compositions/examples/table-size-table"
import { TableVariantTable } from "compositions/examples/table-variant-table"
import { TableWithCaption } from "compositions/examples/table-with-caption"
import { TableWithCaptionTop } from "compositions/examples/table-with-caption-top"
import { TableWithColumnBorder } from "compositions/examples/table-with-column-border"
import { TableWithColumnGroup } from "compositions/examples/table-with-column-group"
import { TableWithInteractive } from "compositions/examples/table-with-interactive"
import { TableWithNative } from "compositions/examples/table-with-native"
import { TableWithOverflow } from "compositions/examples/table-with-overflow"
import { TableWithPagination } from "compositions/examples/table-with-pagination"
import { TableWithSelection } from "compositions/examples/table-with-selection"
import { TableWithSelectionActionBar } from "compositions/examples/table-with-selection-action-bar"
import { TableWithStickyColumn } from "compositions/examples/table-with-sticky-column"
import { TableWithStickyHeader } from "compositions/examples/table-with-sticky-header"
import { TableWithStickyHeaderAndColumn } from "compositions/examples/table-with-sticky-header-and-column"
import { TableWithStriped } from "compositions/examples/table-with-striped"
import { TableWithTanstack } from "compositions/examples/table-with-tanstack"
import { Box } from "../src"

export default {
  title: "Components / Table",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TableBasic
export const Sizes = TableSizeTable
export const Variants = TableVariantTable
export const Caption = TableWithCaption
export const CaptionTop = TableWithCaptionTop
export const ColumnBorder = TableWithColumnBorder
export const ColumnGroup = TableWithColumnGroup
export const Interactive = TableWithInteractive
export const Native = TableWithNative
export const Overflow = TableWithOverflow
export const Pagination = TableWithPagination
export const Selection = TableWithSelection
export const SelectionActionBar = TableWithSelectionActionBar
export const StickyColumn = TableWithStickyColumn
export const StickyHeader = TableWithStickyHeader
export const StickyHeaderAndColumn = TableWithStickyHeaderAndColumn
export const Stripe = TableWithStriped
export const Tanstack = TableWithTanstack
