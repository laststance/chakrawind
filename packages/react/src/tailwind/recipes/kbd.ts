/**
 * Kbd recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/kbd.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
export const kbdRecipeTw = {
  className: "chakra-kbd",
  base: [
    "inline-flex items-center font-medium font-mono",
    "shrink-0 whitespace-nowrap [word-spacing:-0.5em]",
    "select-none px-1 rounded-lg",
  ].join(" "),

  variants: {
    variant: {
      raised: [
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
        "border border-b-2 border-[var(--cp-muted)]",
      ].join(" "),
      outline: "border text-[var(--cp-fg)]",
      subtle: "bg-[var(--cp-muted)] text-[var(--cp-fg)]",
      plain: "text-[var(--cp-fg)]",
    },

    size: {
      sm: "text-xs h-[1.125rem]",
      md: "text-sm h-5",
      lg: "text-base h-6",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "raised",
  },
}
