import * as React from "react"
import { cn } from "../lib/utils"

const buttonVariants = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cp-focusRing,theme(colors.blue.500))] disabled:pointer-events-none disabled:opacity-4",
  variants: {
    variant: {
      solid:
        "bg-[var(--cp-solid)] text-[var(--cp-contrast)] hover:bg-[var(--cp-solid-hover)]",
      subtle:
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)] hover:bg-[var(--cp-muted)]",
      surface:
        "bg-[var(--cp-subtle)] text-[var(--cp-fg)] shadow-sm ring-1 ring-inset ring-[var(--cp-border)] hover:bg-[var(--cp-muted)]",
      outline:
        "border border-[var(--cp-border)] text-[var(--cp-fg)] bg-transparent hover:bg-[var(--cp-subtle)]",
      ghost: "bg-transparent text-[var(--cp-fg)] hover:bg-[var(--cp-subtle)]",
      plain: "bg-transparent text-[var(--cp-fg)]",
    },
    size: {
      "2xs": "h-6 min-w-6 px-2 text-xs gap-0.5 [&_svg]:w-3.5 [&_svg]:h-3.5",
      xs: "h-8 min-w-8 px-2.5 text-xs gap-1 [&_svg]:w-4 [&_svg]:h-4",
      sm: "h-9 min-w-9 px-3.5 text-sm gap-1.5 [&_svg]:w-4 [&_svg]:h-4",
      md: "h-10 min-w-10 px-4 text-sm gap-2 [&_svg]:w-5 [&_svg]:h-5",
      lg: "h-11 min-w-11 px-5 text-md gap-2 [&_svg]:w-5 [&_svg]:h-5",
      xl: "h-12 min-w-12 px-6 text-md gap-2.5 [&_svg]:w-5 [&_svg]:h-5",
      "2xl": "h-16 min-w-16 px-8 text-lg gap-3 [&_svg]:w-6 [&_svg]:h-6",
    },
  },
  defaultVariants: {
    variant: "solid" as const,
    size: "md" as const,
  },
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variants.variant
  size?: keyof typeof buttonVariants.variants.size
  colorPalette?: string
}

/**
 * Chakra Wind Button — drop-in replacement with Tailwind utility classes.
 * @param variant - Visual style: solid, subtle, surface, outline, ghost, plain
 * @param size - Button size: 2xs, xs, sm, md, lg, xl, 2xl
 * @param colorPalette - Color palette name (sets data-palette attribute)
 * @example
 * <Button variant="solid" size="md">Click me</Button>
 * <Button variant="outline" colorPalette="blue">Blue outline</Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "solid", size = "md", colorPalette, ...props },
    ref,
  ) => {
    const variantClass = buttonVariants.variants.variant[variant] ?? ""
    const sizeClass = buttonVariants.variants.size[size] ?? ""

    return (
      <button
        className={cn(buttonVariants.base, variantClass, sizeClass, className)}
        ref={ref}
        data-palette={colorPalette}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
