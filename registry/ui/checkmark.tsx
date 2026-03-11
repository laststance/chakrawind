import * as React from "react"
import { checkmarkRecipeTw } from "../../packages/react/src/tailwind/recipes/checkmark"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Checkmark.
 * Re-exported from the Tailwind recipe for direct access.
 */
const checkmarkVariants = checkmarkRecipeTw

export interface CheckmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof checkmarkVariants.variants.size
  variant?: keyof typeof checkmarkVariants.variants.variant
  filled?: keyof typeof checkmarkVariants.variants.filled
  colorPalette?: string
}

/**
 * Chakra Wind Checkmark — drop-in component with Tailwind utility classes.
 * @example
 * <Checkmark size="md">Content</Checkmark>
 */
const Checkmark = React.forwardRef<HTMLDivElement, CheckmarkProps>(
  (
    {
      className,
      size = "md",
      variant = "solid",
      filled,
      colorPalette,
      ...props
    },
    ref,
  ) => {
    const sizeClass = checkmarkVariants.variants.size?.[size] ?? ""
    const variantClass = checkmarkVariants.variants.variant?.[variant] ?? ""
    const filledClass = checkmarkVariants.variants.filled?.[filled] ?? ""

    return (
      <div
        className={cn(
          checkmarkVariants.base,
          sizeClass,
          variantClass,
          filledClass,
          className,
        )}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Checkmark.displayName = "Checkmark"

export { Checkmark, checkmarkVariants }
