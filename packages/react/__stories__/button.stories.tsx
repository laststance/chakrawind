import type { Meta } from "@storybook/react-vite"
import { ButtonBasic } from "compositions/examples/button-basic"
import { ButtonSizeTable } from "compositions/examples/button-size-table"
import { ButtonVariantTable } from "compositions/examples/button-variant-table"
import { ButtonWithCustomSpinner } from "compositions/examples/button-with-custom-spinner"
import { ButtonWithDisabled } from "compositions/examples/button-with-disabled"
import { ButtonWithDisabledLink } from "compositions/examples/button-with-disabled-link"
import { ButtonWithGroup } from "compositions/examples/button-with-group"
import { ButtonWithGroupFlushed } from "compositions/examples/button-with-group-flushed"
import { ButtonWithIconComposition } from "compositions/examples/button-with-icon-composition"
import { ButtonWithIcons } from "compositions/examples/button-with-icons"
import { ButtonWithLoading } from "compositions/examples/button-with-loading"
import { ButtonWithLoadingToggle } from "compositions/examples/button-with-loading-toggle"
import { ButtonWithRadius } from "compositions/examples/button-with-radius"
import { ButtonWithResponsiveSize } from "compositions/examples/button-with-responsive-size"
import { ButtonWithSpinnerPlacement } from "compositions/examples/button-with-spinner-placement"
import { ButtonWithSplitMenu } from "compositions/examples/button-with-split-menu"
import { ButtonWithStyleOverride } from "compositions/examples/button-with-style-override"
import { Box } from "../src"

export default {
  title: "Components / Button",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ButtonBasic
export const Sizes = ButtonSizeTable
export const Variants = ButtonVariantTable
export const Disabled = ButtonWithDisabled
export const DisabledLink = ButtonWithDisabledLink
export const Group = ButtonWithGroup
export const GroupFlushed = ButtonWithGroupFlushed
export const IconComposition = ButtonWithIconComposition
export const Icon = ButtonWithIcons
export const Loading = ButtonWithLoading
export const LoadingToggle = ButtonWithLoadingToggle
export const CustomSpinner = ButtonWithCustomSpinner
export const SpinnerPlacement = ButtonWithSpinnerPlacement
export const SplitMenu = ButtonWithSplitMenu
export const Radius = ButtonWithRadius
export const ResponsiveSize = ButtonWithResponsiveSize
export const StyleOverrides = ButtonWithStyleOverride
