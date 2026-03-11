"use client"

import { Button } from "@laststance/chakrawind-ui"

export const ButtonWithDisabledLink = () => {
  return (
    <Button asChild>
      <a href="#" data-disabled="" onClick={(e) => e.preventDefault()}>
        Button
      </a>
    </Button>
  )
}
