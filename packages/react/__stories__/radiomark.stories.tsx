import type { Meta } from "@storybook/react-vite"
import { RadiomarkBasic } from "compositions/examples/radiomark-basic"
import { RadiomarkVariants } from "compositions/examples/radiomark-variants"
import { Box } from "../src"

export default {
  title: "Components / Radiomark",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = RadiomarkBasic
export const Variants = RadiomarkVariants
