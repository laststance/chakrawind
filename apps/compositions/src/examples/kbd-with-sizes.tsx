import { HStack, Kbd } from "@laststance/chakrawind-ui"

export const KbdWithSizes = () => {
  return (
    <HStack gap="4">
      <Kbd size="sm">Shift + Tab</Kbd>
      <Kbd size="md">Shift + Tab</Kbd>
      <Kbd size="lg">Shift + Tab</Kbd>
    </HStack>
  )
}
