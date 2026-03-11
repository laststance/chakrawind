import { Checkmark, For, HStack } from "@laststance/chakrawind-ui"

export const CheckmarkWithSizes = () => {
  return (
    <HStack gap={4} alignItems="center">
      <For each={["xs", "sm", "md", "lg"]}>
        {(size) => <Checkmark key={size} size={size} checked />}
      </For>
    </HStack>
  )
}
