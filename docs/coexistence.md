# shadcn/ui Coexistence

Chakra Wind and shadcn/ui can be used together in the same application without
CSS conflicts.

## Why It Works

Chakra Wind and shadcn/ui both output Tailwind CSS utility classes, but they use
different mechanisms for dynamic theming:

| Aspect          | Chakra Wind                                                                         | shadcn/ui                                                                                       |
| --------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Theming         | CSS custom properties (`--cp-solid`, `--cp-fg`, etc.) via `data-palette` attributes | Direct Tailwind classes (`bg-slate-900`, `text-slate-50`) or CSS variables under `--` namespace |
| Class source    | Recipe objects resolved at render time                                              | `cva()` or inline class strings                                                                 |
| Color tokens    | `bg-[var(--cp-solid)]` (arbitrary values referencing CSS vars)                      | `bg-primary`, `bg-destructive` (Tailwind theme keys)                                            |
| CSS specificity | Flat utility classes, no `!important`                                               | Flat utility classes, no `!important`                                                           |

The key insight: Chakra Wind's classes like `bg-[var(--cp-solid)]` are distinct
strings from shadcn's classes like `bg-slate-900`. They target the same CSS
property (`background-color`) but on different elements, so there is no
specificity conflict.

## No CSS Conflicts Because

1. **Different class names** -- `bg-[var(--cp-solid)]` vs `bg-slate-900` are
   different Tailwind utilities. They don't collide.
2. **Scoped custom properties** -- Chakra Wind's `--cp-*` variables only
   activate on elements with `data-palette` attributes. shadcn components don't
   have these attributes.
3. **No global style mutations** -- Neither library injects runtime `<style>`
   tags that could affect the other.
4. **Tailwind deduplication** -- Both libraries use the same Tailwind CSS build.
   Shared utilities (`flex`, `inline-flex`, `rounded-md`) are generated once.

## Testing Matrix

Coexistence is validated by 32 tests across an 8-cell configuration matrix:

| Dimension      | Values          |
| -------------- | --------------- |
| Preflight      | `on`, `off`     |
| Color mode     | `light`, `dark` |
| Token override | `off`, `on`     |

Each matrix cell runs 4 assertion types:

1. **Side-by-side rendering** -- Chakra and shadcn buttons render in the same
   DOM tree
2. **Badge coexistence** -- Chakra and shadcn badges render without class
   leakage
3. **Mixed container** -- Multiple Chakra and shadcn components in the same flex
   container
4. **Token override resilience** -- Overriding `--cp-solid` does not affect
   shadcn components

Total: 8 matrix cells x 4 assertions = 32 tests.

Run them with:

```sh
pnpm gate:coexist
```

Test files:

- `tests/coexist/coexist.test.tsx` -- test suite
- `tests/coexist/setup.ts` -- matrix definition

## Using Both in the Same App

### 1. Install both libraries

```sh
npm install @chakra-ui/react
npx shadcn@latest init
npx shadcn@latest add button
```

### 2. Import CSS files

In your root layout or entry point, import Chakra Wind's CSS alongside Tailwind:

```tsx
import "@chakra-ui/react/tailwind/chakra.css"
import "@chakra-ui/react/tailwind/color-palette.css"
```

shadcn/ui uses the same Tailwind CSS build, so no additional CSS imports are
needed.

### 3. Use both component libraries

```tsx
import { Button as ShadcnButton } from "@/components/ui/button"
import { Button as ChakraButton } from "@chakra-ui/react"

function App() {
  return (
    <div className="flex gap-4">
      {/* Chakra Wind button -- uses colorPalette */}
      <ChakraButton colorPalette="blue" variant="solid">
        Chakra
      </ChakraButton>

      {/* shadcn/ui button -- uses direct Tailwind classes */}
      <ShadcnButton variant="default">shadcn</ShadcnButton>
    </div>
  )
}
```

Each button resolves to its own set of Tailwind classes. No conflicts, no
overrides.

### 4. Token overrides do not leak

If you override Chakra Wind's CSS custom properties on a parent element, shadcn
components are unaffected because they don't reference `--cp-*` variables:

```tsx
<div style={{ "--cp-solid": "#custom" } as React.CSSProperties}>
  <ChakraButton colorPalette="blue">Affected</ChakraButton>
  <ShadcnButton>Not affected</ShadcnButton>
</div>
```
