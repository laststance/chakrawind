import { CloseButton } from "@laststance/chakrawind-ui"
import { HiX } from "react-icons/hi"

export const CloseButtonWithCustomIcon = () => {
  return (
    <CloseButton variant="ghost" aria-label="Close">
      <HiX />
    </CloseButton>
  )
}
