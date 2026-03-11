import * as React from "react"
import { breadcrumbSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/breadcrumb"
import { cn } from "../lib/utils"

const recipe = breadcrumbSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface BreadcrumbContextValue {
  variant?: string
  size?: string
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({})

function BreadcrumbProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: BreadcrumbContextValue
}) {
  return <BreadcrumbContext value={value}>{children}</BreadcrumbContext>
}

function useBreadcrumb(): BreadcrumbContextValue {
  return React.use(BreadcrumbContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * BreadcrumbLink — "link" slot of Breadcrumb.
 */
const BreadcrumbLink = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBreadcrumb()
  const baseClass = recipe.base?.link ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.link ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.link ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

/**
 * BreadcrumbCurrentLink — "currentLink" slot of Breadcrumb.
 */
const BreadcrumbCurrentLink = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBreadcrumb()
  const baseClass = recipe.base?.currentLink ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.currentLink ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.currentLink ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbCurrentLink.displayName = "BreadcrumbCurrentLink"

/**
 * BreadcrumbItem — "item" slot of Breadcrumb.
 */
const BreadcrumbItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBreadcrumb()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbItem.displayName = "BreadcrumbItem"

/**
 * BreadcrumbList — "list" slot of Breadcrumb.
 */
const BreadcrumbList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBreadcrumb()
  const baseClass = recipe.base?.list ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.list ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.list ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbList.displayName = "BreadcrumbList"

/**
 * Breadcrumb — root wrapper providing variant context to sub-components.
 * @example
 * <Breadcrumb variant="plain">
 *   slot sub-components
 * </Breadcrumb>
 */
const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      className,
      variant = "plain",
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <BreadcrumbProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </BreadcrumbProvider>
    )
  },
)
Breadcrumb.displayName = "Breadcrumb"

/**
 * BreadcrumbEllipsis — "ellipsis" slot of Breadcrumb.
 */
const BreadcrumbEllipsis = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBreadcrumb()
  const baseClass = recipe.base?.ellipsis ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.ellipsis ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.ellipsis ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

/**
 * BreadcrumbSeparator — "separator" slot of Breadcrumb.
 */
const BreadcrumbSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBreadcrumb()
  const baseClass = recipe.base?.separator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.separator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.separator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  BreadcrumbLink,
  BreadcrumbCurrentLink,
  BreadcrumbItem,
  BreadcrumbList,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbSeparator,
}
