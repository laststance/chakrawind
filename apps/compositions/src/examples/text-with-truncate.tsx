import { Flex, Text } from "@laststance/chakrawind-ui"

export const TextWithTruncate = () => {
  return (
    <Flex maxW="300px">
      <Text truncate>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Flex>
  )
}
