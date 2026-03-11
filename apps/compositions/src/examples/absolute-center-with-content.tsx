import { AbsoluteCenter, Box } from "@laststance/chakrawind-ui"
import { LuHeart } from "react-icons/lu"

export const AbsoluteCenterWithContent = () => {
  return (
    <Box
      position="relative"
      w="100px"
      h="100px"
      bg="bg.muted"
      borderRadius="md"
    >
      <AbsoluteCenter>
        <Box
          bg="red.solid"
          color="white"
          p="3"
          borderRadius="full"
          fontSize="xl"
        >
          <LuHeart />
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}
