/**
 * Alert slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/alert.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * Static tokens are mapped directly to Tailwind utility classes.
 */
export const alertSlotRecipeTw = {
  className: "chakra-alert",
  slots: ["title", "description", "root", "indicator", "content"],

  base: {
    root: "w-full flex items-start relative rounded-xl",
    title: "font-medium",
    description: "inline",
    indicator: [
      "inline-flex items-center justify-center shrink-0",
      "w-[1em] h-[1em] [&_svg]:w-full [&_svg]:h-full",
    ].join(" "),
    content: "flex flex-1 gap-1",
  },

  variants: {
    status: {
      info: { root: "" },
      warning: { root: "" },
      success: { root: "" },
      error: { root: "" },
      neutral: { root: "" },
    },

    inline: {
      true: {
        content: "inline-flex flex-row items-center",
      },
      false: {
        content: "flex flex-col",
      },
    },

    variant: {
      subtle: {
        root: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
      },

      surface: {
        root: [
          "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
          "shadow-[inset_0_0_0px_1px_var(--cp-muted)]",
        ].join(" "),
        indicator: "text-[var(--cp-fg)]",
      },

      outline: {
        root: [
          "text-[var(--cp-fg)]",
          "shadow-[inset_0_0_0px_1px_var(--cp-border,var(--cp-muted))]",
        ].join(" "),
        indicator: "text-[var(--cp-fg)]",
      },

      solid: {
        root: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
        indicator: "text-[var(--cp-contrast)]",
      },
    },

    size: {
      sm: {
        root: "gap-2 px-3 py-3 text-xs",
        indicator: "text-lg",
      },
      md: {
        root: "gap-3 px-4 py-4 text-sm",
        indicator: "text-xl",
      },
      lg: {
        root: "gap-3 px-4 py-4 text-base",
        indicator: "text-2xl",
      },
    },
  },

  defaultVariants: {
    status: "info" as const,
    variant: "subtle" as const,
    size: "md" as const,
    inline: false as const,
  },
}
