import * as React from "react"
import { kbdRecipeTw } from "../../packages/react/src/tailwind/recipes/kbd"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Kbd.
 * Re-exported from the Tailwind recipe for direct access.
 */
const kbdVariants = kbdRecipeTw

export interface KbdProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof kbdVariants.variants.variant
  size?: keyof typeof kbdVariants.variants.size
  colorPalette?: string
}

/**
 * Chakra Wind Kbd — drop-in component with Tailwind utility classes.
 * @example
 * <Kbd variant="raised">Content</Kbd>
 */
const Kbd = React.forwardRef<HTMLSpanElement, KbdProps>(
  (
    { className, variant = "raised", size = "md", colorPalette, ...props },
    ref,
  ) => {
    const variantClass = kbdVariants.variants.variant?.[variant] ?? ""
    const sizeClass = kbdVariants.variants.size?.[size] ?? ""

    return (
      <span
        className={cn(kbdVariants.base, variantClass, sizeClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Kbd.displayName = "Kbd"

export { Kbd, kbdVariants }
