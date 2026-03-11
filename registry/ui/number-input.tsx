import * as React from "react"
import { numberInputSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/number-input"
import { cn } from "../lib/utils"

const recipe = numberInputSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface NumberInputContextValue {
  size?: string
  variant?: string
}

const NumberInputContext = React.createContext<NumberInputContextValue>({})

function NumberInputProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: NumberInputContextValue
}) {
  return <NumberInputContext value={value}>{children}</NumberInputContext>
}

function useNumberInput(): NumberInputContextValue {
  return React.use(NumberInputContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface NumberInputProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * NumberInput — root wrapper providing variant context to sub-components.
 * @example
 * <NumberInput size="md">
 *   slot sub-components
 * </NumberInput>
 */
const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>(
  (
    {
      className,
      size = "md",
      variant = "outline",
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
    ].filter(Boolean)

    return (
      <NumberInputProvider value={{ size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </NumberInputProvider>
    )
  },
)
NumberInput.displayName = "NumberInput"

/**
 * NumberInputLabel — "label" slot of NumberInput.
 */
const NumberInputLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NumberInputLabel.displayName = "NumberInputLabel"

/**
 * NumberInputInput — "input" slot of NumberInput.
 */
const NumberInputInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.input ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.input ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.input ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NumberInputInput.displayName = "NumberInputInput"

/**
 * NumberInputControl — "control" slot of NumberInput.
 */
const NumberInputControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NumberInputControl.displayName = "NumberInputControl"

/**
 * NumberInputValueText — "valueText" slot of NumberInput.
 */
const NumberInputValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.valueText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.valueText ?? "")
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
NumberInputValueText.displayName = "NumberInputValueText"

/**
 * NumberInputIncrementTrigger — "incrementTrigger" slot of NumberInput.
 */
const NumberInputIncrementTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.incrementTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.incrementTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.incrementTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NumberInputIncrementTrigger.displayName = "NumberInputIncrementTrigger"

/**
 * NumberInputDecrementTrigger — "decrementTrigger" slot of NumberInput.
 */
const NumberInputDecrementTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.decrementTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.decrementTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.decrementTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NumberInputDecrementTrigger.displayName = "NumberInputDecrementTrigger"

/**
 * NumberInputScrubber — "scrubber" slot of NumberInput.
 */
const NumberInputScrubber = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useNumberInput()
  const baseClass = recipe.base?.scrubber ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.scrubber ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.scrubber ?? "")
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
NumberInputScrubber.displayName = "NumberInputScrubber"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  NumberInput,
  NumberInputLabel,
  NumberInputInput,
  NumberInputControl,
  NumberInputValueText,
  NumberInputIncrementTrigger,
  NumberInputDecrementTrigger,
  NumberInputScrubber,
}
