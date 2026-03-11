import * as React from "react"
import { badgeRecipeTw } from "../../packages/react/src/tailwind/recipes/badge"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Badge.
 * Re-exported from the Tailwind recipe for direct access.
 */
const badgeVariants = badgeRecipeTw

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variants.variant
  size?: keyof typeof badgeVariants.variants.size
  colorPalette?: string
}

/**
 * Chakra Wind Badge — drop-in component with Tailwind utility classes.
 * @example
 * <Badge variant="subtle">Content</Badge>
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant = "subtle", size = "sm", colorPalette, ...props },
    ref,
  ) => {
    const variantClass = badgeVariants.variants.variant?.[variant] ?? ""
    const sizeClass = badgeVariants.variants.size?.[size] ?? ""

    return (
      <div
        className={cn(badgeVariants.base, variantClass, sizeClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
