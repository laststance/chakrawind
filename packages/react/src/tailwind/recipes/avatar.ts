/**
 * Avatar slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/avatar.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic)
 * and avatar-specific custom properties (--avatar-size, --avatar-font-size, --avatar-radius).
 */
export const avatarSlotRecipeTw = {
  className: "chakra-avatar",
  slots: ["root", "image", "fallback"],

  base: {
    root: [
      "inline-flex items-center justify-center font-medium",
      "relative align-top shrink-0 select-none",
      "w-[var(--avatar-size)] h-[var(--avatar-size)]",
      "text-[length:var(--avatar-font-size)]",
      "rounded-[var(--avatar-radius)]",
      "[&[data-group-item]]:border-2 [&[data-group-item]]:border-[var(--bg)]",
    ].join(" "),
    image: [
      "w-full h-full object-cover",
      "rounded-[var(--avatar-radius)]",
    ].join(" "),
    fallback: [
      "leading-none uppercase font-medium",
      "text-[length:var(--avatar-font-size)]",
      "rounded-[var(--avatar-radius)]",
    ].join(" "),
  },

  variants: {
    size: {
      full: {
        root: "[--avatar-size:100%] [--avatar-font-size:100%]",
      },
      "2xs": {
        root: "[--avatar-font-size:0.625rem] [--avatar-size:1.5rem]",
      },
      xs: {
        root: "[--avatar-font-size:0.75rem] [--avatar-size:2rem]",
      },
      sm: {
        root: "[--avatar-font-size:0.875rem] [--avatar-size:2.25rem]",
      },
      md: {
        root: "[--avatar-font-size:1rem] [--avatar-size:2.5rem]",
      },
      lg: {
        root: "[--avatar-font-size:1rem] [--avatar-size:2.75rem]",
      },
      xl: {
        root: "[--avatar-font-size:1.125rem] [--avatar-size:3rem]",
      },
      "2xl": {
        root: "[--avatar-font-size:1.25rem] [--avatar-size:4rem]",
      },
    },

    variant: {
      solid: {
        root: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      },
      subtle: {
        root: "bg-[var(--cp-muted)] text-[var(--cp-fg)]",
      },
      outline: {
        root: [
          "text-[var(--cp-fg)] border",
          "border-[var(--cp-border,var(--cp-muted))]",
        ].join(" "),
      },
    },

    shape: {
      square: { root: "" },
      rounded: {
        root: "[--avatar-radius:var(--radius-xl)]",
      },
      full: {
        root: "[--avatar-radius:9999px]",
      },
    },

    borderless: {
      true: {
        root: "[&[data-group-item]]:border-0",
      },
    },
  },

  defaultVariants: {
    size: "md" as const,
    shape: "full" as const,
    variant: "subtle" as const,
  },
}
