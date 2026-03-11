# Getting Started

This guide covers two installation paths for Chakra Wind: the **npm package**
(full library) and the **shadcn registry** (individual components). Choose
whichever fits your project.

## Prerequisites

- **Node.js** >= 20
- **React** >= 19
- **Tailwind CSS** >= 4 (CSS-first configuration)
- A Vite-based or Next.js project (or any bundler that supports Tailwind v4)

## Path 1: npm Package

### 1. Install

```sh
npm install @laststance/chakrawind-ui
```

No `@emotion/react` peer dependency is required. Chakra Wind uses Tailwind CSS
instead of Emotion's runtime CSS-in-JS.

### 2. Set Up Tailwind CSS

Chakra Wind requires Tailwind CSS v4 with its CSS-first configuration. Install
the Tailwind Vite plugin (or the equivalent for your framework):

**Vite:**

```sh
npm install -D tailwindcss @tailwindcss/vite
```

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Next.js:**

```sh
npm install -D tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

### 3. Import CSS

Import the Chakra Wind theme tokens and color palette CSS in your app entry
point (e.g., `main.tsx`, `layout.tsx`, or a global CSS file):

```tsx
import "@laststance/chakrawind-ui/tailwind/chakra.css"
import "@laststance/chakrawind-ui/tailwind/color-palette.css"
```

`chakra.css` defines all Chakra design tokens (breakpoints, spacing, colors,
fonts, radii) using Tailwind v4's `@theme` directive. `color-palette.css`
provides the `colorPalette` system via CSS custom properties.

### 4. Set Up the Provider

Wrap your application with `ChakraProvider` and pass the `defaultSystem`:

**Vite:**

```tsx
// main.tsx
import { ChakraProvider, defaultSystem } from "@laststance/chakrawind-ui"
import "@laststance/chakrawind-ui/tailwind/chakra.css"
import "@laststance/chakrawind-ui/tailwind/color-palette.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
```

**Next.js (App Router):**

```tsx
// app/provider.tsx
"use client"

import { ChakraProvider, defaultSystem } from "@laststance/chakrawind-ui"

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
```

```tsx
// app/layout.tsx
import "@laststance/chakrawind-ui/tailwind/chakra.css"
import "@laststance/chakrawind-ui/tailwind/color-palette.css"
import Provider from "./provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
```

### 5. Use Components

```tsx
import { Box, Button, Heading, Stack } from "@laststance/chakrawind-ui"

function App() {
  return (
    <Box p={6}>
      <Stack gap={4}>
        <Heading>Welcome to Chakra Wind</Heading>
        <Button colorPalette="blue" variant="solid" size="md">
          Click me
        </Button>
        <Button colorPalette="green" variant="outline" size="sm">
          Secondary
        </Button>
      </Stack>
    </Box>
  )
}
```

All Chakra style props (`bg`, `p`, `m`, `color`, `display`, etc.) are supported
and converted to Tailwind utility classes at render time.

---

## Path 2: shadcn Registry

If you prefer to install individual components into your project (the shadcn/ui
pattern), use the Chakra Wind registry.

### 1. Initialize shadcn/ui

If you haven't set up shadcn/ui yet:

```sh
npx shadcn@latest init
```

### 2. Add a Component

```sh
npx shadcn@latest add https://github.com/laststance/chakrawind/registry/ui/button.tsx
```

This copies the component source into your project (e.g.,
`components/ui/button.tsx`) along with the `lib/utils.ts` dependency.

### 3. Browse Available Components

The full list of registry components is in
[`registry/registry.json`](../registry/registry.json). Available components
include:

accordion, alert, avatar, badge, button, card, checkbox, dialog, drawer, field,
heading, input, menu, popover, select, slider, spinner, switch, table, tabs,
tag, textarea, toast, tooltip, and many more.

Add any component by name:

```sh
npx shadcn@latest add https://github.com/laststance/chakrawind/registry/ui/dialog.tsx
npx shadcn@latest add https://github.com/laststance/chakrawind/registry/ui/tabs.tsx
```

### 4. Use the Component

```tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <Button size="md" variant="solid" colorPalette="blue">
      Click me
    </Button>
  )
}
```

Registry components are standalone -- they don't require `ChakraProvider` or
`defaultSystem`. The recipe logic and class merging are embedded in each
component file.

---

## Color Palette and Theming

Chakra Wind's theming is built on CSS custom properties and the `data-palette`
attribute. This keeps recipe definitions color-agnostic.

### How It Works

When a component receives `colorPalette="blue"`, the factory adds
`data-palette="blue"` to the DOM element. CSS selectors activate the
corresponding custom properties:

| CSS Variable       | Role             | Example (blue)          |
| ------------------ | ---------------- | ----------------------- |
| `--cp-solid`       | Primary bg       | `var(--color-blue-600)` |
| `--cp-solid-hover` | Hover bg         | `var(--color-blue-700)` |
| `--cp-contrast`    | Text on solid bg | `var(--color-white)`    |
| `--cp-fg`          | Foreground text  | `var(--color-blue-700)` |
| `--cp-subtle`      | Light bg         | `var(--color-blue-50)`  |
| `--cp-muted`       | Medium bg        | `var(--color-blue-100)` |
| `--cp-border`      | Border color     | `var(--color-blue-200)` |
| `--cp-focusRing`   | Focus ring       | `var(--color-blue-500)` |

### Available Palettes

10 built-in palettes: `gray`, `red`, `orange`, `yellow`, `green`, `teal`,
`blue`, `cyan`, `purple`, `pink`.

```tsx
<Button colorPalette="red" variant="solid">Delete</Button>
<Button colorPalette="green" variant="outline">Confirm</Button>
<Button colorPalette="purple" variant="subtle">Info</Button>
```

### Semantic Tokens

`color-palette.css` also defines global semantic tokens that adapt to light/dark
mode:

| Token                | Light    | Dark     |
| -------------------- | -------- | -------- |
| `--bg`               | white    | black    |
| `--bg-subtle`        | gray-50  | gray-950 |
| `--bg-muted`         | gray-100 | gray-900 |
| `--fg`               | black    | gray-50  |
| `--fg-muted`         | gray-600 | gray-400 |
| `--border-color`     | gray-200 | gray-800 |
| `--focus-ring-color` | blue-500 | blue-400 |

Use them in your own Tailwind classes:

```html
<div class="bg-[var(--bg)] text-[var(--fg)] border-[var(--border-color)]">
  Themed container
