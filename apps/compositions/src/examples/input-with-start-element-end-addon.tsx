import { Input, InputGroup } from "@laststance/chakrawind-ui"

export const InputWithStartElementEndAddon = () => {
  return (
    <InputGroup startElement="$" endAddon="USD">
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
