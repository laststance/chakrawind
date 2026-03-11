import { Button, QrCode } from "@laststance/chakrawind-ui"

export const QrCodeWithExport = () => {
  return (
    <QrCode.Root value="https://www.google.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>

      <QrCode.DownloadTrigger
        asChild
        fileName="qr-code.png"
        mimeType="image/png"
      >
        <Button variant="outline" size="xs" mt="3">
          Download
        </Button>
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  )
}
