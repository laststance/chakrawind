import * as React from "react"
import { accordionSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/accordion"
import { cn } from "../lib/utils"

const recipe = accordionSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface AccordionContextValue {
  variant?: string
  size?: string
}

const AccordionContext = React.createContext<AccordionContextValue>({})

function AccordionProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: AccordionContextValue
}) {
  return <AccordionContext value={value}>{children}</AccordionContext>
}

function useAccordion(): AccordionContextValue {
  return React.use(AccordionContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Accordion — root wrapper providing variant context to sub-components.
 * @example
 * <Accordion variant="outline">
 *   slot sub-components
 * </Accordion>
 */
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <AccordionProvider value={{ variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </AccordionProvider>
    )
  },
)
Accordion.displayName = "Accordion"

/**
 * AccordionItem — "item" slot of Accordion.
 */
const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAccordion()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AccordionItem.displayName = "AccordionItem"

/**
 * AccordionItemTrigger — "itemTrigger" slot of Accordion.
 */
const AccordionItemTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useAccordion()
  const baseClass = recipe.base?.itemTrigger ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemTrigger ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AccordionItemTrigger.displayName = "AccordionItemTrigger"

/**
 * AccordionItemContent — "itemContent" slot of Accordion.
 */
const AccordionItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAccordion()
  const baseClass = recipe.base?.itemContent ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemContent ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemContent ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AccordionItemContent.displayName = "AccordionItemContent"

/**
 * AccordionItemBody — "itemBody" slot of Accordion.
 */
const AccordionItemBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAccordion()
  const baseClass = recipe.base?.itemBody ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemBody ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemBody ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AccordionItemBody.displayName = "AccordionItemBody"

/**
 * AccordionItemIndicator — "itemIndicator" slot of Accordion.
 */
const AccordionItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useAccordion()
  const baseClass = recipe.base?.itemIndicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemIndicator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemIndicator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
AccordionItemIndicator.displayName = "AccordionItemIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemBody,
  AccordionItemIndicator,
}
