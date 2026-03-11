import { Badge, Loader } from "@laststance/chakrawind-ui"

export const LoaderWithBadge = () => {
  return (
    <Badge>
      <Loader text="Loading...">Click me</Loader>
    </Badge>
  )
}
