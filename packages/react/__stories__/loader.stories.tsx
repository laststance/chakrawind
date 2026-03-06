import type { Meta } from "@storybook/react-vite"
import { LoaderBasic } from "compositions/examples/loader-basic"
import { LoaderWithBadge } from "compositions/examples/loader-with-badge"
import { LoaderWithOverlay } from "compositions/examples/loader-with-overlay"
import { Box } from "../src"

export default {
  title: "Components / Loader",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = LoaderBasic
export const WithBadge = LoaderWithBadge
export const WithOverlay = LoaderWithOverlay
