import { FormatNumber, Text } from "@laststance/chakrawind-ui"

export const FormatNumberBasic = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber value={1450.45} />
    </Text>
  )
}
