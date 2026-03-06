import type { Meta } from "@storybook/react-vite"
import { PortalBasic } from "compositions/examples/portal-basic"
import { PortalWithContainer } from "compositions/examples/portal-with-container"
import { PortalWithIframe } from "compositions/examples/portal-with-iframe"
import { Box } from "../src"

export default {
  title: "Components / Portal",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = PortalBasic
export const Iframe = PortalWithIframe
export const Container = PortalWithContainer
