/**
 * Stat slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/stat.ts
 *
 * Uses semantic color tokens via CSS custom property references.
 */
export const statSlotRecipeTw = {
  className: "chakra-stat",
  slots: ["root", "label", "helpText", "valueText", "valueUnit", "indicator"],

  base: {
    root: "flex flex-col gap-1 relative flex-1",
    label: "inline-flex gap-1.5 items-center text-[var(--fg-muted)] text-sm",
    helpText: "text-[var(--fg-muted)] text-xs",
    valueUnit: [
      "text-[var(--fg-muted)] text-xs",
      "font-[initial] tracking-[initial]",
    ].join(" "),
    valueText: [
      "align-baseline font-semibold tracking-tight",
      "[font-feature-settings:pnum]",
      "[font-variant-numeric:proportional-nums]",
      "inline-flex gap-1",
    ].join(" "),
    indicator: [
      "inline-flex items-center justify-center me-1",
      "[&_:where(svg)]:w-[1em] [&_:where(svg)]:h-[1em]",
      "[&[data-type=up]]:text-[var(--fg-success)]",
      "[&[data-type=down]]:text-[var(--fg-error)]",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        valueText: "text-xl",
      },
      md: {
        valueText: "text-2xl",
      },
      lg: {
        valueText: "text-3xl",
      },
    },
  },

  defaultVariants: {
    size: "md" as const,
  },
}
