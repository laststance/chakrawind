import { Separator, Stack } from "@laststance/chakrawind-ui"
import { DecorativeBox } from "compositions/lib/decorative-box"

export const StackWithCustomSeparator = () => (
  <Stack separator={<Separator borderColor="red.500" />}>
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
  </Stack>
)
