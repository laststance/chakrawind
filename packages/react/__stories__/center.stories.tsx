import { CenterBasic } from "compositions/examples/center-basic"
import { CenterWithAbsolute } from "compositions/examples/center-with-absolute"
import { CenterWithIcons } from "compositions/examples/center-with-icons"
import { CenterWithInline } from "compositions/examples/center-with-inline"
import { CenterWithSquare } from "compositions/examples/center-with-square"
import { Box } from "../src"

export default {
  title: "Layout / Center",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
}

export const Basic = CenterBasic
export const Absolute = CenterWithAbsolute
export const Icons = CenterWithIcons
export const Inline = CenterWithInline
export const Square = CenterWithSquare
