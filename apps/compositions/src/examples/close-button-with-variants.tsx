import { CloseButton, HStack } from "@laststance/chakrawind-ui"

export const CloseButtonWithVariants = () => {
  return (
    <HStack>
      <CloseButton variant="ghost" />
      <CloseButton variant="outline" />
      <CloseButton variant="subtle" />
      <CloseButton variant="solid" />
    </HStack>
  )
}
