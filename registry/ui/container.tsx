import * as React from "react"
import { containerRecipeTw } from "../../packages/react/src/tailwind/recipes/container"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Container.
 * Re-exported from the Tailwind recipe for direct access.
 */
const containerVariants = containerRecipeTw

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  centerContent?: keyof typeof containerVariants.variants.centerContent
  fluid?: keyof typeof containerVariants.variants.fluid
}

/**
 * Chakra Wind Container — drop-in component with Tailwind utility classes.
 * @example
 * <Container centerContent="centerContent">Content</Container>
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, centerContent, fluid, ...props }, ref) => {
    const centerContentClass =
      containerVariants.variants.centerContent?.[centerContent] ?? ""
    const fluidClass = containerVariants.variants.fluid?.[fluid] ?? ""

    return (
      <div
        className={cn(
          containerVariants.base,
          centerContentClass,
          fluidClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Container.displayName = "Container"

export { Container, containerVariants }
