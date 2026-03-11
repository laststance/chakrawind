import { Button } from "@laststance/chakrawind-ui"

export const ButtonWithResponsiveSize = () => {
  return (
    <Button rounded="3xl" size={{ base: "md", md: "lg" }}>
      Button
    </Button>
  )
}
