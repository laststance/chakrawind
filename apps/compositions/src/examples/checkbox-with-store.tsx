"use client"

import { Checkbox, useCheckbox } from "@laststance/chakrawind-ui"

export const CheckboxWithStore = () => {
  const checkbox = useCheckbox()
  return (
    <Checkbox.RootProvider value={checkbox}>
      <Checkbox.Root>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.RootProvider>
  )
}
