import type { Meta } from "@storybook/react-vite"
import { ClipboardBasic } from "compositions/examples/clipboard-basic"
import { ClipboardWithButton } from "compositions/examples/clipboard-with-button"
import { ClipboardWithInput } from "compositions/examples/clipboard-with-input"
import { ClipboardWithLink } from "compositions/examples/clipboard-with-link"
import { ClipboardWithTimeout } from "compositions/examples/clipboard-with-timeout"
import { Box } from "../src"

export default {
  title: "Components / Clipboard",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ClipboardBasic
export const Button = ClipboardWithButton
export const Timeout = ClipboardWithTimeout
export const Input = ClipboardWithInput
export const Link = ClipboardWithLink
