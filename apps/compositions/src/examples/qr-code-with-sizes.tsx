import { For, QrCode, Stack } from "@laststance/chakrawind-ui"

export const QrCodeWithSizes = () => {
  return (
    <Stack>
      <For each={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
        {(size) => (
          <QrCode.Root size={size} value="https://www.google.com" key={size}>
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Root>
        )}
      </For>
    </Stack>
  )
}
