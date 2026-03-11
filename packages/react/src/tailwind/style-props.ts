/**
 * Maps Chakra UI style props to Tailwind CSS utility classes.
 * This is the core adapter that replaces Emotion's runtime CSS generation.
 *
 * Chakra style props like `bg="red.500"` are converted to Tailwind classes
 * like `bg-red-500`. Token references are resolved to their Tailwind equivalents.
 *
 * @example
 * resolveStyleProps({ bg: "red.500", p: 4, rounded: "md" })
 * // => "bg-red-500 p-4 rounded-md"
 */

type StylePropValue = string | number | boolean | undefined | null

/**
 * Mapping from Chakra style prop names to Tailwind utility prefix generators.
 * Each entry maps a Chakra prop to a function that returns the Tailwind class.
 */
const PROP_MAP: Record<string, (value: StylePropValue) => string> = {
  // ─── Layout ────────────────────────────────────
  display: (v) => `${v}`,
  d: (v) => `${v}`,
  w: (v) => `w-${resolveSize(v)}`,
  width: (v) => `w-${resolveSize(v)}`,
  h: (v) => `h-${resolveSize(v)}`,
  height: (v) => `h-${resolveSize(v)}`,
  minW: (v) => `min-w-${resolveSize(v)}`,
  minWidth: (v) => `min-w-${resolveSize(v)}`,
  maxW: (v) => `max-w-${resolveSize(v)}`,
  maxWidth: (v) => `max-w-${resolveSize(v)}`,
  minH: (v) => `min-h-${resolveSize(v)}`,
  minHeight: (v) => `min-h-${resolveSize(v)}`,
  maxH: (v) => `max-h-${resolveSize(v)}`,
  maxHeight: (v) => `max-h-${resolveSize(v)}`,
  overflow: (v) => `overflow-${v}`,
  overflowX: (v) => `overflow-x-${v}`,
  overflowY: (v) => `overflow-y-${v}`,

  // ─── Flexbox ────────────────────────────────────
  flex: (v) => `flex-${v}`,
  flexDir: (v) => `flex-${v}`,
  flexDirection: (v) => `flex-${v}`,
  flexWrap: (v) => `flex-${v}`,
  flexGrow: (v) => `grow-${v}`,
  flexShrink: (v) => `shrink-${v}`,
  flexBasis: (v) => `basis-${resolveSize(v)}`,
  alignItems: (v) => `items-${v}`,
  alignContent: (v) => `content-${v}`,
  alignSelf: (v) => `self-${v}`,
  justifyContent: (v) => `justify-${v}`,
  justifyItems: (v) => `justify-items-${v}`,
  justifySelf: (v) => `justify-self-${v}`,
  order: (v) => `order-${v}`,
  gap: (v) => `gap-${resolveSpacing(v)}`,
  gapX: (v) => `gap-x-${resolveSpacing(v)}`,
  columnGap: (v) => `gap-x-${resolveSpacing(v)}`,
  gapY: (v) => `gap-y-${resolveSpacing(v)}`,
  rowGap: (v) => `gap-y-${resolveSpacing(v)}`,

  // ─── Grid ────────────────────────────────────
  gridTemplateColumns: (v) => `grid-cols-${v}`,
  gridTemplateRows: (v) => `grid-rows-${v}`,
  gridColumn: (v) => `col-${v}`,
  gridRow: (v) => `row-${v}`,
  gridColumnSpan: (v) => `col-span-${v}`,
  gridRowSpan: (v) => `row-span-${v}`,

  // ─── Spacing ────────────────────────────────────
  p: (v) => `p-${resolveSpacing(v)}`,
  padding: (v) => `p-${resolveSpacing(v)}`,
  pt: (v) => `pt-${resolveSpacing(v)}`,
  paddingTop: (v) => `pt-${resolveSpacing(v)}`,
  pr: (v) => `pr-${resolveSpacing(v)}`,
  paddingRight: (v) => `pr-${resolveSpacing(v)}`,
  pb: (v) => `pb-${resolveSpacing(v)}`,
  paddingBottom: (v) => `pb-${resolveSpacing(v)}`,
  pl: (v) => `pl-${resolveSpacing(v)}`,
  paddingLeft: (v) => `pl-${resolveSpacing(v)}`,
  px: (v) => `px-${resolveSpacing(v)}`,
  paddingX: (v) => `px-${resolveSpacing(v)}`,
  paddingInline: (v) => `px-${resolveSpacing(v)}`,
  py: (v) => `py-${resolveSpacing(v)}`,
  paddingY: (v) => `py-${resolveSpacing(v)}`,
  paddingBlock: (v) => `py-${resolveSpacing(v)}`,
  ps: (v) => `ps-${resolveSpacing(v)}`,
  paddingStart: (v) => `ps-${resolveSpacing(v)}`,
  paddingInlineStart: (v) => `ps-${resolveSpacing(v)}`,
  pe: (v) => `pe-${resolveSpacing(v)}`,
  paddingEnd: (v) => `pe-${resolveSpacing(v)}`,
  paddingInlineEnd: (v) => `pe-${resolveSpacing(v)}`,

  m: (v) => `m-${resolveSpacing(v)}`,
  margin: (v) => `m-${resolveSpacing(v)}`,
  mt: (v) => `mt-${resolveSpacing(v)}`,
  marginTop: (v) => `mt-${resolveSpacing(v)}`,
  mr: (v) => `mr-${resolveSpacing(v)}`,
  marginRight: (v) => `mr-${resolveSpacing(v)}`,
  mb: (v) => `mb-${resolveSpacing(v)}`,
  marginBottom: (v) => `mb-${resolveSpacing(v)}`,
  ml: (v) => `ml-${resolveSpacing(v)}`,
  marginLeft: (v) => `ml-${resolveSpacing(v)}`,
  mx: (v) => `mx-${resolveSpacing(v)}`,
  marginX: (v) => `mx-${resolveSpacing(v)}`,
  marginInline: (v) => `mx-${resolveSpacing(v)}`,
  my: (v) => `my-${resolveSpacing(v)}`,
  marginY: (v) => `my-${resolveSpacing(v)}`,
  marginBlock: (v) => `my-${resolveSpacing(v)}`,
  ms: (v) => `ms-${resolveSpacing(v)}`,
  marginStart: (v) => `ms-${resolveSpacing(v)}`,
  marginInlineStart: (v) => `ms-${resolveSpacing(v)}`,
  me: (v) => `me-${resolveSpacing(v)}`,
  marginEnd: (v) => `me-${resolveSpacing(v)}`,
  marginInlineEnd: (v) => `me-${resolveSpacing(v)}`,

  // ─── Color ────────────────────────────────────
  color: (v) => `text-${resolveColor(v)}`,
  bg: (v) => `bg-${resolveColor(v)}`,
  bgColor: (v) => `bg-${resolveColor(v)}`,
  background: (v) => `bg-${resolveColor(v)}`,
  backgroundColor: (v) => `bg-${resolveColor(v)}`,
  opacity: (v) => `opacity-${v}`,

  // ─── Typography ────────────────────────────────────
  fontSize: (v) => `text-${v}`,
  fontWeight: (v) => `font-${v}`,
  fontFamily: (v) => `font-${v}`,
  fontStyle: (v) => `${v}`,
  textAlign: (v) => `text-${v}`,
  textDecoration: (v) => `${v}`,
  textTransform: (v) => `${v}`,
  lineHeight: (v) => `leading-${v}`,
  letterSpacing: (v) => `tracking-${v}`,
  whiteSpace: (v) => `whitespace-${v}`,
  wordBreak: (v) => `break-${v}`,
  textOverflow: (v) => `text-${v}`,
  truncate: (v) => (v ? "truncate" : ""),

  // ─── Border ────────────────────────────────────
  border: (v) => `border${v === true || v === "1px" ? "" : `-${v}`}`,
  borderWidth: (v) => `border-${v}`,
  borderColor: (v) => `border-${resolveColor(v)}`,
  borderStyle: (v) => `border-${v}`,
  borderTop: (v) => `border-t${v === true ? "" : `-${v}`}`,
  borderRight: (v) => `border-r${v === true ? "" : `-${v}`}`,
  borderBottom: (v) => `border-b${v === true ? "" : `-${v}`}`,
  borderLeft: (v) => `border-l${v === true ? "" : `-${v}`}`,
  borderTopColor: (v) => `border-t-${resolveColor(v)}`,
  borderRightColor: (v) => `border-r-${resolveColor(v)}`,
  borderBottomColor: (v) => `border-b-${resolveColor(v)}`,
  borderLeftColor: (v) => `border-l-${resolveColor(v)}`,
  borderX: (v) => `border-x${v === true ? "" : `-${v}`}`,
  borderY: (v) => `border-y${v === true ? "" : `-${v}`}`,

  // ─── Border Radius ────────────────────────────────────
  rounded: (v) => `rounded-${v}`,
  borderRadius: (v) => `rounded-${v}`,
  borderTopRadius: (v) => `rounded-t-${v}`,
  borderRightRadius: (v) => `rounded-r-${v}`,
  borderBottomRadius: (v) => `rounded-b-${v}`,
  borderLeftRadius: (v) => `rounded-l-${v}`,
  borderTopLeftRadius: (v) => `rounded-tl-${v}`,
  borderTopRightRadius: (v) => `rounded-tr-${v}`,
  borderBottomLeftRadius: (v) => `rounded-bl-${v}`,
  borderBottomRightRadius: (v) => `rounded-br-${v}`,
  roundedTop: (v) => `rounded-t-${v}`,
  roundedRight: (v) => `rounded-r-${v}`,
  roundedBottom: (v) => `rounded-b-${v}`,
  roundedLeft: (v) => `rounded-l-${v}`,

  // ─── Shadow ────────────────────────────────────
  shadow: (v) => `shadow-${v}`,
  boxShadow: (v) => `shadow-${v}`,

  // ─── Position ────────────────────────────────────
  position: (v) => `${v}`,
  pos: (v) => `${v}`,
  top: (v) => `top-${resolveSpacing(v)}`,
  right: (v) => `right-${resolveSpacing(v)}`,
  bottom: (v) => `bottom-${resolveSpacing(v)}`,
  left: (v) => `left-${resolveSpacing(v)}`,
  inset: (v) => `inset-${resolveSpacing(v)}`,
  insetX: (v) => `inset-x-${resolveSpacing(v)}`,
  insetY: (v) => `inset-y-${resolveSpacing(v)}`,
  zIndex: (v) => `z-${v}`,

  // ─── Transition ────────────────────────────────────
  transition: (v) => `transition-${v}`,
  transitionProperty: (v) => `transition-${v}`,
  transitionDuration: (v) => `duration-${v}`,
  transitionTimingFunction: (v) => `ease-${v}`,

  // ─── Cursor ────────────────────────────────────
  cursor: (v) => `cursor-${v}`,
  pointerEvents: (v) => `pointer-events-${v}`,
  userSelect: (v) => `select-${v}`,

  // ─── Visibility ────────────────────────────────────
  visibility: (v) => `${v}`,
  srOnly: (v) => (v ? "sr-only" : "not-sr-only"),

  // ─── Outline ────────────────────────────────────
  outline: (v) => `outline-${v}`,
  outlineColor: (v) => `outline-${resolveColor(v)}`,
  outlineOffset: (v) => `outline-offset-${v}`,

  // ─── Ring ────────────────────────────────────
  ring: (v) => `ring-${v}`,
  ringColor: (v) => `ring-${resolveColor(v)}`,
  ringOffset: (v) => `ring-offset-${v}`,
  ringOffsetColor: (v) => `ring-offset-${resolveColor(v)}`,

  // ─── Object Fit ────────────────────────────────────
  objectFit: (v) => `object-${v}`,
  objectPosition: (v) => `object-${v}`,

  // ─── Aspect Ratio ────────────────────────────────────
  aspectRatio: (v) => `aspect-${v}`,
}

