import { Editable } from "@laststance/chakrawind-ui"

export const EditableBasic = () => (
  <Editable.Root textAlign="start" defaultValue="Click to edit">
    <Editable.Preview />
    <Editable.Input />
  </Editable.Root>
)
