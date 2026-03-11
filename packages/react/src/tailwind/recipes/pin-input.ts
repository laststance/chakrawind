/**
 * Pin input slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/pin-input.ts
 *
 * Provides styling for PIN/OTP input fields with per-character
 * input boxes and optional attached mode.
 */
export const pinInputSlotRecipeTw = {
  className: "chakra-pin-input",
  slots: ["root", "label", "input", "control"],

  base: {
    root: "",
    label: "",
    input: [
      "w-full min-w-0 outline-0 relative appearance-none rounded-lg",
      "h-[var(--input-height)] min-w-[var(--input-height)]",
      "[--focus-color:var(--cp-focus-ring)] [--error-color:var(--border-error)]",
      "data-[invalid]:ring-[var(--error-color)] data-[invalid]:border-[var(--error-color)]",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
      "text-center w-[var(--input-height)]",
    ].join(" "),
    control: "inline-flex gap-2 isolate",
  },

  variants: {
    size: {
      "2xs": {
        root: "",
        label: "",
        input: "text-xs px-1 [--input-height:1.75rem]",
        control: "",
      },
      xs: {
        root: "",
        label: "",
        input: "text-xs px-1 [--input-height:2rem]",
        control: "",
      },
      sm: {
        root: "",
        label: "",
        input: "text-sm px-1 [--input-height:2.25rem]",
        control: "",
      },
      md: {
        root: "",
        label: "",
        input: "text-sm px-1 [--input-height:2.5rem]",
        control: "",
      },
      lg: {
        root: "",
        label: "",
        input: "text-base px-1 [--input-height:2.75rem]",
        control: "",
      },
      xl: {
        root: "",
        label: "",
        input: "text-base px-1 [--input-height:3rem]",
        control: "",
      },
      "2xl": {
        root: "",
        label: "",
        input: "text-lg px-1 [--input-height:4rem]",
        control: "",
      },
    },

    variant: {
      outline: {
        root: "",
        label: "",
        input: [
          "bg-transparent border border-[var(--border-color)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
        control: "",
      },
      subtle: {
        root: "",
        label: "",
        input: [
          "border border-transparent bg-[var(--bg-muted)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
        control: "",
      },
      flushed: {
        root: "",
        label: "",
        input: [
          "bg-transparent border-b border-b-[var(--border-color)] rounded-none px-0",
          "focus-visible:border-[var(--focus-color)] focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]",
          "focus-visible:data-[invalid]:border-[var(--error-color)] focus-visible:data-[invalid]:shadow-[0px_1px_0px_0px_var(--error-color)]",
        ].join(" "),
        control: "",
      },
    },

    attached: {
      true: {
        root: "",
        label: "",
        input: [
          "[&:not(:first-child)]:rounded-s-none",
          "[&:not(:last-child)]:rounded-e-none",
          "focus-visible:z-[1]",
        ].join(" "),
        control: "gap-0 -space-x-px",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
