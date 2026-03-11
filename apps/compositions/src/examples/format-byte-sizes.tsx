import { FormatByte, Stack, Text } from "@laststance/chakrawind-ui"

export const FormatByteSizes = () => {
  return (
    <Stack>
      <Text textStyle="lg">
        <FormatByte value={50} />
      </Text>
      <Text textStyle="lg">
        <FormatByte value={5000} />
      </Text>
      <Text textStyle="lg">
        <FormatByte value={5000000} />
      </Text>
      <Text textStyle="lg">
        <FormatByte value={5000000000} />
      </Text>
    </Stack>
  )
}
