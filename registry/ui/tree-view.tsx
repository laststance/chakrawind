import * as React from "react"
import { treeViewSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/tree-view"
import { cn } from "../lib/utils"

const recipe = treeViewSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TreeViewContextValue {
  size?: string
  variant?: string
  animateContent?: string
}

const TreeViewContext = React.createContext<TreeViewContextValue>({})

function TreeViewProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TreeViewContextValue
}) {
  return <TreeViewContext value={value}>{children}</TreeViewContext>
}

function useTreeView(): TreeViewContextValue {
  return React.use(TreeViewContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  animateContent?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * TreeView — root wrapper providing variant context to sub-components.
 * @example
 * <TreeView size="md">
 *   slot sub-components
 * </TreeView>
 */
const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      size = "md",
      variant = "subtle",
      animateContent,
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
      animateContent
        ? (recipe.variants?.animateContent?.[animateContent]?.root ?? "")
        : "",
    ].filter(Boolean)

    return (
      <TreeViewProvider value={{ size, variant, animateContent }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </TreeViewProvider>
    )
  },
)
TreeView.displayName = "TreeView"

/**
 * TreeViewTree — "tree" slot of TreeView.
 */
const TreeViewTree = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.tree ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tree ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.tree ?? "") : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.tree ?? "")
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
TreeViewTree.displayName = "TreeViewTree"

/**
 * TreeViewLabel — "label" slot of TreeView.
 */
const TreeViewLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.label ?? "")
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
TreeViewLabel.displayName = "TreeViewLabel"

/**
 * TreeViewBranch — "branch" slot of TreeView.
 */
const TreeViewBranch = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branch ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.branch ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.branch ?? "") : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.branch ?? "")
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
TreeViewBranch.displayName = "TreeViewBranch"

/**
 * TreeViewBranchContent — "branchContent" slot of TreeView.
 */
const TreeViewBranchContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branchContent ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.branchContent ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.branchContent ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.branchContent ??
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
TreeViewBranchContent.displayName = "TreeViewBranchContent"

/**
 * TreeViewBranchIndentGuide — "branchIndentGuide" slot of TreeView.
 */
const TreeViewBranchIndentGuide = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branchIndentGuide ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.branchIndentGuide ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.branchIndentGuide ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]
          ?.branchIndentGuide ?? "")
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
TreeViewBranchIndentGuide.displayName = "TreeViewBranchIndentGuide"

/**
 * TreeViewBranchIndicator — "branchIndicator" slot of TreeView.
 */
const TreeViewBranchIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branchIndicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.branchIndicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.branchIndicator ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]
          ?.branchIndicator ?? "")
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
TreeViewBranchIndicator.displayName = "TreeViewBranchIndicator"

/**
 * TreeViewBranchTrigger — "branchTrigger" slot of TreeView.
 */
const TreeViewBranchTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branchTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.branchTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.branchTrigger ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.branchTrigger ??
        "")
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
TreeViewBranchTrigger.displayName = "TreeViewBranchTrigger"

/**
 * TreeViewBranchControl — "branchControl" slot of TreeView.
 */
const TreeViewBranchControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branchControl ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.branchControl ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.branchControl ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.branchControl ??
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
TreeViewBranchControl.displayName = "TreeViewBranchControl"

/**
 * TreeViewItem — "item" slot of TreeView.
 */
const TreeViewItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.item ?? "")
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
TreeViewItem.displayName = "TreeViewItem"

/**
 * TreeViewItemText — "itemText" slot of TreeView.
 */
const TreeViewItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.itemText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemText ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.itemText ?? "")
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
TreeViewItemText.displayName = "TreeViewItemText"

/**
 * TreeViewBranchText — "branchText" slot of TreeView.
 */
const TreeViewBranchText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.branchText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.branchText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.branchText ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.branchText ??
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
TreeViewBranchText.displayName = "TreeViewBranchText"

/**
 * TreeViewNodeCheckbox — "nodeCheckbox" slot of TreeView.
 */
const TreeViewNodeCheckbox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTreeView()
  const baseClass = recipe.base?.nodeCheckbox ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.nodeCheckbox ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.nodeCheckbox ?? "")
      : "",
    ctx.animateContent
      ? (recipe.variants?.animateContent?.[ctx.animateContent]?.nodeCheckbox ??
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
TreeViewNodeCheckbox.displayName = "TreeViewNodeCheckbox"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  TreeView,
  TreeViewTree,
  TreeViewLabel,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchTrigger,
  TreeViewBranchControl,
  TreeViewItem,
  TreeViewItemText,
  TreeViewBranchText,
  TreeViewNodeCheckbox,
}
