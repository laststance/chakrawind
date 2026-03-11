/**
 * Badge recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/badge.ts
 */
export const badgeRecipeTw = {
  className: "chakra-badge",
  base: [
    "inline-flex items-center rounded-lg gap-1",
    "font-medium tabular-nums whitespace-nowrap select-none",
  ].join(" "),

  variants: {
    variant: {
      solid: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      subtle: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
      outline: [
        "text-[var(--cp-fg)]",
        "shadow-[inset_0_0_0px_1px_var(--cp-border,var(--cp-muted))]",
      ].join(" "),
      surface: [
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
        "shadow-[inset_0_0_0px_1px_var(--cp-muted)]",
      ].join(" "),
      plain: "text-[var(--cp-fg)]",
    },
    size: {
      xs: "text-[0.625rem] px-1 min-h-4",
      sm: "text-xs px-1.5 min-h-5",
      md: "text-sm px-2 min-h-6",
      lg: "text-sm px-2.5 min-h-7",
    },
  },

  defaultVariants: {
    variant: "subtle",
    size: "sm",
  },
}
