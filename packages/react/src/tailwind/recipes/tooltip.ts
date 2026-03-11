/**
 * Tooltip slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/tooltip.ts
 *
 * Uses CSS custom properties for bg color and z-index.
 * Animation properties are skipped (handled by Ark UI / CSS keyframes).
 */
export const tooltipSlotRecipeTw = {
  className: "chakra-tooltip",
  slots: ["trigger", "arrow", "arrowTip", "positioner", "content"],
  base: {
    trigger: "",
    positioner: "",
    content: [
      "[--tooltip-bg:var(--bg-inverted)] bg-[var(--tooltip-bg)]",
      "text-[var(--fg-inverted)]",
      "px-2.5 py-1 rounded-lg font-medium text-xs",
      "shadow-md max-w-xs z-50",
      "origin-[var(--transform-origin)]",
      "data-[state=open]:animate-[scale-fade-in] data-[state=open]:duration-150",
      "data-[state=closed]:animate-[scale-fade-out] data-[state=closed]:duration-150",
    ].join(" "),
    arrow: "[--arrow-size:0.5rem] [--arrow-background:var(--tooltip-bg)]",
    arrowTip: "border-t border-l border-[var(--tooltip-bg)]",
  },
}
