import type { Meta } from "@storybook/react-vite"
import { ActionBarBasic } from "compositions/examples/action-bar-basic"
import { ActionBarPlacement } from "compositions/examples/action-bar-placement"
import { ActionBarWithCloseTrigger } from "compositions/examples/action-bar-with-close-trigger"
import { ActionBarWithDialog } from "compositions/examples/action-bar-with-dialog"
import { Box } from "../src"

export default {
  title: "Components / Action Bar",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ActionBarBasic
export const CloseTrigger = ActionBarWithCloseTrigger
export const WithDialog = ActionBarWithDialog
export const Placement = ActionBarPlacement
