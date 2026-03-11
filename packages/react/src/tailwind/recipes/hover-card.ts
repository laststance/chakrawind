/**
 * HoverCard slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/hover-card.ts
 *
 * Uses CSS custom properties for bg and z-index layering.
 * Animation properties are skipped (handled by Ark UI / CSS keyframes).
 */
export const hoverCardSlotRecipeTw = {
  className: "chakra-hover-card",
  slots: ["arrow", "arrowTip", "trigger", "positioner", "content"],
  base: {
    trigger: "",
    positioner: "",
    content: [
      "relative flex flex-col text-sm",
      "[--hovercard-bg:var(--bg-panel)] bg-[var(--hovercard-bg)]",
      "shadow-lg max-w-80 rounded-xl",
      "z-[calc(var(--hover-card-z-index,50)+var(--layer-index,0))]",
      "origin-[var(--transform-origin)] outline-0",
      "data-[state=open]:animate-[slide-fade-in] data-[state=open]:duration-150",
      "data-[state=closed]:animate-[slide-fade-out] data-[state=closed]:duration-100",
    ].join(" "),
    arrow: "[--arrow-size:0.75rem] [--arrow-background:var(--hovercard-bg)]",
    arrowTip: "border-t-[0.5px] border-l-[0.5px]",
  },

  variants: {
    size: {
      xs: { content: "p-3" },
      sm: { content: "p-4" },
      md: { content: "p-5" },
      lg: { content: "p-6" },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
