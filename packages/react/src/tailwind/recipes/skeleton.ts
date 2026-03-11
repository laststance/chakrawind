/**
 * Skeleton recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/skeleton.ts
 *
 * Uses Tailwind animations and CSS custom properties for skeleton effects.
 */
export const skeletonRecipeTw = {
  className: "chakra-skeleton",
  base: "",

  variants: {
    loading: {
      true: [
        "rounded-lg shadow-none bg-clip-padding",
        "cursor-default text-transparent pointer-events-none",
        "select-none shrink-0",
        "[&::before]:invisible [&::after]:invisible [&>*]:invisible",
      ].join(" "),
      false: "!animate-[fade-in_var(--fade-duration,0.1s)_ease-out] bg-[unset]",
    },
    variant: {
      pulse: [
        "bg-[var(--bg-emphasized)]",
        "animate-pulse [animation-duration:var(--duration,1.2s)]",
      ].join(" "),
      shine: [
        "[--animate-from:200%] [--animate-to:-200%]",
        "[--start-color:var(--bg-muted)] [--end-color:var(--bg-emphasized)]",
        "bg-[linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))]",
        "bg-[length:400%_100%]",
        "animate-[bg-position_var(--duration,5s)_ease-in-out_infinite]",
      ].join(" "),
      none: "animate-none",
    },
  },

  defaultVariants: {
    variant: "pulse",
    loading: true,
  },
}
