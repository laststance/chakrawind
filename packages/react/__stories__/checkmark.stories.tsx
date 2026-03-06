import type { Meta } from "@storybook/react-vite"
import { CheckmarkBasic } from "compositions/examples/checkmark-basic"
import { Box } from "../src"

export default {
  title: "Components / Checkmark",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CheckmarkBasic
