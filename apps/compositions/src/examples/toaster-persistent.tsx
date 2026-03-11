"use client"

import { Button } from "@laststance/chakrawind-ui"
import { toaster } from "compositions/ui/toaster"

export const ToasterPersistent = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "loading",
        })
      }
    >
      Show Toast
    </Button>
  )
}
