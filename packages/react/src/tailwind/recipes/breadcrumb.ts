/**
 * Breadcrumb slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/breadcrumb.ts
 *
 * @example
 * ```tsx
 * <Breadcrumb variant="plain" size="md">
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbCurrentLink>Current</BreadcrumbCurrentLink>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 * ```
 */
export const breadcrumbSlotRecipeTw = {
  className: "chakra-breadcrumb",
  slots: [
    "link",
    "currentLink",
    "item",
    "list",
    "root",
    "ellipsis",
    "separator",
  ],
  base: {
    root: "",
    list: "flex items-center break-words text-[var(--fg-muted)] list-none",
    link: [
      "outline-0 no-underline rounded-md inline-flex items-center gap-2",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
    ].join(" "),
    currentLink: "",
    item: "inline-flex items-center",
    separator: [
      "text-[var(--fg-muted)] opacity-80",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
      "rtl:rotate-180",
    ].join(" "),
    ellipsis: [
      "inline-flex items-center justify-center",
      "[&_svg]:w-[1em] [&_svg]:h-[1em]",
    ].join(" "),
  },

  variants: {
    variant: {
      underline: {
        root: "",
        list: "",
        link: [
          "text-[var(--cp-fg)] underline",
          "[text-underline-offset:0.2em]",
          "decoration-[var(--cp-muted)]",
        ].join(" "),
        currentLink: "text-[var(--cp-fg)]",
        item: "",
        separator: "",
        ellipsis: "",
      },
      plain: {
        root: "",
        list: "",
        link: "text-[var(--fg-muted)] hover:text-[var(--fg)]",
        currentLink: "text-[var(--fg)]",
        item: "",
        separator: "",
        ellipsis: "",
      },
    },

    size: {
      sm: {
        root: "",
        list: "gap-1 text-xs",
        link: "",
        currentLink: "",
        item: "",
        separator: "",
        ellipsis: "",
      },
      md: {
        root: "",
        list: "gap-1.5 text-sm",
        link: "",
        currentLink: "",
        item: "",
        separator: "",
        ellipsis: "",
      },
      lg: {
        root: "",
        list: "gap-2 text-base",
        link: "",
        currentLink: "",
        item: "",
        separator: "",
        ellipsis: "",
      },
    },
  },

  defaultVariants: {
    variant: "plain",
    size: "md",
  },
}
