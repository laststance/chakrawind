import * as React from "react"
import { checkboxSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/checkbox"
import { cn } from "../lib/utils"

const recipe = checkboxSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CheckboxContextValue {
  size?: string
  variant?: string
}

const CheckboxContext = React.createContext<CheckboxContextValue>({})

function CheckboxProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: CheckboxContextValue
}) {
  return <CheckboxContext value={value}>{children}</CheckboxContext>
}

function useCheckbox(): CheckboxContextValue {
  return React.use(CheckboxContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Checkbox — root wrapper providing variant context to sub-components.
 * @example
 * <Checkbox size="md">
 *   slot sub-components
 * </Checkbox>
 */
const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      className,
      size = "md",
      variant = "solid",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <CheckboxProvider value={{ size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </CheckboxProvider>
    )
  },
)
Checkbox.displayName = "Checkbox"

/**
 * CheckboxControl — "control" slot of Checkbox.
 */
const CheckboxControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckbox()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CheckboxControl.displayName = "CheckboxControl"

/**
 * CheckboxLabel — "label" slot of Checkbox.
 */
const CheckboxLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckbox()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CheckboxLabel.displayName = "CheckboxLabel"

/**
 * CheckboxIndicator — "indicator" slot of Checkbox.
 */
const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckbox()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CheckboxIndicator.displayName = "CheckboxIndicator"

/**
 * CheckboxGroup — "group" slot of Checkbox.
 */
const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckbox()
  const baseClass = recipe.base?.group ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.group ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.group ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CheckboxGroup.displayName = "CheckboxGroup"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxGroup,
}
