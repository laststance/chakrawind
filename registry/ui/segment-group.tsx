import * as React from "react"
import { segmentGroupSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/segment-group"
import { cn } from "../lib/utils"

const recipe = segmentGroupSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SegmentGroupContextValue {
  size?: string
}

const SegmentGroupContext = React.createContext<SegmentGroupContextValue>({})

function SegmentGroupProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: SegmentGroupContextValue
}) {
  return <SegmentGroupContext value={value}>{children}</SegmentGroupContext>
}

function useSegmentGroup(): SegmentGroupContextValue {
  return React.use(SegmentGroupContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface SegmentGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * SegmentGroup — root wrapper providing variant context to sub-components.
 * @example
 * <SegmentGroup size="md">
 *   slot sub-components
 * </SegmentGroup>
 */
const SegmentGroup = React.forwardRef<HTMLDivElement, SegmentGroupProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <SegmentGroupProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SegmentGroupProvider>
    )
  },
)
SegmentGroup.displayName = "SegmentGroup"

/**
 * SegmentGroupItem — "item" slot of SegmentGroup.
 */
const SegmentGroupItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSegmentGroup()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SegmentGroupItem.displayName = "SegmentGroupItem"

/**
 * SegmentGroupIndicator — "indicator" slot of SegmentGroup.
 */
const SegmentGroupIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSegmentGroup()
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
SegmentGroupIndicator.displayName = "SegmentGroupIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { SegmentGroup, SegmentGroupItem, SegmentGroupIndicator }
