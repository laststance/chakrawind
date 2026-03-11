/**
 * Table slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/table.ts
 *
 * Uses semantic color tokens via CSS custom property references.
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 */
export const tableSlotRecipeTw = {
  className: "chakra-table",
  slots: [
    "root",
    "header",
    "body",
    "row",
    "columnHeader",
    "cell",
    "footer",
    "caption",
  ],

  base: {
    root: [
      "[font-variant-numeric:lining-nums_tabular-nums]",
      "border-collapse w-full text-start align-top",
    ].join(" "),
    row: "aria-selected:bg-[var(--cp-subtle)]",
    cell: "text-start items-center",
    columnHeader: "font-medium text-start text-[var(--fg)]",
    caption: "font-medium text-xs",
    footer: "font-medium",
    header: "",
    body: "",
  },

  variants: {
    interactive: {
      true: {
        body: "[&_tr]:hover:bg-[var(--cp-subtle)]",
      },
    },

    stickyHeader: {
      true: {
        header: [
          "[&_:where(tr)]:top-[var(--table-sticky-offset,0)]",
          "[&_:where(tr)]:sticky [&_:where(tr)]:z-[1]",
        ].join(" "),
      },
    },

    striped: {
      true: {
        row: "[&:nth-of-type(odd)_td]:bg-[var(--bg-muted)]",
      },
    },

    showColumnBorder: {
      true: {
        columnHeader: "[&:not(:last-of-type)]:border-e",
        cell: "[&:not(:last-of-type)]:border-e",
      },
    },

    variant: {
      line: {
        columnHeader: "border-b",
        cell: "border-b",
        row: "bg-[var(--bg)]",
      },

      outline: {
        root: "shadow-[0_0_0_1px_var(--border-color)]",
        columnHeader: "border-b",
        header: "bg-[var(--bg-muted)]",
        row: "[&:not(:last-of-type)]:border-b",
        footer: "border-t",
      },
    },

    size: {
      sm: {
        root: "text-sm",
        columnHeader: "px-2 py-2",
        cell: "px-2 py-2",
      },
      md: {
        root: "text-sm",
        columnHeader: "px-3 py-3",
        cell: "px-3 py-3",
      },
      lg: {
        root: "text-base",
        columnHeader: "px-4 py-3",
        cell: "px-4 py-3",
      },
    },
  },

  defaultVariants: {
    variant: "line" as const,
    size: "md" as const,
  },
}
