/**
 * Number input slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/number-input.ts
 *
 * Provides styling for number input with increment/decrement controls.
 * Uses CSS custom properties for stepper width and radius.
 */
export const numberInputSlotRecipeTw = {
  className: "chakra-number-input",
  slots: [
    "root",
    "label",
    "input",
    "control",
    "valueText",
    "incrementTrigger",
    "decrementTrigger",
    "scrubber",
  ],

  base: {
    root: "relative z-0 isolate",
    input: [
      "w-full min-w-0 outline-0 relative appearance-none text-start rounded-lg",
      "h-[var(--input-height)] min-w-[var(--input-height)]",
      "[--focus-color:var(--cp-focus-ring)] [--error-color:var(--border-error)]",
      "data-[invalid]:ring-[var(--error-color)] data-[invalid]:border-[var(--error-color)]",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
      "align-top pe-[calc(var(--stepper-width)+0.5rem)]",
    ].join(" "),
    control: [
      "flex flex-col absolute top-0 end-0 m-px",
      "w-[var(--stepper-width)] h-[calc(100%-2px)] z-[1]",
      "border-s divide-y",
    ].join(" "),
    incrementTrigger: [
      "flex justify-center items-center flex-1",
      "select-none cursor-pointer leading-none",
      "text-[var(--fg-muted)]",
      "[--stepper-base-radius:var(--radius-md)]",
      "[--stepper-radius:calc(var(--stepper-base-radius)+1px)]",
      "rounded-te-[var(--stepper-radius)]",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
      "disabled:opacity-50",
      "hover:bg-[var(--bg-muted)]",
      "active:bg-[var(--bg-emphasized)]",
    ].join(" "),
    decrementTrigger: [
      "flex justify-center items-center flex-1",
      "select-none cursor-pointer leading-none",
      "text-[var(--fg-muted)]",
      "[--stepper-base-radius:var(--radius-md)]",
      "[--stepper-radius:calc(var(--stepper-base-radius)+1px)]",
      "rounded-be-[var(--stepper-radius)]",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
      "disabled:opacity-50",
      "hover:bg-[var(--bg-muted)]",
      "active:bg-[var(--bg-emphasized)]",
    ].join(" "),
    valueText: "font-medium [font-feature-settings:pnum] proportional-nums",
    label: "",
    scrubber: "",
  },

  variants: {
    size: {
      xs: {
        root: "",
        label: "",
        input: "text-xs px-2 [--input-height:2rem]",
        control: "text-[0.625rem] [--stepper-width:1rem]",
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
      },
      sm: {
        root: "",
        label: "",
        input: "text-sm px-2.5 [--input-height:2.25rem]",
        control: "text-xs [--stepper-width:1.25rem]",
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
      },
      md: {
        root: "",
        label: "",
        input: "text-sm px-3 [--input-height:2.5rem]",
        control: "text-sm [--stepper-width:1.5rem]",
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
      },
      lg: {
        root: "",
        label: "",
        input: "text-base px-4 [--input-height:2.75rem]",
        control: "text-sm [--stepper-width:1.5rem]",
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
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
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
      },
      subtle: {
        root: "",
        label: "",
        input: [
          "border border-transparent bg-[var(--bg-muted)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
        control: "",
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
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
        valueText: "",
        incrementTrigger: "",
        decrementTrigger: "",
        scrubber: "",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
