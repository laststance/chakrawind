/**
 * Popover slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/popover.ts
 *
 * Uses CSS custom properties for bg, sizing, and z-index layering.
 * Animation properties are skipped (handled by Ark UI / CSS keyframes).
 */
export const popoverSlotRecipeTw = {
  className: "chakra-popover",
  slots: [
    "content",
    "title",
    "anchor",
    "arrow",
    "arrowTip",
    "trigger",
    "indicator",
    "positioner",
    "description",
    "closeTrigger",
    "header",
    "body",
    "footer",
  ],
  base: {
    trigger: "",
    anchor: "",
    title: "",
    description: "",
    indicator: "",
    positioner: "",
    closeTrigger: "",
    content: [
      "relative flex flex-col text-sm",
      "[--popover-bg:var(--bg-panel)] bg-[var(--popover-bg)]",
      "shadow-lg rounded-xl",
      "[--popover-size:theme(spacing.xs)]",
      "[--popover-mobile-size:calc(100dvw-1rem)]",
      "w-[min(var(--popover-mobile-size),var(--popover-size))]",
      "sm:w-[var(--popover-size)]",
      "z-[calc(var(--popover-z-index,50)+var(--layer-index,0))]",
      "outline-0 origin-[var(--transform-origin)]",
      "max-h-[var(--available-height)]",
      "data-[state=open]:animate-[scale-fade-in] data-[state=open]:duration-150",
      "data-[state=closed]:animate-[scale-fade-out] data-[state=closed]:duration-100",
    ].join(" "),
    header: "px-[var(--popover-padding)] pt-[var(--popover-padding)]",
    body: "p-[var(--popover-padding)] flex-1",
    footer: [
      "flex items-center",
      "px-[var(--popover-padding)] pb-[var(--popover-padding)]",
    ].join(" "),
    arrow: "[--arrow-size:0.75rem] [--arrow-background:var(--popover-bg)]",
    arrowTip: "border-t border-l",
  },

  variants: {
    size: {
      xs: { content: "[--popover-padding:0.75rem]" },
      sm: { content: "[--popover-padding:1rem]" },
      md: { content: "[--popover-padding:1.25rem]" },
      lg: { content: "[--popover-padding:1.5rem]" },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
