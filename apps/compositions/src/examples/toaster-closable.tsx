"use client"

import { Button } from "@laststance/chakrawind-ui"
import { toaster } from "compositions/ui/toaster"

export const ToasterClosable = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "info",
          closable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}
