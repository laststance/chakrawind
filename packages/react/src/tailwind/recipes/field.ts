/**
 * Field slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/field.ts
 *
 * Provides layout and styling for form field components
 * including label, error text, and helper text.
 */
export const fieldSlotRecipeTw = {
  className: "chakra-field",
  slots: [
    "root",
    "errorText",
    "helperText",
    "input",
    "label",
    "select",
    "textarea",
    "requiredIndicator",
  ],

  base: {
    root: "flex w-full relative gap-1.5",
    label: [
      "flex items-center text-start text-sm font-medium gap-1",
      "select-none disabled:opacity-50",
    ].join(" "),
    requiredIndicator: "text-[var(--fg-error)] leading-none",
    errorText: [
      "inline-flex items-center font-medium gap-1",
      "text-[var(--fg-error)] text-xs",
    ].join(" "),
    helperText: "text-[var(--fg-muted)] text-xs",
    input: "",
    select: "",
    textarea: "",
  },

  variants: {
    orientation: {
      vertical: {
        root: "flex-col items-start",
        label: "",
        requiredIndicator: "",
        errorText: "",
        helperText: "",
        input: "",
        select: "",
        textarea: "",
      },
      horizontal: {
        root: "flex-row items-center justify-between",
        label: "flex-[0_0_var(--field-label-width,80px)]",
        requiredIndicator: "",
        errorText: "",
        helperText: "",
        input: "",
        select: "",
        textarea: "",
      },
    },
  },

  defaultVariants: {
    orientation: "vertical",
  },
}
