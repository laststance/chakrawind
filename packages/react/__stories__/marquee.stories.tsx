import type { Meta } from "@storybook/react-vite"
import { MarqueeAutoFill } from "compositions/examples/marquee-auto-fill"
import { MarqueeDiagonal } from "compositions/examples/marquee-diagonal"
import { MarqueeEdgeGradient } from "compositions/examples/marquee-edge-gradient"
import { MarqueeFiniteLoop } from "compositions/examples/marquee-finite-loop"
import { MarqueeImageGallery } from "compositions/examples/marquee-image-gallery"
import { MarqueeMultiple } from "compositions/examples/marquee-multiple"
import { MarqueeNewsTicker } from "compositions/examples/marquee-news-ticker"
import { MarqueePauseInteractions } from "compositions/examples/marquee-pause-interactions"
import { MarqueeReverseDirection } from "compositions/examples/marquee-reverse-direction"
import { MarqueeRtl } from "compositions/examples/marquee-rtl"
import { MarqueeVerticalAnimation } from "compositions/examples/marquee-vertical-animation"
import { MarqueeWithSpeed } from "compositions/examples/marquee-with-speed"
import { MarqueeWithStore } from "compositions/examples/marquee-with-store"
import { MarqueeWithTestimonials } from "compositions/examples/marquee-with-testimonials"
import { Box } from "../src"

export default {
  title: "Components / Marquee",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const AutoFill = MarqueeAutoFill
export const ReverseDirection = MarqueeReverseDirection
export const Vertical = MarqueeVerticalAnimation
export const WithSpeed = MarqueeWithSpeed
export const PauseOnInteraction = MarqueePauseInteractions
export const Store = MarqueeWithStore
export const FiniteLoops = MarqueeFiniteLoop
export const Edges = MarqueeEdgeGradient
export const Multiple = MarqueeMultiple
export const Diagonal = MarqueeDiagonal
export const NewsTicker = MarqueeNewsTicker
export const ImageGallery = MarqueeImageGallery
export const Testimonials = MarqueeWithTestimonials
export const Rtl = MarqueeRtl
