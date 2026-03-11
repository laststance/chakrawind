import * as React from "react"
import { radioGroupSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/radio-group"
import { cn } from "../lib/utils"

const recipe = radioGroupSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface RadioGroupContextValue {
  variant?: string
  size?: string
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({})

function RadioGroupProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: RadioGroupContextValue
}) {
  return <RadioGroupContext value={value}>{children}</RadioGroupContext>
}

function useRadioGroup(): RadioGroupContextValue {
  return React.use(RadioGroupContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * RadioGroup — root wrapper providing variant context to sub-components.
 * @example
 * <RadioGroup variant="solid">
 *   slot sub-components
 * </RadioGroup>
 */
const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
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
      <RadioGroupProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </RadioGroupProvider>
    )
  },
)
RadioGroup.displayName = "RadioGroup"

/**
 * RadioGroupLabel — "label" slot of RadioGroup.
 */
const RadioGroupLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioGroup()
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
RadioGroupLabel.displayName = "RadioGroupLabel"

/**
 * RadioGroupItem — "item" slot of RadioGroup.
 */
const RadioGroupItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioGroup()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
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
RadioGroupItem.displayName = "RadioGroupItem"

/**
 * RadioGroupItemText — "itemText" slot of RadioGroup.
 */
const RadioGroupItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioGroup()
  const baseClass = recipe.base?.itemText ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemText ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioGroupItemText.displayName = "RadioGroupItemText"

/**
 * RadioGroupItemControl — "itemControl" slot of RadioGroup.
 */
const RadioGroupItemControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioGroup()
  const baseClass = recipe.base?.itemControl ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemControl ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemControl ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioGroupItemControl.displayName = "RadioGroupItemControl"

/**
 * RadioGroupItemAddon — "itemAddon" slot of RadioGroup.
 */
const RadioGroupItemAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioGroup()
  const baseClass = recipe.base?.itemAddon ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemAddon ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemAddon ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioGroupItemAddon.displayName = "RadioGroupItemAddon"

/**
 * RadioGroupItemIndicator — "itemIndicator" slot of RadioGroup.
 */
const RadioGroupItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioGroup()
  const baseClass = recipe.base?.itemIndicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemIndicator ?? "")
      : "",
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
RadioGroupItemIndicator.displayName = "RadioGroupItemIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
  RadioGroupItemAddon,
  RadioGroupItemIndicator,
}
