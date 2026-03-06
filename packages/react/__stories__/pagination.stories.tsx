import type { Meta } from "@storybook/react-vite"
import { PaginationAsLink } from "compositions/examples/pagination-as-link"
import { PaginationAttached } from "compositions/examples/pagination-attached"
import { PaginationBasic } from "compositions/examples/pagination-basic"
import { PaginationCompact } from "compositions/examples/pagination-compact"
import { PaginationControlled } from "compositions/examples/pagination-controlled"
import { PaginationWithContent } from "compositions/examples/pagination-with-content"
import { PaginationWithCountText } from "compositions/examples/pagination-with-count-text"
import { PaginationWithSiblingCount } from "compositions/examples/pagination-with-sibling-count"
import { PaginationWithSizes } from "compositions/examples/pagination-with-sizes"
import { PaginationWithVariants } from "compositions/examples/pagination-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Pagination",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const AsLink = PaginationAsLink
export const Attached = PaginationAttached
export const Basic = PaginationBasic
export const Compact = PaginationCompact
export const Controlled = PaginationControlled
export const Content = PaginationWithContent
export const CountText = PaginationWithCountText
export const SiblingCount = PaginationWithSiblingCount
export const Sizes = PaginationWithSizes
export const Variants = PaginationWithVariants
