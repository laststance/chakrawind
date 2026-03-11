/**
 * TreeView slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/tree-view.ts
 *
 * Uses CSS custom properties for tree indentation, padding, and icon sizing.
 * @example
 * ```tsx
 * <TreeView variant="subtle" size="md">
 *   <TreeViewTree>
 *     <TreeViewBranch>
 *       <TreeViewBranchControl>Folder</TreeViewBranchControl>
 *       <TreeViewBranchContent>
 *         <TreeViewItem>File.ts</TreeViewItem>
 *       </TreeViewBranchContent>
 *     </TreeViewBranch>
 *   </TreeViewTree>
 * </TreeView>
 * ```
 */

const baseItemClasses = [
  "flex items-center gap-[var(--tree-item-gap)] rounded-lg",
  "select-none relative",
  "[--tree-depth:calc(var(--depth)-1)]",
  "[--tree-indentation-offset:calc(var(--tree-indentation)*var(--tree-depth))]",
  "[--tree-icon-offset:calc(var(--tree-icon-size)*var(--tree-depth)*0.5)]",
  "[--tree-offset:calc(var(--tree-padding-inline)+var(--tree-indentation-offset)+var(--tree-icon-offset))]",
  "ps-[var(--tree-offset)] pe-[var(--tree-padding-inline)] py-[var(--tree-padding-block)]",
  "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--border-emphasized)]",
  "hover:bg-[var(--bg-muted)] focus-visible:bg-[var(--bg-muted)]",
  "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
].join(" ")

const baseTextClasses = "flex-1"

const subtleSelectedClasses =
  "data-[selected]:bg-[var(--cp-subtle)] data-[selected]:text-[var(--cp-fg)]"

const solidSelectedClasses =
  "data-[selected]:bg-[var(--cp-solid)] data-[selected]:text-[var(--cp-contrast)]"

export const treeViewSlotRecipeTw = {
  className: "chakra-tree-view",
  slots: [
    "root",
    "tree",
    "label",
    "branch",
    "branchContent",
    "branchIndentGuide",
    "branchIndicator",
    "branchTrigger",
    "branchControl",
    "item",
    "itemText",
    "branchText",
    "nodeCheckbox",
  ],
  base: {
    root: "w-full flex flex-col gap-2",
    tree: [
      "flex flex-col",
      "[--tree-item-gap:theme(spacing.2)]",
      "[&_svg]:w-[var(--tree-icon-size)] [&_svg]:h-[var(--tree-icon-size)]",
    ].join(" "),
    label: "font-medium text-sm",
    branch: "relative",
    branchContent: "relative",
    branchIndentGuide: [
      "h-full w-px bg-[var(--border-color)] absolute z-[1]",
      "[--tree-depth:calc(var(--depth)-1)]",
      "[--tree-indentation-offset:calc(var(--tree-indentation)*var(--tree-depth))]",
      "[--tree-offset:calc(var(--tree-padding-inline)+var(--tree-indentation-offset))]",
      "[--tree-icon-offset:calc(var(--tree-icon-size)*0.5*var(--depth))]",
      "inset-inline-start-[calc(var(--tree-offset)+var(--tree-icon-offset))]",
    ].join(" "),
    branchIndicator: [
      "text-[var(--fg-muted)] origin-center",
      "duration-200 transition-transform",
      "data-[state=open]:rotate-90",
    ].join(" "),
    branchTrigger: "inline-flex items-center justify-center",
    branchControl: baseItemClasses,
    item: baseItemClasses,
    itemText: baseTextClasses,
    branchText: baseTextClasses,
    nodeCheckbox: "inline-flex",
  },

  variants: {
    size: {
      xs: {
        root: "",
        tree: [
          "text-xs",
          "[--tree-indentation:theme(spacing.4)]",
          "[--tree-padding-inline:theme(spacing.2)]",
          "[--tree-padding-block:theme(spacing.1)]",
          "[--tree-icon-size:theme(spacing.3)]",
        ].join(" "),
        label: "",
        branch: "",
        branchContent: "",
        branchIndentGuide: "",
        branchIndicator: "",
        branchTrigger: "",
        branchControl: "",
        item: "",
        itemText: "",
        branchText: "",
        nodeCheckbox: "",
      },
      sm: {
        root: "",
        tree: [
          "text-sm",
          "[--tree-indentation:theme(spacing.4)]",
          "[--tree-padding-inline:theme(spacing.3)]",
          "[--tree-padding-block:theme(spacing.1)]",
          "[--tree-icon-size:theme(spacing.3)]",
        ].join(" "),
        label: "",
        branch: "",
        branchContent: "",
        branchIndentGuide: "",
        branchIndicator: "",
        branchTrigger: "",
        branchControl: "",
        item: "",
        itemText: "",
        branchText: "",
        nodeCheckbox: "",
      },
      md: {
        root: "",
        tree: [
          "text-sm",
          "[--tree-indentation:theme(spacing.4)]",
          "[--tree-padding-inline:theme(spacing.3)]",
          "[--tree-padding-block:theme(spacing[1.5])]",
          "[--tree-icon-size:theme(spacing.4)]",
        ].join(" "),
        label: "",
        branch: "",
        branchContent: "",
        branchIndentGuide: "",
        branchIndicator: "",
        branchTrigger: "",
        branchControl: "",
        item: "",
        itemText: "",
        branchText: "",
        nodeCheckbox: "",
      },
    },

    variant: {
      subtle: {
        root: "",
        tree: "",
        label: "",
        branch: "",
        branchContent: "",
        branchIndentGuide: "",
        branchIndicator: "",
        branchTrigger: "",
        branchControl: subtleSelectedClasses,
        item: subtleSelectedClasses,
        itemText: "",
        branchText: "",
        nodeCheckbox: "",
      },
      solid: {
        root: "",
        tree: "",
        label: "",
        branch: "",
        branchContent: "",
        branchIndentGuide: "",
        branchIndicator: "",
        branchTrigger: "",
        branchControl: solidSelectedClasses,
        item: solidSelectedClasses,
        itemText: "",
        branchText: "",
        nodeCheckbox: "",
      },
    },

    animateContent: {
      true: {
        root: "",
        tree: "",
        label: "",
        branch: "",
        branchContent: [
          "data-[state=open]:animate-[expand-height,fade-in] data-[state=open]:duration-200",
          "data-[state=closed]:animate-[collapse-height,fade-out] data-[state=closed]:duration-200",
        ].join(" "),
        branchIndentGuide: "",
        branchIndicator: "",
        branchTrigger: "",
        branchControl: "",
        item: "",
        itemText: "",
        branchText: "",
        nodeCheckbox: "",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
}
