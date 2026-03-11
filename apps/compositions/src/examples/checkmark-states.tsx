import { Checkmark, HStack } from "@laststance/chakrawind-ui"

export const CheckmarkStates = () => {
  return (
    <HStack gap={3}>
      <Checkmark />
      <Checkmark checked />
      <Checkmark indeterminate />
      <Checkmark disabled />
      <Checkmark checked disabled />
      <Checkmark indeterminate disabled />
    </HStack>
  )
}
