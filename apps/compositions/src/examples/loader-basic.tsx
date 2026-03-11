import { HStack, Loader } from "@laststance/chakrawind-ui"

export const LoaderBasic = () => {
  return (
    <HStack textStyle="sm" fontWeight="medium">
      <Loader text="Loading...">Click me</Loader>
    </HStack>
  )
}
