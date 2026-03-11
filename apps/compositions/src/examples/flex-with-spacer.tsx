import { Box, Flex, Spacer } from "@laststance/chakrawind-ui"

export const FlexWithSpacer = () => {
  return (
    <Flex>
      <Box p="4" bg="red.400" color="white">
        Box 1
      </Box>
      <Spacer />
      <Box p="4" bg="green.400" color="white">
        Box 2
      </Box>
    </Flex>
  )
}
