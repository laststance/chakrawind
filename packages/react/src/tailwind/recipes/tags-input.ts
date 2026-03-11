/**
 * Tags Input slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/tags-input.ts
 *
 * Uses CSS custom properties for sizing/spacing and colorPalette tokens.
 * @example
 * ```tsx
 * <TagsInput variant="outline" size="md">
 *   <TagsInputLabel>Tags</TagsInputLabel>
 *   <TagsInputControl>
 *     <TagsInputInput />
 *   </TagsInputControl>
 * </TagsInput>
 * ```
 */
export const tagsInputSlotRecipeTw = {
  className: "tags-input",
  slots: [
    "root",
    "label",
    "control",
    "input",
    "item",
    "itemText",
    "itemInput",
    "itemPreview",
    "itemDeleteTrigger",
    "clearTrigger",
  ],

  base: {
    root: "flex flex-col gap-1.5 w-full",

    label: "font-medium text-sm disabled:opacity-50",

    control: [
      "[--focus-color:var(--cp-focus-ring)]",
      "[--error-color:var(--border-error)]",
      "min-h-[var(--tags-input-height)]",
      "[--input-height:var(--tags-input-height)]",
      "px-[var(--tags-input-px)] py-[var(--tags-input-py)]",
      "gap-[var(--tags-input-gap)]",
      "flex flex-wrap items-center rounded-lg relative",
      "transition-[border-color,box-shadow] duration-200",
      "disabled:opacity-50",
      "data-[invalid]:border-[var(--error-color)]",
    ].join(" "),

    input: [
      "flex-1 min-w-20 outline-none bg-transparent text-[var(--fg)]",
      "px-[calc(var(--tags-input-item-px)/1.25)]",
      "h-[var(--tags-input-item-height)]",
      "read-only:hidden",
    ].join(" "),

    item: "max-w-full min-w-0",

    itemText: "line-clamp-1 min-w-0",

    itemInput: [
      "outline-none bg-transparent min-w-[2ch] text-inherit",
      "px-[var(--tags-input-item-px)]",
      "h-[var(--tags-input-item-height)]",
    ].join(" "),

    itemPreview: [
      "h-[var(--tags-input-item-height)]",
      "select-none inline-flex items-center gap-1",
      "rounded-md px-[var(--tags-input-item-px)] max-w-full",
    ].join(" "),

    itemDeleteTrigger: [
      "flex items-center justify-center shrink-0",
      "w-[calc(var(--tags-input-item-height)/1.5)]",
      "h-[calc(var(--tags-input-item-height)/1.5)]",
      "cursor-pointer disabled:cursor-default",
      "-me-1 opacity-40",
      "hover:opacity-100",
      "[data-highlighted]_&:opacity-100",
      "[&_svg]:w-[80%] [&_svg]:h-[80%]",
    ].join(" "),

    clearTrigger: [
      "flex items-center justify-center",
      "w-[calc(var(--tags-input-item-height)/1.5)]",
      "h-[calc(var(--tags-input-item-height)/1.5)]",
      "cursor-pointer disabled:cursor-default",
      "text-[var(--fg-muted)]",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "rounded-md",
      "[&_svg]:w-5 [&_svg]:h-5",
    ].join(" "),
  },

  variants: {
    size: {
      xs: {
        root: [
          "[--tags-input-height:2rem]",
          "[--tags-input-px:0.375rem]",
          "[--tags-input-py:0.25rem]",
          "[--tags-input-gap:0.25rem]",
          "[--tags-input-item-height:1.5rem]",
          "[--tags-input-item-px:0.5rem]",
          "text-xs",
        ].join(" "),
      },
      sm: {
        root: [
          "[--tags-input-height:2.25rem]",
          "[--tags-input-px:0.375rem]",
          "[--tags-input-py:0.25rem]",
          "[--tags-input-gap:0.25rem]",
          "[--tags-input-item-height:1.5rem]",
          "[--tags-input-item-px:0.5rem]",
          "text-sm",
        ].join(" "),
      },
      md: {
        root: [
          "[--tags-input-height:2.5rem]",
          "[--tags-input-px:0.375rem]",
          "[--tags-input-py:0.25rem]",
          "[--tags-input-gap:0.25rem]",
          "[--tags-input-item-height:1.75rem]",
          "[--tags-input-item-px:0.5rem]",
          "text-sm",
        ].join(" "),
      },
      lg: {
        root: [
          "[--tags-input-height:2.75rem]",
          "[--tags-input-px:0.375rem]",
          "[--tags-input-py:0.25rem]",
          "[--tags-input-gap:0.25rem]",
          "[--tags-input-item-height:2rem]",
          "[--tags-input-item-px:0.5rem]",
          "text-base",
        ].join(" "),
      },
    },

    variant: {
      outline: {
        control: [
          "border bg-[var(--bg)]",
          "focus:outline focus:outline-1",
          "focus:outline-[var(--focus-color)]",
          "focus:border-[var(--focus-color)]",
          "focus:data-[invalid]:outline-[var(--error-color)]",
          "focus:data-[invalid]:border-[var(--error-color)]",
        ].join(" "),
        itemPreview: [
          "bg-[var(--cp-subtle)]",
          "data-[highlighted]:bg-[var(--cp-muted)]",
        ].join(" "),
      },
      subtle: {
        control: [
          "bg-[var(--bg-muted)] border border-transparent",
          "focus:outline focus:outline-1",
          "focus:outline-[var(--focus-color)]",
          "focus:border-[var(--focus-color)]",
          "focus:data-[invalid]:outline-[var(--error-color)]",
          "focus:data-[invalid]:border-[var(--error-color)]",
        ].join(" "),
        itemPreview: [
          "bg-[var(--bg)] border",
          "data-[highlighted]:bg-[var(--cp-subtle)]",
          "data-[highlighted]:border-[var(--cp-emphasized)]",
        ].join(" "),
      },
      flushed: {
        control: [
          "rounded-none px-0 bg-transparent",
          "border-b border-b-[var(--border-color)]",
          "focus:border-[var(--focus-color)]",
          "focus:shadow-[0px_1px_0px_0px_var(--focus-color)]",
        ].join(" "),
        itemPreview: [
          "bg-[var(--cp-subtle)]",
          "data-[highlighted]:bg-[var(--cp-muted)]",
        ].join(" "),
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