</div>
```

---

## Dark Mode

Chakra Wind supports dark mode out of the box via
`@media (prefers-color-scheme: dark)` in `color-palette.css`. All palette
variables and semantic tokens swap automatically based on the user's system
preference.

### Using next-themes for Manual Toggle

To add a manual light/dark toggle, use `next-themes`:

```sh
npm install next-themes
```

**Vite:**

```tsx
import { ChakraProvider, defaultSystem } from "@laststance/chakrawind-ui"
import { ThemeProvider } from "next-themes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <App />
    </ThemeProvider>
  </ChakraProvider>,
)
```

**Next.js:**

```tsx
// app/provider.tsx
"use client"

import { ChakraProvider, defaultSystem } from "@laststance/chakrawind-ui"
import { ThemeProvider } from "next-themes"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
```

Add `suppressHydrationWarning` to your `<html>` element to avoid React hydration
warnings:

```tsx
<html lang="en" suppressHydrationWarning>
```

---

## TypeScript Configuration

Chakra Wind ships with full TypeScript types. Recommended `tsconfig.json`
settings:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "strict": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "skipLibCheck": true
  }
}
```

Key requirements:

- **`moduleResolution: "Bundler"`** -- required for the package's conditional
  `exports` map to resolve correctly.
- **`jsx: "react-jsx"`** -- for the React 19 JSX transform.
- **`strict: true`** -- recommended. All Chakra Wind types are written with
  strict mode enabled.

### Component Prop Types

Import component prop types directly:

```tsx
import type { ButtonProps } from "@laststance/chakrawind-ui"

function MyButton(props: ButtonProps) {
  return <Button {...props} />
}
```

### Style Prop Autocompletion

Style props (`bg`, `p`, `m`, `color`, etc.) are typed on all Chakra Wind
components. Your editor will provide autocompletion for valid values.

---

## Using with shadcn/ui

Chakra Wind and shadcn/ui can coexist in the same application without CSS
conflicts. See the [Coexistence Guide](./coexistence.md) for details on how this
works and the 32-test validation matrix.

Quick setup:

```sh
npm install @laststance/chakrawind-ui
npx shadcn@latest init
npx shadcn@latest add button
```

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

---

## Next Steps

- [Architecture](./architecture.md) -- technical design of the Tailwind layer
- [Coexistence](./coexistence.md) -- using Chakra Wind alongside shadcn/ui
- [Contributing](./contributing.md) -- how to add and maintain recipes
