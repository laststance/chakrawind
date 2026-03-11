/**
 * Marquee slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/marquee.ts
 *
 * Slots: root, viewport, content, edge, item
 */
export const marqueeSlotRecipeTw = {
  className: "chakra-marquee",
  slots: ["root", "viewport", "content", "edge", "item"],

  base: {
    root: [
      "relative w-full",
      "[--marquee-edge-color:var(--bg)]",
      "[--marquee-edge-size:20%]",
      "[&[data-paused]]:![animation-play-state:paused]",
      "[&[data-paused]_*]:![animation-play-state:paused]",
    ].join(" "),

    viewport: "overflow-hidden flex w-full h-full",

    content: [
      "flex min-w-max",
      "[animation-timing-function:linear]",
      "[animation-fill-mode:forwards]",
      "[animation-duration:var(--marquee-duration)]",
      "[animation-delay:var(--marquee-delay)]",
      "[animation-iteration-count:var(--marquee-loop-count)]",
      "motion-reduce:!animate-none",
      "[&[data-side='start']]:animate-[marqueeX]",
      "[&[data-side='end']]:animate-[marqueeX]",
      "[&[data-side='top']]:animate-[marqueeY]",
      "[&[data-side='bottom']]:animate-[marqueeY]",
      "[&[data-reverse]]:[animation-direction:reverse]",
      "[&[data-orientation='horizontal']]:flex-row",
      "[&[data-orientation='vertical']]:flex-col",
    ].join(" "),

    edge: [
      "absolute z-[1] pointer-events-none",
      "[&[data-side='start']]:w-[var(--marquee-edge-size)]",
      "[&[data-side='start']]:inset-y-0 [&[data-side='start']]:start-0",
      "[&[data-side='start']]:bg-[linear-gradient(to_right,var(--marquee-edge-color,white),transparent)]",
      "[&[data-side='start']]:rtl:bg-[linear-gradient(to_left,var(--marquee-edge-color,white),transparent)]",
      "[&[data-side='end']]:w-[var(--marquee-edge-size)]",
      "[&[data-side='end']]:inset-y-0 [&[data-side='end']]:end-0",
      "[&[data-side='end']]:bg-[linear-gradient(to_left,var(--marquee-edge-color,white),transparent)]",
      "[&[data-side='end']]:rtl:bg-[linear-gradient(to_right,var(--marquee-edge-color,white),transparent)]",
      "[&[data-side='top']]:h-[var(--marquee-edge-size)]",
      "[&[data-side='top']]:inset-x-0 [&[data-side='top']]:top-0",
      "[&[data-side='top']]:bg-[linear-gradient(to_bottom,var(--marquee-edge-color,white),transparent)]",
      "[&[data-side='bottom']]:h-[var(--marquee-edge-size)]",
      "[&[data-side='bottom']]:inset-x-0 [&[data-side='bottom']]:bottom-0",
      "[&[data-side='bottom']]:bg-[linear-gradient(to_top,var(--marquee-edge-color,white),transparent)]",
    ].join(" "),

    item: "",
  },

  defaultVariants: {},
}
