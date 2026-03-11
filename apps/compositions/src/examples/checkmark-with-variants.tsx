import { Checkmark, For, HStack } from "@laststance/chakrawind-ui"

export const CheckmarkWithVariants = () => {
  return (
    <HStack gap={4}>
      <For each={["solid", "outline", "subtle", "plain", "inverted"]}>
        {(variant) => <Checkmark key={variant} variant={variant} checked />}
      </For>
    </HStack>
  )
}
