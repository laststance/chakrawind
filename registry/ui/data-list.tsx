import * as React from "react"
import { dataListSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/data-list"
import { cn } from "../lib/utils"

const recipe = dataListSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface DataListContextValue {
  orientation?: string
  size?: string
  variant?: string
}

const DataListContext = React.createContext<DataListContextValue>({})

function DataListProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: DataListContextValue
}) {
  return <DataListContext value={value}>{children}</DataListContext>
}

function useDataList(): DataListContextValue {
  return React.use(DataListContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface DataListProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: string
  size?: string
  variant?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * DataList — root wrapper providing variant context to sub-components.
 * @example
 * <DataList orientation="vertical">
 *   slot sub-components
 * </DataList>
 */
const DataList = React.forwardRef<HTMLDivElement, DataListProps>(
  (
    {
      className,
      orientation = "vertical",
      size = "md",
      variant = "subtle",
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      orientation
        ? (recipe.variants?.orientation?.[orientation]?.root ?? "")
        : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <DataListProvider value={{ orientation, size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </DataListProvider>
    )
  },
)
DataList.displayName = "DataList"

/**
 * DataListItem — "item" slot of DataList.
 */
const DataListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDataList()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.item ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
DataListItem.displayName = "DataListItem"

/**
 * DataListItemLabel — "itemLabel" slot of DataList.
 */
const DataListItemLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDataList()
  const baseClass = recipe.base?.itemLabel ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemLabel ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemLabel ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemLabel ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
DataListItemLabel.displayName = "DataListItemLabel"

/**
 * DataListItemValue — "itemValue" slot of DataList.
 */
const DataListItemValue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDataList()
  const baseClass = recipe.base?.itemValue ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemValue ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemValue ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemValue ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
DataListItemValue.displayName = "DataListItemValue"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { DataList, DataListItem, DataListItemLabel, DataListItemValue }
