import { Badge, BadgePropsProvider, Group } from "@laststance/chakrawind-ui"

export const BadgeWithContext = () => {
  return (
    <BadgePropsProvider value={{ size: "sm", variant: "outline" }}>
      <Group>
        <Badge>Badge</Badge>
        <Badge variant="solid">Badge</Badge>
      </Group>
    </BadgePropsProvider>
  )
}
