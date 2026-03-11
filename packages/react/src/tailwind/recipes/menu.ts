/**
 * Menu slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/menu.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * @example
 * ```tsx
 * <Menu variant="subtle" size="md">
 *   <MenuTrigger asChild>
 *     <Button>Open Menu</Button>
 *   </MenuTrigger>
 *   <MenuContent>
 *     <MenuItem value="edit">Edit</MenuItem>
 *     <MenuItem value="delete">Delete</MenuItem>
 *   </MenuContent>
 * </Menu>
 * ```
 */
export const menuSlotRecipeTw = {
  className: "chakra-menu",
  slots: [
    "content",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroupLabel",
    "indicator",
    "itemCommand",
    "separator",
    "arrow",
    "arrowTip",
    "trigger",
    "triggerItem",
    "positioner",
    "contextTrigger",
    "itemGroup",
  ],

  base: {
    content: [
      "outline-0 [--menu-bg:var(--bg-panel)] bg-[var(--menu-bg)]",
      "shadow-lg text-[var(--fg)]",
      "max-h-[var(--available-height)]",
      "[--menu-z-index:50]",
      "z-[calc(var(--menu-z-index)+var(--layer-index,0))]",
      "rounded-lg overflow-hidden overflow-y-auto",
      "data-[state=open]:animate-[slide-fade-in] data-[state=open]:duration-150",
      "data-[state=closed]:animate-[slide-fade-out] data-[state=closed]:duration-100",
    ].join(" "),
    item: [
      "no-underline text-[var(--fg)]",
      "select-none rounded-md w-full",
      "flex cursor-pointer items-center text-start",
      "relative flex-none outline-0",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
      "&[data-type]:ps-8",
    ].join(" "),
    itemText: "flex-1",
    itemIndicator: "absolute left-2 -translate-y-1/2 top-1/2",
    itemGroupLabel: "px-2 py-1.5 font-semibold text-sm",
    indicator: "inline-flex items-center justify-center shrink-0",
    itemCommand:
      "opacity-60 text-xs ms-auto ps-4 tracking-widest font-[inherit]",
    separator: "h-px bg-[var(--bg-muted)] my-1 -mx-1",
    arrow: "[--arrow-size:0.75rem] [--arrow-background:var(--menu-bg)]",
    arrowTip: "border-t border-l",
    trigger: "",
    triggerItem: "",
    positioner: "",
    contextTrigger: "",
    itemGroup: "",
  },

  variants: {
    variant: {
      subtle: {
        item: "data-[highlighted]:bg-[var(--bg-emphasized)]/60",
      },
      solid: {
        item: [
          "data-[highlighted]:bg-[var(--cp-solid)]",
          "data-[highlighted]:text-[var(--cp-contrast)]",
        ].join(" "),
      },
    },

    size: {
      sm: {
        content: "min-w-32 p-1 scroll-p-1",
        item: "gap-1 text-xs py-1 px-1.5",
      },
      md: {
        content: "min-w-32 p-1.5 scroll-p-1.5",
        item: "gap-2 text-sm py-1.5 px-2",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
}
