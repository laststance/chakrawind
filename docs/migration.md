# Migration Guide: @chakra-ui/react to @laststance/chakrawind-ui

This guide covers migrating an existing Chakra UI v3 application to Chakra Wind,
a Tailwind CSS rebuild with full API parity.

## What Changed and Why

Chakra Wind replaces the Emotion/Panda CSS styling engine with Tailwind CSS v4
while keeping the same component API surface (1933 exports match the original).
The motivation:

- **No runtime CSS-in-JS** -- Emotion's `serializeStyles` and `<style>` tag
  injection are removed. All styling resolves to static Tailwind utility
  classes.
- **Smaller bundle** -- No `@emotion/react`, `@emotion/styled`, or Panda CSS
  runtime shipped to the browser.
- **Tailwind ecosystem compatibility** -- Works alongside shadcn/ui and any
  Tailwind-based library without CSS conflicts.

Components, props, variants, hooks, and types remain the same. The change is
strictly in how styles are generated -- from runtime CSS objects to build-time
utility classes.

## 1. Installation Changes

### Remove Emotion and Panda CSS Dependencies

```sh
npm uninstall @emotion/react @emotion/styled @pandacss/dev
```

If you used the Chakra CLI for token generation, remove it too:

```sh
npm uninstall @chakra-ui/cli
```

### Remove the Old Package

```sh
npm uninstall @chakra-ui/react
```

### Install Chakra Wind

```sh
npm install @laststance/chakrawind-ui
```

### Peer Dependencies

Chakra Wind requires:

| Dependency    | Version |
| ------------- | ------- |
| `react`       | >=18    |
| `react-dom`   | >=18    |
| `tailwindcss` | >=4     |

If your project does not already use Tailwind CSS v4, install it:

```sh
npm install -D tailwindcss @tailwindcss/vite
```

For Next.js:

```sh
npm install -D tailwindcss @tailwindcss/postcss
```

### Summary: Before vs After

**Before (Chakra UI v3)**

```json
{
  "dependencies": {
    "@chakra-ui/react": "^3.x",
    "@emotion/react": "^11.x",
    "@emotion/styled": "^11.x"
  }
}
```

**After (Chakra Wind)**

```json
{
  "dependencies": {
    "@laststance/chakrawind-ui": "^0.1.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  }
}
```

## 2. Import Path Changes

Replace all `@chakra-ui/react` imports with `@laststance/chakrawind-ui`. The
named exports are identical.

**Before**

```ts
import { Box, Button, ChakraProvider } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
```

**After**

```ts
import { Box, Button, ChakraProvider } from "@laststance/chakrawind-ui"
import { useDisclosure } from "@laststance/chakrawind-ui"
```

Sub-path imports also map directly:

| Before                           | After                                     |
| -------------------------------- | ----------------------------------------- |
| `@chakra-ui/react/styled-system` | `@laststance/chakrawind-ui/styled-system` |
| `@chakra-ui/react/theme`         | `@laststance/chakrawind-ui/theme`         |
| `@chakra-ui/react/hooks`         | `@laststance/chakrawind-ui/hooks`         |
| `@chakra-ui/react/anatomy`       | `@laststance/chakrawind-ui/anatomy`       |

### Automated Find-and-Replace

```sh
# Using sed (macOS)
find src -type f -name '*.ts' -o -name '*.tsx' | \
  xargs sed -i '' 's/@chakra-ui\/react/@laststance\/chakrawind-ui/g'

# Using sed (Linux)
find src -type f -name '*.ts' -o -name '*.tsx' | \
  xargs sed -i 's/@chakra-ui\/react/@laststance\/chakrawind-ui/g'
```

## 3. CSS Imports

Chakra Wind requires two CSS files that define design tokens and the
colorPalette system. Add these imports to your root layout or entry point.

**Before (Emotion)**

No CSS imports needed -- Emotion injected `<style>` tags at runtime.

**After (Tailwind)**

```tsx
// app/layout.tsx or src/main.tsx
import "@laststance/chakrawind-ui/tailwind/chakra.css"
import "@laststance/chakrawind-ui/tailwind/color-palette.css"
```

- `chakra.css` -- Tailwind v4 `@theme` directive defining breakpoints, spacing,
  colors, typography, and radii tokens.
- `color-palette.css` -- CSS custom properties for the `colorPalette` system
  (`--cp-solid`, `--cp-fg`, etc.) and dark mode overrides.

### Vite Configuration

