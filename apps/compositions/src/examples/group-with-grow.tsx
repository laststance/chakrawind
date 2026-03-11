import { Button, Group } from "@laststance/chakrawind-ui"

export const GroupWithGrow = () => {
  return (
    <Group grow>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </Group>
  )
}
