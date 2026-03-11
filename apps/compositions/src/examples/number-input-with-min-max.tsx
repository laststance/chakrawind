import { NumberInput } from "@laststance/chakrawind-ui"

export const NumberInputWithMinMax = () => {
  return (
    <NumberInput.Root width="200px" defaultValue="10" min={5} max={50}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
