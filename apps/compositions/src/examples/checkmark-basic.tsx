import { Checkmark, Stack } from "@laststance/chakrawind-ui"

export const CheckmarkBasic = () => {
  return (
    <Stack>
      <Checkmark />
      <Checkmark checked />
      <Checkmark indeterminate />
      <Checkmark disabled />
      <Checkmark checked disabled />
      <Checkmark indeterminate disabled />
    </Stack>
  )
}
