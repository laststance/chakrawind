import * as React from "react"
import { cn } from "../lib/utils"

const separatorVariants = {
  base: "block border-[var(--border-color,theme(colors.gray.200))]",
  variants: {
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    orientation: {
      vertical: "border-l-[var(--separator-thickness)]",
      horizontal: "border-t-[var(--separator-thickness)]",
    },
    size: {
      xs: "[--separator-thickness:0.5px]",
      sm: "[--separator-thickness:1px]",
      md: "[--separator-thickness:2px]",
      lg: "[--separator-thickness:3px]",
    },
  },
  defaultVariants: {
    size: "sm" as const,
    variant: "solid" as const,
    orientation: "horizontal" as const,
  },
}

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: keyof typeof separatorVariants.variants.variant
  orientation?: keyof typeof separatorVariants.variants.orientation
  size?: keyof typeof separatorVariants.variants.size
}

/**
 * Chakra Wind Separator — visual divider with Tailwind utility classes.
 * @param variant - Border style: solid, dashed, dotted
 * @param orientation - Direction: horizontal, vertical
 * @param size - Thickness: xs, sm, md, lg
 * @example
 * <Separator />
 * <Separator variant="dashed" orientation="vertical" />
 */
const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  (
    {
      className,
      variant = "solid",
      orientation = "horizontal",
      size = "sm",
      ...props
    },
    ref,
  ) => {
    const variantClass = separatorVariants.variants.variant[variant] ?? ""
    const orientationClass =
      separatorVariants.variants.orientation[orientation] ?? ""
    const sizeClass = separatorVariants.variants.size[size] ?? ""

    return (
      <hr
        className={cn(
          separatorVariants.base,
          variantClass,
          orientationClass,
          sizeClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Separator.displayName = "Separator"

export { Separator, separatorVariants }
