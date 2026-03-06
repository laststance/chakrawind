import type { Meta } from "@storybook/react-vite"
import { ScrollAreaBasic } from "compositions/examples/scroll-area-basic"
import { ScrollAreaBothDirections } from "compositions/examples/scroll-area-both-directions"
import { ScrollAreaHorizontal } from "compositions/examples/scroll-area-horizontal"
import { ScrollAreaScrollToPosition } from "compositions/examples/scroll-area-scroll-to-position"
import { ScrollAreaScrollToSide } from "compositions/examples/scroll-area-scroll-to-side"
import { ScrollAreaStickToBottom } from "compositions/examples/scroll-area-stick-to-bottom"
import { ScrollAreaVirtualization } from "compositions/examples/scroll-area-virtualization"
import { ScrollAreaWithMenu } from "compositions/examples/scroll-area-with-menu"
import { ScrollAreaWithRtl } from "compositions/examples/scroll-area-with-rtl"
import { ScrollAreaWithScrollShadow } from "compositions/examples/scroll-area-with-scroll-shadow"
import { ScrollAreaWithSizes } from "compositions/examples/scroll-area-with-sizes"
import { ScrollAreaWithStore } from "compositions/examples/scroll-area-with-store"
import { ScrollAreaWithThumbStyling } from "compositions/examples/scroll-area-with-thumb-styling"
import { ScrollAreaWithVariants } from "compositions/examples/scroll-area-with-variants"
import { Box } from "../src"

export default {
  title: "Layout / ScrollArea",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ScrollAreaBasic
export const BothDirections = ScrollAreaBothDirections
export const Horizontal = ScrollAreaHorizontal
export const ScrollToPosition = ScrollAreaScrollToPosition
export const ScrollToSide = ScrollAreaScrollToSide
export const StickToBottom = ScrollAreaStickToBottom
export const Virtualization = ScrollAreaVirtualization
export const WithMenu = ScrollAreaWithMenu
export const RTL = ScrollAreaWithRtl
export const ScrollShadow = ScrollAreaWithScrollShadow
export const Sizes = ScrollAreaWithSizes
export const Store = ScrollAreaWithStore
export const ThumbStyling = ScrollAreaWithThumbStyling
export const Variants = ScrollAreaWithVariants
