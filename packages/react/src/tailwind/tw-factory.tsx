"use client"

/**
 * Tailwind CSS-based factory for Chakra Wind.
 * Replaces Emotion's runtime CSS-in-JS with Tailwind utility class generation.
 *
 * Preserves the identical public API:
 * - `chakra.div`, `chakra.button`, etc.
 * - `chakra(Component, recipe, options)`
 * - Style props: `bg`, `p`, `m`, `color`, etc.
 * - Polymorphic `as` prop
 * - `asChild` for render delegation
 * - `ref` forwarding
 * - Recipe/variant system via CVA
 */
import * as React from "react"
import { mergeProps } from "../merge-props"
import { mergeRefs } from "../merge-refs"
import type {
  JsxFactory,
  StyledFactoryFn,
} from "../styled-system/factory.types"
import { compact, getElementRef, uniq } from "../utils"
import { cn } from "./cn"
import { STYLE_PROP_NAMES, extractStyleProps } from "./style-props"

const isHtmlProp = (prop: string) => prop.startsWith("html")

const SVG_EXCEPTION_PROPS: Record<string, string[]> = {
  path: ["d"],
  text: ["x", "y"],
  circle: ["cx", "cy", "r"],
  rect: ["width", "height", "x", "y", "rx", "ry"],
  ellipse: ["cx", "cy", "rx", "ry"],
  g: ["transform"],
  stop: ["offset", "stopOpacity"],
}

/**
 * Creates a Tailwind-powered styled component.
 * Drop-in replacement for Emotion-based createStyled.
 *
 * @param tag - HTML element string or React component
 * @param configOrCva - Recipe/CVA configuration (Tailwind class-based)
 * @param options - Factory options (forwardProps, defaultProps, shouldForwardProp)
 * @returns Styled React component
 * @example
 * const StyledButton = createTwStyled("button", {
 *   base: "inline-flex items-center justify-center rounded-md font-medium",
 *   variants: {
 *     size: { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-md" },
 *     variant: { solid: "bg-blue-500 text-white", outline: "border border-blue-500" },
 *   },
 *   defaultVariants: { size: "md", variant: "solid" },
 * })
 */
