import * as React from "react"
import { actionBarSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/action-bar"
import { cn } from "../lib/utils"

const recipe = actionBarSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ActionBarContextValue {
  placement?: string
}

const ActionBarContext = React.createContext<ActionBarContextValue>({})

function ActionBarProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ActionBarContextValue
}) {
  return <ActionBarContext value={value}>{children}</ActionBarContext>
}

function useActionBar(): ActionBarContextValue {
  return React.use(ActionBarContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * ActionBar — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <ActionBar placement="bottom">
 *   slot sub-components
 * </ActionBar>
 */
const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  ({ className, placement = "bottom", children, ...props }, ref) => {
    return (
      <ActionBarProvider value={{ placement }}>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </ActionBarProvider>
    )
  },
)
ActionBar.displayName = "ActionBar"

/**
 * ActionBarPositioner — "positioner" slot of ActionBar.
 */
const ActionBarPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useActionBar()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.positioner ?? "")
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
ActionBarPositioner.displayName = "ActionBarPositioner"

/**
 * ActionBarContent — "content" slot of ActionBar.
 */
const ActionBarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useActionBar()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.content ?? "")
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
ActionBarContent.displayName = "ActionBarContent"

/**
 * ActionBarSeparator — "separator" slot of ActionBar.
 */
const ActionBarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useActionBar()
  const baseClass = recipe.base?.separator ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.separator ?? "")
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
ActionBarSeparator.displayName = "ActionBarSeparator"

/**
 * ActionBarSelectionTrigger — "selectionTrigger" slot of ActionBar.
 */
const ActionBarSelectionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useActionBar()
  const baseClass = recipe.base?.selectionTrigger ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.selectionTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ActionBarSelectionTrigger.displayName = "ActionBarSelectionTrigger"

/**
 * ActionBarCloseTrigger — "closeTrigger" slot of ActionBar.
 */
const ActionBarCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useActionBar()
  const baseClass = recipe.base?.closeTrigger ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.closeTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ActionBarCloseTrigger.displayName = "ActionBarCloseTrigger"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  ActionBar,
  ActionBarPositioner,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarSelectionTrigger,
  ActionBarCloseTrigger,
}
