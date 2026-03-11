import * as React from "react"
import { pinInputSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/pin-input"
import { cn } from "../lib/utils"

const recipe = pinInputSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface PinInputContextValue {
  size?: string
  variant?: string
  attached?: string
}

const PinInputContext = React.createContext<PinInputContextValue>({})

function PinInputProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: PinInputContextValue
}) {
  return <PinInputContext value={value}>{children}</PinInputContext>
}

function usePinInput(): PinInputContextValue {
  return React.use(PinInputContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface PinInputProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  attached?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * PinInput — root wrapper providing variant context to sub-components.
 * @example
 * <PinInput size="md">
 *   slot sub-components
 * </PinInput>
 */
const PinInput = React.forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      className,
      size = "md",
      variant = "outline",
      attached,
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      attached ? (recipe.variants?.attached?.[attached]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <PinInputProvider value={{ size, variant, attached }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </PinInputProvider>
    )
  },
)
PinInput.displayName = "PinInput"

/**
 * PinInputLabel — "label" slot of PinInput.
 */
const PinInputLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = usePinInput()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
    ctx.attached
      ? (recipe.variants?.attached?.[ctx.attached]?.label ?? "")
      : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PinInputLabel.displayName = "PinInputLabel"

/**
 * PinInputInput — "input" slot of PinInput.
 */
const PinInputInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePinInput()
  const baseClass = recipe.base?.input ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.input ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.input ?? "") : "",
    ctx.attached
      ? (recipe.variants?.attached?.[ctx.attached]?.input ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PinInputInput.displayName = "PinInputInput"

/**
 * PinInputControl — "control" slot of PinInput.
 */
const PinInputControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = usePinInput()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
    ctx.attached
      ? (recipe.variants?.attached?.[ctx.attached]?.control ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
PinInputControl.displayName = "PinInputControl"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { PinInput, PinInputLabel, PinInputInput, PinInputControl }
