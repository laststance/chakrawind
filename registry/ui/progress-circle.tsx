import * as React from "react"
import { progressCircleSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/progress-circle"
import { cn } from "../lib/utils"

const recipe = progressCircleSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ProgressCircleContextValue {
  size?: string
}

const ProgressCircleContext = React.createContext<ProgressCircleContextValue>(
  {},
)

function ProgressCircleProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ProgressCircleContextValue
}) {
  return <ProgressCircleContext value={value}>{children}</ProgressCircleContext>
}

function useProgressCircle(): ProgressCircleContextValue {
  return React.use(ProgressCircleContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * ProgressCircle — root wrapper providing variant context to sub-components.
 * @example
 * <ProgressCircle size="md">
 *   slot sub-components
 * </ProgressCircle>
 */
const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <ProgressCircleProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </ProgressCircleProvider>
    )
  },
)
ProgressCircle.displayName = "ProgressCircle"

/**
 * ProgressCircleCircle — "circle" slot of ProgressCircle.
 */
const ProgressCircleCircle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgressCircle()
  const baseClass = recipe.base?.circle ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.circle ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ProgressCircleCircle.displayName = "ProgressCircleCircle"

/**
 * ProgressCircleCircleTrack — "circleTrack" slot of ProgressCircle.
 */
const ProgressCircleCircleTrack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgressCircle()
  const baseClass = recipe.base?.circleTrack ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.circleTrack ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ProgressCircleCircleTrack.displayName = "ProgressCircleCircleTrack"

/**
 * ProgressCircleCircleRange — "circleRange" slot of ProgressCircle.
 */
const ProgressCircleCircleRange = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgressCircle()
  const baseClass = recipe.base?.circleRange ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.circleRange ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ProgressCircleCircleRange.displayName = "ProgressCircleCircleRange"

/**
 * ProgressCircleLabel — "label" slot of ProgressCircle.
 */
const ProgressCircleLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgressCircle()
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
ProgressCircleLabel.displayName = "ProgressCircleLabel"

/**
 * ProgressCircleValueText — "valueText" slot of ProgressCircle.
 */
const ProgressCircleValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgressCircle()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.valueText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ProgressCircleValueText.displayName = "ProgressCircleValueText"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  ProgressCircle,
  ProgressCircleCircle,
  ProgressCircleCircleTrack,
  ProgressCircleCircleRange,
  ProgressCircleLabel,
  ProgressCircleValueText,
}
