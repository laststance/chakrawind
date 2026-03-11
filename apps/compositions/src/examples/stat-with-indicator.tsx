import { Badge, Stat } from "@laststance/chakrawind-ui"

export const StatWithIndicator = () => {
  return (
    <Stat.Root>
      <Stat.Label>Unique visitors</Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
      <Badge colorPalette="red" variant="plain" px="0">
        <Stat.DownIndicator />
        1.9%
      </Badge>
    </Stat.Root>
  )
}
