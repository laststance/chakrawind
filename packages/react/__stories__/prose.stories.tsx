import type { Meta } from "@storybook/react-vite"
import { ProseBasic } from "compositions/examples/prose-basic"
import { ProseSink } from "compositions/examples/prose-sink"
import { ProseWithBlockquote } from "compositions/examples/prose-with-blockquote"
import { ProseWithList } from "compositions/examples/prose-with-list"
import { ProseWithReactMarkdown } from "compositions/examples/prose-with-react-markdown"
import { ProseWithTable } from "compositions/examples/prose-with-table"
import { Box } from "../src"

export default {
  title: "Typography / Prose",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ProseBasic
export const Sink = ProseSink
export const Blockquote = ProseWithBlockquote
export const List = ProseWithList
export const ReactMarkdown = ProseWithReactMarkdown
export const Table = ProseWithTable
