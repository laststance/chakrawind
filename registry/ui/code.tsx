import * as React from "react"
import { codeRecipeTw } from "../../packages/react/src/tailwind/recipes/code"
import { cn } from "../lib/utils"

/**
 * Variant configuration for Code.
 * Re-exported from the Tailwind recipe for direct access.
 */
const codeVariants = codeRecipeTw

export interface CodeProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * Chakra Wind Code — drop-in component with Tailwind utility classes.
 * @example
 * <Code >Content</Code>
 */
const Code = React.forwardRef<HTMLSpanElement, CodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <span className={cn(codeVariants.base, className)} ref={ref} {...props} />
    )
  },
)
Code.displayName = "Code"

export { Code, codeVariants }
