/**
 * RatingGroup slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/rating-group.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * Star icons use data-bg/data-fg attributes with clip-path for half-star support.
 */
export const ratingGroupSlotRecipeTw = {
  className: "chakra-rating-group",
  slots: ["root", "control", "item", "label", "itemIndicator"],
  base: {
    root: "inline-flex",
    control: "inline-flex items-center",
    item: "inline-flex items-center justify-center select-none",
    label: "",
    itemIndicator: [
      "inline-flex items-center justify-center",
      "w-[1em] h-[1em] relative",
      "[--clip-path:inset(0_50%_0_0)]",
      "[&_svg]:stroke-current [&_svg]:w-full [&_svg]:h-full",
      "[&_svg]:inline-block [&_svg]:shrink-0 [&_svg]:absolute [&_svg]:left-0 [&_svg]:top-0",
      "[&_[data-bg]]:text-[var(--bg-emphasized)]",
      "[&_[data-fg]]:text-transparent",
      "[&[data-highlighted]:not([data-half])_[data-fg]]:text-[var(--cp-solid)]",
      "[&[data-half]_[data-fg]]:text-[var(--cp-solid)]",
      "[&[data-half]_[data-fg]]:[clip-path:var(--clip-path)]",
    ].join(" "),
  },

  variants: {
    size: {
      xs: {
        item: "text-sm",
      },
      sm: {
        item: "text-base",
      },
      md: {
        item: "text-xl",
      },
      lg: {
        item: "text-2xl",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
