import { Input, InputGroup } from "@laststance/chakrawind-ui"

export const InputWithStartAndEndAddon = () => {
  return (
    <InputGroup startAddon="$" endAddon="USD">
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
