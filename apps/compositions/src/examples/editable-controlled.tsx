"use client"

import { Editable } from "@laststance/chakrawind-ui"
import { useState } from "react"

export const EditableControlled = () => {
  const [name, setName] = useState("")
  return (
    <Editable.Root
      value={name}
      onValueChange={(e) => setName(e.value)}
      placeholder="Click to edit"
    >
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}
