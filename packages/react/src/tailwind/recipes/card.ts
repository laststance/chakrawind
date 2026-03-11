/**
 * Card slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/card.ts
 *
 * Uses CSS custom properties for card padding (--card-padding).
 * Semantic color tokens mapped to CSS variable references.
 */
export const cardSlotRecipeTw = {
  className: "chakra-card",
  slots: ["root", "header", "body", "footer", "title", "description"],

  base: {
    root: [
      "flex flex-col relative min-w-0",
      "break-words rounded-xl text-[var(--fg)] text-start",
    ].join(" "),
    title: "font-semibold",
    description: "text-[var(--fg-muted)] text-sm",
    header: [
      "px-[var(--card-padding)] pt-[var(--card-padding)]",
      "flex flex-col gap-1.5",
    ].join(" "),
    body: "p-[var(--card-padding)] flex-1 flex flex-col",
    footer: [
      "flex items-center gap-2",
      "px-[var(--card-padding)] pb-[var(--card-padding)]",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        root: "[--card-padding:1rem]",
        title: "text-base",
      },
      md: {
        root: "[--card-padding:1.5rem]",
        title: "text-lg",
      },
      lg: {
        root: "[--card-padding:1.75rem]",
        title: "text-xl",
      },
    },

    variant: {
      elevated: {
        root: "bg-[var(--bg-panel)] shadow-md",
      },
      outline: {
        root: "bg-[var(--bg-panel)] border border-[var(--border-color)]",
      },
      subtle: {
        root: "bg-[var(--bg-muted)]",
      },
    },
  },

  defaultVariants: {
    variant: "outline" as const,
    size: "md" as const,
  },
}