/**
 * Set of all recognized Chakra style prop names.
 */
export const STYLE_PROP_NAMES = new Set(Object.keys(PROP_MAP))

/**
 * Resolves a Chakra color token to a Tailwind color class segment.
 * @param value - Chakra color token (e.g., "red.500", "gray.200")
 * @returns Tailwind color class segment (e.g., "red-500", "gray-200")
 * @example
 * resolveColor("red.500")    // => "red-500"
 * resolveColor("transparent") // => "transparent"
 * resolveColor("#ff0000")     // => "[#ff0000]"
 */
function resolveColor(value: StylePropValue): string {
  if (value == null) return ""
  const str = String(value)

  // Dot notation: "red.500" → "red-500"
  if (str.includes(".")) {
    return str.replace(/\./g, "-")
  }

  // Raw CSS value: "#ff0000" → "[#ff0000]"
  if (str.startsWith("#") || str.startsWith("rgb") || str.startsWith("hsl")) {
    return `[${str}]`
  }

  // CSS variable: "var(--...)" → pass through
  if (str.startsWith("var(")) {
    return `[${str}]`
  }

  return str
}

/**
 * Resolves a Chakra spacing token to a Tailwind spacing class segment.
 * @param value - Chakra spacing value (number or string)
 * @returns Tailwind spacing class segment
 * @example
 * resolveSpacing(4)     // => "4"
 * resolveSpacing("2.5") // => "2.5"
 * resolveSpacing("auto") // => "auto"
 */
