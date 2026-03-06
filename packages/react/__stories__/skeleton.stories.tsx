import type { Meta } from "@storybook/react-vite"
import { SkeletonBasic } from "compositions/examples/skeleton-basic"
import { SkeletonForFeed } from "compositions/examples/skeleton-for-feed"
import { SkeletonForText } from "compositions/examples/skeleton-for-text"
import { SkeletonTextWithChildren } from "compositions/examples/skeleton-text-with-children"
import { SkeletonWithChildren } from "compositions/examples/skeleton-with-children"
import { SkeletonWithLoaded } from "compositions/examples/skeleton-with-loaded"
import { SkeletonWithStartEndColor } from "compositions/examples/skeleton-with-start-end-color"
import { SkeletonWithVariants } from "compositions/examples/skeleton-with-variants"
import { Box } from "../src"

export default {
  title: "Components / Skeleton",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SkeletonBasic
export const Feed = SkeletonForFeed
export const Text = SkeletonForText
export const TextWithChildren = SkeletonTextWithChildren
export const WithChildren = SkeletonWithChildren
export const WithLoaded = SkeletonWithLoaded
export const StartEndColor = SkeletonWithStartEndColor
export const Variants = SkeletonWithVariants
