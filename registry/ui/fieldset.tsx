import * as React from "react"
import { fieldsetSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/fieldset"
import { cn } from "../lib/utils"

const recipe = fieldsetSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface FieldsetContextValue {
  size?: string
}

const FieldsetContext = React.createContext<FieldsetContextValue>({})

function FieldsetProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: FieldsetContextValue
}) {
  return <FieldsetContext value={value}>{children}</FieldsetContext>
}

function useFieldset(): FieldsetContextValue {
  return React.use(FieldsetContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FieldsetProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Fieldset — root wrapper providing variant context to sub-components.
 * @example
 * <Fieldset size="md">
 *   slot sub-components
 * </Fieldset>
 */
const Fieldset = React.forwardRef<HTMLDivElement, FieldsetProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <FieldsetProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </FieldsetProvider>
    )
  },
)
Fieldset.displayName = "Fieldset"

/**
 * FieldsetErrorText — "errorText" slot of Fieldset.
 */
const FieldsetErrorText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFieldset()
  const baseClass = recipe.base?.errorText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.errorText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FieldsetErrorText.displayName = "FieldsetErrorText"

/**
 * FieldsetHelperText — "helperText" slot of Fieldset.
 */
const FieldsetHelperText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFieldset()
  const baseClass = recipe.base?.helperText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.helperText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FieldsetHelperText.displayName = "FieldsetHelperText"

/**
 * FieldsetLegend — "legend" slot of Fieldset.
 */
const FieldsetLegend = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFieldset()
  const baseClass = recipe.base?.legend ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.legend ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FieldsetLegend.displayName = "FieldsetLegend"

/**
 * FieldsetContent — "content" slot of Fieldset.
 */
const FieldsetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFieldset()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FieldsetContent.displayName = "FieldsetContent"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Fieldset,
  FieldsetErrorText,
  FieldsetHelperText,
  FieldsetLegend,
  FieldsetContent,
}
