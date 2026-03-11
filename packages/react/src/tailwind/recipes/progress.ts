/**
 * Progress recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/progress.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * Static tokens are mapped directly to Tailwind utility classes.
 */
export const progressSlotRecipeTw = {
  className: "chakra-progress",
  slots: ["root", "track", "range", "label", "valueText"],
  base: {
    root: "text-sm relative",
    track: "overflow-hidden relative",
    range: [
      "flex items-center justify-center",
      "transition-[width,height] duration-300 h-full",
      "bg-[var(--track-color)]",
      "data-[state=indeterminate]:[--animate-from-x:-40%]",
      "data-[state=indeterminate]:[--animate-to-x:100%]",
      "data-[state=indeterminate]:absolute",
      "data-[state=indeterminate]:will-change-[left]",
      "data-[state=indeterminate]:min-w-[50%]",
      "data-[state=indeterminate]:animate-[position_1s_ease_infinite]",
    ].join(" "),
    label: "inline-flex font-medium items-center gap-1",
    valueText: "text-xs leading-none font-medium",
  },

  variants: {
    variant: {
      outline: {
        track:
          "shadow-[inset_0_0_0_1px_var(--shadow-color)] bg-[var(--bg-muted)]",
        range: "bg-[var(--cp-solid)]",
      },
      subtle: {
        track: "bg-[var(--cp-muted)]",
        range: "bg-[var(--cp-solid)]/72",
      },
    },

    shape: {
      square: {},
      rounded: {
        track: "rounded-md",
      },
      full: {
        track: "rounded-full",
      },
    },

    striped: {
      true: {
        range: [
          "bg-[linear-gradient(45deg,var(--stripe-color)_25%,transparent_25%,transparent_50%,var(--stripe-color)_50%,var(--stripe-color)_75%,transparent_75%,transparent)]",
          "bg-[length:var(--stripe-size)_var(--stripe-size)]",
          "[--stripe-size:1rem]",
          "[--stripe-color:rgba(255,255,255,0.3)]",
          "dark:[--stripe-color:rgba(0,0,0,0.3)]",
        ].join(" "),
      },
    },

    animated: {
      true: {
        range:
          "[--animate-from:var(--stripe-size)] animate-[bg-position_1s_linear_infinite]",
      },
    },

    size: {
      xs: { track: "h-1.5" },
      sm: { track: "h-2" },
      md: { track: "h-2.5" },
      lg: { track: "h-3" },
      xl: { track: "h-4" },
    },
  },

  defaultVariants: {
    variant: "outline",
    size: "md",
    shape: "rounded",
  },
}
