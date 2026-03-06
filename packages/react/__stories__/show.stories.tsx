import type { Meta } from "@storybook/react-vite"
import { ShowBasic } from "compositions/examples/show-basic"
import { ShowWithFallback } from "compositions/examples/show-with-fallback"
import { ShowWithRenderProp } from "compositions/examples/show-with-render-prop"
import { Box } from "../src"

export default {
  title: "Components / Show",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ShowBasic
export const WithFallback = ShowWithFallback
export const WithRenderProp = ShowWithRenderProp
