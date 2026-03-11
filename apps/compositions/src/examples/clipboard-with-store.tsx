"use client"

import { Button, useClipboard } from "@laststance/chakrawind-ui"

export const ClipboardWithStore = () => {
  const clipboard = useClipboard({ value: "https://chakra-ui.com" })
  return (
    <Button variant="surface" size="sm" onClick={clipboard.copy}>
      {clipboard.copied ? "Copied" : "Copy"}
    </Button>
  )
}
