/**
 * Input recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/input.ts
 *
 * Uses CSS custom properties for input height and focus/error colors.
 * Static tokens are mapped directly to Tailwind utility classes.
 */
export const inputRecipeTw = {
  className: "chakra-input",
  base: [
    "w-full min-w-0 outline-0 relative appearance-none text-start rounded-lg",
    "h-[var(--input-height)] min-w-[var(--input-height)]",
    "[--focus-color:var(--cp-focus-ring)] [--error-color:var(--border-error)]",
    "data-[invalid]:ring-[var(--error-color)] data-[invalid]:border-[var(--error-color)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
  ].join(" "),

  variants: {
    size: {
      "2xs": "text-xs px-2 [--input-height:1.75rem]",
      xs: "text-xs px-2 [--input-height:2rem]",
      sm: "text-sm px-2.5 [--input-height:2.25rem]",
      md: "text-sm px-3 [--input-height:2.5rem]",
      lg: "text-base px-4 [--input-height:2.75rem]",
      xl: "text-base px-[1.125rem] [--input-height:3rem]",
      "2xl": "text-lg px-5 [--input-height:4rem]",
    },

    variant: {
      outline: [
        "bg-transparent border border-[var(--border-color)]",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
      ].join(" "),

      subtle: [
        "border border-transparent bg-[var(--bg-muted)]",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
      ].join(" "),

      flushed: [
        "bg-transparent border-b border-b-[var(--border-color)] rounded-none px-0",
        "focus-visible:border-[var(--focus-color)] focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]",
        "focus-visible:data-[invalid]:border-[var(--error-color)] focus-visible:data-[invalid]:shadow-[0px_1px_0px_0px_var(--error-color)]",
      ].join(" "),
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
