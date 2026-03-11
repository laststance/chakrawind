/**
 * Timeline recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/timeline.ts
 *
 * Uses CSS custom properties for dynamic indicator sizing and separator layout.
 * colorPalette tokens mapped to --cp-* CSS vars.
 */
export const timelineSlotRecipeTw = {
  className: "chakra-timeline",
  slots: [
    "root",
    "item",
    "content",
    "separator",
    "indicator",
    "connector",
    "title",
    "description",
  ],
  base: {
    root: [
      "flex flex-col w-full",
      "[--timeline-thickness:1px]",
      "[--timeline-gutter:4px]",
    ].join(" "),
    item: [
      "[--timeline-content-gap:var(--spacing-6,1.5rem)]",
      "flex relative items-start shrink-0 gap-4",
      "last:[--timeline-content-gap:0]",
    ].join(" "),
    separator: [
      "[display:var(--timeline-separator-display)]",
      "absolute border-s-[var(--timeline-thickness)]",
      "ms-[calc(-1*var(--timeline-thickness)/2)]",
      "start-[calc(var(--timeline-indicator-size)/2)]",
      "inset-y-0 border-[var(--border-color)]",
    ].join(" "),
    indicator: [
      "outline-2 outline-[var(--bg,#fff)]",
      "relative shrink-0",
      "w-[var(--timeline-indicator-size)] h-[var(--timeline-indicator-size)]",
      "text-[var(--timeline-font-size)]",
      "flex items-center justify-center",
      "rounded-full font-medium",
    ].join(" "),
    connector: "self-stretch relative",
    content: [
      "pb-[var(--timeline-content-gap)]",
      "flex flex-col w-full gap-2",
    ].join(" "),
    title: [
      "flex font-medium flex-wrap gap-1.5 items-center",
      "mt-[var(--timeline-margin)]",
    ].join(" "),
    description: "text-[var(--fg-muted)] text-xs",
  },

  variants: {
    variant: {
      subtle: {
        indicator: "bg-[var(--cp-muted)]",
      },
      solid: {
        indicator: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      },
      outline: {
        indicator: [
          "bg-[var(--bg,#fff)]",
          "border border-[var(--cp-muted)]",
        ].join(" "),
      },
      plain: {},
    },

    showLastSeparator: {
      true: {
        item: "last:[--timeline-separator-display:initial]",
      },
      false: {
        item: "last:[--timeline-separator-display:none]",
      },
    },

    size: {
      sm: {
        root: "[--timeline-indicator-size:1rem] [--timeline-font-size:0.625rem]",
        title: "text-xs",
      },
      md: {
        root: "[--timeline-indicator-size:1.25rem] [--timeline-font-size:0.75rem]",
        title: "text-sm",
      },
      lg: {
        root: "[--timeline-indicator-size:1.5rem] [--timeline-font-size:0.75rem]",
        title: "mt-0.5 text-sm",
      },
      xl: {
        root: "[--timeline-indicator-size:2rem] [--timeline-font-size:0.875rem]",
        title: "mt-1.5 text-sm",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
    showLastSeparator: false,
  },
}
