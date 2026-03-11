import * as React from "react"
import { skeletonRecipeTw } from "../../packages/react/src/tailwind/recipes/skeleton"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Skeleton.
 * Re-exported from the Tailwind recipe for direct access.
 */
const skeletonVariants = skeletonRecipeTw

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: keyof typeof skeletonVariants.variants.loading
  variant?: keyof typeof skeletonVariants.variants.variant
}

/**
 * Chakra Wind Skeleton — drop-in component with Tailwind utility classes.
 * @example
 * <Skeleton loading="loading">Content</Skeleton>
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, loading, variant = "pulse", ...props }, ref) => {
    const loadingClass = skeletonVariants.variants.loading?.[loading] ?? ""
    const variantClass = skeletonVariants.variants.variant?.[variant] ?? ""

    return (
      <div
        className={cn(
          skeletonVariants.base,
          loadingClass,
          variantClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Skeleton.displayName = "Skeleton"

export { Skeleton, skeletonVariants }
