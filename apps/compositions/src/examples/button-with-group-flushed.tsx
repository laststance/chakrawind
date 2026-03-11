import { Button, ButtonGroup, IconButton } from "@laststance/chakrawind-ui"
import { LuChevronDown } from "react-icons/lu"

export const ButtonWithGroupFlushed = () => {
  return (
    <ButtonGroup size="sm" variant="outline" attached>
      <Button variant="outline">Button</Button>
      <IconButton variant="outline">
        <LuChevronDown />
      </IconButton>
    </ButtonGroup>
  )
}
