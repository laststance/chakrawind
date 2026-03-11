/**
 * Toast slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/toast.ts
 *
 * Uses CSS custom properties for dynamic positioning, transitions, and
 * data-type attributes for status-based styling (warning, success, error).
 */
export const toastSlotRecipeTw = {
  className: "chakra-toast",
  slots: [
    "root",
    "title",
    "description",
    "indicator",
    "closeTrigger",
    "actionTrigger",
  ],
  base: {
    root: [
      "w-full flex items-start relative gap-3",
      "py-4 ps-4 pe-6 rounded-lg",
      "translate-[var(--x)_var(--y)] scale-[var(--scale)]",
      "z-[var(--z-index)] h-[var(--height)] opacity-[var(--opacity)]",
      "will-change-[translate,opacity,scale]",
      "transition-[translate,scale,opacity,height,box-shadow]",
      "duration-[400ms] ease-[cubic-bezier(0.21,1.02,0.73,1)]",
      "data-[state=closed]:transition-[translate,scale,opacity]",
      "data-[state=closed]:duration-[400ms]",
      "data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]",
      "bg-[var(--bg-panel)] text-[var(--fg)] shadow-xl",
      "[--toast-trigger-bg:var(--bg-muted)]",
      "[&[data-type=warning]]:bg-orange-600 [&[data-type=warning]]:text-white",
      "[&[data-type=warning]]:[--toast-trigger-bg:rgb(255_255_255/0.1)]",
      "[&[data-type=warning]]:[--toast-border-color:rgb(255_255_255/0.4)]",
      "[&[data-type=success]]:bg-green-600 [&[data-type=success]]:text-white",
      "[&[data-type=success]]:[--toast-trigger-bg:rgb(255_255_255/0.1)]",
      "[&[data-type=success]]:[--toast-border-color:rgb(255_255_255/0.4)]",
      "[&[data-type=error]]:bg-red-600 [&[data-type=error]]:text-white",
      "[&[data-type=error]]:[--toast-trigger-bg:rgb(255_255_255/0.1)]",
      "[&[data-type=error]]:[--toast-border-color:rgb(255_255_255/0.4)]",
    ].join(" "),
    title: "font-medium text-sm me-2",
    description: "inline text-sm opacity-80",
    indicator: "shrink-0 w-5 h-5",
    actionTrigger: [
      "text-sm font-medium h-8 px-3 rounded-lg self-center",
      "border border-[var(--toast-border-color,inherit)]",
      "transition-[background] duration-200",
      "hover:bg-[var(--toast-trigger-bg)]",
    ].join(" "),
    closeTrigger: [
      "absolute top-1 right-1 p-1",
      "inline-flex items-center justify-center",
      "text-[currentColor]/60 rounded-lg text-base",
      "transition-[background] duration-200",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
    ].join(" "),
  },
}
