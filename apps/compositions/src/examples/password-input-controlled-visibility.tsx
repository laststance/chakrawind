"use client"

import { Stack, Text } from "@laststance/chakrawind-ui"
import { PasswordInput } from "compositions/ui/password-input"
import { useState } from "react"

export const PasswordInputControlledVisibility = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Stack>
      <PasswordInput
        defaultValue="secret"
        visible={visible}
        onVisibleChange={setVisible}
      />
      <Text>Password is {visible ? "visible" : "hidden"}</Text>
    </Stack>
  )
}
