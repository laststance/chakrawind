/**
 * Icon recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/icon.ts
 *
 * Inline icon component with size variants.
 * Uses currentcolor for inheriting parent text color.
 */
export const iconRecipeTw = {
  className: "chakra-icon",
  base: "inline-block leading-[1em] shrink-0 text-current align-middle",

  variants: {
    size: {
      inherit: "",
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
      "2xl": "w-8 h-8",
    },
  },

  defaultVariants: {
    size: "inherit",
  },
}
