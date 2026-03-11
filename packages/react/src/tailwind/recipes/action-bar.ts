/**
 * ActionBar slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/action-bar.ts
 *
 * Uses CSS custom properties for offset spacing and scrollbar compensation.
 * Animation properties reference CSS keyframes for open/close transitions.
 */
export const actionBarSlotRecipeTw = {
  className: "chakra-action-bar",
  slots: [
    "positioner",
    "content",
    "separator",
    "selectionTrigger",
    "closeTrigger",
  ],
  base: {
    positioner: [
      "fixed flex pointer-events-none inset-x-0",
      "[--action-bar-offset:1rem]",
    ].join(" "),
    content: [
      "bg-[var(--bg-panel)] shadow-md flex items-center gap-3",
      "rounded-xl py-2.5 px-3 pointer-events-auto",
      "translate-x-[calc(-1*var(--scrollbar-width)/2)]",
      "data-[state=open]:animate-[slide-from-bottom,fade-in] data-[state=open]:duration-200",
      "data-[state=closed]:animate-[slide-to-bottom,fade-out] data-[state=closed]:duration-100",
    ].join(" "),
    separator: "w-px h-5 bg-[var(--border-color)]",
    selectionTrigger: [
      "inline-flex items-center gap-2 self-stretch",
      "text-sm px-4 py-1 rounded-lg border border-dashed",
    ].join(" "),
    closeTrigger: "",
  },

  variants: {
    placement: {
      bottom: {
        positioner: [
          "bottom-[calc(env(safe-area-inset-bottom)+var(--action-bar-offset))]",
          "justify-center",
        ].join(" "),
      },
      "bottom-start": {
        positioner: [
          "bottom-[calc(env(safe-area-inset-bottom)+var(--action-bar-offset))]",
          "justify-start ps-[var(--action-bar-offset)]",
        ].join(" "),
      },
      "bottom-end": {
        positioner: [
          "bottom-[calc(env(safe-area-inset-bottom)+var(--action-bar-offset))]",
          "justify-end pe-[var(--action-bar-offset)]",
        ].join(" "),
      },
    },
  },

  defaultVariants: {
    placement: "bottom",
  },
}
