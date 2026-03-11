import * as React from "react"
import { qrCodeSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/qr-code"
import { cn } from "../lib/utils"

const recipe = qrCodeSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface QrCodeContextValue {
  size?: string
}

const QrCodeContext = React.createContext<QrCodeContextValue>({})

function QrCodeProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: QrCodeContextValue
}) {
  return <QrCodeContext value={value}>{children}</QrCodeContext>
}

function useQrCode(): QrCodeContextValue {
  return React.use(QrCodeContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface QrCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * QrCode — root wrapper providing variant context to sub-components.
 * @example
 * <QrCode size="md">
 *   slot sub-components
 * </QrCode>
 */
const QrCode = React.forwardRef<HTMLDivElement, QrCodeProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <QrCodeProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </QrCodeProvider>
    )
  },
)
QrCode.displayName = "QrCode"

/**
 * QrCodeFrame — "frame" slot of QrCode.
 */
const QrCodeFrame = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useQrCode()
  const baseClass = recipe.base?.frame ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.frame ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
QrCodeFrame.displayName = "QrCodeFrame"

/**
 * QrCodePattern — "pattern" slot of QrCode.
 */
const QrCodePattern = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useQrCode()
  const baseClass = recipe.base?.pattern ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.pattern ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
QrCodePattern.displayName = "QrCodePattern"

/**
 * QrCodeOverlay — "overlay" slot of QrCode.
 */
const QrCodeOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useQrCode()
  const baseClass = recipe.base?.overlay ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.overlay ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
QrCodeOverlay.displayName = "QrCodeOverlay"

/**
 * QrCodeDownloadTrigger — "downloadTrigger" slot of QrCode.
 */
const QrCodeDownloadTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useQrCode()
  const baseClass = recipe.base?.downloadTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.downloadTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
QrCodeDownloadTrigger.displayName = "QrCodeDownloadTrigger"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  QrCode,
  QrCodeFrame,
  QrCodePattern,
  QrCodeOverlay,
  QrCodeDownloadTrigger,
}
