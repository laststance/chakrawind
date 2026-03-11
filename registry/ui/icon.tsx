import * as React from "react"
import { iconRecipeTw } from "../../packages/react/src/tailwind/recipes/icon"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Icon.
 * Re-exported from the Tailwind recipe for direct access.
 */
const iconVariants = iconRecipeTw

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof iconVariants.variants.size
}

/**
 * Chakra Wind Icon — drop-in component with Tailwind utility classes.
 * @example
 * <Icon size="inherit">Content</Icon>
 */
const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "inherit", ...props }, ref) => {
    const sizeClass = iconVariants.variants.size?.[size] ?? ""

    return (
      <div
        className={cn(iconVariants.base, sizeClass, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
