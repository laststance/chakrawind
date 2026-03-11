import * as React from "react"
import { dialogSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/dialog"
import { cn } from "../lib/utils"

const recipe = dialogSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface DialogContextValue {
  placement?: string
  scrollBehavior?: string
  size?: string
  motionPreset?: string
}

const DialogContext = React.createContext<DialogContextValue>({})

function DialogProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: DialogContextValue
}) {
  return <DialogContext value={value}>{children}</DialogContext>
}

function useDialog(): DialogContextValue {
  return React.use(DialogContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: string
  scrollBehavior?: string
  size?: string
  motionPreset?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Dialog — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <Dialog placement="top">
 *   slot sub-components
 * </Dialog>
 */
const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      className,
      placement = "top",
      scrollBehavior = "outside",
      size = "md",
      motionPreset = "scale",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <DialogProvider value={{ placement, scrollBehavior, size, motionPreset }}>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </DialogProvider>
    )
  },
)
Dialog.displayName = "Dialog"

/**
 * DialogTrigger — "trigger" slot of Dialog.
 */
const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.trigger ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.trigger ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.trigger ?? "")
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
DialogTrigger.displayName = "DialogTrigger"

/**
 * DialogBackdrop — "backdrop" slot of Dialog.
 */
const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.backdrop ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.backdrop ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.backdrop ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.backdrop ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.backdrop ?? "")
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
DialogBackdrop.displayName = "DialogBackdrop"

/**
 * DialogPositioner — "positioner" slot of Dialog.
 */
const DialogPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.positioner ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.positioner ??
        "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.positioner ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.positioner ?? "")
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
DialogPositioner.displayName = "DialogPositioner"

/**
 * DialogContent — "content" slot of Dialog.
 */
const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.content ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.content ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.content ?? "")
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
DialogContent.displayName = "DialogContent"

/**
 * DialogTitle — "title" slot of Dialog.
 */
const DialogTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.title ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.title ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.title ?? "")
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
DialogTitle.displayName = "DialogTitle"

/**
 * DialogDescription — "description" slot of Dialog.
 */
const DialogDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.description ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.description ??
        "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.description ?? "")
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
DialogDescription.displayName = "DialogDescription"

/**
 * DialogCloseTrigger — "closeTrigger" slot of Dialog.
 */
const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.closeTrigger ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.closeTrigger ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.closeTrigger ??
        "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.closeTrigger ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.closeTrigger ?? "")
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
DialogCloseTrigger.displayName = "DialogCloseTrigger"

/**
 * DialogHeader — "header" slot of Dialog.
 */
const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.header ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.header ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.header ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.header ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.header ?? "")
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
DialogHeader.displayName = "DialogHeader"

/**
 * DialogBody — "body" slot of Dialog.
 */
const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.body ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.body ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.body ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.body ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.body ?? "")
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
DialogBody.displayName = "DialogBody"

/**
 * DialogFooter — "footer" slot of Dialog.
 */
const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDialog()
  const baseClass = recipe.base?.footer ?? ""
  const variantClasses = [
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.footer ?? "")
      : "",
    ctx.scrollBehavior
      ? (recipe.variants?.scrollBehavior?.[ctx.scrollBehavior]?.footer ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.footer ?? "") : "",
    ctx.motionPreset
      ? (recipe.variants?.motionPreset?.[ctx.motionPreset]?.footer ?? "")
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
DialogFooter.displayName = "DialogFooter"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Dialog,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  DialogHeader,
  DialogBody,
  DialogFooter,
}
