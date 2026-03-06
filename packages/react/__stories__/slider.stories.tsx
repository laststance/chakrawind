import type { Meta } from "@storybook/react-vite"
import { SliderBasic } from "compositions/examples/slider-basic"
import { SliderChangeEnd } from "compositions/examples/slider-change-end"
import { SliderControlled } from "compositions/examples/slider-controlled"
import { SliderCustomization } from "compositions/examples/slider-customization"
import { SliderDisabled } from "compositions/examples/slider-disabled"
import { SliderPreventOverlap } from "compositions/examples/slider-prevent-overlap"
import { SliderSizeTable } from "compositions/examples/slider-size-table"
import { SliderVariantTable } from "compositions/examples/slider-variant-table"
import { SliderVertical } from "compositions/examples/slider-vertical"
import { SliderWithCollisionBehavior } from "compositions/examples/slider-with-collision-behavior"
import { SliderWithColors } from "compositions/examples/slider-with-colors"
import { SliderWithDraggingIndicator } from "compositions/examples/slider-with-dragging-indicator"
import { SliderWithHookForm } from "compositions/examples/slider-with-hook-form"
import { SliderWithLabel } from "compositions/examples/slider-with-label"
import { SliderWithMarks } from "compositions/examples/slider-with-marks"
import { SliderWithMarksAndLabel } from "compositions/examples/slider-with-marks-and-label"
import { SliderWithMarksVertical } from "compositions/examples/slider-with-marks-vertical"
import { SliderWithMultipleThumbs } from "compositions/examples/slider-with-multiple-thumbs"
import { SliderWithStep } from "compositions/examples/slider-with-step"
import { SliderWithStore } from "compositions/examples/slider-with-store"
import { SliderWithThumbAlignment } from "compositions/examples/slider-with-thumb-alignment"
import { SliderWithValueText } from "compositions/examples/slider-with-value-text"
import { Box } from "../src"

export default {
  title: "Components / Slider",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SliderBasic
export const ChangeEnd = SliderChangeEnd
export const CollisionBehavior = SliderWithCollisionBehavior
export const Controlled = SliderControlled
export const Customization = SliderCustomization
export const Disabled = SliderDisabled
export const PreventOverlap = SliderPreventOverlap
export const Sizes = SliderSizeTable
export const ThumbAlignment = SliderWithThumbAlignment
export const Variants = SliderVariantTable
export const Vertical = SliderVertical
export const Colors = SliderWithColors
export const DraggingIndicator = SliderWithDraggingIndicator
export const HookForm = SliderWithHookForm
export const Label = SliderWithLabel
export const Marks = SliderWithMarks
export const MarksAndLabel = SliderWithMarksAndLabel
export const MarksVertical = SliderWithMarksVertical
export const RangeSlider = SliderWithMultipleThumbs
export const Step = SliderWithStep
export const Store = SliderWithStore
export const ValueText = SliderWithValueText
