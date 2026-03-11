import * as React from "react"
import { listSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/list"
import { cn } from "../lib/utils"

const recipe = listSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ListContextValue {
  variant?: string
  align?: string
}

const ListContext = React.createContext<ListContextValue>({})

function ListProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ListContextValue
}) {
  return <ListContext value={value}>{children}</ListContext>
}

function useList(): ListContextValue {
  return React.use(ListContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  align?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * List — root wrapper providing variant context to sub-components.
 * @example
 * <List variant="marker">
 *   slot sub-components
 * </List>
 */
const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, variant = "marker", align, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      align ? (recipe.variants?.align?.[align]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <ListProvider value={{ variant, align }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </ListProvider>
    )
  },
)
List.displayName = "List"

/**
 * ListItem — "item" slot of List.
 */
const ListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useList()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ListItem.displayName = "ListItem"

/**
 * ListIndicator — "indicator" slot of List.
 */
const ListIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useList()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.indicator ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ListIndicator.displayName = "ListIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { List, ListItem, ListIndicator }
