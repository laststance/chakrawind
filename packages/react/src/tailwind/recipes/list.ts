/**
 * List slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/list.ts
 *
 * @example
 * ```tsx
 * <List variant="marker">
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * ```
 */
export const listSlotRecipeTw = {
  className: "chakra-list",
  slots: ["root", "item", "indicator"],
  base: {
    root: [
      "flex flex-col gap-[var(--list-gap)]",
      "[&_:where(ul,ol)]:mt-[var(--list-gap)]",
    ].join(" "),
    item: "whitespace-normal list-item",
    indicator: "me-2 min-h-[1lh] shrink-0 inline-block align-middle",
  },

  variants: {
    variant: {
      marker: {
        root: "[list-style:revert]",
        item: "[&::marker]:text-[var(--fg-subtle)]",
        indicator: "",
      },
      plain: {
        root: "",
        item: "items-start inline-flex",
        indicator: "",
      },
    },

    align: {
      center: {
        root: "",
        item: "items-center",
        indicator: "",
      },
      start: {
        root: "",
        item: "items-start",
        indicator: "",
      },
      end: {
        root: "",
        item: "items-end",
        indicator: "",
      },
    },
  },

  defaultVariants: {
    variant: "marker",
  },
}
