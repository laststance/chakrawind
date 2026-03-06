import type { Meta } from "@storybook/react-vite"
import { FloatBasic } from "compositions/examples/float-basic"
import { FloatWithAvatar } from "compositions/examples/float-with-avatar"
import { FloatWithOffset } from "compositions/examples/float-with-offset"
import { FloatWithOffsetX } from "compositions/examples/float-with-offset-x"
import { FloatWithOffsetY } from "compositions/examples/float-with-offset-y"
import { FloatWithPlacements } from "compositions/examples/float-with-placements"
import { Box } from "../src"

export default {
  title: "Components / Float",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = FloatBasic
export const OffsetX = FloatWithOffsetX
export const OffsetY = FloatWithOffsetY
export const Offset = FloatWithOffset
export const Placements = FloatWithPlacements
export const Avatar = FloatWithAvatar
