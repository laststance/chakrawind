# Architecture

Technical design of Chakra Wind's Tailwind CSS layer.

## Directory Structure

```
packages/react/src/tailwind/
  chakra.css           Tailwind v4 @theme tokens
  color-palette.css    colorPalette CSS custom properties
  cn.ts                clsx + tailwind-merge utility
  style-props.ts       Chakra style props -> Tailwind class mapper
  tw-factory.tsx       Styled component factory (replaces Emotion)
  index.ts             Public exports (19 CVA + 55 SVA recipes + utilities)
  recipes/
    button.ts          CVA recipe example
    alert.ts           SVA slot recipe example
    ... (74 total)
```

## How It Replaces Emotion

### Before (Emotion)

```
createStyled (factory.tsx)
  -> withEmotionCache
  -> serializeStyles(cssObject)
  -> <style> tag injection at runtime
```

Each render calls `serializeStyles` to hash CSS objects and inject `<style>`
tags into the document head. This is runtime work.

### After (Tailwind)

```
createTwStyled (tw-factory.tsx)
  -> forwardRef
  -> extractStyleProps(props) -> Tailwind class string
  -> cn(base, variants, styleProps, userClassName)
  -> className={finalClasses}
```

All styling is resolved to static class strings at render time. No style
injection, no hash computation, no `<style>` tags. Tailwind's CSS is generated
at build time from the `@theme` configuration in `chakra.css`.

## tw-factory.tsx

The factory creates styled components with the same public API as Emotion's
factory:

- `chakra.div`, `chakra.button`, etc. (element shorthand)
- `chakra(Component, recipe, options)` (HOC form)
- Style props: `bg`, `p`, `m`, `color`, etc.
- Polymorphic `as` prop
- `asChild` for render delegation (Radix-style)
- `ref` forwarding
- Recipe/variant resolution

The factory splits incoming props into three categories:

1. **Style props** -- extracted by `extractStyleProps()`, converted to Tailwind
   classes
2. **Variant props** -- matched against recipe `variants` keys, resolved to
   class strings
3. **Remaining props** -- forwarded to the underlying DOM element or component

The final `className` is built by `cn()` which merges all class sources with
Tailwind conflict resolution.

## style-props.ts

Maps ~100 Chakra style props to Tailwind utility class generators. Organized by
category:

| Category   | Props                               | Example                               |
| ---------- | ----------------------------------- | ------------------------------------- |
| Layout     | `w`, `h`, `display`, `overflow`     | `w={4}` -> `w-4`                      |
| Flexbox    | `flex`, `alignItems`, `gap`         | `gap={2}` -> `gap-2`                  |
| Grid       | `gridTemplateColumns`, `gridColumn` | `gridColumn="span 2"` -> `col-span-2` |
| Spacing    | `p`, `m`, `px`, `py`, `mt`, etc.    | `px={4}` -> `px-4`                    |
| Color      | `color`, `bg`, `bgColor`            | `bg="red.500"` -> `bg-red-500`        |
| Typography | `fontSize`, `fontWeight`            | `fontSize="lg"` -> `text-lg`          |
| Border     | `border`, `borderColor`, `rounded`  | `rounded="md"` -> `rounded-md`        |
| Position   | `position`, `top`, `zIndex`         | `zIndex={10}` -> `z-10`               |
| Shadow     | `shadow`, `boxShadow`               | `shadow="md"` -> `shadow-md`          |

Token resolution functions:

- `resolveColor("red.500")` -> `"red-500"` (dot to dash)
- `resolveColor("#ff0000")` -> `"[#ff0000]"` (arbitrary value)
- `resolveColor("var(--cp-solid)")` -> `"[var(--cp-solid)]"` (CSS variable)
- `resolveSpacing(4)` -> `"4"` (numeric pass-through)
- `resolveSpacing("2rem")` -> `"[2rem]"` (arbitrary value)

## cn.ts

```ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
```

`clsx` handles conditional/falsy values. `twMerge` resolves Tailwind class
conflicts so later values override earlier ones (e.g., `cn("px-4", "px-8")` ->
`"px-8"`).

## Recipe System

### CVA Recipes (19 single-component recipes)

A CVA recipe defines `base` classes, `variants`, and `defaultVariants` as plain
Tailwind class strings:

