/**
 * ProgressCircle recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/progress-circle.ts
 *
 * SVG/circle stroke properties are handled by the component, not CSS classes.
 * Uses CSS custom properties for sizing and thickness.
 */
export const progressCircleSlotRecipeTw = {
  className: "chakra-progress-circle",
  slots: ["root", "circle", "circleTrack", "circleRange", "label", "valueText"],
  base: {
    root: "inline-flex text-sm relative",
    circle: "data-[state=indeterminate]:animate-spin",
    circleTrack: "",
    circleRange: [
      "transition-[stroke-dashoffset,stroke-dasharray] duration-[600ms]",
      "data-[state=indeterminate]:animate-[circular-progress_1.5s_linear_infinite]",
    ].join(" "),
    label: "inline-flex",
    valueText: "leading-none font-medium tracking-tight tabular-nums",
  },

  variants: {
    size: {
      xs: {
        circle: "[--size:24px] [--thickness:4px]",
        valueText: "text-[0.625rem]",
      },
      sm: {
        circle: "[--size:32px] [--thickness:5px]",
        valueText: "text-[0.625rem]",
      },
      md: {
        circle: "[--size:40px] [--thickness:6px]",
        valueText: "text-xs",
      },
      lg: {
        circle: "[--size:48px] [--thickness:7px]",
        valueText: "text-sm",
      },
      xl: {
        circle: "[--size:64px] [--thickness:8px]",
        valueText: "text-sm",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
