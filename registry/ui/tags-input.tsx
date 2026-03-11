import * as React from "react"
import { tagsInputSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/tags-input"
import { cn } from "../lib/utils"

const recipe = tagsInputSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TagsInputContextValue {
  size?: string
  variant?: string
}

const TagsInputContext = React.createContext<TagsInputContextValue>({})

function TagsInputProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TagsInputContextValue
}) {
  return <TagsInputContext value={value}>{children}</TagsInputContext>
}

function useTagsInput(): TagsInputContextValue {
  return React.use(TagsInputContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TagsInputProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * TagsInput — root wrapper providing variant context to sub-components.
 * @example
 * <TagsInput size="md">
 *   slot sub-components
 * </TagsInput>
 */
const TagsInput = React.forwardRef<HTMLDivElement, TagsInputProps>(
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
      <TagsInputProvider value={{ size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </TagsInputProvider>
    )
  },
)
TagsInput.displayName = "TagsInput"

/**
 * TagsInputLabel — "label" slot of TagsInput.
 */
const TagsInputLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
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
TagsInputLabel.displayName = "TagsInputLabel"

/**
 * TagsInputControl — "control" slot of TagsInput.
 */
const TagsInputControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
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
TagsInputControl.displayName = "TagsInputControl"

/**
 * TagsInputInput — "input" slot of TagsInput.
 */
const TagsInputInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
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
TagsInputInput.displayName = "TagsInputInput"

/**
 * TagsInputItem — "item" slot of TagsInput.
 */
const TagsInputItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TagsInputItem.displayName = "TagsInputItem"

/**
 * TagsInputItemText — "itemText" slot of TagsInput.
 */
const TagsInputItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
  const baseClass = recipe.base?.itemText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemText ?? "")
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
TagsInputItemText.displayName = "TagsInputItemText"

/**
 * TagsInputItemInput — "itemInput" slot of TagsInput.
 */
const TagsInputItemInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
  const baseClass = recipe.base?.itemInput ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemInput ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemInput ?? "")
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
TagsInputItemInput.displayName = "TagsInputItemInput"

/**
 * TagsInputItemPreview — "itemPreview" slot of TagsInput.
 */
const TagsInputItemPreview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
  const baseClass = recipe.base?.itemPreview ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemPreview ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemPreview ?? "")
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
TagsInputItemPreview.displayName = "TagsInputItemPreview"

/**
 * TagsInputItemDeleteTrigger — "itemDeleteTrigger" slot of TagsInput.
 */
const TagsInputItemDeleteTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
  const baseClass = recipe.base?.itemDeleteTrigger ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.itemDeleteTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemDeleteTrigger ?? "")
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
TagsInputItemDeleteTrigger.displayName = "TagsInputItemDeleteTrigger"

/**
 * TagsInputClearTrigger — "clearTrigger" slot of TagsInput.
 */
const TagsInputClearTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useTagsInput()
  const baseClass = recipe.base?.clearTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.clearTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.clearTrigger ?? "")
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
TagsInputClearTrigger.displayName = "TagsInputClearTrigger"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  TagsInput,
  TagsInputLabel,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemText,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemDeleteTrigger,
  TagsInputClearTrigger,
}
