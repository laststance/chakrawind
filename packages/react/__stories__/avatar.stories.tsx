import type { Meta } from "@storybook/react-vite"
import { AvatarBasic } from "compositions/examples/avatar-basic"
import { AvatarGroupWithStacking } from "compositions/examples/avatar-group-with-stacking"
import { AvatarPersona } from "compositions/examples/avatar-persona"
import { AvatarSizeTable } from "compositions/examples/avatar-size-table"
import { AvatarVariantTable } from "compositions/examples/avatar-variant-table"
import { AvatarWithBadge } from "compositions/examples/avatar-with-badge"
import { AvatarWithColors } from "compositions/examples/avatar-with-colors"
import { AvatarWithFallback } from "compositions/examples/avatar-with-fallback"
import { AvatarWithGroup } from "compositions/examples/avatar-with-group"
import { AvatarWithOverflow } from "compositions/examples/avatar-with-overflow"
import { AvatarWithRandomColor } from "compositions/examples/avatar-with-random-color"
import { AvatarWithShape } from "compositions/examples/avatar-with-shape"
import { AvatarWithStore } from "compositions/examples/avatar-with-store"
import { Box } from "../src"

export default {
  title: "Components / Avatar",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = AvatarBasic
export const GroupStacking = AvatarGroupWithStacking
export const Persona = AvatarPersona
export const Sizes = AvatarSizeTable
export const Variants = AvatarVariantTable
export const Badge = AvatarWithBadge
export const Colors = AvatarWithColors
export const Fallback = AvatarWithFallback
export const Group = AvatarWithGroup
export const Overflow = AvatarWithOverflow
export const RandomColor = AvatarWithRandomColor
export const Shape = AvatarWithShape
export const Store = AvatarWithStore
