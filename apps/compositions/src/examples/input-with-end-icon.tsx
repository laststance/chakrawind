import { Input, InputGroup } from "@laststance/chakrawind-ui"
import { LuMail } from "react-icons/lu"

export const InputWithEndIcon = () => {
  return (
    <InputGroup endElement={<LuMail />}>
      <Input placeholder="Email" />
    </InputGroup>
  )
}
