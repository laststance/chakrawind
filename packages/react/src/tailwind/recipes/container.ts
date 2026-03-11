/**
 * Container recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/container.ts
 *
 * Responsive padding uses Tailwind breakpoint prefixes.
 */
export const containerRecipeTw = {
  className: "chakra-container",
  base: "relative max-w-8xl w-full mx-auto px-4 md:px-6 lg:px-8",

  variants: {
    centerContent: {
      true: "flex flex-col items-center",
    },
    fluid: {
      true: "max-w-full",
    },
  },
}
