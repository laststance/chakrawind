import { FormatNumber, Text } from "@laststance/chakrawind-ui"

export const FormatNumberWithCurrency = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber value={1234.45} style="currency" currency="USD" />
    </Text>
  )
}
