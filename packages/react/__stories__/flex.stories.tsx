import type { Meta } from "@storybook/react-vite"
import { FlexBasic } from "compositions/examples/flex-basic"
import { FlexWithAlign } from "compositions/examples/flex-with-align"
import { FlexWithAutoMargin } from "compositions/examples/flex-with-auto-margin"
import { FlexWithDirection } from "compositions/examples/flex-with-direction"
import { FlexWithJustify } from "compositions/examples/flex-with-justify"
import { FlexWithOrder } from "compositions/examples/flex-with-order"
import { FlexWithSpacer } from "compositions/examples/flex-with-spacer"
import { FlexWithWrap } from "compositions/examples/flex-with-wrap"
import { Box } from "../src"

export default {
  title: "Layout / Flex",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = FlexBasic
export const Align = FlexWithAlign
export const AutoMargin = FlexWithAutoMargin
export const Direction = FlexWithDirection
export const Justify = FlexWithJustify
export const Order = FlexWithOrder
export const Spacer = FlexWithSpacer
export const Wrap = FlexWithWrap
