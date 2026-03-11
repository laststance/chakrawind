/**
 * Collapsible recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/collapsible.ts
 *
 * Animation names reference keyframes defined in chakra.css or the host app.
 */
export const collapsibleSlotRecipeTw = {
  className: "chakra-collapsible",
  slots: ["root", "trigger", "content"],
  base: {
    root: "",
    trigger: "",
    content: [
      "overflow-hidden",
      "data-[state=open]:animate-[expand-height,fade-in] data-[state=open]:duration-200",
      "data-[state=open]:[&[data-has-collapsed-size]]:animate-[expand-height]",
      "data-[state=closed]:animate-[collapse-height,fade-out] data-[state=closed]:duration-200",
      "data-[state=closed]:[&[data-has-collapsed-size]]:animate-[collapse-height]",
    ].join(" "),
  },
}