Add the Tailwind plugin to your Vite config:

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss()],
})
```

### Next.js Configuration

Use the PostCSS plugin in `postcss.config.mjs`:

```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

## 4. Provider Setup

The `ChakraProvider` component works the same way. No changes needed.

```tsx
import { ChakraProvider } from "@laststance/chakrawind-ui"

function App({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
```

If you were passing a custom `theme` object to `ChakraProvider`, see
[Section 6: Theme/Token Migration](#6-themetoken-migration) for how to convert
your tokens.

## 5. Styling Differences

### Style Props

Chakra style props (`bg`, `p`, `color`, `rounded`, etc.) continue to work. The
factory internally converts them to Tailwind utility classes via
`extractStyleProps()`.

```tsx
// This still works -- no changes needed
<Box bg="red.500" p={4} rounded="md" />
```

Under the hood, `bg="red.500"` becomes `bg-red-500`, `p={4}` becomes `p-4`, and
`rounded="md"` becomes `rounded-md`.

### CSS-in-JS Objects Are Not Supported

Emotion's `css` prop and `sx` prop that accept CSS objects are no longer
available. Replace them with Tailwind utility classes via `className`.

**Before (Emotion css/sx)**

```tsx
<Box
  sx={{
    "&:hover": { backgroundColor: "red.600" },
    "@media (min-width: 768px)": { padding: "2rem" },
  }}
/>
```

**After (Tailwind)**

```tsx
<Box className="hover:bg-red-600 md:p-8" />
```

### The `css` Prop

If you used `@emotion/react`'s `css` template literal or function, replace those
with `className` and Tailwind classes.

**Before**

```tsx
import { css } from "@emotion/react"

;<div
  css={css`
    background: red;
    &:hover {
      background: blue;
    }
  `}
/>
```

**After**

```tsx
<div className="bg-red-500 hover:bg-blue-500" />
```

### Recipe System

Chakra Wind's recipes use Tailwind class strings instead of CSS objects. If you
wrote custom recipes with `cva` or `sva`, you need to convert the CSS objects to
Tailwind classes.

**Before (CSS object recipe)**

```ts
const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "lg",
  },
  variants: {
    size: {
      sm: { height: "36px", paddingX: "14px", fontSize: "sm" },
      md: { height: "40px", paddingX: "16px", fontSize: "sm" },
    },
  },
})
```

**After (Tailwind class recipe)**

```ts
const buttonRecipe = {
  className: "chakra-button",
  base: "inline-flex items-center rounded-lg",
  variants: {
    size: {
      sm: "h-9 px-3.5 text-sm",
      md: "h-10 px-4 text-sm",
    },
  },
  defaultVariants: { size: "md" },
}
```

### colorPalette

The `colorPalette` prop works the same way from the consumer's perspective:

```tsx
<Button colorPalette="blue" variant="solid">
  Click
</Button>
```

Internally, Chakra Wind sets `data-palette="blue"` on the DOM element, which
activates CSS custom properties (`--cp-solid`, `--cp-fg`, etc.) defined in
`color-palette.css`. Recipes reference these via Tailwind arbitrary values like
`bg-[var(--cp-solid)]`.

No migration action needed unless you customized colorPalette internals.

## 6. Theme/Token Migration

### Panda CSS Tokens to CSS Custom Properties

If you defined custom tokens using Panda CSS's `defineConfig` or Chakra's theme
extension API, convert them to CSS custom properties in a CSS file.

**Before (Panda/Chakra theme)**

```ts
const customTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          500: { value: "#0066cc" },
          900: { value: "#003366" },
        },
      },
      spacing: {
        18: { value: "4.5rem" },
      },
    },
  },
})
```

**After (CSS custom properties)**

Create a CSS file and import it after `chakra.css`:

```css
/* app/custom-tokens.css */
@theme {
  --color-brand-50: #e6f2ff;
  --color-brand-500: #0066cc;
  --color-brand-900: #003366;
  --spacing-18: 4.5rem;
}
```

```tsx
import "@laststance/chakrawind-ui/tailwind/chakra.css"
import "@laststance/chakrawind-ui/tailwind/color-palette.css"
import "./custom-tokens.css"
```

This makes `bg-brand-500`, `text-brand-900`, and `p-18` available as Tailwind
utilities.

### Semantic Tokens

Chakra's semantic tokens (like `colors.bg.default`) become CSS custom properties
with light/dark mode overrides.

**Before**

```ts
semanticTokens: {
  colors: {
    "bg.default": { _light: "white", _dark: "gray.900" },
    "fg.default": { _light: "gray.900", _dark: "white" },
  },
}
```

**After**

```css
:root {
  --bg: white;
  --fg: var(--color-gray-900);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: var(--color-gray-900);
    --fg: white;
  }
}
```

### Custom colorPalette

To add a custom color palette (e.g., "brand"), add a `[data-palette="brand"]`
block to your CSS:

```css
[data-palette="brand"] {
  --cp-solid: var(--color-brand-500);
  --cp-solid-hover: var(--color-brand-600);
  --cp-contrast: white;
  --cp-fg: var(--color-brand-700);
  --cp-subtle: var(--color-brand-50);
  --cp-muted: var(--color-brand-100);
  --cp-border: var(--color-brand-200);
  --cp-focusRing: var(--color-brand-500);
}
```

Then use it on any component:

```tsx
<Button colorPalette="brand" variant="solid">
  Brand Button
</Button>
```

## 7. Known Limitations and Differences

### Not Supported

| Feature                        | Status  | Alternative                                                      |
| ------------------------------ | ------- | ---------------------------------------------------------------- |
| `css` prop (Emotion)           | Removed | Use `className` with Tailwind utilities                          |
| `sx` prop with CSS objects     | Removed | Use `className` with Tailwind utilities                          |
| Runtime theme switching via JS | Removed | Use CSS custom properties and media queries                      |
| `@emotion/styled` HOC          | Removed | Use `chakra()` factory or `className`                            |
| Dynamic CSS-in-JS expressions  | Removed | Use Tailwind arbitrary values: `className="w-[calc(100%-2rem)]"` |

### Behavioral Differences

- **Style prop resolution** -- Chakra style props are mapped to Tailwind classes
  at render time. Complex or unusual token values may produce different output
  than Emotion's pixel-perfect CSS object approach. Test thoroughly.
- **Specificity** -- Tailwind utility classes are flat (no nested selectors). If
  you relied on Emotion's specificity ordering for override behavior, you may
  need to adjust class order. `tailwind-merge` handles most conflicts
  automatically.
- **Server-side rendering** -- No Emotion SSR setup needed. Tailwind CSS is
  generated at build time and served as a static stylesheet. Remove any
  `@emotion/cache` or SSR provider configuration.

### Removed Packages

These are no longer needed and can be uninstalled:

- `@emotion/react`
- `@emotion/styled`
- `@emotion/cache`
- `@emotion/server`
- `@pandacss/dev`
- `@chakra-ui/cli`
- `@chakra-ui/panda-preset`

## 8. Coexistence with shadcn/ui

Chakra Wind and shadcn/ui can run in the same application without conflicts.
Both produce Tailwind utility classes, but they use different theming
mechanisms:

- Chakra Wind uses CSS custom properties (`--cp-solid`, etc.) scoped by
  `data-palette` attributes.
- shadcn/ui uses direct Tailwind theme keys (`bg-primary`, `bg-destructive`).

These are distinct class strings that do not collide.

```tsx
import { Button as ShadcnButton } from "@/components/ui/button"
import { Button as ChakraButton } from "@laststance/chakrawind-ui"

function App() {
  return (
    <div className="flex gap-4">
      <ChakraButton colorPalette="blue" variant="solid">
        Chakra
      </ChakraButton>
      <ShadcnButton variant="default">shadcn</ShadcnButton>
    </div>
  )
}
```

See [docs/coexistence.md](coexistence.md) for the full coexistence architecture
and test matrix.

## Migration Checklist

- [ ] Uninstall `@chakra-ui/react`, `@emotion/react`, `@emotion/styled`
- [ ] Install `@laststance/chakrawind-ui` and `tailwindcss` v4
- [ ] Replace all `@chakra-ui/react` import paths with
      `@laststance/chakrawind-ui`
- [ ] Add CSS imports (`chakra.css` and `color-palette.css`) to your entry point
- [ ] Configure Tailwind plugin (Vite or PostCSS)
- [ ] Remove Emotion SSR setup (`EmotionCacheProvider`, `@emotion/cache`, etc.)
- [ ] Replace `css` / `sx` prop usage with `className` and Tailwind utilities
- [ ] Convert custom Panda/Chakra theme tokens to CSS `@theme` declarations
- [ ] Convert custom recipes from CSS objects to Tailwind class strings
- [ ] Run your test suite and verify visual output
