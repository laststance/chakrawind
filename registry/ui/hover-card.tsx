import * as React from "react"
import { hoverCardSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/hover-card"
import { cn } from "../lib/utils"

const recipe = hoverCardSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface HoverCardContextValue {
  size?: string
}

const HoverCardContext = React.createContext<HoverCardContextValue>({})

function HoverCardProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: HoverCardContextValue
}) {
  return <HoverCardContext value={value}>{children}</HoverCardContext>
}

function useHoverCard(): HoverCardContextValue {
  return React.use(HoverCardContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * HoverCard — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <HoverCard size="md">
 *   slot sub-components
 * </HoverCard>
 */
const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <HoverCardProvider value={{ size }}>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </HoverCardProvider>
    )
  },
)
HoverCard.displayName = "HoverCard"

/**
 * HoverCardArrow — "arrow" slot of HoverCard.
 */
const HoverCardArrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useHoverCard()
  const baseClass = recipe.base?.arrow ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.arrow ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
HoverCardArrow.displayName = "HoverCardArrow"

/**
 * HoverCardArrowTip — "arrowTip" slot of HoverCard.
 */
const HoverCardArrowTip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useHoverCard()
  const baseClass = recipe.base?.arrowTip ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.arrowTip ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
HoverCardArrowTip.displayName = "HoverCardArrowTip"

/**
 * HoverCardTrigger — "trigger" slot of HoverCard.
 */
const HoverCardTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useHoverCard()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
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
HoverCardTrigger.displayName = "HoverCardTrigger"

/**
 * HoverCardPositioner — "positioner" slot of HoverCard.
 */
const HoverCardPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useHoverCard()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.positioner ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
HoverCardPositioner.displayName = "HoverCardPositioner"

/**
 * HoverCardContent — "content" slot of HoverCard.
 */
const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useHoverCard()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
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
HoverCardContent.displayName = "HoverCardContent"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardTrigger,
  HoverCardPositioner,
  HoverCardContent,
}
