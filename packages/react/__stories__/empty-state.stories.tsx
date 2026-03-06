import type { Meta } from "@storybook/react-vite"
import { EmptyStateBasic } from "compositions/examples/empty-state-basic"
import { EmptyStateSizes } from "compositions/examples/empty-state-sizes"
import { EmptyStateWithAction } from "compositions/examples/empty-state-with-action"
import { EmptyStateWithList } from "compositions/examples/empty-state-with-list"
import { Box } from "../src"

export default {
  title: "Components / Empty State",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = EmptyStateBasic
export const Action = EmptyStateWithAction
export const List = EmptyStateWithList
export const Sizes = EmptyStateSizes
