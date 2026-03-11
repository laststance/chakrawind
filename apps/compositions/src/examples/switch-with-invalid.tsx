import { Switch } from "@laststance/chakrawind-ui"

export const SwitchWithInvalid = () => {
  return (
    <Switch.Root invalid>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  )
}
