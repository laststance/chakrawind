import * as React from "react"
import { colorSwatchRecipeTw } from "../../packages/react/src/tailwind/recipes/color-swatch"
import { cn } from "../lib/utils"

/**
 * Variant configuration for ColorSwatch.
 * Re-exported from the Tailwind recipe for direct access.
 */
const colorSwatchVariants = colorSwatchRecipeTw

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof colorSwatchVariants.variants.size
  shape?: keyof typeof colorSwatchVariants.variants.shape
}

/**
 * Chakra Wind ColorSwatch — drop-in component with Tailwind utility classes.
 * @example
 * <ColorSwatch size="md">Content</ColorSwatch>
 */
const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(
  ({ className, size = "md", shape = "rounded", ...props }, ref) => {
    const sizeClass = colorSwatchVariants.variants.size?.[size] ?? ""
    const shapeClass = colorSwatchVariants.variants.shape?.[shape] ?? ""

    return (
      <div
        className={cn(
          colorSwatchVariants.base,
          sizeClass,
          shapeClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
ColorSwatch.displayName = "ColorSwatch"

export { ColorSwatch, colorSwatchVariants }
