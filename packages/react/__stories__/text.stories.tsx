import type { Meta } from "@storybook/react-vite"
import { TextBasic } from "compositions/examples/text-basic"
import { TextWithAsProp } from "compositions/examples/text-with-as-prop"
import { TextWithLineClamp } from "compositions/examples/text-with-line-clamp"
import { TextWithSizes } from "compositions/examples/text-with-sizes"
import { TextWithTruncate } from "compositions/examples/text-with-truncate"
import { TextWithWeights } from "compositions/examples/text-with-weights"
import { Box } from "../src"

export default {
  title: "Typography / Text",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TextBasic
export const AsProps = TextWithAsProp
export const Truncate = TextWithTruncate
export const LineClamp = TextWithLineClamp
export const Sizes = TextWithSizes
export const Weights = TextWithWeights
