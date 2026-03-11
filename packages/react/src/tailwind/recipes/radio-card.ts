/**
 * RadioCard slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/radio-card.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * ItemIndicator slot styles are inlined from the radiomark recipe.
 */
export const radioCardSlotRecipeTw = {
  className: "chakra-radio-card",
  slots: [
    "root",
    "label",
    "item",
    "itemText",
    "itemControl",
    "itemAddon",
    "itemIndicator",
    "itemContent",
    "itemDescription",
  ],
  base: {
    root: "flex flex-col gap-1.5 isolate",
    item: [
      "flex-1 flex flex-col select-none relative rounded-lg",
      "focus:bg-[var(--cp-muted)]/20",
      "data-[disabled]:opacity-50",
      "data-[state=checked]:z-[1]",
    ].join(" "),
    label: [
      "inline-flex font-medium text-sm",
      "data-[disabled]:opacity-50",
    ].join(" "),
    itemText: "font-medium flex-1",
    itemDescription: "opacity-[0.64] text-sm",
    itemControl: [
      "inline-flex flex-1 relative rounded-[inherit]",
      "justify-[var(--radio-card-justify)] items-[var(--radio-card-align)]",
      "data-[disabled]:bg-[var(--bg-muted)]",
    ].join(" "),
    itemIndicator: [
      "inline-flex items-center justify-center shrink-0 align-top",
      "text-white border border-transparent rounded-full",
      "cursor-pointer",
      "focus-visible:outline-2 focus-visible:outline-[var(--cp-focus-ring)] focus-visible:outline-offset-2",
      "data-[invalid]:border-red-500",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      "[&_.dot]:h-full [&_.dot]:w-full [&_.dot]:rounded-full [&_.dot]:bg-current [&_.dot]:scale-[0.4]",
    ].join(" "),
    itemAddon: [
      "rounded-b-[inherit]",
      "data-[disabled]:text-[var(--fg-muted)]",
    ].join(" "),
    itemContent: [
      "flex flex-col flex-1 gap-1",
      "justify-[var(--radio-card-justify)] items-[var(--radio-card-align)]",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        item: "text-sm",
        itemControl: "p-3 gap-1.5",
        itemAddon: "px-3 py-1.5 border-t",
        itemIndicator: "w-4 h-4",
      },
      md: {
        item: "text-sm",
        itemControl: "p-4 gap-2.5",
        itemAddon: "px-4 py-2 border-t",
        itemIndicator: "w-5 h-5",
      },
      lg: {
        item: "text-base",
        itemControl: "p-4 gap-3.5",
        itemAddon: "px-4 py-2 border-t",
        itemIndicator: "w-6 h-6",
      },
    },

    variant: {
      surface: {
        item: [
          "border",
          "data-[state=checked]:bg-[var(--cp-subtle)]",
          "data-[state=checked]:text-[var(--cp-fg)]",
          "data-[state=checked]:border-[var(--cp-muted)]",
        ].join(" "),
        itemIndicator: [
          "border border-[var(--border-emphasized)]",
          "data-[state=checked]:bg-[var(--cp-solid)]",
          "data-[state=checked]:text-[var(--cp-contrast)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
      },

      subtle: {
        item: "bg-[var(--bg-muted)]",
        itemControl: [
          "data-[state=checked]:bg-[var(--cp-muted)]",
          "data-[state=checked]:text-[var(--cp-fg)]",
        ].join(" "),
        itemIndicator: [
          "border border-inherit",
          "data-[state=checked]:text-[var(--cp-fg)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
          "[&_.dot]:scale-[0.6]",
        ].join(" "),
      },

      outline: {
        item: [
          "border",
          "data-[state=checked]:shadow-[0_0_0_1px_var(--cp-solid)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
        itemIndicator: [
          "border border-[var(--border-emphasized)]",
          "data-[state=checked]:bg-[var(--cp-solid)]",
          "data-[state=checked]:text-[var(--cp-contrast)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
      },

      solid: {
        item: [
          "border",
          "data-[state=checked]:bg-[var(--cp-solid)]",
          "data-[state=checked]:text-[var(--cp-contrast)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
        itemControl: "data-[disabled]:bg-[unset]",
        itemIndicator: [
          "bg-[var(--bg)] border border-inherit",
          "data-[state=checked]:text-[var(--cp-solid)]",
          "data-[state=checked]:border-current",
        ].join(" "),
      },
    },

    justify: {
      start: {
        item: "[--radio-card-justify:flex-start]",
      },
      end: {
        item: "[--radio-card-justify:flex-end]",
      },
      center: {
        item: "[--radio-card-justify:center]",
      },
    },

    align: {
      start: {
        item: "[--radio-card-align:flex-start]",
        itemControl: "text-start",
      },
      end: {
        item: "[--radio-card-align:flex-end]",
        itemControl: "text-end",
      },
      center: {
        item: "[--radio-card-align:center]",
        itemControl: "text-center",
      },
    },

    orientation: {
      vertical: {
        itemControl: "flex-col",
      },
      horizontal: {
        itemControl: "flex-row",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
    align: "start",
    orientation: "horizontal",
  },
}
