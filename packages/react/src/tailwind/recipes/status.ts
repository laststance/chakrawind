/**
 * Status slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/status.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
export const statusSlotRecipeTw = {
  className: "chakra-status",
  slots: ["root", "indicator"],

  base: {
    root: "inline-flex items-center gap-2",
    indicator: [
      "w-[0.64em] h-[0.64em] shrink-0",
      "rounded-full [forced-color-adjust:none]",
      "bg-[var(--cp-solid)]",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        root: "text-xs",
      },
      md: {
        root: "text-sm",
      },
      lg: {
        root: "text-base",
      },
    },
  },

  defaultVariants: {
    size: "md" as const,
  },
}
