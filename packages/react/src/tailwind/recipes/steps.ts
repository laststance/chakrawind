/**
 * Steps recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/steps.ts
 *
 * Uses CSS custom properties for step sizing, icon sizing, and thickness.
 * colorPalette tokens mapped to --cp-* CSS vars.
 */
export const stepsSlotRecipeTw = {
  className: "chakra-steps",
  slots: [
    "root",
    "list",
    "item",
    "trigger",
    "indicator",
    "separator",
    "content",
    "title",
    "description",
    "nextTrigger",
    "prevTrigger",
    "progress",
  ],
  base: {
    root: "flex w-full",
    list: [
      "flex justify-between",
      "[--steps-gutter:var(--spacing-3,0.75rem)]",
      "[--steps-thickness:2px]",
    ].join(" "),
    title: "font-medium text-[var(--fg)]",
    description: "text-[var(--fg-muted)]",
    separator: "bg-[var(--border-color)] flex-1",
    indicator: [
      "flex justify-center items-center shrink-0 rounded-full font-medium",
      "w-[var(--steps-size)] h-[var(--steps-size)]",
      "[&_svg]:shrink-0 [&_svg]:w-[var(--steps-icon-size)] [&_svg]:h-[var(--steps-icon-size)]",
    ].join(" "),
    item: [
      "relative flex gap-3 flex-[1_0_0]",
      "last:flex-initial",
      "last:[&_[data-part=separator]]:hidden",
    ].join(" "),
    trigger: [
      "flex items-center gap-3 text-start rounded-lg",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    ].join(" "),
    content:
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    nextTrigger: "",
    prevTrigger: "",
    progress: "",
  },

  variants: {
    orientation: {
      vertical: {
        root: "flex-row h-full",
        list: "flex-col items-start",
        separator: [
          "absolute",
          "w-[var(--steps-thickness)] h-full",
          "max-h-[calc(100%-var(--steps-size)-var(--steps-gutter)*2)]",
          "top-[calc(var(--steps-size)+var(--steps-gutter))]",
          "start-[calc(var(--steps-size)/2-1px)]",
        ].join(" "),
        item: "items-start",
      },
      horizontal: {
        root: "flex-col w-full",
        list: "flex-row items-center",
        separator: [
          "w-full h-[var(--steps-thickness)]",
          "mx-[var(--steps-gutter)]",
        ].join(" "),
        item: "items-center",
      },
    },

    variant: {
      solid: {
        indicator: [
          "data-[state=incomplete]:border-[length:var(--steps-thickness)]",
          "data-[current]:bg-[var(--cp-muted)] data-[current]:border-[length:var(--steps-thickness)] data-[current]:border-[var(--cp-solid)] data-[current]:text-[var(--cp-fg)]",
          "data-[state=complete]:bg-[var(--cp-solid)] data-[state=complete]:border-[var(--cp-solid)] data-[state=complete]:text-[var(--cp-contrast)]",
        ].join(" "),
        separator: "data-[state=complete]:bg-[var(--cp-solid)]",
      },
      subtle: {
        indicator: [
          "data-[state=incomplete]:bg-[var(--bg-muted)]",
          "data-[current]:bg-[var(--cp-muted)] data-[current]:text-[var(--cp-fg)]",
          "data-[state=complete]:bg-[var(--cp-emphasized)] data-[state=complete]:text-[var(--cp-fg)]",
        ].join(" "),
        separator: "data-[state=complete]:bg-[var(--cp-emphasized)]",
      },
    },

    size: {
      xs: {
        root: "gap-2.5",
        list: "[--steps-size:1.5rem] [--steps-icon-size:0.875rem] text-xs",
        title: "text-sm",
      },
      sm: {
        root: "gap-3",
        list: "[--steps-size:2rem] [--steps-icon-size:1rem] text-xs",
        title: "text-sm",
      },
      md: {
        root: "gap-4",
        list: "[--steps-size:2.5rem] [--steps-icon-size:1rem] text-sm",
        title: "text-sm",
      },
      lg: {
        root: "gap-6",
        list: "[--steps-size:2.75rem] [--steps-icon-size:1.25rem] text-base",
        title: "text-base",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
    orientation: "horizontal",
  },
}
