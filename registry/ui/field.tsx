import * as React from "react"
import { fieldSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/field"
import { cn } from "../lib/utils"

const recipe = fieldSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface FieldContextValue {
  orientation?: string
}

const FieldContext = React.createContext<FieldContextValue>({})

function FieldProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: FieldContextValue
}) {
  return <FieldContext value={value}>{children}</FieldContext>
}

function useField(): FieldContextValue {
  return React.use(FieldContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Field — root wrapper providing variant context to sub-components.
 * @example
 * <Field orientation="vertical">
 *   slot sub-components
 * </Field>
 */
const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      orientation
        ? (recipe.variants?.orientation?.[orientation]?.root ?? "")
        : "",
    ].filter(Boolean)

    return (
      <FieldProvider value={{ orientation }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </FieldProvider>
    )
  },
)
Field.displayName = "Field"

/**
 * FieldErrorText — "errorText" slot of Field.
 */
const FieldErrorText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.errorText ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.errorText ?? "")
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
FieldErrorText.displayName = "FieldErrorText"

/**
 * FieldHelperText — "helperText" slot of Field.
 */
const FieldHelperText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.helperText ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.helperText ?? "")
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
FieldHelperText.displayName = "FieldHelperText"

/**
 * FieldInput — "input" slot of Field.
 */
const FieldInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.input ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.input ?? "")
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
FieldInput.displayName = "FieldInput"

/**
 * FieldLabel — "label" slot of Field.
 */
const FieldLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.label ?? "")
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
FieldLabel.displayName = "FieldLabel"

/**
 * FieldSelect — "select" slot of Field.
 */
const FieldSelect = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.select ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.select ?? "")
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
FieldSelect.displayName = "FieldSelect"

/**
 * FieldTextarea — "textarea" slot of Field.
 */
const FieldTextarea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.textarea ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.textarea ?? "")
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
FieldTextarea.displayName = "FieldTextarea"

/**
 * FieldRequiredIndicator — "requiredIndicator" slot of Field.
 */
const FieldRequiredIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useField()
  const baseClass = recipe.base?.requiredIndicator ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.requiredIndicator ??
        "")
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
FieldRequiredIndicator.displayName = "FieldRequiredIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Field,
  FieldErrorText,
  FieldHelperText,
  FieldInput,
  FieldLabel,
  FieldSelect,
  FieldTextarea,
  FieldRequiredIndicator,
}
