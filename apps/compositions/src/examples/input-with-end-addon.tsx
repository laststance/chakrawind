import { Input, InputGroup } from "@laststance/chakrawind-ui"

export const InputWithEndAddon = () => {
  return (
    <InputGroup endAddon=".com">
      <Input placeholder="yoursite" />
    </InputGroup>
  )
}
