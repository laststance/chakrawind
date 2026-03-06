import type { Meta } from "@storybook/react-vite"
import { ToasterBasic } from "compositions/examples/toaster-basic"
import { ToasterClosable } from "compositions/examples/toaster-closable"
import { ToasterLifecycle } from "compositions/examples/toaster-lifecycle"
import { ToasterPersistent } from "compositions/examples/toaster-persistent"
import { ToasterStatic } from "compositions/examples/toaster-static"
import { ToasterWithAction } from "compositions/examples/toaster-with-action"
import { ToasterWithDuration } from "compositions/examples/toaster-with-duration"
import { ToasterWithExternalClose } from "compositions/examples/toaster-with-external-close"
import { ToasterWithPromise } from "compositions/examples/toaster-with-promise"
import { ToasterWithStatus } from "compositions/examples/toaster-with-status"
import { ToasterWithUpdate } from "compositions/examples/toaster-with-update"
import { Toaster } from "compositions/ui/toaster"
import { Box } from "../src"

export default {
  title: "Components / Toast",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
        <Toaster />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = ToasterBasic
export const Closable = ToasterClosable
export const Lifecycle = ToasterLifecycle
export const Persistent = ToasterPersistent
export const Static = ToasterStatic
export const Action = ToasterWithAction
export const Duration = ToasterWithDuration
export const ExternalClose = ToasterWithExternalClose
export const Promise = ToasterWithPromise
export const Status = ToasterWithStatus
export const Update = ToasterWithUpdate
