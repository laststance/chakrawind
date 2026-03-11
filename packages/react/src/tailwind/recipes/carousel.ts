/**
 * Carousel slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/carousel.ts
 *
 * Slots: root, itemGroup, item, control, nextTrigger, prevTrigger,
 *        indicatorGroup, indicator, autoplayTrigger, progressText,
 *        autoplayIndicator
 */
export const carouselSlotRecipeTw = {
  className: "chakra-carousel",
  slots: [
    "root",
    "itemGroup",
    "item",
    "control",
    "nextTrigger",
    "prevTrigger",
    "indicatorGroup",
    "indicator",
    "autoplayTrigger",
    "progressText",
    "autoplayIndicator",
  ],

  base: {
    root: [
      "relative flex gap-2",
      "data-[orientation=horizontal]:flex-col",
      "data-[orientation=vertical]:flex-row",
    ].join(" "),

    item: [
      "data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full",
    ].join(" "),

    control: [
      "flex items-center",
      "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:h-full",
    ].join(" "),

    indicatorGroup: [
      "flex justify-center gap-3",
      "data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col",
    ].join(" "),

    indicator: [
      "w-2.5 h-2.5 rounded-full bg-[var(--cp-subtle)] cursor-pointer",
      "data-[current]:bg-[var(--cp-solid)]",
    ].join(" "),

    itemGroup: "",
    nextTrigger: "",
    prevTrigger: "",
    autoplayTrigger: "",
    progressText: "",
    autoplayIndicator: "",
  },

  defaultVariants: {},
}
