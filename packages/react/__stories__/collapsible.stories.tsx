import type { Meta } from "@storybook/react-vite"
import { CollapsibleBasic } from "compositions/examples/collapsible-basic"
import { CollapsibleControlled } from "compositions/examples/collapsible-controlled"
import { CollapsibleInitialOpen } from "compositions/examples/collapsible-initial-open"
import { CollapsibleLazyMounted } from "compositions/examples/collapsible-lazy-mounted"
import { CollapsiblePartialHeight } from "compositions/examples/collapsible-partial-height"
import { CollapsibleWithDisabled } from "compositions/examples/collapsible-with-disabled"
import { CollapsibleWithStore } from "compositions/examples/collapsible-with-store"
import { Box } from "../src"

export default {
  title: "Components / Collapsible",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CollapsibleBasic
export const LazyMounted = CollapsibleLazyMounted
export const PartialHeight = CollapsiblePartialHeight
export const InitialOpen = CollapsibleInitialOpen
export const Disabled = CollapsibleWithDisabled
export const Controlled = CollapsibleControlled
export const Store = CollapsibleWithStore
