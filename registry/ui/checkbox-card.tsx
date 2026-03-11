import * as React from "react"
import { checkboxCardSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/checkbox-card"
import { cn } from "../lib/utils"

const recipe = checkboxCardSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CheckboxCardContextValue {
  size?: string
  variant?: string
  justify?: string
  align?: string
  orientation?: string
}

const CheckboxCardContext = React.createContext<CheckboxCardContextValue>({})

function CheckboxCardProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: CheckboxCardContextValue
}) {
  return <CheckboxCardContext value={value}>{children}</CheckboxCardContext>
}

function useCheckboxCard(): CheckboxCardContextValue {
  return React.use(CheckboxCardContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CheckboxCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * CheckboxCard — root wrapper providing variant context to sub-components.
 * @example
 * <CheckboxCard size="md">
 *   slot sub-components
 * </CheckboxCard>
 */
const CheckboxCard = React.forwardRef<HTMLDivElement, CheckboxCardProps>(
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
      <CheckboxCardProvider
        value={{ size, variant, justify, align, orientation }}
      >
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </CheckboxCardProvider>
    )
  },
)
CheckboxCard.displayName = "CheckboxCard"

/**
 * CheckboxCardControl — "control" slot of CheckboxCard.
 */
const CheckboxCardControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckboxCard()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.control ?? "") : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.control ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.control ?? "")
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
CheckboxCardControl.displayName = "CheckboxCardControl"

/**
 * CheckboxCardLabel — "label" slot of CheckboxCard.
 */
const CheckboxCardLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckboxCard()
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
CheckboxCardLabel.displayName = "CheckboxCardLabel"

/**
 * CheckboxCardDescription — "description" slot of CheckboxCard.
 */
const CheckboxCardDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckboxCard()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.description ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.description ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.description ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.description ?? "")
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
CheckboxCardDescription.displayName = "CheckboxCardDescription"

/**
 * CheckboxCardAddon — "addon" slot of CheckboxCard.
 */
const CheckboxCardAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckboxCard()
  const baseClass = recipe.base?.addon ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.addon ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.addon ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.addon ?? "") : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.addon ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.addon ?? "")
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
CheckboxCardAddon.displayName = "CheckboxCardAddon"

/**
 * CheckboxCardIndicator — "indicator" slot of CheckboxCard.
 */
const CheckboxCardIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckboxCard()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.indicator ?? "")
      : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.indicator ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.indicator ?? "")
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
CheckboxCardIndicator.displayName = "CheckboxCardIndicator"

/**
 * CheckboxCardContent — "content" slot of CheckboxCard.
 */
const CheckboxCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCheckboxCard()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.content ?? "") : "",
    ctx.align ? (recipe.variants?.align?.[ctx.align]?.content ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.content ?? "")
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
CheckboxCardContent.displayName = "CheckboxCardContent"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  CheckboxCard,
  CheckboxCardControl,
  CheckboxCardLabel,
  CheckboxCardDescription,
  CheckboxCardAddon,
  CheckboxCardIndicator,
  CheckboxCardContent,
}
