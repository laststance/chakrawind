"use client"

import { Button, QrCode, Stack, useQrCode } from "@laststance/chakrawind-ui"

export const QrCodeWithStore = () => {
  const qrCode = useQrCode({ defaultValue: "https://www.google.com" })
  return (
    <Stack align="flex-start">
      <Button onClick={() => qrCode.setValue("https://www.x.com")}>
        Update to x.com
      </Button>
      <QrCode.RootProvider value={qrCode}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.RootProvider>
    </Stack>
  )
}
