import type { Meta } from "@storybook/react-vite"
import { LinkBasic } from "compositions/examples/link-basic"
import { LinkVariantTable } from "compositions/examples/link-variant-table"
import { LinkWithinText } from "compositions/examples/link-within-text"
import { Box } from "../src"

export default {
  title: "Typography / Link",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = LinkBasic
export const Variants = LinkVariantTable
export const WithinText = LinkWithinText
