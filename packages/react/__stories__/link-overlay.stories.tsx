import type { Meta } from "@storybook/react-vite"
import { LinkOverlayArticle } from "compositions/examples/link-overlay-article"
import { LinkOverlayBasic } from "compositions/examples/link-overlay-basic"
import { Box } from "../src"

export default {
  title: "Typography / LinkOverlay",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = LinkOverlayBasic
export const Article = LinkOverlayArticle
