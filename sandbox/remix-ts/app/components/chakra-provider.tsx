import {
  ChakraProvider as Provider,
  defaultSystem,
} from "@laststance/chakrawind-ui"

export const ChakraProvider = (props: { children: React.ReactNode }) => {
  return <Provider value={defaultSystem} {...props} />
}
