import type { Meta } from "@storybook/react-vite"
import { DownloadTriggerBasic } from "compositions/examples/download-trigger-basic"
import { DownloadTriggerSvg } from "compositions/examples/download-trigger-svg"
import { DownloadTriggerWithFileSize } from "compositions/examples/download-trigger-with-file-size"
import { DownloadTriggerWithPromise } from "compositions/examples/download-trigger-with-promise"
import { Box } from "../src"

export default {
  title: "Components / Download Trigger",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DownloadTriggerBasic
export const FileSize = DownloadTriggerWithFileSize
export const Svg = DownloadTriggerSvg
export const Promise = DownloadTriggerWithPromise
