import * as React from "react"
import { progressSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/progress"
import { cn } from "../lib/utils"

const recipe = progressSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ProgressContextValue {
  variant?: string
  shape?: string
  striped?: string
  animated?: string
  size?: string
}

const ProgressContext = React.createContext<ProgressContextValue>({})

function ProgressProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ProgressContextValue
}) {
  return <ProgressContext value={value}>{children}</ProgressContext>
}

function useProgress(): ProgressContextValue {
  return React.use(ProgressContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  shape?: string
  striped?: string
  animated?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Progress — root wrapper providing variant context to sub-components.
 * @example
 * <Progress variant="outline">
 *   slot sub-components
 * </Progress>
 */
const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      variant = "outline",
      shape = "rounded",
      striped,
      animated,
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      shape ? (recipe.variants?.shape?.[shape]?.root ?? "") : "",
      striped ? (recipe.variants?.striped?.[striped]?.root ?? "") : "",
      animated ? (recipe.variants?.animated?.[animated]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <ProgressProvider value={{ variant, shape, striped, animated, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </ProgressProvider>
    )
  },
)
Progress.displayName = "Progress"

/**
 * ProgressTrack — "track" slot of Progress.
 */
const ProgressTrack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgress()
  const baseClass = recipe.base?.track ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.track ?? "") : "",
    ctx.shape ? (recipe.variants?.shape?.[ctx.shape]?.track ?? "") : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.track ?? "") : "",
    ctx.animated
      ? (recipe.variants?.animated?.[ctx.animated]?.track ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.track ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ProgressTrack.displayName = "ProgressTrack"

/**
 * ProgressRange — "range" slot of Progress.
 */
const ProgressRange = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgress()
  const baseClass = recipe.base?.range ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.range ?? "") : "",
    ctx.shape ? (recipe.variants?.shape?.[ctx.shape]?.range ?? "") : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.range ?? "") : "",
    ctx.animated
      ? (recipe.variants?.animated?.[ctx.animated]?.range ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.range ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ProgressRange.displayName = "ProgressRange"

/**
 * ProgressLabel — "label" slot of Progress.
 */
const ProgressLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgress()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
    ctx.shape ? (recipe.variants?.shape?.[ctx.shape]?.label ?? "") : "",
    ctx.striped ? (recipe.variants?.striped?.[ctx.striped]?.label ?? "") : "",
    ctx.animated
      ? (recipe.variants?.animated?.[ctx.animated]?.label ?? "")
      : "",
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
ProgressLabel.displayName = "ProgressLabel"

/**
 * ProgressValueText — "valueText" slot of Progress.
 */
const ProgressValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useProgress()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.valueText ?? "")
      : "",
    ctx.shape ? (recipe.variants?.shape?.[ctx.shape]?.valueText ?? "") : "",
    ctx.striped
      ? (recipe.variants?.striped?.[ctx.striped]?.valueText ?? "")
      : "",
    ctx.animated
      ? (recipe.variants?.animated?.[ctx.animated]?.valueText ?? "")
      : "",
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
ProgressValueText.displayName = "ProgressValueText"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Progress,
  ProgressTrack,
  ProgressRange,
  ProgressLabel,
  ProgressValueText,
}
