import * as React from "react"
import { selectSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/select"
import { cn } from "../lib/utils"

const recipe = selectSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SelectContextValue {
  variant?: string
  size?: string
}

const SelectContext = React.createContext<SelectContextValue>({})

function SelectProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: SelectContextValue
}) {
  return <SelectContext value={value}>{children}</SelectContext>
}

function useSelect(): SelectContextValue {
  return React.use(SelectContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Select — root wrapper providing variant context to sub-components.
 * @example
 * <Select variant="outline">
 *   slot sub-components
 * </Select>
 */
const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    { className, variant = "outline", size = "md", children, ...props },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <SelectProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SelectProvider>
    )
  },
)
Select.displayName = "Select"

/**
 * SelectLabel — "label" slot of Select.
 */
const SelectLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
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
SelectLabel.displayName = "SelectLabel"

/**
 * SelectTrigger — "trigger" slot of Select.
 */
const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.trigger ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SelectTrigger.displayName = "SelectTrigger"

/**
 * SelectIndicator — "indicator" slot of Select.
 */
const SelectIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
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
SelectIndicator.displayName = "SelectIndicator"

/**
 * SelectIndicatorGroup — "indicatorGroup" slot of Select.
 */
const SelectIndicatorGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.indicatorGroup ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicatorGroup ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicatorGroup ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SelectIndicatorGroup.displayName = "SelectIndicatorGroup"

/**
 * SelectContent — "content" slot of Select.
 */
const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
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
SelectContent.displayName = "SelectContent"

/**
 * SelectItem — "item" slot of Select.
 */
const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
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
SelectItem.displayName = "SelectItem"

/**
 * SelectItemText — "itemText" slot of Select.
 */
const SelectItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
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
SelectItemText.displayName = "SelectItemText"

/**
 * SelectItemIndicator — "itemIndicator" slot of Select.
 */
const SelectItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
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
SelectItemIndicator.displayName = "SelectItemIndicator"

/**
 * SelectItemGroup — "itemGroup" slot of Select.
 */
const SelectItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.itemGroup ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemGroup ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemGroup ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SelectItemGroup.displayName = "SelectItemGroup"

/**
 * SelectItemGroupLabel — "itemGroupLabel" slot of Select.
 */
const SelectItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.itemGroupLabel ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemGroupLabel ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemGroupLabel ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SelectItemGroupLabel.displayName = "SelectItemGroupLabel"

/**
 * SelectControl — "control" slot of Select.
 */
const SelectControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
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
SelectControl.displayName = "SelectControl"

/**
 * SelectValueText — "valueText" slot of Select.
 */
const SelectValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.valueText ?? "")
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
SelectValueText.displayName = "SelectValueText"

/**
 * SelectClearTrigger — "clearTrigger" slot of Select.
 */
const SelectClearTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSelect()
  const baseClass = recipe.base?.clearTrigger ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.clearTrigger ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.clearTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SelectClearTrigger.displayName = "SelectClearTrigger"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectIndicator,
  SelectIndicatorGroup,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectControl,
  SelectValueText,
  SelectClearTrigger,
}
