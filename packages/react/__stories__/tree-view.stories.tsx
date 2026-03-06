import type { Meta } from "@storybook/react-vite"
import { TreeViewAsync } from "compositions/examples/tree-view-async"
import { TreeViewBasic } from "compositions/examples/tree-view-basic"
import { TreeViewCheckbox } from "compositions/examples/tree-view-checkbox"
import { TreeViewCollapseAnimation } from "compositions/examples/tree-view-collapse-animation"
import { TreeViewContextMenu } from "compositions/examples/tree-view-context-menu"
import { TreeViewControlledExpansion } from "compositions/examples/tree-view-controlled-expansion"
import { TreeViewCustomIcon } from "compositions/examples/tree-view-custom-icon"
import { TreeViewDefaultExpanded } from "compositions/examples/tree-view-default-expanded"
import { TreeViewDisabledNode } from "compositions/examples/tree-view-disabled-node"
import { TreeViewExpandCollapseAll } from "compositions/examples/tree-view-expand-collapse-all"
import { TreeViewExpandIcon } from "compositions/examples/tree-view-expand-icon"
import { TreeViewExpandedStyling } from "compositions/examples/tree-view-expanded-styling"
import { TreeViewExplicitExpand } from "compositions/examples/tree-view-explicit-expand"
import { TreeViewMultiSelect } from "compositions/examples/tree-view-multi-select"
import { TreeViewMutation } from "compositions/examples/tree-view-mutation"
import { TreeViewRemoveIndentation } from "compositions/examples/tree-view-remove-indentation"
import { TreeViewWithColors } from "compositions/examples/tree-view-with-colors"
import { TreeViewWithFilter } from "compositions/examples/tree-view-with-filter"
import { TreeViewWithLinks } from "compositions/examples/tree-view-with-links"
import { TreeViewWithSizes } from "compositions/examples/tree-view-with-sizes"
import { TreeViewWithStore } from "compositions/examples/tree-view-with-store"
import { TreeViewWithVariants } from "compositions/examples/tree-view-with-variants"
import { Box } from "../src"

export default {
  title: "Components / TreeView",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TreeViewBasic
export const LazyLoad = TreeViewAsync
export const CheckboxTree = TreeViewCheckbox
export const CollapseAnimation = TreeViewCollapseAnimation
export const ContextMenu = TreeViewContextMenu
export const ControlledExpansion = TreeViewControlledExpansion
export const CustomIcon = TreeViewCustomIcon
export const DefaultExpanded = TreeViewDefaultExpanded
export const DisabledNode = TreeViewDisabledNode
export const ExpandCollapseAll = TreeViewExpandCollapseAll
export const ExpandIcon = TreeViewExpandIcon
export const ExpandedStyling = TreeViewExpandedStyling
export const ExplicitExpand = TreeViewExplicitExpand
export const MultiSelect = TreeViewMultiSelect
export const Mutation = TreeViewMutation
export const RemoveIndentation = TreeViewRemoveIndentation
export const Colors = TreeViewWithColors
export const Filter = TreeViewWithFilter
export const Sizes = TreeViewWithSizes
export const Store = TreeViewWithStore
export const Variants = TreeViewWithVariants
export const Links = TreeViewWithLinks
