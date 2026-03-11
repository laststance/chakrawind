/**
 * Switch slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/switch.ts
 *
 * Uses CSS custom properties for sizing (--switch-width, --switch-height)
 * and colorPalette tokens (runtime-dynamic).
 */
export const switchSlotRecipeTw = {
  className: "chakra-switch",
  slots: ["root", "control", "thumb", "label", "indicator"],
  base: {
    root: [
      "inline-flex gap-2.5 items-center relative align-middle",
      "[--switch-diff:calc(var(--switch-width)-var(--switch-height))]",
      "[--switch-x:var(--switch-diff)]",
    ].join(" "),
    label: [
      "leading-none select-none text-sm font-medium",
      "data-[disabled]:opacity-50",
    ].join(" "),
    indicator: [
      "absolute h-[var(--switch-height)] w-[var(--switch-height)]",
      "text-[var(--switch-indicator-font-size)] font-medium",
      "shrink-0 select-none grid place-content-center",
      "transition-[inset-inline-start] duration-[120ms] ease-in-out",
      "[inset-inline-start:calc(var(--switch-x)-2px)]",
      "data-[state=checked]:[inset-inline-start:2px]",
    ].join(" "),
    control: [
      "inline-flex gap-2 shrink-0 justify-start",
      "cursor-pointer rounded-full relative",
      "w-[var(--switch-width)] h-[var(--switch-height)]",
      "transition-[background] duration-200",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      "data-[invalid]:outline-2 data-[invalid]:outline-[var(--border-error)] data-[invalid]:outline-offset-2",
    ].join(" "),
    thumb: [
      "flex items-center justify-center shrink-0",
      "transition-transform duration-150",
      "rounded-[inherit]",
      "data-[state=checked]:translate-x-[var(--switch-x)]",
    ].join(" "),
  },

  variants: {
    variant: {
      solid: {
        control: [
          "rounded-full bg-[var(--bg-emphasized)]",
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
          "data-[state=checked]:bg-[var(--cp-solid)]",
        ].join(" "),
        thumb: [
          "bg-white w-[var(--switch-height)] h-[var(--switch-height)]",
          "scale-[0.8] shadow-sm",
          "data-[state=checked]:bg-[var(--cp-contrast)]",
        ].join(" "),
      },

      raised: {
        control: [
          "rounded-full h-[calc(var(--switch-height)/2)]",
          "bg-[var(--bg-muted)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]",
          "data-[state=checked]:bg-[var(--cp-solid)]/60",
        ].join(" "),
        thumb: [
          "w-[var(--switch-height)] h-[var(--switch-height)]",
          "relative top-[calc(var(--switch-height)*-0.25)]",
          "bg-white shadow-xs",
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
          "data-[state=checked]:bg-[var(--cp-solid)]",
        ].join(" "),
      },
    },

    size: {
      xs: {
        root: [
          "[--switch-width:theme(spacing.6)]",
          "[--switch-height:theme(spacing.3)]",
          "[--switch-indicator-font-size:theme(fontSize.xs)]",
        ].join(" "),
      },
      sm: {
        root: [
          "[--switch-width:theme(spacing.8)]",
          "[--switch-height:theme(spacing.4)]",
          "[--switch-indicator-font-size:theme(fontSize.xs)]",
        ].join(" "),
      },
      md: {
        root: [
          "[--switch-width:theme(spacing.10)]",
          "[--switch-height:theme(spacing.5)]",
          "[--switch-indicator-font-size:theme(fontSize.sm)]",
        ].join(" "),
      },
      lg: {
        root: [
          "[--switch-width:theme(spacing.12)]",
          "[--switch-height:theme(spacing.6)]",
          "[--switch-indicator-font-size:theme(fontSize.base)]",
        ].join(" "),
      },
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
}
