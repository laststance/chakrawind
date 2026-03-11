import * as React from "react"
import { tooltipSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/tooltip"
import { cn } from "../lib/utils"

const recipe = tooltipSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TooltipContextValue {}

const TooltipContext = React.createContext<TooltipContextValue>({})

function TooltipProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TooltipContextValue
}) {
  return <TooltipContext value={value}>{children}</TooltipContext>
}

function useTooltip(): TooltipContextValue {
  return React.use(TooltipContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Tooltip — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <Tooltip >
 *   slot sub-components
 * </Tooltip>
 */
const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <TooltipProvider value={{}}>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </TooltipProvider>
    )
  },
)
Tooltip.displayName = "Tooltip"

/**
 * TooltipTrigger — "trigger" slot of Tooltip.
 */
const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useTooltip()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TooltipTrigger.displayName = "TooltipTrigger"

/**
 * TooltipArrow — "arrow" slot of Tooltip.
 */
const TooltipArrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTooltip()
  const baseClass = recipe.base?.arrow ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TooltipArrow.displayName = "TooltipArrow"

/**
 * TooltipArrowTip — "arrowTip" slot of Tooltip.
 */
const TooltipArrowTip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTooltip()
  const baseClass = recipe.base?.arrowTip ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TooltipArrowTip.displayName = "TooltipArrowTip"

/**
 * TooltipPositioner — "positioner" slot of Tooltip.
 */
const TooltipPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTooltip()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TooltipPositioner.displayName = "TooltipPositioner"

/**
 * TooltipContent — "content" slot of Tooltip.
 */
const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTooltip()
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
TooltipContent.displayName = "TooltipContent"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Tooltip,
  TooltipTrigger,
  TooltipArrow,
  TooltipArrowTip,
  TooltipPositioner,
  TooltipContent,
}
