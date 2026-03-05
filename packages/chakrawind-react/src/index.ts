import type { ReactNode } from "react"
import {
  createChakraWindTailwindPreset,
  type ChakraWindTailwindPreset
} from "@laststance/chakrawind-tailwind"

export interface ChakraWindProviderProps {
  children: ReactNode
}

export interface ChakraWindProviderContract {
  preset: ChakraWindTailwindPreset
  children: ReactNode
}

/**
 * Creates provider contract object for Chakra Wind React layer.
 * @param {ChakraWindProviderProps} props - Provider input props.
 * @returns {ChakraWindProviderContract} Provider contract used by runtime integrations.
 * @example
 * createChakraWindProviderContract({ children: "content" })
 */
export const createChakraWindProviderContract = (
  props: ChakraWindProviderProps
): ChakraWindProviderContract => {
  return {
    preset: createChakraWindTailwindPreset(),
    children: props.children
  }
}
