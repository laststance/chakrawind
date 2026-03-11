/**
 * Separator recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/separator.ts
 */
export const separatorRecipeTw = {
  className: "chakra-separator",
  base: "block border-[var(--border-color,theme(colors.gray.200))]",

  variants: {
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    orientation: {
      vertical: "border-l-[var(--separator-thickness)]",
      horizontal: "border-t-[var(--separator-thickness)]",
    },
    size: {
      xs: "[--separator-thickness:0.5px]",
      sm: "[--separator-thickness:1px]",
      md: "[--separator-thickness:2px]",
      lg: "[--separator-thickness:3px]",
    },
  },

  defaultVariants: {
    size: "sm",
    variant: "solid",
    orientation: "horizontal",
  },
}
