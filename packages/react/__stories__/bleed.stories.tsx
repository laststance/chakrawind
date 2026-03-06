import type { Meta } from "@storybook/react-vite"
import { BleedBasic } from "compositions/examples/bleed-basic"
import { BleedVertical } from "compositions/examples/bleed-vertical"
import { BleedWithDirection } from "compositions/examples/bleed-with-direction"
import { Box } from "../src"

export default {
  title: "Layout / Bleed",
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = BleedBasic
export const Vertical = BleedVertical
export const Direction = BleedWithDirection
