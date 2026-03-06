import type { Meta } from "@storybook/react-vite"
import { StatBasic } from "compositions/examples/stat-basic"
import { StatWithFormatOptions } from "compositions/examples/stat-with-format-options"
import { StatWithGroup } from "compositions/examples/stat-with-group"
import { StatWithIcon } from "compositions/examples/stat-with-icon"
import { StatWithIndicator } from "compositions/examples/stat-with-indicator"
import { StatWithInfoTip } from "compositions/examples/stat-with-info-tip"
import { StatWithProgressBar } from "compositions/examples/stat-with-progress-bar"
import { StatWithTrend } from "compositions/examples/stat-with-trend"
import { StatWithValueUnit } from "compositions/examples/stat-with-value-unit"
import { Box } from "../src"

export default {
  title: "Components / Stat",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = StatBasic
export const FormatOptions = StatWithFormatOptions
export const StatGroup = StatWithGroup
export const Icon = StatWithIcon
export const Indicator = StatWithIndicator
export const InfoTip = StatWithInfoTip
export const ProgressBar = StatWithProgressBar
export const Trend = StatWithTrend
export const ValueUnit = StatWithValueUnit
