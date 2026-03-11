/**
 * Button recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/button.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * Static tokens are mapped directly to Tailwind utility classes.
 */
export const buttonRecipeTw = {
  className: "chakra-button",
  base: [
    "inline-flex appearance-none items-center justify-center",
    "select-none relative rounded-lg whitespace-nowrap align-middle",
    "border border-transparent cursor-pointer shrink-0",
    "outline-0 leading-[1.2] isolate font-medium",
    "transition-[background,color,border-color,box-shadow] duration-200",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
    "[&_svg]:shrink-0",
  ].join(" "),

  variants: {
    size: {
      "2xs": "h-6 min-w-6 text-xs px-2 gap-1 [&_svg]:w-3.5 [&_svg]:h-3.5",
      xs: "h-8 min-w-8 text-xs px-2.5 gap-1 [&_svg]:w-4 [&_svg]:h-4",
      sm: "h-9 min-w-9 px-3.5 text-sm gap-2 [&_svg]:w-4 [&_svg]:h-4",
      md: "h-10 min-w-10 text-sm px-4 gap-2 [&_svg]:w-5 [&_svg]:h-5",
      lg: "h-11 min-w-11 text-base px-5 gap-3 [&_svg]:w-5 [&_svg]:h-5",
      xl: "h-12 min-w-12 text-base px-5 gap-2.5 [&_svg]:w-5 [&_svg]:h-5",
      "2xl": "h-16 min-w-16 text-lg px-7 gap-3 [&_svg]:w-6 [&_svg]:h-6",
    },

    variant: {
      solid: [
        "bg-[var(--cp-solid)] text-[var(--cp-contrast)] border-transparent",
        "hover:bg-[var(--cp-solid-hover)]",
        "data-[expanded]:bg-[var(--cp-solid-hover)]",
      ].join(" "),

      subtle: [
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)] border-transparent",
        "hover:bg-[var(--cp-muted)]",
        "data-[expanded]:bg-[var(--cp-muted)]",
      ].join(" "),

      surface: [
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
        "shadow-[0_0_0px_1px_var(--cp-muted)]",
        "hover:bg-[var(--cp-muted)]",
        "data-[expanded]:bg-[var(--cp-muted)]",
      ].join(" "),

      outline: [
        "border border-[var(--cp-border,var(--cp-muted))] text-[var(--cp-fg)]",
        "hover:bg-[var(--cp-subtle)]",
        "data-[expanded]:bg-[var(--cp-subtle)]",
      ].join(" "),

      ghost: [
        "bg-transparent text-[var(--cp-fg)]",
        "hover:bg-[var(--cp-subtle)]",
        "data-[expanded]:bg-[var(--cp-subtle)]",
      ].join(" "),

      plain: "text-[var(--cp-fg)]",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
}
