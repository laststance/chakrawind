import { Avatar } from "@laststance/chakrawind-ui"

export const AvatarBasic = () => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
  )
}
