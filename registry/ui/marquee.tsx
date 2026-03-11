import * as React from "react"
import { marqueeSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/marquee"
import { cn } from "../lib/utils"

const recipe = marqueeSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface MarqueeContextValue {}

const MarqueeContext = React.createContext<MarqueeContextValue>({})

function MarqueeProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: MarqueeContextValue
}) {
  return <MarqueeContext value={value}>{children}</MarqueeContext>
}

function useMarquee(): MarqueeContextValue {
  return React.use(MarqueeContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Marquee — root wrapper providing variant context to sub-components.
 * @example
 * <Marquee >
 *   slot sub-components
 * </Marquee>
 */
const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [].filter(Boolean)

    return (
      <MarqueeProvider value={{}}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </MarqueeProvider>
    )
  },
)
Marquee.displayName = "Marquee"

/**
 * MarqueeViewport — "viewport" slot of Marquee.
 */
const MarqueeViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMarquee()
  const baseClass = recipe.base?.viewport ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MarqueeViewport.displayName = "MarqueeViewport"

/**
 * MarqueeContent — "content" slot of Marquee.
 */
const MarqueeContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMarquee()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MarqueeContent.displayName = "MarqueeContent"

/**
 * MarqueeEdge — "edge" slot of Marquee.
 */
const MarqueeEdge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMarquee()
  const baseClass = recipe.base?.edge ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MarqueeEdge.displayName = "MarqueeEdge"

/**
 * MarqueeItem — "item" slot of Marquee.
 */
const MarqueeItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMarquee()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MarqueeItem.displayName = "MarqueeItem"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Marquee, MarqueeViewport, MarqueeContent, MarqueeEdge, MarqueeItem }
