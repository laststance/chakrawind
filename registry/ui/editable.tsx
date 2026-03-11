import * as React from "react"
import { editableSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/editable"
import { cn } from "../lib/utils"

const recipe = editableSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface EditableContextValue {
  size?: string
}

const EditableContext = React.createContext<EditableContextValue>({})

function EditableProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: EditableContextValue
}) {
  return <EditableContext value={value}>{children}</EditableContext>
}

function useEditable(): EditableContextValue {
  return React.use(EditableContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface EditableProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Editable — root wrapper providing variant context to sub-components.
 * @example
 * <Editable size="md">
 *   slot sub-components
 * </Editable>
 */
const Editable = React.forwardRef<HTMLDivElement, EditableProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <EditableProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </EditableProvider>
    )
  },
)
Editable.displayName = "Editable"

/**
 * EditablePreview — "preview" slot of Editable.
 */
const EditablePreview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.preview ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.preview ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditablePreview.displayName = "EditablePreview"

/**
 * EditableInput — "input" slot of Editable.
 */
const EditableInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.input ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.input ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableInput.displayName = "EditableInput"

/**
 * EditableControl — "control" slot of Editable.
 */
const EditableControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableControl.displayName = "EditableControl"

/**
 * EditableArea — "area" slot of Editable.
 */
const EditableArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.area ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.area ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableArea.displayName = "EditableArea"

/**
 * EditableTextarea — "textarea" slot of Editable.
 */
const EditableTextarea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.textarea ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.textarea ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableTextarea.displayName = "EditableTextarea"

/**
 * EditableEditTrigger — "editTrigger" slot of Editable.
 */
const EditableEditTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.editTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.editTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableEditTrigger.displayName = "EditableEditTrigger"

/**
 * EditableSubmitTrigger — "submitTrigger" slot of Editable.
 */
const EditableSubmitTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.submitTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.submitTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableSubmitTrigger.displayName = "EditableSubmitTrigger"

/**
 * EditableCancelTrigger — "cancelTrigger" slot of Editable.
 */
const EditableCancelTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useEditable()
  const baseClass = recipe.base?.cancelTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.cancelTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
EditableCancelTrigger.displayName = "EditableCancelTrigger"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Editable,
  EditablePreview,
  EditableInput,
  EditableControl,
  EditableArea,
  EditableTextarea,
  EditableEditTrigger,
  EditableSubmitTrigger,
  EditableCancelTrigger,
}
