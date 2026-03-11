import { CloseButton, For, HStack } from "@laststance/chakrawind-ui"

export const CloseButtonWithSizes = () => {
  return (
    <HStack gap="4" wrap="wrap">
      <For each={["2xs", "xs", "sm", "md", "lg", "xl"]}>
        {(size) => <CloseButton key={size} variant="outline" size={size} />}
      </For>
    </HStack>
  )
}
