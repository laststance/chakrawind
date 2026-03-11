import * as React from "react"
import { separatorRecipeTw } from "../../packages/react/src/tailwind/recipes/separator"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Separator.
 * Re-exported from the Tailwind recipe for direct access.
 */
const separatorVariants = separatorRecipeTw

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: keyof typeof separatorVariants.variants.variant
  orientation?: keyof typeof separatorVariants.variants.orientation
  size?: keyof typeof separatorVariants.variants.size
}

/**
 * Chakra Wind Separator — drop-in component with Tailwind utility classes.
 * @example
 * <Separator variant="solid">Content</Separator>
 */
const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  (
    {
      className,
      variant = "solid",
      orientation = "horizontal",
      size = "sm",
      ...props
    },
    ref,
  ) => {
    const variantClass = separatorVariants.variants.variant?.[variant] ?? ""
    const orientationClass =
      separatorVariants.variants.orientation?.[orientation] ?? ""
    const sizeClass = separatorVariants.variants.size?.[size] ?? ""

    return (
      <hr
        className={cn(
          separatorVariants.base,
          variantClass,
          orientationClass,
          sizeClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Separator.displayName = "Separator"

export { Separator, separatorVariants }
