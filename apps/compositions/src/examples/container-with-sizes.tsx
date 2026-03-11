import { Container, For, Stack } from "@laststance/chakrawind-ui"
import { DecorativeBox } from "compositions/lib/decorative-box"

export const ContainerWithSizes = () => {
  return (
    <Stack>
      <For each={["sm", "md", "xl", "2xl"]}>
        {(size) => (
          <Container key={size} maxW={size} px="2">
            <DecorativeBox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
            </DecorativeBox>
          </Container>
        )}
      </For>
    </Stack>
  )
}
