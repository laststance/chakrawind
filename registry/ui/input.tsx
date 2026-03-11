import * as React from "react"
import { inputRecipeTw } from "../../packages/react/src/tailwind/recipes/input"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Input.
 * Re-exported from the Tailwind recipe for direct access.
 */
const inputVariants = inputRecipeTw

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: keyof typeof inputVariants.variants.size
  variant?: keyof typeof inputVariants.variants.variant
  colorPalette?: string
}

/**
 * Chakra Wind Input — drop-in component with Tailwind utility classes.
 * @example
 * <Input size="md">Content</Input>
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size = "md", variant = "outline", colorPalette, ...props },
    ref,
  ) => {
    const sizeClass = inputVariants.variants.size?.[size] ?? ""
    const variantClass = inputVariants.variants.variant?.[variant] ?? ""

    return (
      <input
        className={cn(inputVariants.base, sizeClass, variantClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input, inputVariants }
