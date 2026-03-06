import type { Meta } from "@storybook/react-vite"
import { PresenceFade } from "compositions/examples/presence-fade"
import { PresenceLazyMount } from "compositions/examples/presence-lazy-mount"
import { PresenceScaleFade } from "compositions/examples/presence-scale-fade"
import { PresenceSlide } from "compositions/examples/presence-slide"
import { PresenceSlideFade } from "compositions/examples/presence-slide-fade"
import { PresenceUnmountOnExit } from "compositions/examples/presence-unmount-on-exit"
import { Box } from "../src"

export default {
  title: "Components / Presence",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Fade = PresenceFade
export const LazyMount = PresenceLazyMount
export const ScaleFade = PresenceScaleFade
export const Slide = PresenceSlide
export const SlideFade = PresenceSlideFade
export const UnmountOnExit = PresenceUnmountOnExit
