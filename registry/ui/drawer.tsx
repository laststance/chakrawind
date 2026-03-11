import * as React from "react"
import { drawerSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/drawer"
import { cn } from "../lib/utils"

const recipe = drawerSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface DrawerContextValue {
  size?: string
  placement?: string
  contained?: string
}

const DrawerContext = React.createContext<DrawerContextValue>({})

function DrawerProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: DrawerContextValue
}) {
  return <DrawerContext value={value}>{children}</DrawerContext>
}

function useDrawer(): DrawerContextValue {
  return React.use(DrawerContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  placement?: string
  contained?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Drawer — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <Drawer size="xs">
 *   slot sub-components
 * </Drawer>
 */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      size = "xs",
      placement = "end",
      contained,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <DrawerProvider value={{ size, placement, contained }}>
        <div className={cn(className)} ref={ref} {...props}>
          {children}
        </div>
      </DrawerProvider>
    )
  },
)
Drawer.displayName = "Drawer"

/**
 * DrawerTrigger — "trigger" slot of Drawer.
 */
const DrawerTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.trigger ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.trigger ?? "")
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
DrawerTrigger.displayName = "DrawerTrigger"

/**
 * DrawerBackdrop — "backdrop" slot of Drawer.
 */
const DrawerBackdrop = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.backdrop ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.backdrop ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.backdrop ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.backdrop ?? "")
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
DrawerBackdrop.displayName = "DrawerBackdrop"

/**
 * DrawerPositioner — "positioner" slot of Drawer.
 */
const DrawerPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.positioner ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.positioner ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.positioner ?? "")
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
DrawerPositioner.displayName = "DrawerPositioner"

/**
 * DrawerContent — "content" slot of Drawer.
 */
const DrawerContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.content ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.content ?? "")
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
DrawerContent.displayName = "DrawerContent"

/**
 * DrawerTitle — "title" slot of Drawer.
 */
const DrawerTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.title ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.title ?? "")
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
DrawerTitle.displayName = "DrawerTitle"

/**
 * DrawerDescription — "description" slot of Drawer.
 */
const DrawerDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.description ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.description ?? "")
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
DrawerDescription.displayName = "DrawerDescription"

/**
 * DrawerCloseTrigger — "closeTrigger" slot of Drawer.
 */
const DrawerCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.closeTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.closeTrigger ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.closeTrigger ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.closeTrigger ?? "")
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
DrawerCloseTrigger.displayName = "DrawerCloseTrigger"

/**
 * DrawerHeader — "header" slot of Drawer.
 */
const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.header ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.header ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.header ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.header ?? "")
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
DrawerHeader.displayName = "DrawerHeader"

/**
 * DrawerBody — "body" slot of Drawer.
 */
const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.body ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.body ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.body ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.body ?? "")
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
DrawerBody.displayName = "DrawerBody"

/**
 * DrawerFooter — "footer" slot of Drawer.
 */
const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDrawer()
  const baseClass = recipe.base?.footer ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.footer ?? "") : "",
    ctx.placement
      ? (recipe.variants?.placement?.[ctx.placement]?.footer ?? "")
      : "",
    ctx.contained
      ? (recipe.variants?.contained?.[ctx.contained]?.footer ?? "")
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
DrawerFooter.displayName = "DrawerFooter"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Drawer,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerPositioner,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerCloseTrigger,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
}
