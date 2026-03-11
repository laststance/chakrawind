import * as React from "react"
import { cardSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/card"
import { cn } from "../lib/utils"

const recipe = cardSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CardContextValue {
  size?: string
  variant?: string
}

const CardContext = React.createContext<CardContextValue>({})

function CardProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: CardContextValue
}) {
  return <CardContext value={value}>{children}</CardContext>
}

function useCard(): CardContextValue {
  return React.use(CardContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Card — root wrapper providing variant context to sub-components.
 * @example
 * <Card size="md">
 *   slot sub-components
 * </Card>
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, size = "md", variant = "outline", children, ...props },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <CardProvider value={{ size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </CardProvider>
    )
  },
)
Card.displayName = "Card"

/**
 * CardHeader — "header" slot of Card.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCard()
  const baseClass = recipe.base?.header ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.header ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.header ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CardHeader.displayName = "CardHeader"

/**
 * CardBody — "body" slot of Card.
 */
const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCard()
  const baseClass = recipe.base?.body ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.body ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.body ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CardBody.displayName = "CardBody"

/**
 * CardFooter — "footer" slot of Card.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCard()
  const baseClass = recipe.base?.footer ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.footer ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.footer ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CardFooter.displayName = "CardFooter"

/**
 * CardTitle — "title" slot of Card.
 */
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCard()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.title ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CardTitle.displayName = "CardTitle"

/**
 * CardDescription — "description" slot of Card.
 */
const CardDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCard()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.description ?? "")
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
CardDescription.displayName = "CardDescription"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Card, CardHeader, CardBody, CardFooter, CardTitle, CardDescription }
