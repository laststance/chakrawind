/**
 * Tag slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/tag.ts
 *
 * Reuses badge variant styles (solid/subtle/outline/surface) for the root slot.
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * @example
 * ```tsx
 * <Tag variant="surface" size="md">
 *   <TagStartElement>
 *     <Icon />
 *   </TagStartElement>
 *   <TagLabel>Label</TagLabel>
 *   <TagCloseTrigger />
 * </Tag>
 * ```
 */
export const tagSlotRecipeTw = {
  className: "chakra-tag",
  slots: ["root", "label", "closeTrigger", "startElement", "endElement"],

  base: {
    root: [
      "inline-flex items-center align-top max-w-full",
      "select-none rounded-lg",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    ].join(" "),

    label: "line-clamp-1",

    closeTrigger: [
      "flex items-center justify-center",
      "outline-0 rounded-md text-current",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
    ].join(" "),

    startElement: [
      "shrink-0",
      "w-[var(--tag-element-size)] h-[var(--tag-element-size)]",
      "ms-[var(--tag-element-offset)]",
      "&:has([data-scope=avatar]):w-[var(--tag-avatar-size)]",
      "&:has([data-scope=avatar]):h-[var(--tag-avatar-size)]",
      "&:has([data-scope=avatar]):ms-[calc(var(--tag-element-offset)*1.5)]",
      "[&_svg]:w-full [&_svg]:h-full",
    ].join(" "),

    endElement: [
      "shrink-0",
      "w-[var(--tag-element-size)] h-[var(--tag-element-size)]",
      "me-[var(--tag-element-offset)]",
      "[&_svg]:w-full [&_svg]:h-full",
      "&:has(button):ms-[calc(var(--tag-element-offset)*-1)]",
    ].join(" "),
  },

  variants: {
    size: {
      sm: {
        root: [
          "px-1.5 min-h-[1.125rem] gap-1",
          "[--tag-avatar-size:0.75rem]",
          "[--tag-element-size:0.75rem]",
          "[--tag-element-offset:-2px]",
        ].join(" "),
        label: "text-xs",
      },
      md: {
        root: [
          "px-1.5 min-h-5 gap-1",
          "[--tag-avatar-size:0.875rem]",
          "[--tag-element-size:0.875rem]",
          "[--tag-element-offset:-2px]",
        ].join(" "),
        label: "text-xs",
      },
      lg: {
        root: [
          "px-2 min-h-6 gap-1.5",
          "[--tag-avatar-size:1.125rem]",
          "[--tag-element-size:1rem]",
          "[--tag-element-offset:-3px]",
        ].join(" "),
        label: "text-sm",
      },
      xl: {
        root: [
          "px-2.5 min-h-8 gap-1.5",
          "[--tag-avatar-size:1.5rem]",
          "[--tag-element-size:1.125rem]",
          "[--tag-element-offset:-4px]",
        ].join(" "),
        label: "text-sm",
      },
    },

    variant: {
      subtle: {
        root: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
      },
      solid: {
        root: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      },
      outline: {
        root: [
          "text-[var(--cp-fg)]",
          "shadow-[inset_0_0_0px_1px_var(--cp-border,var(--cp-muted))]",
        ].join(" "),
      },
      surface: {
        root: [
          "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
          "shadow-[inset_0_0_0px_1px_var(--cp-muted)]",
        ].join(" "),
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "surface",
  },
}
