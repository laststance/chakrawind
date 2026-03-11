import * as React from "react"
import { markRecipeTw } from "../../packages/react/src/tailwind/recipes/mark"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Mark.
 * Re-exported from the Tailwind recipe for direct access.
 */
const markVariants = markRecipeTw

export interface MarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof markVariants.variants.variant
  colorPalette?: string
}

/**
 * Chakra Wind Mark — drop-in component with Tailwind utility classes.
 * @example
 * <Mark variant="variant">Content</Mark>
 */
const Mark = React.forwardRef<HTMLSpanElement, MarkProps>(
  ({ className, variant, colorPalette, ...props }, ref) => {
    const variantClass = markVariants.variants.variant?.[variant] ?? ""

    return (
      <span
        className={cn(markVariants.base, variantClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Mark.displayName = "Mark"

export { Mark, markVariants }
