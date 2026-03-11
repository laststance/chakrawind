import * as React from "react"
import { codeBlockSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/code-block"
import { cn } from "../lib/utils"

const recipe = codeBlockSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CodeBlockContextValue {
  size?: string
}

const CodeBlockContext = React.createContext<CodeBlockContextValue>({})

function CodeBlockProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: CodeBlockContextValue
}) {
  return <CodeBlockContext value={value}>{children}</CodeBlockContext>
}

function useCodeBlock(): CodeBlockContextValue {
  return React.use(CodeBlockContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * CodeBlock — root wrapper providing variant context to sub-components.
 * @example
 * <CodeBlock size="md">
 *   slot sub-components
 * </CodeBlock>
 */
const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <CodeBlockProvider value={{ size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </CodeBlockProvider>
    )
  },
)
CodeBlock.displayName = "CodeBlock"

/**
 * CodeBlockContent — "content" slot of CodeBlock.
 */
const CodeBlockContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
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
CodeBlockContent.displayName = "CodeBlockContent"

/**
 * CodeBlockTitle — "title" slot of CodeBlock.
 */
const CodeBlockTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockTitle.displayName = "CodeBlockTitle"

/**
 * CodeBlockHeader — "header" slot of CodeBlock.
 */
const CodeBlockHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.header ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.header ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockHeader.displayName = "CodeBlockHeader"

/**
 * CodeBlockFooter — "footer" slot of CodeBlock.
 */
const CodeBlockFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.footer ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.footer ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockFooter.displayName = "CodeBlockFooter"

/**
 * CodeBlockControl — "control" slot of CodeBlock.
 */
const CodeBlockControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
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
CodeBlockControl.displayName = "CodeBlockControl"

/**
 * CodeBlockOverlay — "overlay" slot of CodeBlock.
 */
const CodeBlockOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.overlay ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.overlay ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockOverlay.displayName = "CodeBlockOverlay"

/**
 * CodeBlockCode — "code" slot of CodeBlock.
 */
const CodeBlockCode = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.code ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.code ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockCode.displayName = "CodeBlockCode"

/**
 * CodeBlockCodeText — "codeText" slot of CodeBlock.
 */
const CodeBlockCodeText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.codeText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.codeText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockCodeText.displayName = "CodeBlockCodeText"

/**
 * CodeBlockCopyTrigger — "copyTrigger" slot of CodeBlock.
 */
const CodeBlockCopyTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.copyTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.copyTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockCopyTrigger.displayName = "CodeBlockCopyTrigger"

/**
 * CodeBlockCopyIndicator — "copyIndicator" slot of CodeBlock.
 */
const CodeBlockCopyIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.copyIndicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.copyIndicator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockCopyIndicator.displayName = "CodeBlockCopyIndicator"

/**
 * CodeBlockCollapseTrigger — "collapseTrigger" slot of CodeBlock.
 */
const CodeBlockCollapseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.collapseTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.collapseTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockCollapseTrigger.displayName = "CodeBlockCollapseTrigger"

/**
 * CodeBlockCollapseIndicator — "collapseIndicator" slot of CodeBlock.
 */
const CodeBlockCollapseIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.collapseIndicator ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.collapseIndicator ?? "")
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
CodeBlockCollapseIndicator.displayName = "CodeBlockCollapseIndicator"

/**
 * CodeBlockCollapseText — "collapseText" slot of CodeBlock.
 */
const CodeBlockCollapseText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCodeBlock()
  const baseClass = recipe.base?.collapseText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.collapseText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CodeBlockCollapseText.displayName = "CodeBlockCollapseText"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  CodeBlock,
  CodeBlockContent,
  CodeBlockTitle,
  CodeBlockHeader,
  CodeBlockFooter,
  CodeBlockControl,
  CodeBlockOverlay,
  CodeBlockCode,
  CodeBlockCodeText,
  CodeBlockCopyTrigger,
  CodeBlockCopyIndicator,
  CodeBlockCollapseTrigger,
  CodeBlockCollapseIndicator,
  CodeBlockCollapseText,
}
