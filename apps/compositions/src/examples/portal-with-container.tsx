"use client"

import { Portal } from "@laststance/chakrawind-ui"
import { useRef } from "react"

export const PortalWithContainer = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Portal container={ref}>
        <span>This text has been portaled</span>
      </Portal>
      <div ref={ref} />
    </>
  )
}
