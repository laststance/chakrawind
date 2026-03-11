import { Input, InputGroup } from "@laststance/chakrawind-ui"

export const InputWithStartAndEndText = () => {
  return (
    <InputGroup startElement="$" endElement="USD">
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
