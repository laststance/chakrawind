import { Field, Input } from "@laststance/chakrawind-ui"

export const FieldWithRequired = () => {
  return (
    <Field.Root required>
      <Field.Label>
        Email
        <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
