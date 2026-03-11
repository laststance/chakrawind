import * as React from "react"
import { tagSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/tag"
import { cn } from "../lib/utils"

const recipe = tagSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TagContextValue {
  size?: string
  variant?: string
}

const TagContext = React.createContext<TagContextValue>({})

function TagProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TagContextValue
}) {
  return <TagContext value={value}>{children}</TagContext>
}

function useTag(): TagContextValue {
  return React.use(TagContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Tag — root wrapper providing variant context to sub-components.
 * @example
 * <Tag size="md">
 *   slot sub-components
 * </Tag>
 */
const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      size = "md",
      variant = "surface",
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
      <TagProvider value={{ size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </TagProvider>
    )
  },
)
Tag.displayName = "Tag"

/**
 * TagLabel — "label" slot of Tag.
 */
const TagLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTag()
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
TagLabel.displayName = "TagLabel"

/**
 * TagCloseTrigger — "closeTrigger" slot of Tag.
 */
const TagCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useTag()
  const baseClass = recipe.base?.closeTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.closeTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.closeTrigger ?? "")
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
TagCloseTrigger.displayName = "TagCloseTrigger"

/**
 * TagStartElement — "startElement" slot of Tag.
 */
const TagStartElement = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTag()
  const baseClass = recipe.base?.startElement ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.startElement ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.startElement ?? "")
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
TagStartElement.displayName = "TagStartElement"

/**
 * TagEndElement — "endElement" slot of Tag.
 */
const TagEndElement = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTag()
  const baseClass = recipe.base?.endElement ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.endElement ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.endElement ?? "")
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
TagEndElement.displayName = "TagEndElement"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Tag, TagLabel, TagCloseTrigger, TagStartElement, TagEndElement }
