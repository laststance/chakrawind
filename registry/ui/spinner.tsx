import * as React from "react"
import { spinnerRecipeTw } from "../../packages/react/src/tailwind/recipes/spinner"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Spinner.
 * Re-exported from the Tailwind recipe for direct access.
 */
const spinnerVariants = spinnerRecipeTw

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof spinnerVariants.variants.size
}

/**
 * Chakra Wind Spinner — drop-in component with Tailwind utility classes.
 * @example
 * <Spinner size="md">Content</Spinner>
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClass = spinnerVariants.variants.size?.[size] ?? ""

    return (
      <div
        className={cn(spinnerVariants.base, sizeClass, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
