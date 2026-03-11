import { Radiomark, Stack } from "@laststance/chakrawind-ui"

export const RadiomarkBasic = () => {
  return (
    <Stack>
      <Radiomark />
      <Radiomark checked />
      <Radiomark disabled />
      <Radiomark checked disabled />
    </Stack>
  )
}
