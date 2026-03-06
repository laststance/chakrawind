import type { Meta } from "@storybook/react-vite"
import { TokensAnimationStyle } from "compositions/examples/tokens/animation-style"
import { TokensFocusRing } from "compositions/examples/tokens/focus-ring"
import { TokensLayerStyle } from "compositions/examples/tokens/layer-style"
import { TokensTextStyles } from "compositions/examples/tokens/text-styles"
import { AspectRatioTokenDoc } from "compositions/lib/aspect-ratio-token-doc"
import { BorderRadiusTokenDoc } from "compositions/lib/border-radius-token-doc"
import { BreakpointDoc } from "compositions/lib/breakpoint-doc"
import {
  ColorSemanticTokenDoc,
  ColorTokenDoc,
} from "compositions/lib/color-token-doc"
import { EasingTokenDoc } from "compositions/lib/easing-token-doc"
import { DurationTokenDoc, KeyframeDoc } from "compositions/lib/keyframe-doc"
import { ShadowTokenDoc } from "compositions/lib/shadow-token-doc"
import { SizesTokenDoc } from "compositions/lib/sizes-token-doc"
import { SpacingTokenDoc } from "compositions/lib/spacing-token-doc"
import {
  FontSizeTokenDoc,
  FontTokenDoc,
  FontWeightTokenDoc,
  LetterSpacingTokenDoc,
  LineHeightTokenDoc,
} from "compositions/lib/typography-token-doc"
import { ZIndexTokenDoc } from "compositions/lib/z-index-token-doc"
import { Box, Center, For, SimpleGrid, Text } from "../src"

export default {
  title: "Foundations / Tokens",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const StatusTokens = () => {
  return (
    <SimpleGrid columns={4} gap="10">
      <For each={["bg.error", "bg.warning", "bg.success", "bg.info"]}>
        {(color) => (
          <Center bg={color} height="40px">
            <Text color={color.replace("bg.", "fg.")}>{color}</Text>
          </Center>
        )}
      </For>

      <For each={["fg.error", "fg.warning", "fg.success", "fg.info"]}>
        {(color) => (
          <Center bg={color} height="40px">
            <Text color="fg.inverted">{color}</Text>
          </Center>
        )}
      </For>

      <For
        each={[
          "border.error",
          "border.warning",
          "border.success",
          "border.info",
        ]}
      >
        {(color) => (
          <Center borderColor={color} height="40px" borderWidth="2px">
            <Text color="fg">{color}</Text>
          </Center>
        )}
      </For>
    </SimpleGrid>
  )
}

export const Colors = ColorTokenDoc
export const SemanticColors = ColorSemanticTokenDoc
export const Durations = DurationTokenDoc
export const Keyframes = KeyframeDoc
export const Font = FontTokenDoc
export const FontSizes = FontSizeTokenDoc
export const FontWeights = FontWeightTokenDoc
export const LetterSpacings = LetterSpacingTokenDoc
export const LineHeights = LineHeightTokenDoc
export const AnimationStyle = TokensAnimationStyle
export const FocusRing = TokensFocusRing
export const LayerStyle = TokensLayerStyle
export const TextStyles = TokensTextStyles
export const AspectRatio = AspectRatioTokenDoc
export const Radius = BorderRadiusTokenDoc
export const Breakpoints = BreakpointDoc
export const Easings = EasingTokenDoc
export const Shadows = ShadowTokenDoc
export const Sizes = SizesTokenDoc
export const Spacing = SpacingTokenDoc
export const ZIndex = ZIndexTokenDoc
