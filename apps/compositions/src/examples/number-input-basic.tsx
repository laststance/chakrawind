import { NumberInput } from "@laststance/chakrawind-ui"

export const NumberInputBasic = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px">
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
