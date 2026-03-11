import * as React from "react"
import { textareaRecipeTw } from "../../packages/react/src/tailwind/recipes/textarea"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Textarea.
 * Re-exported from the Tailwind recipe for direct access.
 */
const textareaVariants = textareaRecipeTw

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: keyof typeof textareaVariants.variants.size
  variant?: keyof typeof textareaVariants.variants.variant
  colorPalette?: string
}

/**
 * Chakra Wind Textarea — drop-in component with Tailwind utility classes.
 * @example
 * <Textarea size="md">Content</Textarea>
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, size = "md", variant = "outline", colorPalette, ...props },
    ref,
  ) => {
    const sizeClass = textareaVariants.variants.size?.[size] ?? ""
    const variantClass = textareaVariants.variants.variant?.[variant] ?? ""

    return (
      <textarea
        className={cn(
          textareaVariants.base,
          sizeClass,
          variantClass,
          className,
        )}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
