import * as React from "react"
import { linkRecipeTw } from "../../packages/react/src/tailwind/recipes/link"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Link.
 * Re-exported from the Tailwind recipe for direct access.
 */
const linkVariants = linkRecipeTw

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof linkVariants.variants.variant
  colorPalette?: string
}

/**
 * Chakra Wind Link — drop-in component with Tailwind utility classes.
 * @example
 * <Link variant="plain">Content</Link>
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "plain", colorPalette, ...props }, ref) => {
    const variantClass = linkVariants.variants.variant?.[variant] ?? ""

    return (
      <a
        className={cn(linkVariants.base, variantClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Link.displayName = "Link"

export { Link, linkVariants }
