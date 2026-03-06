import type { Meta } from "@storybook/react-vite"
import { SystemAlertRecipe } from "compositions/examples/system/alert-recipe"
import { SystemColorPalette } from "compositions/examples/system/color-palette"
import { SystemFlexRecipe } from "compositions/examples/system/flex-recipe"
import { SystemInlineRecipe } from "compositions/examples/system/inline-recipe"
import { SystemInlineSlotRecipe } from "compositions/examples/system/inline-slot-recipe"
import { SystemWithAnimation } from "compositions/examples/system/with-animation"
import { SystemWithAsChild } from "compositions/examples/system/with-as-child"
import { WithCompoundBoolean } from "compositions/examples/system/with-compound-boolean"
import { WithCompoundColorPalette } from "compositions/examples/system/with-compound-color-palette"
import { SystemWithUseRecipe } from "compositions/examples/system/with-use-recipe"
import { SystemWithUseSlotRecipe } from "compositions/examples/system/with-use-slot-recipe"
import { Box } from "../src"

export default {
  title: "Foundations / System",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const AlertRecipe = SystemAlertRecipe
export const ColorPalette = SystemColorPalette
export const FlexRecipe = SystemFlexRecipe
export const InlineRecipe = SystemInlineRecipe
export const InlineSlotRecipe = SystemInlineSlotRecipe
export const Animation = SystemWithAnimation
export const AsChild = SystemWithAsChild
export const CompoundBoolean = WithCompoundBoolean
export const CompoundColorPalette = WithCompoundColorPalette
export const UseRecipe = SystemWithUseRecipe
export const UseSlotRecipe = SystemWithUseSlotRecipe
