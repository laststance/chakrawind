/**
 * Slider slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/slider.ts
 *
 * Slots: root, label, thumb, valueText, track, range, control,
 *        markerGroup, marker, draggingIndicator, markerIndicator,
 *        markerLabel
 */
export const sliderSlotRecipeTw = {
  className: "chakra-slider",
  slots: [
    "root",
    "label",
    "thumb",
    "valueText",
    "track",
    "range",
    "control",
    "markerGroup",
    "marker",
    "draggingIndicator",
    "markerIndicator",
    "markerLabel",
  ],

  base: {
    root: "flex flex-col gap-1 text-sm relative isolate touch-none",

    label: "font-medium text-sm",

    control: "inline-flex items-center relative",

    track: "overflow-hidden rounded-full flex-1",

    range: "w-[inherit] h-[inherit] disabled:bg-[var(--border-emphasized)]",

    markerGroup: "!absolute z-[1]",

    marker: [
      "flex items-center gap-[calc(var(--slider-thumb-size)/2)]",
      "text-[var(--fg-muted)] text-xs",
      "[--marker-bg:white]",
    ].join(" "),

    markerIndicator: [
      "w-[var(--slider-marker-size)] h-[var(--slider-marker-size)]",
      "rounded-full bg-[var(--marker-bg)]",
    ].join(" "),

    thumb: [
      "w-[var(--slider-thumb-size)] h-[var(--slider-thumb-size)]",
      "flex items-center justify-center outline-0 z-[2]",
      "rounded-full transition-shadow",
      "focus-visible:ring-[3px] focus-visible:ring-[var(--cp-focus-ring)]",
    ].join(" "),

    valueText: "",
    draggingIndicator: "",
    markerLabel: "",
  },

  variants: {
    size: {
      sm: {
        root: [
          "[--slider-thumb-size:1rem]",
          "[--slider-track-size:0.375rem]",
          "[--slider-marker-center:6px]",
          "[--slider-marker-size:0.25rem]",
          "[--slider-marker-inset:3px]",
        ].join(" "),
      },
      md: {
        root: [
          "[--slider-thumb-size:1.25rem]",
          "[--slider-track-size:0.5rem]",
          "[--slider-marker-center:8px]",
          "[--slider-marker-size:0.25rem]",
          "[--slider-marker-inset:4px]",
        ].join(" "),
      },
      lg: {
        root: [
          "[--slider-thumb-size:1.5rem]",
          "[--slider-track-size:0.625rem]",
          "[--slider-marker-center:9px]",
          "[--slider-marker-size:0.375rem]",
          "[--slider-marker-inset:5px]",
        ].join(" "),
      },
    },

    variant: {
      outline: {
        track:
          "shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] bg-[var(--bg-emphasized)]/72",
        range: "bg-[var(--cp-solid)]",
        thumb: [
          "border-2 border-[var(--cp-solid)] bg-[var(--bg)]",
          "disabled:bg-[var(--border-emphasized)] disabled:border-[var(--border-emphasized)]",
        ].join(" "),
      },
      solid: {
        track: "bg-[var(--cp-subtle)] disabled:bg-[var(--bg-muted)]",
        range: "bg-[var(--cp-solid)]",
        thumb: "bg-[var(--cp-solid)] disabled:bg-[var(--border-emphasized)]",
      },
    },

    orientation: {
      vertical: {
        root: "inline-flex",
        control: [
          "flex-col h-full min-w-[var(--slider-thumb-size)]",
          "[&:has(.chakra-slider__markerLabel)]:me-4",
        ].join(" "),
        track: "w-[var(--slider-track-size)]",
        thumb: "left-1/2 translate-x-[-50%]",
        markerGroup: [
          "start-[var(--slider-marker-center)]",
          "inset-y-[var(--slider-marker-inset)]",
        ].join(" "),
        marker: "flex-row",
      },
      horizontal: {
        control: [
          "flex-row w-full min-h-[var(--slider-thumb-size)]",
          "[&:has(.chakra-slider__markerLabel)]:mb-4",
        ].join(" "),
        track: "h-[var(--slider-track-size)]",
        thumb: "top-1/2 translate-y-[-50%]",
        markerGroup: [
          "top-[var(--slider-marker-center)]",
          "inset-x-[var(--slider-marker-inset)]",
        ].join(" "),
        marker: "flex-col",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
    orientation: "horizontal",
  },
}
