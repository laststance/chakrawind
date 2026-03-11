import * as React from "react"
import { listboxSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/listbox"
import { cn } from "../lib/utils"

const recipe = listboxSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ListboxContextValue {
  variant?: string
}

const ListboxContext = React.createContext<ListboxContextValue>({})

function ListboxProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ListboxContextValue
}) {
  return <ListboxContext value={value}>{children}</ListboxContext>
}

function useListbox(): ListboxContextValue {
  return React.use(ListboxContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ListboxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Listbox — root wrapper providing variant context to sub-components.
 * @example
 * <Listbox variant="subtle">
 *   slot sub-components
 * </Listbox>
 */
const Listbox = React.forwardRef<HTMLDivElement, ListboxProps>(
  (
    { className, variant = "subtle", colorPalette, children, ...props },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <ListboxProvider value={{ variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </ListboxProvider>
    )
  },
)
Listbox.displayName = "Listbox"

/**
 * ListboxContent — "content" slot of Listbox.
 */
const ListboxContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ListboxContent.displayName = "ListboxContent"

/**
 * ListboxItem — "item" slot of Listbox.
 */
const ListboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
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
ListboxItem.displayName = "ListboxItem"

/**
 * ListboxEmpty — "empty" slot of Listbox.
 */
const ListboxEmpty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.empty ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.empty ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ListboxEmpty.displayName = "ListboxEmpty"

/**
 * ListboxItemText — "itemText" slot of Listbox.
 */
const ListboxItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.itemText ?? ""
  const variantClasses = [
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
ListboxItemText.displayName = "ListboxItemText"

/**
 * ListboxItemGroup — "itemGroup" slot of Listbox.
 */
const ListboxItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.itemGroup ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemGroup ?? "")
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
ListboxItemGroup.displayName = "ListboxItemGroup"

/**
 * ListboxItemGroupLabel — "itemGroupLabel" slot of Listbox.
 */
const ListboxItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.itemGroupLabel ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemGroupLabel ?? "")
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
ListboxItemGroupLabel.displayName = "ListboxItemGroupLabel"

/**
 * ListboxLabel — "label" slot of Listbox.
 */
const ListboxLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
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
ListboxLabel.displayName = "ListboxLabel"

/**
 * ListboxValueText — "valueText" slot of Listbox.
 */
const ListboxValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
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
ListboxValueText.displayName = "ListboxValueText"

/**
 * ListboxItemIndicator — "itemIndicator" slot of Listbox.
 */
const ListboxItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useListbox()
  const baseClass = recipe.base?.itemIndicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemIndicator ?? "")
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
ListboxItemIndicator.displayName = "ListboxItemIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxEmpty,
  ListboxItemText,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxLabel,
  ListboxValueText,
  ListboxItemIndicator,
}
