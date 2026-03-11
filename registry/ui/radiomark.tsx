import * as React from "react"
import { radiomarkRecipeTw } from "../../packages/react/src/tailwind/recipes/radiomark"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Radiomark.
 * Re-exported from the Tailwind recipe for direct access.
 */
const radiomarkVariants = radiomarkRecipeTw

export interface RadiomarkProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof radiomarkVariants.variants.variant
  size?: keyof typeof radiomarkVariants.variants.size
  filled?: keyof typeof radiomarkVariants.variants.filled
  colorPalette?: string
}

/**
 * Chakra Wind Radiomark — drop-in component with Tailwind utility classes.
 * @example
 * <Radiomark variant="solid">Content</Radiomark>
 */
const Radiomark = React.forwardRef<HTMLDivElement, RadiomarkProps>(
  (
    {
      className,
      variant = "solid",
      size = "md",
      filled,
      colorPalette,
      ...props
    },
    ref,
  ) => {
    const variantClass = radiomarkVariants.variants.variant?.[variant] ?? ""
    const sizeClass = radiomarkVariants.variants.size?.[size] ?? ""
    const filledClass = radiomarkVariants.variants.filled?.[filled] ?? ""

    return (
      <div
        className={cn(
          radiomarkVariants.base,
          variantClass,
          sizeClass,
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
Radiomark.displayName = "Radiomark"

export { Radiomark, radiomarkVariants }
