/**
 * RadioGroup slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/radio-group.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * ItemControl slot styles are inlined from the radiomark recipe.
 */
export const radioGroupSlotRecipeTw = {
  className: "chakra-radio-group",
  slots: [
    "root",
    "label",
    "item",
    "itemText",
    "itemControl",
    "itemAddon",
    "itemIndicator",
  ],
  base: {
    root: "",
    item: [
      "inline-flex items-center relative font-medium",
      "data-[disabled]:cursor-not-allowed",
    ].join(" "),
    itemControl: [
      "inline-flex items-center justify-center shrink-0 align-top",
      "text-white border border-transparent rounded-full",
      "cursor-pointer",
      "focus-visible:outline-2 focus-visible:outline-[var(--cp-focus-ring)] focus-visible:outline-offset-2",
      "data-[invalid]:border-red-500",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      "[&_.dot]:h-full [&_.dot]:w-full [&_.dot]:rounded-full [&_.dot]:bg-current [&_.dot]:scale-[0.4]",
    ].join(" "),
    label: ["select-none text-sm", "data-[disabled]:opacity-50"].join(" "),
    itemText: "",
    itemAddon: "",
    itemIndicator: "",
  },

  variants: {
    variant: {
      outline: {
        itemControl: [
          "border border-inherit",
          "data-[state=checked]:text-[var(--cp-fg)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
          "[&_.dot]:scale-[0.6]",
        ].join(" "),
      },

      subtle: {
        itemControl: [
          "border bg-[var(--cp-muted)] border-[var(--cp-muted)] text-transparent",
          "data-[state=checked]:text-[var(--cp-fg)]",
        ].join(" "),
      },

      solid: {
        itemControl: [
          "border border-[var(--border-emphasized)]",
          "data-[state=checked]:bg-[var(--cp-solid)]",
          "data-[state=checked]:text-[var(--cp-contrast)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
      },
    },

    size: {
      xs: {
        item: "text-xs gap-1.5",
        itemControl: "w-3 h-3",
      },
      sm: {
        item: "text-sm gap-2",
        itemControl: "w-4 h-4",
      },
      md: {
        item: "text-sm gap-2.5",
        itemControl: "w-5 h-5",
      },
      lg: {
        item: "text-base gap-3",
        itemControl: "w-6 h-6",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
}
