import { FormatByte, Text } from "@laststance/chakrawind-ui"

export const FormatByteBasic = () => {
  return (
    <Text textStyle="lg">
      File size: <FormatByte value={1450.45} />
    </Text>
  )
}
