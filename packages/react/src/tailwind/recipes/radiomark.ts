/**
 * Radiomark recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/radiomark.ts
 *
 * Radio button indicator with solid, subtle, outline, and inverted variants.
 * Uses data-state=checked for checked state styling.
 * Contains an inner .dot element for the radio circle.
 */
export const radiomarkRecipeTw = {
  className: "chakra-radiomark",
  base: [
    "inline-flex items-center justify-center shrink-0 align-top",
    "text-white border border-transparent rounded-full",
    "cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-[var(--cp-focus-ring)] focus-visible:outline-offset-2",
    "data-[invalid]:border-red-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "[&_.dot]:h-full [&_.dot]:w-full [&_.dot]:rounded-full",
    "[&_.dot]:bg-current [&_.dot]:scale-[0.4]",
  ].join(" "),

  variants: {
    variant: {
      solid: [
        "border border-[var(--border-emphasized)]",
        "data-[state=checked]:bg-[var(--cp-solid)]",
        "data-[state=checked]:text-[var(--cp-contrast)]",
        "data-[state=checked]:border-[var(--cp-solid)]",
      ].join(" "),

      subtle: [
        "border bg-[var(--cp-muted)] border-[var(--cp-muted)] text-transparent",
        "data-[state=checked]:text-[var(--cp-fg)]",
      ].join(" "),

      outline: [
        "border border-inherit",
        "data-[state=checked]:text-[var(--cp-fg)]",
        "data-[state=checked]:border-[var(--cp-solid)]",
        "[&_.dot]:scale-[0.6]",
      ].join(" "),

      inverted: [
        "bg-[var(--bg)] border border-inherit",
        "data-[state=checked]:text-[var(--cp-solid)]",
        "data-[state=checked]:border-current",
      ].join(" "),
    },

    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },

    filled: {
      true: "bg-[var(--bg)]",
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
}
