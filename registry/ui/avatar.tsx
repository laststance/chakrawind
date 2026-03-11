import * as React from "react"
import { avatarSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/avatar"
import { cn } from "../lib/utils"

const recipe = avatarSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface AvatarContextValue {
  size?: string
  variant?: string
  shape?: string
  borderless?: string
}

const AvatarContext = React.createContext<AvatarContextValue>({})

function AvatarProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: AvatarContextValue
}) {
  return <AvatarContext value={value}>{children}</AvatarContext>
}

function useAvatar(): AvatarContextValue {
  return React.use(AvatarContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  shape?: string
  borderless?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Avatar — root wrapper providing variant context to sub-components.
 * @example
 * <Avatar size="md">
 *   slot sub-components
 * </Avatar>
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      size = "md",
      variant = "subtle",
      shape = "full",
      borderless,
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      shape ? (recipe.variants?.shape?.[shape]?.root ?? "") : "",
      borderless ? (recipe.variants?.borderless?.[borderless]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <AvatarProvider value={{ size, variant, shape, borderless }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </AvatarProvider>
    )
  },
)
Avatar.displayName = "Avatar"

/**
 * AvatarImage — "image" slot of Avatar.
 */
const AvatarImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAvatar()
  const baseClass = recipe.base?.image ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.image ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.image ?? "") : "",
    ctx.shape ? (recipe.variants?.shape?.[ctx.shape]?.image ?? "") : "",
    ctx.borderless
      ? (recipe.variants?.borderless?.[ctx.borderless]?.image ?? "")
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
AvatarImage.displayName = "AvatarImage"

/**
 * AvatarFallback — "fallback" slot of Avatar.
 */
const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAvatar()
  const baseClass = recipe.base?.fallback ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.fallback ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.fallback ?? "")
      : "",
    ctx.shape ? (recipe.variants?.shape?.[ctx.shape]?.fallback ?? "") : "",
    ctx.borderless
      ? (recipe.variants?.borderless?.[ctx.borderless]?.fallback ?? "")
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
AvatarFallback.displayName = "AvatarFallback"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Avatar, AvatarImage, AvatarFallback }
