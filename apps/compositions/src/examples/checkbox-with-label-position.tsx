import { Checkbox } from "@laststance/chakrawind-ui"

export const CheckboxWithLabelPosition = () => {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.Control />
    </Checkbox.Root>
  )
}
