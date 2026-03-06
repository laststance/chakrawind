import type { Meta } from "@storybook/react-vite"
import { ListBasic } from "compositions/examples/list-basic"
import { ListNested } from "compositions/examples/list-nested"
import { ListOrdered } from "compositions/examples/list-ordered"
import { ListWithIcon } from "compositions/examples/list-with-icon"
import { ListWithMarkerStyle } from "compositions/examples/list-with-marker-style"
import { Box } from "../src"

export default {
  title: "Components / List",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ListBasic
export const Nested = ListNested
export const Ordered = ListOrdered
export const Icon = ListWithIcon
export const MarkerStyle = ListWithMarkerStyle