```ts
export const buttonRecipeTw = {
  className: "chakra-button",
  base: "inline-flex items-center justify-center rounded-lg font-medium ...",
  variants: {
    size: {
      sm: "h-9 min-w-9 px-3.5 text-sm",
      md: "h-10 min-w-10 text-sm px-4",
    },
    variant: {
      solid:
        "bg-[var(--cp-solid)] text-[var(--cp-contrast)] hover:bg-[var(--cp-solid-hover)]",
      outline:
        "border border-[var(--cp-border)] text-[var(--cp-fg)] hover:bg-[var(--cp-subtle)]",
    },
  },
  defaultVariants: { size: "md", variant: "solid" },
}
```

### SVA Slot Recipes (55 multi-part component recipes)

An SVA recipe adds a `slots` array. Each key in `base` and `variants` maps to a
slot name:

```ts
export const alertSlotRecipeTw = {
  className: "chakra-alert",
  slots: ["root", "title", "description", "indicator", "content"],
  base: {
    root: "w-full flex items-start relative rounded-xl",
    title: "font-medium",
    indicator: "inline-flex items-center justify-center shrink-0 ...",
    content: "flex flex-1 gap-1",
  },
  variants: {
    variant: {
      subtle: { root: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]" },
      solid: { root: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]" },
    },
    size: {
      sm: { root: "gap-2 px-3 py-3 text-xs", indicator: "text-lg" },
      md: { root: "gap-3 px-4 py-4 text-sm", indicator: "text-xl" },
    },
  },
  defaultVariants: { variant: "subtle", size: "md" },
}
```

## colorPalette System

Chakra UI's `colorPalette` prop dynamically themes components. Chakra Wind
implements this with CSS custom properties and `data-palette` attributes.

### CSS Custom Properties

Defined in `color-palette.css`:

| Variable           | Role               | Example value (blue palette) |
| ------------------ | ------------------ | ---------------------------- |
| `--cp-solid`       | Primary background | `var(--color-blue-600)`      |
| `--cp-solid-hover` | Hover background   | `var(--color-blue-700)`      |
| `--cp-contrast`    | Text on solid bg   | `var(--color-white)`         |
| `--cp-fg`          | Foreground / text  | `var(--color-blue-700)`      |
| `--cp-subtle`      | Light background   | `var(--color-blue-50)`       |
| `--cp-muted`       | Medium background  | `var(--color-blue-100)`      |
| `--cp-border`      | Border color       | `var(--color-blue-200)`      |
| `--cp-focusRing`   | Focus ring color   | `var(--color-blue-500)`      |

### Activation

When a component renders with `colorPalette="blue"`, the factory adds
`data-palette="blue"` to the DOM element. CSS selectors like
`[data-palette="blue"]` activate the corresponding custom properties.

### Dark Mode

`@media (prefers-color-scheme: dark)` blocks in `color-palette.css` swap each
palette's values to darker/lighter variants automatically.

### Usage in Recipes

Recipes reference these variables via Tailwind arbitrary values:

```
bg-[var(--cp-solid)]
text-[var(--cp-contrast)]
hover:bg-[var(--cp-solid-hover)]
border-[var(--cp-border)]
```

This keeps recipes color-agnostic. The same recipe class string works for any
`colorPalette` value.

## CSS Files

### chakra.css

Tailwind v4 CSS-first configuration using the `@theme` directive. Defines:

- **Breakpoints**: `sm` (480px), `md` (768px), `lg` (1024px), `xl` (1280px),
  `2xl` (1536px)
- **Spacing**: 0.5 through 96 (matching Chakra's spacing scale)
- **Colors**: 10 palettes (gray, red, orange, yellow, green, teal, blue, cyan,
  purple, pink) with 50-950 scales, plus whiteAlpha/blackAlpha
- **Typography**: heading, body, mono font stacks; 2xs through 9xl font sizes
- **Radii**: none through full (matching Chakra's radius scale)

### color-palette.css

CSS custom properties for the colorPalette system. Contains:

- `:root` defaults (gray palette)
- `[data-palette="<color>"]` selectors for each of the 10 color palettes
- Dark mode overrides via `@media (prefers-color-scheme: dark)`
- Semantic tokens (`--bg`, `--fg`, `--border-color`, `--focus-ring-color`) with
  light/dark variants
