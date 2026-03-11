/**
 * SegmentGroup slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/segment-group.ts
 *
 * Uses CSS custom properties for segment radius, indicator background, and shadow.
 * Items use ::before pseudo-element for separator lines between segments.
 */
export const segmentGroupSlotRecipeTw = {
  className: "chakra-segment-group",
  slots: ["root", "item", "indicator"],
  base: {
    root: [
      "[--segment-radius:theme(borderRadius.lg)]",
      "[--segment-indicator-bg:var(--bg)]",
      "dark:[--segment-indicator-bg:var(--bg-emphasized)]",
      "[--segment-indicator-shadow:theme(boxShadow.sm)]",
      "rounded-[var(--segment-radius)]",
      "inline-flex shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]",
      "min-w-max text-center relative isolate",
      "bg-[var(--bg-muted)]",
      "data-[orientation=vertical]:flex-col",
    ].join(" "),
    item: [
      "flex items-center justify-center select-none",
      "text-sm relative text-[var(--fg)]",
      "rounded-[var(--segment-radius)]",
      "data-[disabled]:opacity-50",
      "[&:has(input:focus-visible)]:ring-2 [&:has(input:focus-visible)]:ring-offset-2 [&:has(input:focus-visible)]:ring-[var(--focus-ring-color)]",
      "before:content-[''] before:absolute before:bg-[var(--border-color)] before:transition-opacity before:duration-200",
      "data-[orientation=horizontal]:before:[inset-inline-start:0] data-[orientation=horizontal]:before:[inset-block:theme(spacing[1.5])] data-[orientation=horizontal]:before:w-px",
      "data-[orientation=vertical]:before:[inset-block-start:0] data-[orientation=vertical]:before:[inset-inline:theme(spacing[1.5])] data-[orientation=vertical]:before:h-px",
      "[&+[data-state=checked]]:before:opacity-0 [&[data-state=checked]+&]:before:opacity-0 [&:first-of-type]:before:opacity-0",
      "[&[data-state=checked][data-ssr]]:shadow-sm [&[data-state=checked][data-ssr]]:bg-[var(--bg)] [&[data-state=checked][data-ssr]]:rounded-[var(--segment-radius)]",
    ].join(" "),
    indicator: [
      "shadow-[var(--segment-indicator-shadow)]",
      "absolute bg-[var(--segment-indicator-bg)]",
      "w-[var(--width)] h-[var(--height)]",
      "top-[var(--top)] left-[var(--left)]",
      "-z-[1] rounded-[var(--segment-radius)]",
    ].join(" "),
  },

  variants: {
    size: {
      xs: {
        item: "text-xs px-3 gap-1 h-6",
      },
      sm: {
        item: "text-sm px-4 gap-2 h-8",
      },
      md: {
        item: "text-sm px-4 gap-2 h-10",
      },
      lg: {
        item: "text-base px-[1.125rem] gap-3 h-11",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
