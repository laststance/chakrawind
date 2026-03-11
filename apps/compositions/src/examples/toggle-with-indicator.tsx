import { Button, Toggle } from "@laststance/chakrawind-ui"
import { LuVolume2, LuVolumeX } from "react-icons/lu"

export const ToggleWithIndicator = () => {
  return (
    <Toggle.Root asChild>
      <Button variant={{ base: "outline", _pressed: "solid" }}>
        <Toggle.Indicator fallback={<LuVolume2 />}>
          <LuVolumeX />
        </Toggle.Indicator>
        <Toggle.Indicator fallback="Mute">Unmute</Toggle.Indicator>
      </Button>
    </Toggle.Root>
  )
}
