/**
 * Fieldset slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/fieldset.ts
 *
 * Provides layout and styling for fieldset components
 * including legend, content, error text, and helper text.
 */
export const fieldsetSlotRecipeTw = {
  className: "chakra-fieldset",
  slots: ["root", "errorText", "helperText", "legend", "content"],

  base: {
    root: "flex flex-col w-full",
    content: "flex flex-col w-full",
    legend: "text-[var(--fg)] font-medium disabled:opacity-50",
    helperText: "text-[var(--fg-muted)] text-sm",
    errorText: [
      "inline-flex items-center text-[var(--fg-error)]",
      "gap-2 font-medium text-sm",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        root: "space-y-2",
        content: "gap-1.5",
        legend: "text-sm",
        helperText: "",
        errorText: "",
      },
      md: {
        root: "space-y-4",
        content: "gap-4",
        legend: "text-sm",
        helperText: "",
        errorText: "",
      },
      lg: {
        root: "space-y-6",
        content: "gap-4",
        legend: "text-base",
        helperText: "",
        errorText: "",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
