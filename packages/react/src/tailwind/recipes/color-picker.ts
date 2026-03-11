/**
 * ColorPicker slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/color-picker.ts
 *
 * Slots: root, control, label, trigger, positioner, content, area,
 *        areaThumb, valueText, areaBackground, channelSlider,
 *        channelSliderLabel, channelSliderTrack, channelSliderThumb,
 *        channelSliderValueText, channelInput, transparencyGrid,
 *        swatchGroup, swatchTrigger, swatchIndicator, swatch,
 *        eyeDropperTrigger, formatTrigger, formatSelect, view,
 *        channelText
 */
export const colorPickerSlotRecipeTw = {
  className: "chakra-color-picker",
  slots: [
    "root",
    "control",
    "label",
    "trigger",
    "positioner",
    "content",
    "area",
    "areaThumb",
    "valueText",
    "areaBackground",
    "channelSlider",
    "channelSliderLabel",
    "channelSliderTrack",
    "channelSliderThumb",
    "channelSliderValueText",
    "channelInput",
    "transparencyGrid",
    "swatchGroup",
    "swatchTrigger",
    "swatchIndicator",
    "swatch",
    "eyeDropperTrigger",
    "formatTrigger",
    "formatSelect",
    "view",
    "channelText",
  ],

  base: {
    root: "flex flex-col gap-1.5",

    label: ["text-[var(--fg)] font-medium text-sm", "disabled:opacity-50"].join(
      " ",
    ),

    valueText: "text-start",

    control: "flex items-center flex-row gap-2 relative",

    swatchTrigger: "flex items-center justify-center",

    trigger: [
      "flex items-center justify-center flex-row shrink-0 gap-2",
      "text-sm min-h-[var(--input-height)] min-w-[var(--input-height)]",
      "px-1 rounded-lg",
      "disabled:opacity-50",
      "[--focus-color:var(--cp-focus-ring)]",
      "focus-visible:border-[var(--focus-color)]",
      "focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--focus-color)]",
      "[&[data-fit-content]]:[--input-height:unset]",
      "[&[data-fit-content]]:px-0",
      "[&[data-fit-content]]:border-0",
    ].join(" "),

    content: [
      "flex flex-col bg-[var(--bg-panel)] rounded-xl shadow-lg w-64 p-4 gap-3",
      "[--color-picker-z-index:var(--z-popover)]",
      "z-[calc(var(--color-picker-z-index)+var(--layer-index,0))]",
      "data-[state=open]:animate-[slide-fade-in_150ms_ease-out]",
      "data-[state=closed]:animate-[slide-fade-out_100ms_ease-in]",
    ].join(" "),

    area: "h-[180px] rounded-lg overflow-hidden",

    areaThumb: [
      "rounded-full h-[var(--thumb-size)] w-[var(--thumb-size)]",
      "border-2 border-white shadow-sm",
      "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
    ].join(" "),

    areaBackground: "h-full",

    channelSlider: "rounded-lg flex-1",

    channelSliderTrack: [
      "h-[var(--slider-height)] rounded-[inherit]",
      "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]",
    ].join(" "),

    channelText: "text-xs text-[var(--fg-muted)] font-medium capitalize",

    swatchGroup: "flex flex-row flex-wrap gap-2",

    swatch: [
      "inline-flex items-center justify-center shrink-0",
      "w-[var(--swatch-size)] h-[var(--swatch-size)]",
      "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]",
      "rounded",
    ].join(" "),

    swatchIndicator: "text-white rounded-full",

    channelSliderThumb: [
      "rounded-full h-[var(--thumb-size)] w-[var(--thumb-size)]",
      "border-2 border-white shadow-sm -translate-x-1/2 -translate-y-1/2",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    ].join(" "),

    channelInput: [
      "w-full min-w-0 outline-0 relative appearance-none text-start rounded-lg",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "h-[var(--input-height)] min-w-[var(--input-height)]",
      "[--focus-color:var(--cp-focus-ring)]",
      "[--error-color:var(--border-error)]",
      "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0",
      "[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0",
    ].join(" "),

    formatSelect: [
      "text-xs uppercase border min-h-6",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "rounded-lg",
    ].join(" "),

    transparencyGrid: "rounded-lg",

    view: "flex flex-col gap-2",

    positioner: "",
    channelSliderLabel: "",
    channelSliderValueText: "",
    eyeDropperTrigger: "",
    formatTrigger: "",
  },

  variants: {
    size: {
      "2xs": {
        channelInput: "text-xs px-2 [--input-height:1.75rem]",
        swatch: "[--swatch-size:1.125rem]",
        trigger: "[--input-height:1.75rem]",
        area: "[--thumb-size:0.75rem]",
        channelSlider: "[--slider-height:0.75rem] [--thumb-size:0.75rem]",
      },
      xs: {
        channelInput: "text-xs px-2 [--input-height:2rem]",
        swatch: "[--swatch-size:1.25rem]",
        trigger: "[--input-height:2rem]",
        area: "[--thumb-size:0.875rem]",
        channelSlider: "[--slider-height:0.875rem] [--thumb-size:0.875rem]",
      },
      sm: {
        channelInput: "text-sm px-2.5 [--input-height:2.25rem]",
        swatch: "[--swatch-size:1.5rem]",
        trigger: "[--input-height:2.25rem]",
        area: "[--thumb-size:0.875rem]",
        channelSlider: "[--slider-height:0.875rem] [--thumb-size:0.875rem]",
      },
      md: {
        channelInput: "text-sm px-3 [--input-height:2.5rem]",
        swatch: "[--swatch-size:1.75rem]",
        trigger: "[--input-height:2.5rem]",
        area: "[--thumb-size:0.875rem]",
        channelSlider: "[--slider-height:0.875rem] [--thumb-size:0.875rem]",
      },
      lg: {
        channelInput: "text-base px-4 [--input-height:2.75rem]",
        swatch: "[--swatch-size:1.75rem]",
        trigger: "[--input-height:2.75rem]",
        area: "[--thumb-size:0.875rem]",
        channelSlider: "[--slider-height:0.875rem] [--thumb-size:0.875rem]",
      },
      xl: {
        channelInput: "text-base px-4.5 [--input-height:3rem]",
        swatch: "[--swatch-size:2rem]",
        trigger: "[--input-height:3rem]",
        area: "[--thumb-size:0.875rem]",
        channelSlider: "[--slider-height:0.875rem] [--thumb-size:0.875rem]",
      },
      "2xl": {
        channelInput: "text-lg px-5 [--input-height:4rem]",
        swatch: "[--swatch-size:2.5rem]",
        trigger: "[--input-height:4rem]",
        area: "[--thumb-size:0.875rem]",
        channelSlider: "[--slider-height:0.875rem] [--thumb-size:0.875rem]",
      },
    },

    variant: {
      outline: {
        channelInput: [
          "bg-transparent border border-[var(--border-color)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
        trigger: "border",
      },
      subtle: {
        channelInput: [
          "border border-transparent bg-[var(--bg-muted)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
        trigger: "border border-transparent bg-[var(--bg-muted)]",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
