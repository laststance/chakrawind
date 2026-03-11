"use client"

import { Button } from "@laststance/chakrawind-ui"
import { toaster } from "compositions/ui/toaster"

export const ToasterWithAction = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.success({
          title: "Update successful",
          description: "File saved successfully to the server",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Click me
    </Button>
  )
}
