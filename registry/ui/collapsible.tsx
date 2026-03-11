import * as React from "react"
import { collapsibleSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/collapsible"
import { cn } from "../lib/utils"

const recipe = collapsibleSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CollapsibleContextValue {}

const CollapsibleContext = React.createContext<CollapsibleContextValue>({})

function CollapsibleProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: CollapsibleContextValue
}) {
  return <CollapsibleContext value={value}>{children}</CollapsibleContext>
}

function useCollapsible(): CollapsibleContextValue {
  return React.use(CollapsibleContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Collapsible — root wrapper providing variant context to sub-components.
 * @example
 * <Collapsible >
 *   slot sub-components
 * </Collapsible>
 */
const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ className, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [].filter(Boolean)

    return (
      <CollapsibleProvider value={{}}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </CollapsibleProvider>
    )
  },
)
Collapsible.displayName = "Collapsible"

/**
 * CollapsibleTrigger — "trigger" slot of Collapsible.
 */
const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCollapsible()
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
CollapsibleTrigger.displayName = "CollapsibleTrigger"

/**
 * CollapsibleContent — "content" slot of Collapsible.
 */
const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCollapsible()
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
CollapsibleContent.displayName = "CollapsibleContent"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
