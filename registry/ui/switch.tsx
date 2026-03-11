import * as React from "react"
import { switchSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/switch"
import { cn } from "../lib/utils"

const recipe = switchSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SwitchContextValue {
  variant?: string
  size?: string
}

const SwitchContext = React.createContext<SwitchContextValue>({})

function SwitchProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: SwitchContextValue
}) {
  return <SwitchContext value={value}>{children}</SwitchContext>
}

function useSwitch(): SwitchContextValue {
  return React.use(SwitchContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Switch — root wrapper providing variant context to sub-components.
 * @example
 * <Switch variant="solid">
 *   slot sub-components
 * </Switch>
 */
const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      className,
      variant = "solid",
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
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <SwitchProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </SwitchProvider>
    )
  },
)
Switch.displayName = "Switch"

/**
 * SwitchControl — "control" slot of Switch.
 */
const SwitchControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSwitch()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
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
SwitchControl.displayName = "SwitchControl"

/**
 * SwitchThumb — "thumb" slot of Switch.
 */
const SwitchThumb = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSwitch()
  const baseClass = recipe.base?.thumb ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.thumb ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.thumb ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SwitchThumb.displayName = "SwitchThumb"

/**
 * SwitchLabel — "label" slot of Switch.
 */
const SwitchLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSwitch()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
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
SwitchLabel.displayName = "SwitchLabel"

/**
 * SwitchIndicator — "indicator" slot of Switch.
 */
const SwitchIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSwitch()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
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
SwitchIndicator.displayName = "SwitchIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Switch, SwitchControl, SwitchThumb, SwitchLabel, SwitchIndicator }
