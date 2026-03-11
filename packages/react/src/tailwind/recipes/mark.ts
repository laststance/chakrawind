/**
 * Mark recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/mark.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
export const markRecipeTw = {
  className: "chakra-mark",
  base: "bg-transparent text-inherit whitespace-nowrap",

  variants: {
    variant: {
      subtle: "bg-[var(--cp-subtle)] text-inherit",
      solid: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      text: "font-medium",
      plain: "",
    },
  },
}
