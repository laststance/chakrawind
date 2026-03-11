/**
 * Textarea recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/textarea.ts
 *
 * Multi-line text input with outline, subtle, and flushed variants.
 * Uses CSS custom properties for focus and error ring colors.
 */
export const textareaRecipeTw = {
  className: "chakra-textarea",
  base: [
    "w-full min-w-0 outline-0 relative appearance-none text-start rounded-lg",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
    "[--focus-color:var(--cp-focus-ring)]",
    "[--error-color:var(--border-error)]",
    "data-[invalid]:ring-[var(--error-color)] data-[invalid]:border-[var(--error-color)]",
  ].join(" "),

  variants: {
    size: {
      xs: "text-xs px-2 py-1.5 [scroll-padding-bottom:0.375rem]",
      sm: "text-sm px-2.5 py-2 [scroll-padding-bottom:0.5rem]",
      md: "text-sm px-3 py-2 [scroll-padding-bottom:0.5rem]",
      lg: "text-base px-4 py-3 [scroll-padding-bottom:0.75rem]",
      xl: "text-base px-[1.125rem] py-3.5 [scroll-padding-bottom:0.875rem]",
    },

    variant: {
      outline: [
        "bg-transparent border border-[var(--border-color)]",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      ].join(" "),

      subtle: [
        "border border-transparent bg-[var(--bg-muted)]",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      ].join(" "),

      flushed: [
        "bg-transparent border-b border-b-[var(--border-color)] rounded-none px-0",
        "focus-visible:border-b-[var(--focus-color)]",
        "focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]",
      ].join(" "),
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
