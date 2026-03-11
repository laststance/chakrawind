import { Input, InputGroup } from "@laststance/chakrawind-ui"

export const InputWithEndText = () => {
  return (
    <InputGroup endElement=".com">
      <Input placeholder="yoursite" />
    </InputGroup>
  )
}
