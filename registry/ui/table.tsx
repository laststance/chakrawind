import * as React from "react"
import { tableSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/table"
import { cn } from "../lib/utils"

const recipe = tableSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TableContextValue {
  interactive?: string
  stickyHeader?: string
  striped?: string
  showColumnBorder?: string
  variant?: string
  size?: string
}

const TableContext = React.createContext<TableContextValue>({})

function TableProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TableContextValue
}) {
  return <TableContext value={value}>{children}</TableContext>
}

function useTable(): TableContextValue {
  return React.use(TableContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: string
  stickyHeader?: string
  striped?: string
  showColumnBorder?: string
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Table — root wrapper providing variant context to sub-components.
 * @example
 * <Table interactive="interactive">
 *   slot sub-components
 * </Table>
 */
const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (
    {
      className,
      interactive,
      stickyHeader,
      striped,
      showColumnBorder,
      variant = "line",
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      interactive
        ? (recipe.variants?.interactive?.[interactive]?.root ?? "")
        : "",
      stickyHeader
        ? (recipe.variants?.stickyHeader?.[stickyHeader]?.root ?? "")
        : "",
      striped ? (recipe.variants?.striped?.[striped]?.root ?? "") : "",
      showColumnBorder
        ? (recipe.variants?.showColumnBorder?.[showColumnBorder]?.root ?? "")
        : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <TableProvider
        value={{
          interactive,
          stickyHeader,
          striped,
          showColumnBorder,
          variant,
          size,
        }}
      >
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </TableProvider>
    )
  },
)
Table.displayName = "Table"

/**
 * TableHeader — "header" slot of Table.
 */
const TableHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.header ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.header ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.header ?? "")
      : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.header ?? "") : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]?.header ??
        "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.header ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.header ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableHeader.displayName = "TableHeader"

/**
 * TableBody — "body" slot of Table.
 */
const TableBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.body ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.body ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.body ?? "")
      : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.body ?? "") : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]?.body ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.body ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.body ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableBody.displayName = "TableBody"

/**
 * TableRow — "row" slot of Table.
 */
const TableRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.row ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.row ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.row ?? "")
      : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.row ?? "") : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]?.row ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.row ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.row ?? "") : "",
  ].filter(Boolean)

  return (
    <tr
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableRow.displayName = "TableRow"

/**
 * TableColumnHeader — "columnHeader" slot of Table.
 */
const TableColumnHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.columnHeader ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.columnHeader ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.columnHeader ?? "")
      : "",
    ctx.striped
      ? (recipe.variants?.striped?.[ctx.striped]?.columnHeader ?? "")
      : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]
          ?.columnHeader ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.columnHeader ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.columnHeader ?? "") : "",
  ].filter(Boolean)

  return (
    <th
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableColumnHeader.displayName = "TableColumnHeader"

/**
 * TableCell — "cell" slot of Table.
 */
const TableCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.cell ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.cell ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.cell ?? "")
      : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.cell ?? "") : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]?.cell ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.cell ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.cell ?? "") : "",
  ].filter(Boolean)

  return (
    <td
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableCell.displayName = "TableCell"

/**
 * TableFooter — "footer" slot of Table.
 */
const TableFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.footer ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.footer ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.footer ?? "")
      : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.footer ?? "") : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]?.footer ??
        "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.footer ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.footer ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableFooter.displayName = "TableFooter"

/**
 * TableCaption — "caption" slot of Table.
 */
const TableCaption = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTable()
  const baseClass = recipe.base?.caption ?? ""
  const variantClasses = [
    ctx.interactive
      ? (recipe.variants?.interactive?.[ctx.interactive]?.caption ?? "")
      : "",
    ctx.stickyHeader
      ? (recipe.variants?.stickyHeader?.[ctx.stickyHeader]?.caption ?? "")
      : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.caption ?? "") : "",
    ctx.showColumnBorder
      ? (recipe.variants?.showColumnBorder?.[ctx.showColumnBorder]?.caption ??
        "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.caption ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.caption ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TableCaption.displayName = "TableCaption"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeader,
  TableCell,
  TableFooter,
  TableCaption,
}
