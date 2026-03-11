import * as React from "react"
import { inputAddonRecipeTw } from "../../packages/react/src/tailwind/recipes/input-addon"
import { cn } from "../lib/utils"

/**
 * Variant configuration for InputAddon.
 * Re-exported from the Tailwind recipe for direct access.
 */
const inputAddonVariants = inputAddonRecipeTw

export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof inputAddonVariants.variants.size
  variant?: keyof typeof inputAddonVariants.variants.variant
}

/**
 * Chakra Wind InputAddon — drop-in component with Tailwind utility classes.
 * @example
 * <InputAddon size="md">Content</InputAddon>
 */
const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
  ({ className, size = "md", variant = "outline", ...props }, ref) => {
    const sizeClass = inputAddonVariants.variants.size?.[size] ?? ""
    const variantClass = inputAddonVariants.variants.variant?.[variant] ?? ""

    return (
      <div
        className={cn(
          inputAddonVariants.base,
          sizeClass,
          variantClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
InputAddon.displayName = "InputAddon"

export { InputAddon, inputAddonVariants }
