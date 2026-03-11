import * as React from "react"
import { skipNavLinkRecipeTw } from "../../packages/react/src/tailwind/recipes/skip-nav-link"
import { cn } from "../lib/utils"

/**
 * Variant configuration for SkipNavLink.
 * Re-exported from the Tailwind recipe for direct access.
 */
const skipNavLinkVariants = skipNavLinkRecipeTw

export interface SkipNavLinkProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Chakra Wind SkipNavLink — drop-in component with Tailwind utility classes.
 * @example
 * <SkipNavLink >Content</SkipNavLink>
 */
const SkipNavLink = React.forwardRef<HTMLDivElement, SkipNavLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(skipNavLinkVariants.base, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
SkipNavLink.displayName = "SkipNavLink"

export { SkipNavLink, skipNavLinkVariants }
