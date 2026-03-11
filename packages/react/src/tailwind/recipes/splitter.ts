/**
 * Splitter slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/splitter.ts
 *
 * Slots: root, panel, resizeTrigger, resizeTriggerIndicator,
 *        resizeTriggerSeparator
 */
export const splitterSlotRecipeTw = {
  className: "chakra-splitter",
  slots: [
    "root",
    "panel",
    "resizeTrigger",
    "resizeTriggerIndicator",
    "resizeTriggerSeparator",
  ],

  base: {
    root: "",
    panel: "",

    resizeTrigger: [
      "[--splitter-border-color:var(--border-color)]",
      "[--splitter-thumb-color:var(--bg)]",
      "[--splitter-thumb-size:0.5rem]",
      "[--splitter-thumb-inset:calc(var(--splitter-thumb-size)*-0.5)]",
      "[--splitter-border-size:1px]",
      "[--splitter-handle-size:1.5rem]",
      "outline-0 grid place-items-center relative",
      "focus:[--splitter-border-color:var(--border-emphasized)]",
      "focus:[--splitter-thumb-color:var(--cp-subtle)]",
      "data-[dragging]:[--splitter-thumb-color:var(--cp-focus-ring)]",
      "data-[orientation=horizontal]:min-w-[var(--splitter-thumb-size)]",
      "data-[orientation=horizontal]:mx-[var(--splitter-thumb-inset)]",
      "data-[orientation=vertical]:min-h-[var(--splitter-thumb-size)]",
      "data-[orientation=vertical]:my-[var(--splitter-thumb-inset)]",
    ].join(" "),

    resizeTriggerSeparator: [
      "absolute bg-[var(--splitter-border-color)]",
      "[[data-part='resize-trigger'][data-orientation=horizontal]_&]:inset-y-0",
      "[[data-part='resize-trigger'][data-orientation=horizontal]_&]:end-[calc(var(--splitter-thumb-size)*0.5)]",
      "[[data-part='resize-trigger'][data-orientation=horizontal]_&]:start-auto",
      "[[data-part='resize-trigger'][data-orientation=horizontal]_&]:w-[var(--splitter-border-size)]",
      "[[data-part='resize-trigger'][data-orientation=vertical]_&]:inset-x-0",
      "[[data-part='resize-trigger'][data-orientation=vertical]_&]:end-auto",
      "[[data-part='resize-trigger'][data-orientation=vertical]_&]:bottom-[calc(var(--splitter-thumb-size)*0.5)]",
      "[[data-part='resize-trigger'][data-orientation=vertical]_&]:h-[var(--splitter-border-size)]",
    ].join(" "),

    resizeTriggerIndicator: [
      "relative rounded-full bg-[var(--splitter-thumb-color)]",
      "shadow-xs border z-[1]",
      "[[data-part='resize-trigger'][data-orientation=horizontal]_&]:w-full",
      "[[data-part='resize-trigger'][data-orientation=horizontal]_&]:h-[var(--splitter-handle-size)]",
      "[[data-part='resize-trigger'][data-orientation=vertical]_&]:w-[var(--splitter-handle-size)]",
      "[[data-part='resize-trigger'][data-orientation=vertical]_&]:h-full",
      "[[data-part='resize-trigger'][data-focus]:focus-visible_&]:outline-2",
      "[[data-part='resize-trigger'][data-focus]:focus-visible_&]:outline-[var(--cp-focus-ring)]",
      "[[data-part='resize-trigger'][data-focus]:focus-visible_&]:outline-solid",
      "[[data-part='resize-trigger'][data-disabled]_&]:invisible",
    ].join(" "),
  },

  defaultVariants: {},
}
