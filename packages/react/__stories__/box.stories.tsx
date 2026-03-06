import type { Meta } from "@storybook/react-vite"
import { BoxBasic } from "compositions/examples/box-basic"
import { BoxPropertyCard } from "compositions/examples/box-property-card"
import { BoxWithAsProp } from "compositions/examples/box-with-as-prop"
import { BoxWithBorder } from "compositions/examples/box-with-border"
import { BoxWithHideBelow } from "compositions/examples/box-with-hide-below"
import { BoxWithHideFrom } from "compositions/examples/box-with-hide-from"
import { BoxWithPseudoProps } from "compositions/examples/box-with-pseudo-props"
import { BoxWithShadow } from "compositions/examples/box-with-shadow"
import { Box } from "../src"

export default {
  title: "Layout / Box",
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = BoxBasic
export const PseudoProps = BoxWithPseudoProps
export const HideBelow = BoxWithHideBelow
export const HideFrom = BoxWithHideFrom
export const Shadow = BoxWithShadow
export const Border = BoxWithBorder
export const AsProp = BoxWithAsProp
export const Composition = BoxPropertyCard
