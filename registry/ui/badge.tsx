import * as React from "react"
import { cn } from "../lib/utils"

const badgeVariants = {
  base: "inline-flex items-center gap-1.5 whitespace-nowrap font-medium",
  variants: {
    variant: {
      solid: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      subtle: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
      surface:
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)] shadow-sm ring-1 ring-inset ring-[var(--cp-border)]",
      outline:
        "border border-[var(--cp-border)] text-[var(--cp-fg)] bg-transparent shadow-sm",
      plain: "bg-transparent text-[var(--cp-fg)]",
    },
    size: {
      xs: "px-1 min-h-4 text-[0.625rem] rounded-xs [&_svg]:w-2.5 [&_svg]:h-2.5",
      sm: "px-1.5 min-h-5 text-xs rounded-sm [&_svg]:w-3 [&_svg]:h-3",
      md: "px-2 min-h-6 text-xs rounded-md [&_svg]:w-3.5 [&_svg]:h-3.5",
      lg: "px-2.5 min-h-7 text-sm rounded-md [&_svg]:w-4 [&_svg]:h-4",
    },
  },
  defaultVariants: {
    variant: "subtle" as const,
    size: "sm" as const,
  },
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants.variants.variant
  size?: keyof typeof badgeVariants.variants.size
  colorPalette?: string
}

/**
 * Chakra Wind Badge — status indicator with Tailwind utility classes.
 * @param variant - Visual style: solid, subtle, surface, outline, plain
 * @param size - Badge size: xs, sm, md, lg
 * @param colorPalette - Color palette name (sets data-palette attribute)
 * @example
 * <Badge variant="solid" colorPalette="green">Active</Badge>
 * <Badge variant="outline" size="lg">Premium</Badge>
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "subtle", size = "sm", colorPalette, ...props },
    ref,
  ) => {
    const variantClass = badgeVariants.variants.variant[variant] ?? ""
    const sizeClass = badgeVariants.variants.size[size] ?? ""

    return (
      <span
        className={cn(badgeVariants.base, variantClass, sizeClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