function createTwStyled(tag: any, configOrCva: any = {}, options: any = {}) {
  if (process.env.NODE_ENV !== "production") {
    if (tag === undefined) {
      throw new Error(
        "You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.",
      )
    }
  }

  // Handle SVG exception props
  if (SVG_EXCEPTION_PROPS[tag]) {
    options.forwardProps ||= []
    options.forwardProps = uniq([
      ...options.forwardProps,
      ...SVG_EXCEPTION_PROPS[tag],
    ])
  }

  const baseTag = tag.__tw_base || tag
  const baseClassName = tag.__tw_className || ""

  const identifierName = options?.label
  const targetClassName = options?.target

  const Styled = React.forwardRef<any, any>((inProps, ref) => {
    const propsWithDefault = React.useMemo(
      () => Object.assign({}, options.defaultProps, compact(inProps)),
      [inProps],
    )

    // Split style props from regular props
    const [styleClasses, nonStyleProps] = extractStyleProps(propsWithDefault)

    // Handle variant props from recipe config
    let variantClasses = ""
    let remainingProps = nonStyleProps

    if (
      configOrCva &&
      typeof configOrCva === "object" &&
      configOrCva.variants
    ) {
      const variantKeys = Object.keys(configOrCva.variants)
      const variantProps: Record<string, any> = {}
      const otherProps: Record<string, any> = {}

      for (const [key, value] of Object.entries(nonStyleProps)) {
        if (variantKeys.includes(key)) {
          variantProps[key] = value
        } else {
          otherProps[key] = value
        }
      }

      // Apply defaults
      if (configOrCva.defaultVariants) {
        for (const [key, defaultVal] of Object.entries(
          configOrCva.defaultVariants,
        )) {
          if (variantProps[key] === undefined) {
            variantProps[key] = defaultVal
          }
        }
      }

      // Resolve variant classes
      const variantClassList: string[] = []
      for (const [key, value] of Object.entries(variantProps)) {
        const variantMap = configOrCva.variants[key]
        if (variantMap && value != null && variantMap[value as string]) {
          variantClassList.push(variantMap[value as string])
        }
      }

      // Apply compound variants
      if (configOrCva.compoundVariants) {
        for (const cv of configOrCva.compoundVariants) {
          const { class: cvClass, className: cvClassName, ...conditions } = cv
          const matches = Object.entries(conditions).every(
            ([key, value]) => variantProps[key] === value,
          )
          if (matches) {
            variantClassList.push(cvClass || cvClassName || "")
          }
        }
      }

      variantClasses = variantClassList.filter(Boolean).join(" ")
      remainingProps = otherProps
    }

    // Base classes from config
    const baseClasses = configOrCva?.base || configOrCva?.className || ""

    // CSS prop handling — can be string (Tailwind classes) or object
    const cssProp = (remainingProps as any).css
    let cssClasses = ""
    if (typeof cssProp === "string") {
      cssClasses = cssProp
    } else if (Array.isArray(cssProp)) {
      cssClasses = cssProp.filter((s: any) => typeof s === "string").join(" ")
    }

    // Determine which props to forward
    const {
      as: asProp,
      asChild,
      children,
      className: userClassName,
      css: _css,
      unstyled,
      colorPalette: _cp,
      ...forwardableProps
    } = remainingProps as any

    // Build final className
    const finalClassName = unstyled
      ? cn(userClassName || "")
      : cn(
          baseClassName,
          baseClasses,
          variantClasses,
          styleClasses,
          cssClasses,
          targetClassName,
          userClassName,
        )

    // Handle `as` polymorphism
    let FinalTag = asProp || baseTag

    // Build final props
    const finalProps: any = {}

    for (const [prop, value] of Object.entries(forwardableProps)) {
      if (value === undefined) continue

      // Handle htmlSize, htmlWidth etc.
      if (isHtmlProp(prop)) {
        const nativeProp = prop.replace("html", "").toLowerCase()
        finalProps[nativeProp] = value
        continue
      }

      // Forward props based on shouldForwardProp or default behavior
      if (options.shouldForwardProp) {
        if (
          options.shouldForwardProp(
            prop,
            Object.keys(configOrCva?.variants || {}),
          )
        ) {
          finalProps[prop] = value
        }
      } else if (options.forwardProps?.includes(prop)) {
        finalProps[prop] = value
      } else if (!STYLE_PROP_NAMES.has(prop)) {
        finalProps[prop] = value
      }
    }

    if (finalClassName) {
      finalProps.className = finalClassName
    }
    finalProps.ref = ref

    // Handle asChild — render delegation
    if (asChild) {
      const child = (
        React.isValidElement(children)
          ? React.Children.only(children)
          : React.Children.toArray(children).find(React.isValidElement)
      ) as React.ReactElement<any> | undefined

      if (!child) {
        throw new Error(
          "[chakra-wind > factory] No valid child found for asChild",
        )
      }

      FinalTag = child.type
      finalProps.children = null
      Reflect.deleteProperty(finalProps, "asChild")

      const merged = mergeProps(finalProps, child.props)
      merged.ref = mergeRefs(ref, getElementRef(child))

      if (merged.className && finalClassName) {
        merged.className = cn(finalClassName, merged.className)
      }

      return <FinalTag {...merged} />
    }

    finalProps.children = children

    return <FinalTag {...finalProps} />
  })

  Styled.displayName =
    identifierName !== undefined
      ? identifierName
      : `chakra(${
          typeof baseTag === "string"
            ? baseTag
            : baseTag.displayName || baseTag.name || "Component"
        })`

  // Metadata for composition
  ;(Styled as any).__tw_base = baseTag
  ;(Styled as any).__tw_className = cn(baseClassName, configOrCva?.base || "")
  ;(Styled as any).__tw_cva = configOrCva

  if (targetClassName) {
    Object.defineProperty(Styled, "toString", {
      value: () => `.${targetClassName}`,
    })
  }

  return Styled
}

// @ts-ignore
const styledFn = createTwStyled.bind() as unknown as JsxFactory

const cache = new Map()

const chakraTwImpl = new Proxy(styledFn, {
  apply(_, __, args) {
    // @ts-ignore
    return styledFn(...args)
  },
  get(_, el) {
    if (!cache.has(el)) {
      cache.set(el, styledFn(el as any))
    }
    return cache.get(el)
  },
})

export const chakraTw = chakraTwImpl as unknown as StyledFactoryFn
export { createTwStyled }
