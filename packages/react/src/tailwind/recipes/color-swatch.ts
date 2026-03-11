/**
 * ColorSwatch recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/color-swatch.ts
 *
 * Color preview swatch with a checkerboard background pattern.
 * Uses CSS custom properties for dynamic sizing and color display.
 */
export const colorSwatchRecipeTw = {
  className: "color-swatch",
  base: [
    "w-[var(--swatch-size)] h-[var(--swatch-size)]",
    "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]",
    "[--checker-size:8px]",
    "[--checker-bg:var(--bg)] [--checker-fg:var(--bg-emphasized)]",
    "![background:linear-gradient(var(--color),var(--color)),repeating-conic-gradient(var(--checker-fg)_0%,var(--checker-fg)_25%,var(--checker-bg)_0%,var(--checker-bg)_50%)_0%_50%/var(--checker-size)_var(--checker-size)]",
    "inline-flex items-center justify-center shrink-0",
  ].join(" "),

  variants: {
    size: {
      "2xs": "[--swatch-size:0.875rem]",
      xs: "[--swatch-size:1rem]",
      sm: "[--swatch-size:1.125rem]",
      md: "[--swatch-size:1.25rem]",
      lg: "[--swatch-size:1.5rem]",
      xl: "[--swatch-size:1.75rem]",
      "2xl": "[--swatch-size:2rem]",
      inherit: "[--swatch-size:inherit]",
      full: "[--swatch-size:100%]",
    },

    shape: {
      square: "rounded-none",
      circle: "rounded-full",
      rounded: "rounded-md",
    },
  },

  defaultVariants: {
    size: "md",
    shape: "rounded",
  },
}
