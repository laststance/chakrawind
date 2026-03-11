import { Checkmark, HStack } from "@laststance/chakrawind-ui"

export const CheckmarkIndeterminate = () => {
  return (
    <HStack gap={4}>
      <Checkmark />
      <Checkmark checked />
      <Checkmark indeterminate />
    </HStack>
  )
}
