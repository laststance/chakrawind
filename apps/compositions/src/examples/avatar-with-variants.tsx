import { Avatar, For, HStack } from "@laststance/chakrawind-ui"

export const AvatarWithVariants = () => {
  return (
    <HStack gap="3">
      <For each={["solid", "outline", "subtle"]}>
        {(variant) => (
          <Avatar.Root key={variant} variant={variant}>
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
        )}
      </For>
    </HStack>
  )
}
