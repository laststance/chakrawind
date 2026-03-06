import type { Meta } from "@storybook/react-vite"
import { CodeBlockBasic } from "compositions/examples/code-block-basic"
import { CodeBlockPlainText } from "compositions/examples/code-block-plain-text"
import { CodeBlockWithCopyButton } from "compositions/examples/code-block-with-copy-button"
import { CodeBlockWithCustomAction } from "compositions/examples/code-block-with-custom-action"
import { CodeBlockWithDiff } from "compositions/examples/code-block-with-diff"
import { CodeBlockWithFloatingCopyButton } from "compositions/examples/code-block-with-floating-copy-button"
import { CodeBlockWithHighlightJs } from "compositions/examples/code-block-with-highlight-js"
import { CodeBlockWithHorizontalOverflow } from "compositions/examples/code-block-with-horizontal-overflow"
import { CodeBlockWithLanguageSwitcher } from "compositions/examples/code-block-with-language-switcher"
import { CodeBlockWithLineFocus } from "compositions/examples/code-block-with-line-focus"
import { CodeBlockWithLineHighlight } from "compositions/examples/code-block-with-line-highlight"
import { CodeBlockWithLineNumbers } from "compositions/examples/code-block-with-line-numbers"
import { CodeBlockWithLineNumbersWordWrap } from "compositions/examples/code-block-with-line-numbers-word-wrap"
import { CodeBlockWithMaxLines } from "compositions/examples/code-block-with-max-lines"
import { CodeBlockWithOverflowAndOverlay } from "compositions/examples/code-block-with-overflow-and-overlay"
import { CodeBlockWithSizes } from "compositions/examples/code-block-with-sizes"
import { CodeBlockWithTabs } from "compositions/examples/code-block-with-tabs"
import { CodeBlockWithTabsSync } from "compositions/examples/code-block-with-tabs-sync"
import { CodeBlockWithThemes } from "compositions/examples/code-block-with-themes"
import { CodeBlockWithTitle } from "compositions/examples/code-block-with-title"
import { CodeBlockWithWordWrap } from "compositions/examples/code-block-with-word-wrap"
import { Box } from "../src"

export default {
  title: "Components / CodeBlock",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = CodeBlockBasic
export const CopyButton = CodeBlockWithCopyButton
export const CustomAction = CodeBlockWithCustomAction
export const LineFocusing = CodeBlockWithLineFocus
export const LineHighlighting = CodeBlockWithLineHighlight
export const Title = CodeBlockWithTitle
export const LineNumbers = CodeBlockWithLineNumbers
export const Diff = CodeBlockWithDiff
export const MaxLines = CodeBlockWithMaxLines
export const WordWrap = CodeBlockWithWordWrap
export const LineNumbersWordWrap = CodeBlockWithLineNumbersWordWrap
export const LanguageSwitcher = CodeBlockWithLanguageSwitcher
export const Sizes = CodeBlockWithSizes
export const FloatingCopyButton = CodeBlockWithFloatingCopyButton
export const Themes = CodeBlockWithThemes
export const PlainText = CodeBlockPlainText
export const HorizontalOverflow = CodeBlockWithHorizontalOverflow
export const OverflowAndOverlay = CodeBlockWithOverflowAndOverlay
export const HighlightJs = CodeBlockWithHighlightJs
export const Tabs = CodeBlockWithTabs
export const TabsSync = CodeBlockWithTabsSync
