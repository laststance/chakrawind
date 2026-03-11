import { Button, Toggle } from "@laststance/chakrawind-ui"
import { LuX } from "react-icons/lu"

export const ToggleWithPressedIcon = () => {
  return (
    <Toggle.Root asChild defaultPressed>
      <Button
        variant={{ base: "outline", _pressed: "solid" }}
        colorPalette={{ base: "gray", _pressed: "red" }}
      >
        <Toggle.Indicator>
          <LuX />
        </Toggle.Indicator>
        Declined
      </Button>
    </Toggle.Root>
  )
}
