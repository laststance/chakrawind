import type { Meta } from "@storybook/react-vite"
import { RatingBasic } from "compositions/examples/rating-basic"
import { RatingControlled } from "compositions/examples/rating-controlled"
import { RatingEmoji } from "compositions/examples/rating-emoji"
import { RatingInTestimonial } from "compositions/examples/rating-in-testimonial"
import { RatingSizeTable } from "compositions/examples/rating-size-table"
import { RatingWithColors } from "compositions/examples/rating-with-colors"
import { RatingWithCustomIcon } from "compositions/examples/rating-with-custom-icon"
import { RatingWithHalf } from "compositions/examples/rating-with-half"
import { RatingWithHookForm } from "compositions/examples/rating-with-hook-form"
import { RatingWithLabel } from "compositions/examples/rating-with-label"
import { RatingWithReadonly } from "compositions/examples/rating-with-readonly"
import { RatingWithStore } from "compositions/examples/rating-with-store"
import { Box } from "../src"

export default {
  title: "Components / Rating",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = RatingBasic
export const Controlled = RatingControlled
export const Emoji = RatingEmoji
export const Testimonial = RatingInTestimonial
export const Sizes = RatingSizeTable
export const Colors = RatingWithColors
export const CustomIcon = RatingWithCustomIcon
export const Half = RatingWithHalf
export const HookForm = RatingWithHookForm
export const ReadOnly = RatingWithReadonly
export const Store = RatingWithStore
export const Label = RatingWithLabel
