import type { Meta } from "@storybook/react-vite"
import { BreadcrumbBasic } from "compositions/examples/breadcrumb-basic"
import { BreadcrumbSizeTable } from "compositions/examples/breadcrumb-size-table"
import { BreadcrumbVariantTable } from "compositions/examples/breadcrumb-variant-table"
import { BreadcrumbWithEllipsis } from "compositions/examples/breadcrumb-with-ellipsis"
import { BreadcrumbWithIcon } from "compositions/examples/breadcrumb-with-icon"
import { BreadcrumbWithMenu } from "compositions/examples/breadcrumb-with-menu"
import { BreadcrumbWithSeparator } from "compositions/examples/breadcrumb-with-separator"
import { Box } from "../src"

export default {
  title: "Components / Breadcrumb",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = BreadcrumbBasic
export const Ellipsis = BreadcrumbWithEllipsis
export const Icon = BreadcrumbWithIcon
export const Menu = BreadcrumbWithMenu
export const Separator = BreadcrumbWithSeparator
export const Variants = BreadcrumbVariantTable
export const Sizes = BreadcrumbSizeTable