function resolveSpacing(value: StylePropValue): string {
  if (value == null) return ""

  if (typeof value === "number") {
    // Negative values
    if (value < 0) return `-${Math.abs(value)}`
    // Decimal values like 0.5, 1.5
    if (!Number.isInteger(value)) {
      return String(value).replace(".", "_")
    }
    return String(value)
  }

  const str = String(value)

  // "auto" passes through
  if (str === "auto") return "auto"

  // Raw CSS values
  if (
    str.includes("px") ||
    str.includes("rem") ||
    str.includes("em") ||
    str.includes("%")
  ) {
    return `[${str}]`
  }

  // Negative string values
  if (str.startsWith("-")) {
    return str
  }

  // Decimal string "0.5" → "0_5"
  if (str.includes(".")) {
    return str.replace(".", "_")
  }

  return str
}

/**
 * Resolves a Chakra size token to a Tailwind size class segment.
 * @param value - Chakra size value
 * @returns Tailwind size class segment
 * @example
 * resolveSize(4)       // => "4"
 * resolveSize("full")  // => "full"
 * resolveSize("100px") // => "[100px]"
 */
function resolveSize(value: StylePropValue): string {
  if (value == null) return ""

  if (typeof value === "number") {
    return String(value)
  }

  const str = String(value)

  // Named sizes pass through
  if (["full", "screen", "min", "max", "fit", "auto", "prose"].includes(str)) {
    return str
  }

  // Fraction sizes "1/2" pass through
  if (str.includes("/")) {
    return str
  }

  // T-shirt sizes pass through
  if (/^[0-9]*x?[sl]$|^md$|^lg$|^xl$|^[0-9]+xl$/.test(str)) {
    return str
  }

  // Raw CSS values
  if (
    str.includes("px") ||
    str.includes("rem") ||
    str.includes("%") ||
    str.includes("vh") ||
    str.includes("vw")
  ) {
    return `[${str}]`
  }

  return str
}

/**
 * Extracts Chakra style props from a props object and converts them to a Tailwind class string.
 * Returns the remaining non-style props.
 *
 * @param props - Component props that may contain style props
 * @returns Tuple of [tailwindClasses, remainingProps]
 * @example
 * const [classes, rest] = extractStyleProps({ bg: "red.500", p: 4, onClick: handler })
 * // classes => "bg-red-500 p-4"
 * // rest    => { onClick: handler }
 */
export function extractStyleProps<T extends Record<string, any>>(
  props: T,
): [string, Omit<T, keyof typeof PROP_MAP>] {
  const classes: string[] = []
  const rest: Record<string, any> = {}

  for (const [key, value] of Object.entries(props)) {
    if (value == null || value === false) {
      if (!STYLE_PROP_NAMES.has(key)) {
        rest[key] = value
      }
      continue
    }

    const mapper = PROP_MAP[key]
    if (mapper) {
      const cls = mapper(value)
      if (cls) classes.push(cls)
    } else {
      rest[key] = value
    }
  }

  return [classes.join(" "), rest as any]
}
