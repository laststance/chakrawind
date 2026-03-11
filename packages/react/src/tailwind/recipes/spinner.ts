/**
 * Spinner recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/spinner.ts
 *
 * Animated loading spinner using CSS custom property for sizing.
 * Uses border-based animation with transparent bottom/left borders.
 */
export const spinnerRecipeTw = {
  className: "chakra-spinner",
  base: [
    "inline-block border-current border-solid border-2 rounded-full",
    "w-[var(--spinner-size)] h-[var(--spinner-size)]",
    "animate-spin [animation-duration:0.65s]",
    "[--spinner-track-color:transparent]",
    "border-b-[var(--spinner-track-color)] border-l-[var(--spinner-track-color)]",
  ].join(" "),

  variants: {
    size: {
      inherit: "[--spinner-size:1em]",
      xs: "[--spinner-size:0.75rem]",
      sm: "[--spinner-size:1rem]",
      md: "[--spinner-size:1.25rem]",
      lg: "[--spinner-size:2rem]",
      xl: "[--spinner-size:2.5rem]",
    },
  },

  defaultVariants: {
    size: "md",
  },
}
