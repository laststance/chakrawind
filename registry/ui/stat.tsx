import * as React from "react"
import { statSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/stat"
import { cn } from "../lib/utils"

const recipe = statSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface StatContextValue {
  size?: string
}

const StatContext = React.createContext<StatContextValue>({})

function StatProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: StatContextValue
}) {
  return <StatContext value={value}>{children}</StatContext>
}

function useStat(): StatContextValue {
  return React.use(StatContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Stat — root wrapper providing variant context to sub-components.
 * @example
 * <Stat size="md">
 *   slot sub-components
 * </Stat>
 */
const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <StatProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </StatProvider>
    )
  },
)
Stat.displayName = "Stat"

/**
 * StatLabel — "label" slot of Stat.
 */
const StatLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useStat()
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
StatLabel.displayName = "StatLabel"

/**
 * StatHelpText — "helpText" slot of Stat.
 */
const StatHelpText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useStat()
  const baseClass = recipe.base?.helpText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.helpText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StatHelpText.displayName = "StatHelpText"

/**
 * StatValueText — "valueText" slot of Stat.
 */
const StatValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useStat()
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
StatValueText.displayName = "StatValueText"

/**
 * StatValueUnit — "valueUnit" slot of Stat.
 */
const StatValueUnit = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useStat()
  const baseClass = recipe.base?.valueUnit ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.valueUnit ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StatValueUnit.displayName = "StatValueUnit"

/**
 * StatIndicator — "indicator" slot of Stat.
 */
const StatIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useStat()
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
StatIndicator.displayName = "StatIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Stat,
  StatLabel,
  StatHelpText,
  StatValueText,
  StatValueUnit,
  StatIndicator,
}
