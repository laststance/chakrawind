import type { Meta } from "@storybook/react-vite"
import { AlertBasic } from "compositions/examples/alert-basic"
import { AlertSizeTable } from "compositions/examples/alert-size-table"
import { AlertVariantTable } from "compositions/examples/alert-variant-table"
import { AlertWithButtons } from "compositions/examples/alert-with-buttons"
import { AlertWithCloseButton } from "compositions/examples/alert-with-close-button"
import { AlertWithColorPaletteOverride } from "compositions/examples/alert-with-color-palette-override"
import { AlertWithCustomIcon } from "compositions/examples/alert-with-custom-icon"
import { AlertWithCustomization } from "compositions/examples/alert-with-customization"
import { AlertWithDescription } from "compositions/examples/alert-with-description"
import { AlertWithSpinner } from "compositions/examples/alert-with-spinner"
import { AlertWithStatus } from "compositions/examples/alert-with-status"
import { Box } from "../src"

export default {
  title: "Components / Alert",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = AlertBasic
export const Sizes = AlertSizeTable
export const Variants = AlertVariantTable
export const Buttons = AlertWithButtons
export const CloseButton = AlertWithCloseButton
export const ColorPaletteOverride = AlertWithColorPaletteOverride
export const CustomIcon = AlertWithCustomIcon
export const Customization = AlertWithCustomization
export const Description = AlertWithDescription
export const Spinner = AlertWithSpinner
export const Status = AlertWithStatus
