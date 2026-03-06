import type { Meta } from "@storybook/react-vite"
import { QrCodeBasic } from "compositions/examples/qr-code-basic"
import { QrCodeWithErrorLevel } from "compositions/examples/qr-code-with-error-level"
import { QrCodeWithExport } from "compositions/examples/qr-code-with-export"
import { QrCodeWithExportWithLogo } from "compositions/examples/qr-code-with-export-with-logo"
import { QrCodeWithFill } from "compositions/examples/qr-code-with-fill"
import { QrCodeWithInput } from "compositions/examples/qr-code-with-input"
import { QrCodeWithOverlay } from "compositions/examples/qr-code-with-overlay"
import { QrCodeWithSizes } from "compositions/examples/qr-code-with-sizes"
import { QrCodeWithSpinner } from "compositions/examples/qr-code-with-spinner"
import { QrCodeWithStore } from "compositions/examples/qr-code-with-store"
import { Box } from "../src"

export default {
  title: "Components / QrCode",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = QrCodeBasic
export const WithErrorLevel = QrCodeWithErrorLevel
export const WithExport = QrCodeWithExport
export const WithExportLogo = QrCodeWithExportWithLogo
export const WithFill = QrCodeWithFill
export const WithInput = QrCodeWithInput
export const WithOverlay = QrCodeWithOverlay
export const WithSizes = QrCodeWithSizes
export const WithSpinner = QrCodeWithSpinner
export const WithStore = QrCodeWithStore
