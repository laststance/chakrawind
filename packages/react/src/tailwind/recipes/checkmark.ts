/**
 * Checkmark recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/checkmark.ts
 *
 * Checkbox indicator with solid, outline, subtle, plain, and inverted variants.
 * Uses data-state attributes for checked/indeterminate states.
 */
export const checkmarkRecipeTw = {
  className: "chakra-checkmark",
  base: [
    "inline-flex items-center justify-center shrink-0",
    "text-white border border-transparent rounded-md",
    "cursor-pointer",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    "[&_svg]:w-full [&_svg]:h-full",
    "data-[invalid]:border-[var(--border-error)]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" "),

  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5 p-0.5",
      lg: "w-6 h-6 p-0.5",
    },

    variant: {
      solid: [
        "border-[var(--border-emphasized)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:bg-[var(--cp-solid)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-contrast)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
      ].join(" "),

      outline: [
        "border-[var(--border-color)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-fg)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
      ].join(" "),

      subtle: [
        "bg-[var(--cp-muted)] border-[var(--cp-muted)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-fg)]",
      ].join(" "),

      plain: [
        "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-fg)]",
      ].join(" "),

      inverted: [
        "border-[var(--border-color)] text-[var(--cp-fg)]",
        "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
      ].join(" "),
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
