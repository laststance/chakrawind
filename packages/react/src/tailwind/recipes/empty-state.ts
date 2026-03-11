/**
 * EmptyState recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/empty-state.ts
 *
 * Uses semantic CSS custom properties for foreground colors.
 */
export const emptyStateSlotRecipeTw = {
  className: "chakra-empty-state",
  slots: ["root", "content", "indicator", "title", "description"],
  base: {
    root: "w-full",
    content: "flex flex-col items-center justify-center",
    indicator: [
      "flex items-center justify-center",
      "text-[var(--fg-subtle)]",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
    ].join(" "),
    title: "font-semibold",
    description: "text-sm text-[var(--fg-muted)]",
  },

  variants: {
    size: {
      sm: {
        root: "px-4 py-6",
        title: "text-base",
        content: "gap-4",
        indicator: "text-2xl",
      },
      md: {
        root: "px-8 py-12",
        title: "text-lg",
        content: "gap-6",
        indicator: "text-4xl",
      },
      lg: {
        root: "px-12 py-16",
        title: "text-xl",
        content: "gap-8",
        indicator: "text-6xl",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
