/**
 * Checkbox slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/checkbox.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * Control slot styles are inlined from the checkmark recipe.
 */
export const checkboxSlotRecipeTw = {
  className: "chakra-checkbox",
  slots: ["root", "control", "label", "indicator", "group"],
  base: {
    root: "inline-flex gap-2 items-center align-top relative",
    control: [
      "inline-flex items-center justify-center shrink-0",
      "text-white border border-transparent rounded-md",
      "cursor-pointer",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
      "[&_svg]:w-full [&_svg]:h-full",
      "data-[invalid]:border-[var(--border-error)]",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
    ].join(" "),
    label: ["font-medium select-none", "data-[disabled]:opacity-50"].join(" "),
    indicator: "",
    group: "",
  },

  variants: {
    size: {
      xs: {
        root: "gap-1.5",
        label: "text-xs",
        control: "w-3 h-3",
      },
      sm: {
        root: "gap-2",
        label: "text-sm",
        control: "w-4 h-4",
      },
      md: {
        root: "gap-2.5",
        label: "text-sm",
        control: "w-5 h-5 p-0.5",
      },
      lg: {
        root: "gap-3",
        label: "text-base",
        control: "w-6 h-6 p-0.5",
      },
    },

    variant: {
      outline: {
        control: [
          "border-[var(--border-color)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-fg)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
        ].join(" "),
      },
      solid: {
        control: [
          "border-[var(--border-emphasized)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:bg-[var(--cp-solid)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-contrast)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:border-[var(--cp-solid)]",
        ].join(" "),
      },
      subtle: {
        control: [
          "bg-[var(--cp-muted)] border-[var(--cp-muted)]",
          "[&:is([data-state=checked],[data-state=indeterminate])]:text-[var(--cp-fg)]",
        ].join(" "),
      },
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
}
