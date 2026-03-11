"use client"

import { Switch } from "@laststance/chakrawind-ui"
import { useState } from "react"

export const SwitchControlled = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  )
}
