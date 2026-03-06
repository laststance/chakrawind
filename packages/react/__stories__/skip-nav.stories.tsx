import type { Meta } from "@storybook/react-vite"
import { SkipNavBasic } from "compositions/examples/skip-nav-basic"
import { SkipNavCustomId } from "compositions/examples/skip-nav-custom-id"
import { SkipNavWithContent } from "compositions/examples/skip-nav-with-content"
import { Box } from "../src"

export default {
  title: "Components / Skip Nav",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SkipNavBasic
export const WithContent = SkipNavWithContent
export const CustomId = SkipNavCustomId
