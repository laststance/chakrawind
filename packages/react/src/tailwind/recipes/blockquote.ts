/**
 * Blockquote recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/blockquote.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
export const blockquoteSlotRecipeTw = {
  className: "chakra-blockquote",
  slots: ["root", "icon", "content", "caption"],
  base: {
    root: "relative flex flex-col gap-2",
    caption: "text-sm text-[var(--fg-muted)]",
    icon: "w-5 h-5",
  },

  variants: {
    justify: {
      start: {
        root: "items-start text-start",
      },
      center: {
        root: "items-center text-center",
      },
      end: {
        root: "items-end text-end",
      },
    },

    variant: {
      subtle: {
        root: "px-5 border-s-4 border-s-[var(--cp-muted)]",
        icon: "text-[var(--cp-fg)]",
      },
      solid: {
        root: "px-5 border-s-4 border-s-[var(--cp-solid)]",
        icon: "text-[var(--cp-solid)]",
      },
      plain: {
        root: "px-5",
        icon: "text-[var(--cp-solid)]",
      },
    },
  },

  defaultVariants: {
    variant: "subtle",
    justify: "start",
  },
}
