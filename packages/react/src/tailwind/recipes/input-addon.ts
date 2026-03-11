/**
 * Input addon recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/input-addon.ts
 *
 * Shares the same size variants as the input recipe.
 */
export const inputAddonRecipeTw = {
  className: "chakra-input-addon",
  base: [
    "flex-none w-auto flex items-center",
    "whitespace-nowrap self-stretch rounded-lg",
  ].join(" "),

  variants: {
    size: {
      "2xs": "text-xs px-2 [--input-height:1.75rem]",
      xs: "text-xs px-2 [--input-height:2rem]",
      sm: "text-sm px-2.5 [--input-height:2.25rem]",
      md: "text-sm px-3 [--input-height:2.5rem]",
      lg: "text-base px-4 [--input-height:2.75rem]",
      xl: "text-base px-[1.125rem] [--input-height:3rem]",
      "2xl": "text-lg px-5 [--input-height:4rem]",
    },

    variant: {
      outline: "border border-[var(--border-color)] bg-[var(--bg-muted)]",
      subtle: "border border-transparent bg-[var(--bg-emphasized)]",
      flushed: "border-b border-inherit rounded-none px-0 bg-transparent",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
