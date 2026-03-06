import type { Meta } from "@storybook/react-vite"
import { ToggleTipBasic } from "compositions/examples/toggle-tip-basic"
import { ToggleTipInfoTip } from "compositions/examples/toggle-tip-info-tip"
import { Box } from "../src"

export default {
  title: "Components / Toggle Tip",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ToggleTipBasic
export const InfoTip = ToggleTipInfoTip
