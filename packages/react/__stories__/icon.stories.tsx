import type { Meta } from "@storybook/react-vite"
import { IconBasic } from "compositions/examples/icon-basic"
import { IconWithAsProp } from "compositions/examples/icon-with-as-prop"
import { IconWithCreateIcon } from "compositions/examples/icon-with-create-icon"
import { IconWithCustomSvg } from "compositions/examples/icon-with-custom-svg"
import { IconWithReactIcon } from "compositions/examples/icon-with-react-icon"
import { IconWithSizes } from "compositions/examples/icon-with-sizes"
import { Box } from "../src"

export default {
  title: "Components / Icon",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = IconBasic
export const AsProp = IconWithAsProp
export const CreateIcon = IconWithCreateIcon
export const CustomSvg = IconWithCustomSvg
export const ReactIcon = IconWithReactIcon
export const Sizes = IconWithSizes
