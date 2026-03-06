import type { Meta } from "@storybook/react-vite"
import { FileUploadAcceptedFiles } from "compositions/examples/file-upload-accepted-files"
import { FileUploadBasic } from "compositions/examples/file-upload-basic"
import { FileUploadCustomPreview } from "compositions/examples/file-upload-custom-preview"
import { FileUploadDirectory } from "compositions/examples/file-upload-directory"
import { FileUploadMediaCapture } from "compositions/examples/file-upload-media-capture"
import { FileUploadMultiple } from "compositions/examples/file-upload-multiple"
import { FileUploadOpenFromDialog } from "compositions/examples/file-upload-open-from-dialog"
import { FileUploadWithConditionalDropzone } from "compositions/examples/file-upload-with-conditional-dropzone"
import { FileUploadWithDropzone } from "compositions/examples/file-upload-with-dropzone"
import { FileUploadWithHookForm } from "compositions/examples/file-upload-with-hook-form"
import { FileUploadWithInput } from "compositions/examples/file-upload-with-input"
import { FileUploadWithInputClear } from "compositions/examples/file-upload-with-input-clear"
import { FileUploadWithPasteEvent } from "compositions/examples/file-upload-with-paste-event"
import { FileUploadWithStore } from "compositions/examples/file-upload-with-store"
import { Box } from "../src"

export default {
  title: "Components / File Upload",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const AcceptedFiles = FileUploadAcceptedFiles
export const Basic = FileUploadBasic
export const CustomPreview = FileUploadCustomPreview
export const Directory = FileUploadDirectory
export const OpenFromDialog = FileUploadOpenFromDialog
export const MediaCapture = FileUploadMediaCapture
export const Multiple = FileUploadMultiple
export const Dropzone = FileUploadWithDropzone
export const ConditionalDropzone = FileUploadWithConditionalDropzone
export const HookForm = FileUploadWithHookForm
export const Input = FileUploadWithInput
export const InputClear = FileUploadWithInputClear
export const PasteEvent = FileUploadWithPasteEvent
export const Store = FileUploadWithStore
