import { HStack } from "@laststance/chakrawind-ui"
import { ColorSwatch } from "@laststance/chakrawind-ui"
import { For } from "@laststance/chakrawind-ui"

export const ColorSwatchWithSizes = () => {
  return (
    <HStack>
      <For each={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
        {(size) => <ColorSwatch key={size} value="#bada55" size={size} />}
      </For>
    </HStack>
  )
}
