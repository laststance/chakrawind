import { Badge, Field, Input } from "@laststance/chakrawind-ui"

export const FieldWithOptional = () => {
  return (
    <Field.Root>
      <Field.Label>
        Email
        <Field.RequiredIndicator
          fallback={
            <Badge size="xs" variant="surface">
              Optional
            </Badge>
          }
        />
      </Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
