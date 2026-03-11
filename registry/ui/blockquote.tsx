import * as React from "react"
import { blockquoteSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/blockquote"
import { cn } from "../lib/utils"

const recipe = blockquoteSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface BlockquoteContextValue {
  justify?: string
  variant?: string
}

const BlockquoteContext = React.createContext<BlockquoteContextValue>({})

function BlockquoteProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: BlockquoteContextValue
}) {
  return <BlockquoteContext value={value}>{children}</BlockquoteContext>
}

function useBlockquote(): BlockquoteContextValue {
  return React.use(BlockquoteContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface BlockquoteProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Blockquote — root wrapper providing variant context to sub-components.
 * @example
 * <Blockquote justify="start">
 *   slot sub-components
 * </Blockquote>
 */
const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  (
    {
      className,
      justify = "start",
      variant = "subtle",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      justify ? (recipe.variants?.justify?.[justify]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <BlockquoteProvider value={{ justify, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </BlockquoteProvider>
    )
  },
)
Blockquote.displayName = "Blockquote"

/**
 * BlockquoteIcon — "icon" slot of Blockquote.
 */
const BlockquoteIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBlockquote()
  const baseClass = recipe.base?.icon ?? ""
  const variantClasses = [
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.icon ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.icon ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BlockquoteIcon.displayName = "BlockquoteIcon"

/**
 * BlockquoteContent — "content" slot of Blockquote.
 */
const BlockquoteContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBlockquote()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.content ?? "") : "",
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
BlockquoteContent.displayName = "BlockquoteContent"

/**
 * BlockquoteCaption — "caption" slot of Blockquote.
 */
const BlockquoteCaption = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useBlockquote()
  const baseClass = recipe.base?.caption ?? ""
  const variantClasses = [
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.caption ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.caption ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
BlockquoteCaption.displayName = "BlockquoteCaption"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Blockquote, BlockquoteIcon, BlockquoteContent, BlockquoteCaption }
