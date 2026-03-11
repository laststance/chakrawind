import * as React from "react"
import { radioCardSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/radio-card"
import { cn } from "../lib/utils"

const recipe = radioCardSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface RadioCardContextValue {
  size?: string
  variant?: string
  justify?: string
  align?: string
  orientation?: string
}

const RadioCardContext = React.createContext<RadioCardContextValue>({})

function RadioCardProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: RadioCardContextValue
}) {
  return <RadioCardContext value={value}>{children}</RadioCardContext>
}

function useRadioCard(): RadioCardContextValue {
  return React.use(RadioCardContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface RadioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  justify?: string
  align?: string
  orientation?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * RadioCard — root wrapper providing variant context to sub-components.
 * @example
 * <RadioCard size="md">
 *   slot sub-components
 * </RadioCard>
 */
const RadioCard = React.forwardRef<HTMLDivElement, RadioCardProps>(
  (
    {
      className,
      size = "md",
      variant = "outline",
      justify,
      align = "start",
      orientation = "horizontal",
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
      justify ? (recipe.variants?.justify?.[justify]?.root ?? "") : "",
      align ? (recipe.variants?.align?.[align]?.root ?? "") : "",
      orientation
        ? (recipe.variants?.orientation?.[orientation]?.root ?? "")
        : "",
    ].filter(Boolean)

    return (
      <RadioCardProvider value={{ size, variant, justify, align, orientation }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </RadioCardProvider>
    )
  },
)
RadioCard.displayName = "RadioCard"

/**
 * RadioCardLabel — "label" slot of RadioCard.
 */
const RadioCardLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.label ?? "") : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.label ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.label ?? "")
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
RadioCardLabel.displayName = "RadioCardLabel"

/**
 * RadioCardItem — "item" slot of RadioCard.
 */
const RadioCardItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.item ?? "") : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.item ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.item ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItem.displayName = "RadioCardItem"

/**
 * RadioCardItemText — "itemText" slot of RadioCard.
 */
const RadioCardItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.itemText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemText ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.itemText ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.itemText ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemText ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItemText.displayName = "RadioCardItemText"

/**
 * RadioCardItemControl — "itemControl" slot of RadioCard.
 */
const RadioCardItemControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.itemControl ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemControl ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemControl ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.itemControl ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.itemControl ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemControl ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItemControl.displayName = "RadioCardItemControl"

/**
 * RadioCardItemAddon — "itemAddon" slot of RadioCard.
 */
const RadioCardItemAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.itemAddon ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemAddon ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemAddon ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.itemAddon ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.itemAddon ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemAddon ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItemAddon.displayName = "RadioCardItemAddon"

/**
 * RadioCardItemIndicator — "itemIndicator" slot of RadioCard.
 */
const RadioCardItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.itemIndicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemIndicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemIndicator ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.itemIndicator ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.itemIndicator ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemIndicator ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItemIndicator.displayName = "RadioCardItemIndicator"

/**
 * RadioCardItemContent — "itemContent" slot of RadioCard.
 */
const RadioCardItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.itemContent ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemContent ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemContent ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.itemContent ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.itemContent ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemContent ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItemContent.displayName = "RadioCardItemContent"

/**
 * RadioCardItemDescription — "itemDescription" slot of RadioCard.
 */
const RadioCardItemDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useRadioCard()
  const baseClass = recipe.base?.itemDescription ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemDescription ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemDescription ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.itemDescription ?? "")
      : "",
    ctx.align
      ? (recipe.variants?.align?.[ctx.align]?.itemDescription ?? "")
      : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.itemDescription ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
RadioCardItemDescription.displayName = "RadioCardItemDescription"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  RadioCard,
  RadioCardLabel,
  RadioCardItem,
  RadioCardItemText,
  RadioCardItemControl,
  RadioCardItemAddon,
  RadioCardItemIndicator,
  RadioCardItemContent,
  RadioCardItemDescription,
}
