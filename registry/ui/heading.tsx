import * as React from "react"
import { headingRecipeTw } from "../../packages/react/src/tailwind/recipes/heading"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Heading.
 * Re-exported from the Tailwind recipe for direct access.
 */
const headingVariants = headingRecipeTw

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: keyof typeof headingVariants.variants.size
}

/**
 * Chakra Wind Heading — drop-in component with Tailwind utility classes.
 * @example
 * <Heading size="xl">Content</Heading>
 */
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = "xl", ...props }, ref) => {
    const sizeClass = headingVariants.variants.size?.[size] ?? ""

    return (
      <h2
        className={cn(headingVariants.base, sizeClass, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
