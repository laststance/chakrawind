import { Link, Text } from "@laststance/chakrawind-ui"

export const LinkWithinText = () => {
  return (
    <Text>
      Visit the{" "}
      <Link
        variant="underline"
        href="https://chakra-ui.com"
        colorPalette="teal"
      >
        Chakra UI
      </Link>{" "}
      website
    </Text>
  )
}
