import * as React from "react"
import { emptyStateSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/empty-state"
import { cn } from "../lib/utils"

const recipe = emptyStateSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface EmptyStateContextValue {
  size?: string
}

const EmptyStateContext = React.createContext<EmptyStateContextValue>({})

function EmptyStateProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: EmptyStateContextValue
}) {
  return <EmptyStateContext value={value}>{children}</EmptyStateContext>
}

function useEmptyState(): EmptyStateContextValue {
  return React.use(EmptyStateContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * EmptyState — root wrapper providing variant context to sub-components.
 * @example
 * <EmptyState size="md">
 *   slot sub-components
 * </EmptyState>
 */
const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <EmptyStateProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </EmptyStateProvider>
    )
  },
)
EmptyState.displayName = "EmptyState"

/**
 * EmptyStateContent — "content" slot of EmptyState.
 */
const EmptyStateContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEmptyState()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EmptyStateContent.displayName = "EmptyStateContent"

/**
 * EmptyStateIndicator — "indicator" slot of EmptyState.
 */
const EmptyStateIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useEmptyState()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EmptyStateIndicator.displayName = "EmptyStateIndicator"

/**
 * EmptyStateTitle — "title" slot of EmptyState.
 */
const EmptyStateTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEmptyState()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EmptyStateTitle.displayName = "EmptyStateTitle"

/**
 * EmptyStateDescription — "description" slot of EmptyState.
 */
const EmptyStateDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useEmptyState()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EmptyStateDescription.displayName = "EmptyStateDescription"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  EmptyState,
  EmptyStateContent,
  EmptyStateIndicator,
  EmptyStateTitle,
  EmptyStateDescription,
}
