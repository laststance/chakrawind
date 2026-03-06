import type { Meta } from "@storybook/react-vite"
import { SplitterBasic } from "compositions/examples/splitter-basic"
import { SplitterCollapsible } from "compositions/examples/splitter-collapsible"
import { SplitterConditionalRendering } from "compositions/examples/splitter-conditional-rendering"
import { SplitterControlled } from "compositions/examples/splitter-controlled"
import { SplitterDisabled } from "compositions/examples/splitter-disabled"
import { SplitterDynamicPanel } from "compositions/examples/splitter-dynamic-panel"
import { SplitterExplorerDemo } from "compositions/examples/splitter-explorer-demo"
import { SplitterIdeLayout } from "compositions/examples/splitter-ide-layout"
import { SplitterKeyboardResize } from "compositions/examples/splitter-keyboard-resize"
import { SplitterMinMaxConstraints } from "compositions/examples/splitter-min-max-constraints"
import { SplitterMultiplePanels } from "compositions/examples/splitter-multiple-panels"
import { SplitterNested } from "compositions/examples/splitter-nested"
import { SplitterResetOnDoubleClick } from "compositions/examples/splitter-reset-on-double-click"
import { SplitterResizeEvents } from "compositions/examples/splitter-resize-events"
import { SplitterResponsiveOrientation } from "compositions/examples/splitter-responsive-orientation"
import { SplitterSeparatorOnly } from "compositions/examples/splitter-separator-only"
import { SplitterVertical } from "compositions/examples/splitter-vertical"
import { SplitterWithStorage } from "compositions/examples/splitter-with-storage"
import { SplitterWithStore } from "compositions/examples/splitter-with-store"
import { Box } from "../src"

export default {
  title: "Components / Splitter",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = SplitterBasic
export const Vertical = SplitterVertical
export const MultiplePanels = SplitterMultiplePanels
export const Controlled = SplitterControlled
export const Store = SplitterWithStore
export const Collapsible = SplitterCollapsible
export const KeyboardResize = SplitterKeyboardResize
export const Storage = SplitterWithStorage
export const Nested = SplitterNested
export const Disabled = SplitterDisabled
export const ConditionalRendering = SplitterConditionalRendering
export const DynamicPanel = SplitterDynamicPanel
export const IdeLayout = SplitterIdeLayout
export const SeparatorOnly = SplitterSeparatorOnly
export const ResponsiveOrientation = SplitterResponsiveOrientation
export const ResetOnDoubleClick = SplitterResetOnDoubleClick
export const ResizeEvents = SplitterResizeEvents
export const MinMaxConstraints = SplitterMinMaxConstraints
export const _Explorer = SplitterExplorerDemo
