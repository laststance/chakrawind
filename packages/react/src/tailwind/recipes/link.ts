/**
 * Link recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/link.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
export const linkRecipeTw = {
  className: "chakra-link",
  base: [
    "inline-flex items-center outline-none gap-1.5",
    "cursor-pointer rounded-md",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
  ].join(" "),

  variants: {
    variant: {
      underline: [
        "text-[var(--cp-fg)]",
        "underline underline-offset-[3px]",
        "decoration-current/20",
      ].join(" "),
      plain: [
        "text-[var(--cp-fg)]",
        "hover:underline hover:underline-offset-[3px]",
        "hover:decoration-current/20",
      ].join(" "),
    },
  },

  defaultVariants: {
    variant: "plain",
  },
}
