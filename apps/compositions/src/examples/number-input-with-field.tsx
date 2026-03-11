import { Field, NumberInput } from "@laststance/chakrawind-ui"

export const NumberInputWithField = () => {
  return (
    <Field.Root>
      <Field.Label>Enter Number</Field.Label>
      <NumberInput.Root width="200px">
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
      <Field.HelperText>Enter a number between 1 and 10</Field.HelperText>
    </Field.Root>
  )
}
