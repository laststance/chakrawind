import { Button, Clipboard } from "@laststance/chakrawind-ui"

export const ClipboardWithTimeout = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com" timeout={1000}>
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="sm">
          <Clipboard.Indicator />
          <Clipboard.CopyText />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
