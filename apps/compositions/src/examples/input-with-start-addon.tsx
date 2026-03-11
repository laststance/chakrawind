import { Input, InputGroup } from "@laststance/chakrawind-ui"

export const InputWithStartAddon = () => {
  return (
    <InputGroup startAddon="https://">
      <Input placeholder="yoursite.com" />
    </InputGroup>
  )
}
