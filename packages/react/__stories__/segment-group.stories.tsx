import type { Meta } from "@storybook/react-vite"
import { SegmentedControlBasic } from "compositions/examples/segmented-control-basic"
import { SegmentedControlControlled } from "compositions/examples/segmented-control-controlled"
import { SegmentedControlInCard } from "compositions/examples/segmented-control-in-card"
import { SegmentedControlVertical } from "compositions/examples/segmented-control-vertical"
import { SegmentedControlWithColorPalette } from "compositions/examples/segmented-control-with-color-palette"
import { SegmentedControlWithCustomIndicator } from "compositions/examples/segmented-control-with-custom-indicator"
import { SegmentedControlWithDisabled } from "compositions/examples/segmented-control-with-disabled"
import { SegmentedControlWithDisabledItem } from "compositions/examples/segmented-control-with-disabled-item"
import { SegmentedControlWithHookForm } from "compositions/examples/segmented-control-with-hook-form"
import { SegmentedControlWithIcon } from "compositions/examples/segmented-control-with-icon"
import { SegmentedControlWithSizes } from "compositions/examples/segmented-control-with-sizes"
import { Box } from "../src"

export default {
  title: "Components / Segment Group",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SegmentedControlBasic
export const Controlled = SegmentedControlControlled
export const ColorPalette = SegmentedControlWithColorPalette
export const CustomIndicator = SegmentedControlWithCustomIndicator
export const Card = SegmentedControlInCard
export const Vertical = SegmentedControlVertical
export const Disabled = SegmentedControlWithDisabled
export const DisabledItem = SegmentedControlWithDisabledItem
export const HookForm = SegmentedControlWithHookForm
export const Icon = SegmentedControlWithIcon
export const Sizes = SegmentedControlWithSizes
