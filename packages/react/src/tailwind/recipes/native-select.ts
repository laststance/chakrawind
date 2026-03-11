/**
 * Native select slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/native-select.ts
 *
 * Provides styling for native HTML select elements with
 * a custom indicator overlay.
 */
export const nativeSelectSlotRecipeTw = {
  className: "chakra-native-select",
  slots: ["root", "field", "indicator"],

  base: {
    root: "h-fit flex w-full relative",
    field: [
      "w-full min-w-0 outline-0 appearance-none rounded-lg",
      "[--error-color:var(--border-error)]",
      "h-[var(--select-field-height)] [--input-height:var(--select-field-height)]",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
      "data-[invalid]:ring-[var(--error-color)] data-[invalid]:border-[var(--error-color)]",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "leading-normal",
      "[&>option]:bg-[var(--bg)] [&>optgroup]:bg-[var(--bg)]",
    ].join(" "),
    indicator: [
      "absolute inline-flex items-center justify-center",
      "pointer-events-none top-1/2 -translate-y-1/2 h-full",
      "text-[var(--fg-muted)]",
      "disabled:opacity-50",
      "data-[invalid]:text-[var(--fg-error)]",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
    ].join(" "),
  },

  variants: {
    variant: {
      outline: {
        root: "",
        field: "bg-transparent border border-[var(--border-color)]",
        indicator: "",
      },
      subtle: {
        root: "",
        field: "border border-transparent bg-[var(--bg-muted)]",
        indicator: "",
      },
      plain: {
        root: "",
        field: "bg-transparent text-[var(--fg)] focus-visible:ring-2",
        indicator: "",
      },
      ghost: {
        root: "",
        field: "bg-transparent data-[state=open]:bg-[var(--bg-muted)]",
        indicator: "",
      },
    },

    size: {
      xs: {
        root: "[--select-field-height:2rem]",
        field: "text-xs ps-2 pe-6",
        indicator: "text-sm end-1.5",
      },
      sm: {
        root: "[--select-field-height:2.25rem]",
        field: "text-sm ps-2.5 pe-8",
        indicator: "text-base end-2",
      },
      md: {
        root: "[--select-field-height:2.5rem]",
        field: "text-sm ps-3 pe-8",
        indicator: "text-lg end-2",
      },
      lg: {
        root: "[--select-field-height:2.75rem]",
        field: "text-base ps-4 pe-8",
        indicator: "text-xl end-3",
      },
      xl: {
        root: "[--select-field-height:3rem]",
        field: "text-base ps-[1.125rem] pe-10",
        indicator: "text-xl end-3",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
