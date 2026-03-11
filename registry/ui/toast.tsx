import * as React from "react"
import { toastSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/toast"
import { cn } from "../lib/utils"

const recipe = toastSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ToastContextValue {}

const ToastContext = React.createContext<ToastContextValue>({})

function ToastProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ToastContextValue
}) {
  return <ToastContext value={value}>{children}</ToastContext>
}

function useToast(): ToastContextValue {
  return React.use(ToastContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Toast — root wrapper providing variant context to sub-components.
 * @example
 * <Toast >
 *   slot sub-components
 * </Toast>
 */
const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [].filter(Boolean)

    return (
      <ToastProvider value={{}}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </ToastProvider>
    )
  },
)
Toast.displayName = "Toast"

/**
 * ToastTitle — "title" slot of Toast.
 */
const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useToast()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ToastTitle.displayName = "ToastTitle"

/**
 * ToastDescription — "description" slot of Toast.
 */
const ToastDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useToast()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ToastDescription.displayName = "ToastDescription"

/**
 * ToastIndicator — "indicator" slot of Toast.
 */
const ToastIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useToast()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ToastIndicator.displayName = "ToastIndicator"

/**
 * ToastCloseTrigger — "closeTrigger" slot of Toast.
 */
const ToastCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useToast()
  const baseClass = recipe.base?.closeTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ToastCloseTrigger.displayName = "ToastCloseTrigger"

/**
 * ToastActionTrigger — "actionTrigger" slot of Toast.
 */
const ToastActionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useToast()
  const baseClass = recipe.base?.actionTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ToastActionTrigger.displayName = "ToastActionTrigger"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastIndicator,
  ToastCloseTrigger,
  ToastActionTrigger,
}
