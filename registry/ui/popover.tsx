import * as React from "react"
import { popoverSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/popover"
import { cn } from "../lib/utils"

const recipe = popoverSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface PopoverContextValue {
  size?: string
}

const PopoverContext = React.createContext<PopoverContextValue>({})

function PopoverProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: PopoverContextValue
}) {
  return <PopoverContext value={value}>{children}</PopoverContext>
}

function usePopover(): PopoverContextValue {
  return React.use(PopoverContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Popover — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <Popover size="md">
 *   slot sub-components
 * </Popover>
 */
const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <PopoverProvider value={{ size }}>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </PopoverProvider>
    )
  },
)
Popover.displayName = "Popover"

/**
 * PopoverContent — "content" slot of Popover.
 */
const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
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
PopoverContent.displayName = "PopoverContent"

/**
 * PopoverTitle — "title" slot of Popover.
 */
const PopoverTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
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
PopoverTitle.displayName = "PopoverTitle"

/**
 * PopoverAnchor — "anchor" slot of Popover.
 */
const PopoverAnchor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.anchor ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.anchor ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PopoverAnchor.displayName = "PopoverAnchor"

/**
 * PopoverArrow — "arrow" slot of Popover.
 */
const PopoverArrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
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
PopoverArrow.displayName = "PopoverArrow"

/**
 * PopoverArrowTip — "arrowTip" slot of Popover.
 */
const PopoverArrowTip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
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
PopoverArrowTip.displayName = "PopoverArrowTip"

/**
 * PopoverTrigger — "trigger" slot of Popover.
 */
const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
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
PopoverTrigger.displayName = "PopoverTrigger"

/**
 * PopoverIndicator — "indicator" slot of Popover.
 */
const PopoverIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
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
PopoverIndicator.displayName = "PopoverIndicator"

/**
 * PopoverPositioner — "positioner" slot of Popover.
 */
const PopoverPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
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
PopoverPositioner.displayName = "PopoverPositioner"

/**
 * PopoverDescription — "description" slot of Popover.
 */
const PopoverDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
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
PopoverDescription.displayName = "PopoverDescription"

/**
 * PopoverCloseTrigger — "closeTrigger" slot of Popover.
 */
const PopoverCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.closeTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.closeTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PopoverCloseTrigger.displayName = "PopoverCloseTrigger"

/**
 * PopoverHeader — "header" slot of Popover.
 */
const PopoverHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.header ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.header ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PopoverHeader.displayName = "PopoverHeader"

/**
 * PopoverBody — "body" slot of Popover.
 */
const PopoverBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.body ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.body ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PopoverBody.displayName = "PopoverBody"

/**
 * PopoverFooter — "footer" slot of Popover.
 */
const PopoverFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePopover()
  const baseClass = recipe.base?.footer ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.footer ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PopoverFooter.displayName = "PopoverFooter"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverTrigger,
  PopoverIndicator,
  PopoverPositioner,
  PopoverDescription,
  PopoverCloseTrigger,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
}
