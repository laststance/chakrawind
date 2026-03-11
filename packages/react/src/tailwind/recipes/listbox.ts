/**
 * Listbox slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/listbox.ts
 *
 * @example
 * ```tsx
 * <Listbox variant="subtle">
 *   <ListboxContent>
 *     <ListboxItem value="one">Option 1</ListboxItem>
 *     <ListboxItem value="two">Option 2</ListboxItem>
 *   </ListboxContent>
 * </Listbox>
 * ```
 */
export const listboxSlotRecipeTw = {
  className: "chakra-listbox",
  slots: [
    "root",
    "content",
    "item",
    "empty",
    "itemText",
    "itemGroup",
    "itemGroupLabel",
    "label",
    "valueText",
    "itemIndicator",
  ],
  base: {
    root: "flex flex-col gap-1.5 w-full",
    content: [
      "flex max-h-96 p-1 gap-1 text-sm outline-none",
      "[scroll-padding:theme(spacing.1)]",
      "[--listbox-item-padding-x:theme(spacing.2)]",
      "[--listbox-item-padding-y:theme(spacing[1.5])]",
      "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:overflow-x-auto",
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:overflow-y-auto",
    ].join(" "),
    item: [
      "relative select-none flex items-center gap-2",
      "cursor-pointer justify-between flex-1 text-start rounded-md",
      "py-[var(--listbox-item-padding-y)] px-[var(--listbox-item-padding-x)]",
      "data-[highlighted]:outline-2 data-[highlighted]:outline-[var(--border-emphasized)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ].join(" "),
    empty:
      "py-[var(--listbox-item-padding-y)] px-[var(--listbox-item-padding-x)]",
    itemText: "flex-1",
    itemGroup: "mt-1.5 first:mt-0",
    itemGroupLabel: "py-1.5 px-2 font-medium",
    label: [
      "font-medium select-none text-sm",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
    ].join(" "),
    valueText: "line-clamp-1 max-w-[80%]",
    itemIndicator: [
      "flex items-center justify-center",
      "[&_svg]:w-4 [&_svg]:h-4",
    ].join(" "),
  },

  variants: {
    variant: {
      subtle: {
        root: "",
        content: "bg-[var(--bg-panel)] border rounded-lg",
        item: [
          "hover:bg-[var(--bg-emphasized)]/60",
          "aria-selected:bg-[var(--bg-muted)]",
        ].join(" "),
        empty: "",
        itemText: "",
        itemGroup: "",
        itemGroupLabel: "",
        label: "",
        valueText: "",
        itemIndicator: "",
      },
      solid: {
        root: "",
        content: "bg-[var(--bg-panel)] border rounded-lg",
        item: [
          "aria-selected:bg-[var(--cp-solid)]",
          "aria-selected:text-[var(--cp-contrast)]",
        ].join(" "),
        empty: "",
        itemText: "",
        itemGroup: "",
        itemGroupLabel: "",
        label: "",
        valueText: "",
        itemIndicator: "",
      },
      plain: {
        root: "",
        content: "",
        item: "",
        empty: "",
        itemText: "",
        itemGroup: "",
        itemGroupLabel: "",
        label: "",
        valueText: "",
        itemIndicator: "",
      },
    },
  },

  defaultVariants: {
    variant: "subtle",
  },
}
