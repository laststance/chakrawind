import * as React from "react"
import { alertSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/alert"
import { cn } from "../lib/utils"

const recipe = alertSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface AlertContextValue {
  status?: string
  inline?: string
  variant?: string
  size?: string
}

const AlertContext = React.createContext<AlertContextValue>({})

function AlertProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: AlertContextValue
}) {
  return <AlertContext value={value}>{children}</AlertContext>
}

function useAlert(): AlertContextValue {
  return React.use(AlertContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: string
  inline?: string
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * AlertTitle — "title" slot of Alert.
 */
const AlertTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAlert()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.status ? (recipe.variants?.status?.[ctx.status]?.title ?? "") : "",
    ctx.inline ? (recipe.variants?.inline?.[ctx.inline]?.title ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.title ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AlertTitle.displayName = "AlertTitle"

/**
 * AlertDescription — "description" slot of Alert.
 */
const AlertDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useAlert()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.status
      ? (recipe.variants?.status?.[ctx.status]?.description ?? "")
      : "",
    ctx.inline
      ? (recipe.variants?.inline?.[ctx.inline]?.description ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.description ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AlertDescription.displayName = "AlertDescription"

/**
 * Alert — root wrapper providing variant context to sub-components.
 * @example
 * <Alert status="info">
 *   slot sub-components
 * </Alert>
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      status = "info",
      inline,
      variant = "subtle",
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      status ? (recipe.variants?.status?.[status]?.root ?? "") : "",
      inline ? (recipe.variants?.inline?.[inline]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <AlertProvider value={{ status, inline, variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </AlertProvider>
    )
  },
)
Alert.displayName = "Alert"

/**
 * AlertIndicator — "indicator" slot of Alert.
 */
const AlertIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useAlert()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.status ? (recipe.variants?.status?.[ctx.status]?.indicator ?? "") : "",
    ctx.inline ? (recipe.variants?.inline?.[ctx.inline]?.indicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
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
AlertIndicator.displayName = "AlertIndicator"

/**
 * AlertContent — "content" slot of Alert.
 */
const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAlert()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.status ? (recipe.variants?.status?.[ctx.status]?.content ?? "") : "",
    ctx.inline ? (recipe.variants?.inline?.[ctx.inline]?.content ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
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
AlertContent.displayName = "AlertContent"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { AlertTitle, AlertDescription, Alert, AlertIndicator, AlertContent }
