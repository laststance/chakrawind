/**
 * CheckboxCard slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/checkbox-card.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * Indicator slot styles are inlined from the checkmark recipe.
 */
export const checkboxCardSlotRecipeTw = {
  className: "chakra-checkbox-card",
  slots: [
    "root",
    "control",
    "label",
    "description",
    "addon",
    "indicator",
    "content",
  ],
  base: {
    root: [
      "flex flex-col select-none relative rounded-lg flex-1",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
      "data-[disabled]:opacity-80",
      "data-[invalid]:outline data-[invalid]:outline-2 data-[invalid]:outline-[var(--border-error)]",
    ].join(" "),
    control: [
      "inline-flex flex-1 relative rounded-[inherit]",
      "justify-[var(--checkbox-card-justify)] items-[var(--checkbox-card-align)]",
    ].join(" "),
    label: [
      "font-medium flex items-center gap-2 flex-1",
      "data-[disabled]:opacity-50",
    ].join(" "),
    description: ["opacity-[0.64] text-sm", "data-[disabled]:opacity-50"].join(
      " ",
    ),
    addon: "data-[disabled]:opacity-50",
    indicator: [
      "inline-flex items-center justify-center shrink-0",
      "text-white border border-transparent rounded-md",
      "cursor-pointer",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
      "[&_svg]:w-full [&_svg]:h-full",
      "data-[invalid]:border-[var(--border-error)]",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
    ].join(" "),
    content: [
      "flex flex-col flex-1 gap-1",
      "justify-[var(--checkbox-card-justify)] items-[var(--checkbox-card-align)]",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        root: "text-sm",
        control: "p-3 gap-1.5",
        addon: "px-3 py-1.5 border-t",
        indicator: "w-4 h-4",
      },
      md: {
        root: "text-sm",
        control: "p-4 gap-2.5",
        addon: "px-4 py-2 border-t",
        indicator: "w-5 h-5 p-0.5",
      },
      lg: {
        root: "text-base",
        control: "p-4 gap-3.5",
        addon: "px-4 py-2 border-t",
        indicator: "w-6 h-6 p-0.5",
      },
    },

    variant: {
      surface: {
        root: [
          "border border-[var(--border-color)]",
          "data-[state=checked]:bg-[var(--cp-subtle)]",
          "data-[state=checked]:text-[var(--cp-fg)]",
          "data-[state=checked]:border-[var(--cp-muted)]",
          "data-[disabled]:bg-[var(--bg-muted)]",
        ].join(" "),
        indicator: [
          "border-[var(--border-emphasized)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:bg-[var(--cp-solid)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-contrast)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
        ].join(" "),
      },

      subtle: {
        root: "bg-[var(--bg-muted)]",
        control: [
          "data-[state=checked]:bg-[var(--cp-muted)]",
          "data-[state=checked]:text-[var(--cp-fg)]",
        ].join(" "),
        indicator: [
          "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-fg)]",
        ].join(" "),
      },

      outline: {
        root: [
          "border border-[var(--border-color)]",
          "data-[state=checked]:shadow-[0_0_0_1px_var(--cp-solid)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
        indicator: [
          "border-[var(--border-emphasized)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:bg-[var(--cp-solid)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-contrast)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
        ].join(" "),
      },

      solid: {
        root: [
          "border",
          "data-[state=checked]:bg-[var(--cp-solid)]",
          "data-[state=checked]:text-[var(--cp-contrast)]",
          "data-[state=checked]:border-[var(--cp-solid)]",
        ].join(" "),
        indicator: [
          "border-[var(--border-color)] text-[var(--cp-fg)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
        ].join(" "),
      },
    },

    justify: {
      start: {
        root: "[--checkbox-card-justify:flex-start]",
      },
      end: {
        root: "[--checkbox-card-justify:flex-end]",
      },
      center: {
        root: "[--checkbox-card-justify:center]",
      },
    },

    align: {
      start: {
        root: "[--checkbox-card-align:flex-start]",
        content: "text-start",
      },
      end: {
        root: "[--checkbox-card-align:flex-end]",
        content: "text-end",
      },
      center: {
        root: "[--checkbox-card-align:center]",
        content: "text-center",
      },
    },

    orientation: {
      vertical: {
        control: "flex-col",
      },
      horizontal: {
        control: "flex-row",
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
