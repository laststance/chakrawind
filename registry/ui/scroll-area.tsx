import * as React from "react"
import { scrollAreaSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/scroll-area"
import { cn } from "../lib/utils"

const recipe = scrollAreaSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ScrollAreaContextValue {
  variant?: string
  size?: string
}

const ScrollAreaContext = React.createContext<ScrollAreaContextValue>({})

function ScrollAreaProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ScrollAreaContextValue
}) {
  return <ScrollAreaContext value={value}>{children}</ScrollAreaContext>
}

function useScrollArea(): ScrollAreaContextValue {
  return React.use(ScrollAreaContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * ScrollArea — root wrapper providing variant context to sub-components.
 * @example
 * <ScrollArea variant="hover">
 *   slot sub-components
 * </ScrollArea>
 */
const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, variant = "hover", size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <ScrollAreaProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </ScrollAreaProvider>
    )
  },
)
ScrollArea.displayName = "ScrollArea"

/**
 * ScrollAreaViewport — "viewport" slot of ScrollArea.
 */
const ScrollAreaViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useScrollArea()
  const baseClass = recipe.base?.viewport ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.viewport ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.viewport ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ScrollAreaViewport.displayName = "ScrollAreaViewport"

/**
 * ScrollAreaContent — "content" slot of ScrollArea.
 */
const ScrollAreaContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useScrollArea()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
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
ScrollAreaContent.displayName = "ScrollAreaContent"

/**
 * ScrollAreaScrollbar — "scrollbar" slot of ScrollArea.
 */
const ScrollAreaScrollbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useScrollArea()
  const baseClass = recipe.base?.scrollbar ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.scrollbar ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.scrollbar ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar"

/**
 * ScrollAreaThumb — "thumb" slot of ScrollArea.
 */
const ScrollAreaThumb = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useScrollArea()
  const baseClass = recipe.base?.thumb ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.thumb ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.thumb ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ScrollAreaThumb.displayName = "ScrollAreaThumb"

/**
 * ScrollAreaCorner — "corner" slot of ScrollArea.
 */
const ScrollAreaCorner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useScrollArea()
  const baseClass = recipe.base?.corner ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.corner ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.corner ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ScrollAreaCorner.displayName = "ScrollAreaCorner"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
}
