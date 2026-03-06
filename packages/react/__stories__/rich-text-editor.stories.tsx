import type { Meta } from "@storybook/react-vite"
import { RichTextEditorBasic } from "compositions/examples/rich-text-editor/rich-text-editor-basic"
import { RichTextEditorComposition } from "compositions/examples/rich-text-editor/rich-text-editor-composition"
import { RichTextEditorControlled } from "compositions/examples/rich-text-editor/rich-text-editor-controlled"
import { RichTextEditorWithAutosave } from "compositions/examples/rich-text-editor/rich-text-editor-with-autosave"
import { RichTextEditorWithBubbleMenu } from "compositions/examples/rich-text-editor/rich-text-editor-with-bubble-menu"
import { RichTextEditorWithCharacterCount } from "compositions/examples/rich-text-editor/rich-text-editor-with-character-count"
import { RichTextEditorWithCode } from "compositions/examples/rich-text-editor/rich-text-editor-with-code"
import { RichTextEditorWithDragHandle } from "compositions/examples/rich-text-editor/rich-text-editor-with-drag-handle"
import { RichTextEditorWithEmoji } from "compositions/examples/rich-text-editor/rich-text-editor-with-emoji"
import { RichTextEditorWithHashtags } from "compositions/examples/rich-text-editor/rich-text-editor-with-hashtags"
import { RichTextEditorWithHighlight } from "compositions/examples/rich-text-editor/rich-text-editor-with-highlight"
import { RichTextEditorWithImage } from "compositions/examples/rich-text-editor/rich-text-editor-with-image"
import { RichTextEditorWithMentions } from "compositions/examples/rich-text-editor/rich-text-editor-with-mentions"
import { RichTextEditorWithMode } from "compositions/examples/rich-text-editor/rich-text-editor-with-mode"
import { RichTextEditorWithPasteHandling } from "compositions/examples/rich-text-editor/rich-text-editor-with-paste-handling"
import { RichTextEditorWithPlaceholder } from "compositions/examples/rich-text-editor/rich-text-editor-with-placeholder"
import { RichTextEditorWithPreview } from "compositions/examples/rich-text-editor/rich-text-editor-with-preview"
import { RichTextEditorWithSlashCommands } from "compositions/examples/rich-text-editor/rich-text-editor-with-slash-commands"
import { RichTextEditorWithTask } from "compositions/examples/rich-text-editor/rich-text-editor-with-task"
import { Box } from "../src"

export default {
  title: "Rich Text Editor / Tiptap",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = RichTextEditorBasic
export const Controlled = RichTextEditorControlled
export const Preview = RichTextEditorWithPreview
export const Highlight = RichTextEditorWithHighlight
export const Placeholder = RichTextEditorWithPlaceholder
export const DragHandle = RichTextEditorWithDragHandle
export const PasteHandling = RichTextEditorWithPasteHandling
export const Autosave = RichTextEditorWithAutosave
export const BubbleMenu = RichTextEditorWithBubbleMenu
export const Task = RichTextEditorWithTask
export const CharacterCount = RichTextEditorWithCharacterCount
export const Image = RichTextEditorWithImage
export const Code = RichTextEditorWithCode
export const Hashtags = RichTextEditorWithHashtags
export const Emoji = RichTextEditorWithEmoji
export const SlashCommands = RichTextEditorWithSlashCommands
export const Mentions = RichTextEditorWithMentions
export const Mode = RichTextEditorWithMode
export const Composition = RichTextEditorComposition
