import * as React from "react"
import { nativeSelectSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/native-select"
import { cn } from "../lib/utils"

const recipe = nativeSelectSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface NativeSelectContextValue {
  variant?: string
  size?: string
}

const NativeSelectContext = React.createContext<NativeSelectContextValue>({})

function NativeSelectProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: NativeSelectContextValue
}) {
  return <NativeSelectContext value={value}>{children}</NativeSelectContext>
}

function useNativeSelect(): NativeSelectContextValue {
  return React.use(NativeSelectContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface NativeSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * NativeSelect — root wrapper providing variant context to sub-components.
 * @example
 * <NativeSelect variant="outline">
 *   slot sub-components
 * </NativeSelect>
 */
const NativeSelect = React.forwardRef<HTMLDivElement, NativeSelectProps>(
  (
    { className, variant = "outline", size = "md", children, ...props },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <NativeSelectProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </NativeSelectProvider>
    )
  },
)
NativeSelect.displayName = "NativeSelect"

/**
 * NativeSelectField — "field" slot of NativeSelect.
 */
const NativeSelectField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useNativeSelect()
  const baseClass = recipe.base?.field ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.field ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.field ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NativeSelectField.displayName = "NativeSelectField"

/**
 * NativeSelectIndicator — "indicator" slot of NativeSelect.
 */
const NativeSelectIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useNativeSelect()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
NativeSelectIndicator.displayName = "NativeSelectIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { NativeSelect, NativeSelectField, NativeSelectIndicator }
