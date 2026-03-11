import { FormatNumber, Text } from "@laststance/chakrawind-ui"

export const FormatNumberWithCompact = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber value={1500000} notation="compact" compactDisplay="short" />
    </Text>
  )
}
