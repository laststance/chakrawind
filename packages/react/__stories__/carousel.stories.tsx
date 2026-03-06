import type { Meta } from "@storybook/react-vite"
import { CarouselBasic } from "compositions/examples/carousel-basic"
import { CarouselComposition } from "compositions/examples/carousel-composition"
import { CarouselControlled } from "compositions/examples/carousel-controlled"
import { CarouselExplorerDemo } from "compositions/examples/carousel-explorer-demo"
import { CarouselSlidesPerMove } from "compositions/examples/carousel-slides-per-move"
import { CarouselSlidesPerPage } from "compositions/examples/carousel-slides-per-page"
import { CarouselSpacing } from "compositions/examples/carousel-spacing"
import { CarouselVariableSize } from "compositions/examples/carousel-variable-size"
import { CarouselVertical } from "compositions/examples/carousel-vertical"
import { CarouselWithAutoplay } from "compositions/examples/carousel-with-autoplay"
import { CarouselWithDialog } from "compositions/examples/carousel-with-dialog"
import { CarouselWithFloatingArrow } from "compositions/examples/carousel-with-floating-arrow"
import { CarouselWithImages } from "compositions/examples/carousel-with-images"
import { CarouselWithIndicators } from "compositions/examples/carousel-with-indicators"
import { CarouselWithMouseDrag } from "compositions/examples/carousel-with-mouse-drag"
import { CarouselWithProgressText } from "compositions/examples/carousel-with-progress-text"
import { CarouselWithStore } from "compositions/examples/carousel-with-store"
import { CarouselWithThumbnails } from "compositions/examples/carousel-with-thumbnails"
import { Box } from "../src"

export default {
  title: "Components / Carousel",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CarouselBasic
export const Controlled = CarouselControlled
export const Store = CarouselWithStore
export const Vertical = CarouselVertical
export const FloatingArrow = CarouselWithFloatingArrow
export const Indicators = CarouselWithIndicators
export const MouseDrag = CarouselWithMouseDrag
export const ProgressText = CarouselWithProgressText
export const SlidesPerPage = CarouselSlidesPerPage
export const SlidesPerMove = CarouselSlidesPerMove
export const Spacing = CarouselSpacing
export const VariableSize = CarouselVariableSize
export const Dialog = CarouselWithDialog
export const Thumbnails = CarouselWithThumbnails
export const Autoplay = CarouselWithAutoplay
export const Images = CarouselWithImages
export const Composition = CarouselComposition
export const _Explorer = CarouselExplorerDemo
