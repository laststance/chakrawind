import { createElement } from "react"
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react"
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

export type BoxProps = ComponentPropsWithoutRef<"div">

export type TextProps = ComponentPropsWithoutRef<"p">

export type ButtonProps = ComponentPropsWithoutRef<"button">

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

/**
 * Renders Chakra Wind provider shell.
 * @param {ChakraWindProviderProps} props - Provider props.
 * @returns {ReactElement} Provider element.
 * @example
 * ChakraWindProvider({ children: "content" })
 */
export const ChakraWindProvider = (props: ChakraWindProviderProps): ReactElement => {
  return createElement(
    "div",
    {
      "data-chakrawind-provider": "root"
    },
    props.children
  )
}

/**
 * Renders minimal Box compatibility component.
 * @param {BoxProps} props - Div-compatible props.
 * @returns {ReactElement} Box element.
 * @example
 * Box({ id: "box" })
 */
export const Box = (props: BoxProps): ReactElement => {
  return createElement("div", {
    ...props,
    "data-chakrawind-component": "box"
  })
}

/**
 * Renders minimal Text compatibility component.
 * @param {TextProps} props - Paragraph-compatible props.
 * @returns {ReactElement} Text element.
 * @example
 * Text({ children: "hello" })
 */
export const Text = (props: TextProps): ReactElement => {
  return createElement("p", {
    ...props,
    "data-chakrawind-component": "text"
  })
}

/**
 * Renders minimal Button compatibility component.
 * @param {ButtonProps} props - Button-compatible props.
 * @returns {ReactElement} Button element.
 * @example
 * Button({ type: "button", children: "Click" })
 */
export const Button = (props: ButtonProps): ReactElement => {
  return createElement("button", {
    ...props,
    type: props.type ?? "button",
    "data-chakrawind-component": "button"
  })
}
