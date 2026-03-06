import { BarListAscending } from "compositions/examples/charts/bar-list-ascending"
import { BarListBasic } from "compositions/examples/charts/bar-list-basic"
import { BarListWithFormatter } from "compositions/examples/charts/bar-list-with-formatter"
import { BarListWithLabel } from "compositions/examples/charts/bar-list-with-label"
import { BarListWithLink } from "compositions/examples/charts/bar-list-with-link"
import { BarListWithMultiValue } from "compositions/examples/charts/bar-list-with-multi-value"
import { BarListWithTooltip } from "compositions/examples/charts/bar-list-with-tooltip"
import { Box } from "../src"

export default {
  title: "Charts / Bar List",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Ascending = BarListAscending
export const Basic = BarListBasic
export const Formatter = BarListWithFormatter
export const Label = BarListWithLabel
export const Link = BarListWithLink
export const MultiValue = BarListWithMultiValue
export const Tooltip = BarListWithTooltip
