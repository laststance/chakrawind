import { For, Stack, VStack } from "@laststance/chakrawind-ui"
import { DecorativeBox } from "compositions/lib/decorative-box"
import { LuBox } from "react-icons/lu"

export const ForWithFallback = () => {
  return (
    <Stack gap="4">
      <For
        each={[]}
        fallback={
          <VStack textAlign="center" fontWeight="medium">
            <LuBox />
            No items to show
          </VStack>
        }
      >
        {(item, index) => (
          <DecorativeBox h="10" key={index}>
            {item}
          </DecorativeBox>
        )}
      </For>
    </Stack>
  )
}
