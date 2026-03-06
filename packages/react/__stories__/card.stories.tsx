import type { Meta } from "@storybook/react-vite"
import { CardBasic } from "compositions/examples/card-basic"
import { CardHorizontal } from "compositions/examples/card-horizontal"
import { CardSizeTable } from "compositions/examples/card-size-table"
import { CardVariantTable } from "compositions/examples/card-variant-table"
import { CardWithAvatar } from "compositions/examples/card-with-avatar"
import { CardWithForm } from "compositions/examples/card-with-form"
import { CardWithImage } from "compositions/examples/card-with-image"
import { Box } from "../src"

export default {
  title: "Components / Card",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CardBasic
export const Variants = CardVariantTable
export const Sizes = CardSizeTable
export const Avatar = CardWithAvatar
export const Image = CardWithImage
export const Horizontal = CardHorizontal
export const Form = CardWithForm
