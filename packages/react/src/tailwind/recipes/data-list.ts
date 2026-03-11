/**
 * DataList slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/data-list.ts
 *
 * Uses semantic color tokens via CSS custom property references.
 */
export const dataListSlotRecipeTw = {
  className: "chakra-data-list",
  slots: ["root", "item", "itemLabel", "itemValue"],

  base: {
    root: "",
    item: "",
    itemLabel: "flex items-center gap-1",
    itemValue: "flex min-w-0 flex-1",
  },

  variants: {
    orientation: {
      horizontal: {
        root: "flex flex-col",
        item: "inline-flex items-center gap-4",
        itemLabel: "min-w-[120px]",
      },
      vertical: {
        root: "flex flex-col",
        item: "flex flex-col gap-1",
      },
    },

    size: {
      sm: {
        root: "gap-3",
        item: "text-xs",
      },
      md: {
        root: "gap-4",
        item: "text-sm",
      },
      lg: {
        root: "gap-5",
        item: "text-base",
      },
    },

    variant: {
      subtle: {
        itemLabel: "text-[var(--fg-muted)]",
      },
      bold: {
        itemLabel: "font-medium",
        itemValue: "text-[var(--fg-muted)]",
      },
    },
  },

  defaultVariants: {
    size: "md" as const,
    orientation: "vertical" as const,
    variant: "subtle" as const,
  },
}
