import { Switch } from "@laststance/chakrawind-ui"

export const SwitchWithDisabled = () => {
  return (
    <Switch.Root disabled>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  )
}
