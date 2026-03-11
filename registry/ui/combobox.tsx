import * as React from "react"
import { comboboxSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/combobox"
import { cn } from "../lib/utils"

const recipe = comboboxSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ComboboxContextValue {
  variant?: string
  size?: string
}

const ComboboxContext = React.createContext<ComboboxContextValue>({})

function ComboboxProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ComboboxContextValue
}) {
  return <ComboboxContext value={value}>{children}</ComboboxContext>
}

function useCombobox(): ComboboxContextValue {
  return React.use(ComboboxContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ComboboxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Combobox — root wrapper providing variant context to sub-components.
 * @example
 * <Combobox variant="outline">
 *   slot sub-components
 * </Combobox>
 */
const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      className,
      variant = "outline",
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
      <ComboboxProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </ComboboxProvider>
    )
  },
)
Combobox.displayName = "Combobox"

/**
 * ComboboxLabel — "label" slot of Combobox.
 */
const ComboboxLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxLabel.displayName = "ComboboxLabel"

/**
 * ComboboxControl — "control" slot of Combobox.
 */
const ComboboxControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxControl.displayName = "ComboboxControl"

/**
 * ComboboxInput — "input" slot of Combobox.
 */
const ComboboxInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
  const baseClass = recipe.base?.input ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.input ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.input ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ComboboxInput.displayName = "ComboboxInput"

/**
 * ComboboxTrigger — "trigger" slot of Combobox.
 */
const ComboboxTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxTrigger.displayName = "ComboboxTrigger"

/**
 * ComboboxClearTrigger — "clearTrigger" slot of Combobox.
 */
const ComboboxClearTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxClearTrigger.displayName = "ComboboxClearTrigger"

/**
 * ComboboxIndicatorGroup — "indicatorGroup" slot of Combobox.
 */
const ComboboxIndicatorGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxIndicatorGroup.displayName = "ComboboxIndicatorGroup"

/**
 * ComboboxContent — "content" slot of Combobox.
 */
const ComboboxContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxContent.displayName = "ComboboxContent"

/**
 * ComboboxItem — "item" slot of Combobox.
 */
const ComboboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxItem.displayName = "ComboboxItem"

/**
 * ComboboxItemText — "itemText" slot of Combobox.
 */
const ComboboxItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxItemText.displayName = "ComboboxItemText"

/**
 * ComboboxItemIndicator — "itemIndicator" slot of Combobox.
 */
const ComboboxItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxItemIndicator.displayName = "ComboboxItemIndicator"

/**
 * ComboboxItemGroup — "itemGroup" slot of Combobox.
 */
const ComboboxItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxItemGroup.displayName = "ComboboxItemGroup"

/**
 * ComboboxItemGroupLabel — "itemGroupLabel" slot of Combobox.
 */
const ComboboxItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
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
ComboboxItemGroupLabel.displayName = "ComboboxItemGroupLabel"

/**
 * ComboboxEmpty — "empty" slot of Combobox.
 */
const ComboboxEmpty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCombobox()
  const baseClass = recipe.base?.empty ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.empty ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.empty ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ComboboxEmpty.displayName = "ComboboxEmpty"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Combobox,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClearTrigger,
  ComboboxIndicatorGroup,
  ComboboxContent,
  ComboboxItem,
  ComboboxItemText,
  ComboboxItemIndicator,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxEmpty,
}
