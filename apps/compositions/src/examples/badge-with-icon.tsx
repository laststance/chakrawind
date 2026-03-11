import { Badge, Stack } from "@laststance/chakrawind-ui"
import { HiAtSymbol, HiStar } from "react-icons/hi"

export const BadgeWithIcon = () => {
  return (
    <Stack align="flex-start">
      <Badge variant="solid" colorPalette="blue">
        <HiStar />
        New
      </Badge>
      <Badge variant="solid" colorPalette="green">
        New
        <HiAtSymbol />
      </Badge>
    </Stack>
  )
}
