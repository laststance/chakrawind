import * as React from "react"
import { buttonRecipeTw } from "../../packages/react/src/tailwind/recipes/button"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Button.
 * Re-exported from the Tailwind recipe for direct access.
 */
const buttonVariants = buttonRecipeTw

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof buttonVariants.variants.size
  variant?: keyof typeof buttonVariants.variants.variant
  colorPalette?: string
}

/**
 * Chakra Wind Button — drop-in component with Tailwind utility classes.
 * @example
 * <Button size="md">Content</Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size = "md", variant = "solid", colorPalette, ...props },
    ref,
  ) => {
    const sizeClass = buttonVariants.variants.size?.[size] ?? ""
    const variantClass = buttonVariants.variants.variant?.[variant] ?? ""

    return (
      <button
        className={cn(buttonVariants.base, sizeClass, variantClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
