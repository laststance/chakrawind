/**
 * ScrollArea slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/scroll-area.ts
 *
 * Uses CSS custom properties for scrollbar sizing and thumb colors.
 * @example
 * ```tsx
 * <ScrollArea variant="hover" size="md">
 *   <ScrollAreaViewport>
 *     <ScrollAreaContent>{children}</ScrollAreaContent>
 *   </ScrollAreaViewport>
 *   <ScrollAreaScrollbar orientation="vertical">
 *     <ScrollAreaThumb />
 *   </ScrollAreaScrollbar>
 *   <ScrollAreaCorner />
 * </ScrollArea>
 * ```
 */
export const scrollAreaSlotRecipeTw = {
  className: "chakra-scroll-area",
  slots: ["root", "viewport", "content", "scrollbar", "thumb", "corner"],
  base: {
    root: [
      "flex flex-col w-full h-full relative overflow-hidden",
      "[--scrollbar-margin:2px]",
      "[--scrollbar-click-area:calc(var(--scrollbar-size)+calc(var(--scrollbar-margin)*2))]",
    ].join(" "),
    viewport: [
      "flex flex-col h-full w-full rounded-[inherit]",
      "[-webkit-overflow-scrolling:touch]",
      "[scrollbar-width:none]",
      "[&::-webkit-scrollbar]:hidden",
    ].join(" "),
    content: "min-w-full",
    scrollbar: [
      "flex select-none touch-none rounded-full relative",
      "m-[var(--scrollbar-margin)]",
      "transition-opacity duration-150 delay-300",
      "bg-gray-500/10",
      "[--thumb-bg:theme(colors.gray.500/25)]",
      "hover:[--thumb-bg:theme(colors.gray.500/50)]",
      "active:[--thumb-bg:theme(colors.gray.500/50)]",
      "&:not([data-overflow-x],[data-overflow-y]):hidden",
      "data-[orientation=vertical]:w-[var(--scrollbar-size)] data-[orientation=vertical]:flex-col",
      "data-[orientation=vertical]:before:content-[''] data-[orientation=vertical]:before:absolute data-[orientation=vertical]:before:w-[var(--scrollbar-click-area)] data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:inset-inline-start-[calc(var(--scrollbar-margin)*-1)]",
      "data-[orientation=horizontal]:h-[var(--scrollbar-size)] data-[orientation=horizontal]:flex-row",
      "data-[orientation=horizontal]:before:content-[''] data-[orientation=horizontal]:before:absolute data-[orientation=horizontal]:before:h-[var(--scrollbar-click-area)] data-[orientation=horizontal]:before:w-full data-[orientation=horizontal]:before:top-[calc(var(--scrollbar-margin)*-1)]",
    ].join(" "),
    thumb: [
      "rounded-[inherit] bg-[var(--thumb-bg)] transition-colors",
      "data-[orientation=vertical]:w-full",
      "data-[orientation=horizontal]:h-full",
    ].join(" "),
    corner: [
      "bg-[var(--bg-muted)] m-[var(--scrollbar-margin)]",
      "opacity-0 transition-opacity duration-150 delay-300",
      "data-[hover]:delay-0 data-[hover]:opacity-100",
    ].join(" "),
  },

  variants: {
    variant: {
      hover: {
        root: "",
        viewport: "",
        content: "",
        scrollbar: [
          "opacity-0",
          "data-[hover]:opacity-100 data-[hover]:duration-100 data-[hover]:delay-0",
          "data-[scrolling]:opacity-100 data-[scrolling]:duration-100 data-[scrolling]:delay-0",
        ].join(" "),
        thumb: "",
        corner: "",
      },
      always: {
        root: "",
        viewport: "",
        content: "",
        scrollbar: "opacity-100",
        thumb: "",
        corner: "",
      },
    },

    size: {
      xs: {
        root: "[--scrollbar-size:theme(spacing.1)]",
        viewport: "",
        content: "",
        scrollbar: "",
        thumb: "",
        corner: "",
      },
      sm: {
        root: "[--scrollbar-size:theme(spacing[1.5])]",
        viewport: "",
        content: "",
        scrollbar: "",
        thumb: "",
        corner: "",
      },
      md: {
        root: "[--scrollbar-size:theme(spacing.2)]",
        viewport: "",
        content: "",
        scrollbar: "",
        thumb: "",
        corner: "",
      },
      lg: {
        root: "[--scrollbar-size:theme(spacing.3)]",
        viewport: "",
        content: "",
        scrollbar: "",
        thumb: "",
        corner: "",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "hover",
  },
}
