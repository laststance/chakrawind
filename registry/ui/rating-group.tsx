import * as React from "react"
import { ratingGroupSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/rating-group"
import { cn } from "../lib/utils"

const recipe = ratingGroupSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface RatingGroupContextValue {
  size?: string
}

const RatingGroupContext = React.createContext<RatingGroupContextValue>({})

function RatingGroupProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: RatingGroupContextValue
}) {
  return <RatingGroupContext value={value}>{children}</RatingGroupContext>
}

function useRatingGroup(): RatingGroupContextValue {
  return React.use(RatingGroupContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface RatingGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * RatingGroup — root wrapper providing variant context to sub-components.
 * @example
 * <RatingGroup size="md">
 *   slot sub-components
 * </RatingGroup>
 */
const RatingGroup = React.forwardRef<HTMLDivElement, RatingGroupProps>(
  ({ className, size = "md", colorPalette, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <RatingGroupProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </RatingGroupProvider>
    )
  },
)
RatingGroup.displayName = "RatingGroup"

/**
 * RatingGroupControl — "control" slot of RatingGroup.
 */
const RatingGroupControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRatingGroup()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RatingGroupControl.displayName = "RatingGroupControl"

/**
 * RatingGroupItem — "item" slot of RatingGroup.
 */
const RatingGroupItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRatingGroup()
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
RatingGroupItem.displayName = "RatingGroupItem"

/**
 * RatingGroupLabel — "label" slot of RatingGroup.
 */
const RatingGroupLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useRatingGroup()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RatingGroupLabel.displayName = "RatingGroupLabel"

/**
 * RatingGroupItemIndicator — "itemIndicator" slot of RatingGroup.
 */
const RatingGroupItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRatingGroup()
  const baseClass = recipe.base?.itemIndicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemIndicator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RatingGroupItemIndicator.displayName = "RatingGroupItemIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  RatingGroup,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
  RatingGroupItemIndicator,
}
