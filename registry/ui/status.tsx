import * as React from "react"
import { statusSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/status"
import { cn } from "../lib/utils"

const recipe = statusSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface StatusContextValue {
  size?: string
}

const StatusContext = React.createContext<StatusContextValue>({})

function StatusProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: StatusContextValue
}) {
  return <StatusContext value={value}>{children}</StatusContext>
}

function useStatus(): StatusContextValue {
  return React.use(StatusContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Status — root wrapper providing variant context to sub-components.
 * @example
 * <Status size="md">
 *   slot sub-components
 * </Status>
 */
const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  ({ className, size = "md", colorPalette, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <StatusProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </StatusProvider>
    )
  },
)
Status.displayName = "Status"

/**
 * StatusIndicator — "indicator" slot of Status.
 */
const StatusIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useStatus()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
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
StatusIndicator.displayName = "StatusIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Status, StatusIndicator }
