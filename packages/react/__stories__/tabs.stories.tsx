import type { Meta } from "@storybook/react-vite"
import { TabsBasic } from "compositions/examples/tabs-basic"
import { TabsControlled } from "compositions/examples/tabs-controlled"
import { TabsLazyMounted } from "compositions/examples/tabs-lazy-mounted"
import { TabsNested } from "compositions/examples/tabs-nested"
import { TabsSizeTable } from "compositions/examples/tabs-size-table"
import { TabsVariantTable } from "compositions/examples/tabs-variant-table"
import { TabsWithAnimation } from "compositions/examples/tabs-with-animation"
import { TabsWithCustomIndicator } from "compositions/examples/tabs-with-custom-indicator"
import { TabsWithDisabledTab } from "compositions/examples/tabs-with-disabled-tab"
import { TabsWithDynamicAdd } from "compositions/examples/tabs-with-dynamic-add"
import { TabsWithFitted } from "compositions/examples/tabs-with-fitted"
import { TabsWithIndicator } from "compositions/examples/tabs-with-indicator"
import { TabsWithLinks } from "compositions/examples/tabs-with-links"
import { TabsWithManualActivation } from "compositions/examples/tabs-with-manual-activation"
import { TabsWithResponsiveOrientation } from "compositions/examples/tabs-with-responsive-orientation"
import { TabsWithStore } from "compositions/examples/tabs-with-store"
import { TabsWithVertical } from "compositions/examples/tabs-with-vertical"
import { Box } from "../src"

export default {
  title: "Components / Tabs",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = TabsBasic
export const Controlled = TabsControlled
export const LazyMounted = TabsLazyMounted
export const Nested = TabsNested
export const Sizes = TabsSizeTable
export const Variants = TabsVariantTable
export const WithAnimation = TabsWithAnimation
export const CustomIndicator = TabsWithCustomIndicator
export const DisabledTab = TabsWithDisabledTab
export const DynamicAdd = TabsWithDynamicAdd
export const Fitted = TabsWithFitted
export const Indicator = TabsWithIndicator
export const LinkTabs = TabsWithLinks
export const ManualActivation = TabsWithManualActivation
export const ResponsiveOrientation = TabsWithResponsiveOrientation
export const Store = TabsWithStore
export const Vertical = TabsWithVertical
