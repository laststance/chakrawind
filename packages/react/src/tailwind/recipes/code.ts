/**
 * Code recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/code.ts
 *
 * Inherits variants and defaultVariants from badge recipe.
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
import { badgeRecipeTw } from "./badge"

const { variants, defaultVariants } = badgeRecipeTw

export const codeRecipeTw = {
  className: "chakra-code",
  base: "font-mono items-center inline-flex rounded-lg",
  variants,
  defaultVariants,
}
