/**
 * SkipNavLink recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/skip-nav-link.ts
 *
 * Visually hidden by default, becomes visible on focus for keyboard navigation.
 * Uses focus-visible ring for accessibility.
 */
export const skipNavLinkRecipeTw = {
  className: "chakra-skip-nav",
  base: [
    "inline-flex bg-[var(--bg-panel)] p-2.5 rounded-lg font-semibold text-sm",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    "select-none border-0 h-px w-px -m-px outline-0 overflow-hidden absolute",
    "[clip:rect(0_0_0_0)]",
    "focus-visible:[clip:auto] focus-visible:w-auto focus-visible:h-auto",
    "focus-visible:fixed focus-visible:top-6 focus-visible:left-6",
  ].join(" "),
}
