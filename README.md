# Chakra Wind

Chakra UI component library powered by Tailwind CSS.

## Features

- **Full API compatibility** with `@laststance/chakrawind-ui@3.34.0` (1933
  exports)
- **Tailwind CSS engine** -- no Emotion runtime, no CSS-in-JS overhead
- **74 component recipes** (19 CVA single + 55 SVA slot) converted to Tailwind
  utility classes
- **shadcn/ui coexistence** -- use both libraries in the same application
  without conflicts
- **colorPalette system** via CSS custom properties (`--cp-solid`, `--cp-fg`,
  etc.)
- **Two installation paths** -- npm package or shadcn registry

## Installation

### npm package

```sh
npm install @laststance/chakrawind-ui
```

No `@emotion/react` peer dependency required.

### shadcn registry

```sh
npx shadcn@latest add https://github.com/laststance/chakrawind/registry/ui/button.tsx
```

Browse available components in `registry/registry.json`.

## Quick Start

```tsx
import { Button, ChakraProvider } from "@laststance/chakrawind-ui"
import "@laststance/chakrawind-ui/tailwind/chakra.css"
import "@laststance/chakrawind-ui/tailwind/color-palette.css"

function App() {
  return (
    <ChakraProvider>
      <Button colorPalette="blue" variant="solid" size="md">
        Click me
      </Button>
    </ChakraProvider>
  )
}
```

## Architecture

Chakra Wind replaces Emotion's runtime CSS-in-JS with static Tailwind utility
classes. The core modules live in `packages/react/src/tailwind/`:

| Module              | Purpose                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tw-factory.tsx`    | Drop-in replacement for Emotion's `createStyled`. Uses `forwardRef` + static class concatenation instead of `withEmotionCache` + `serializeStyles`.                                      |
| `style-props.ts`    | Maps ~100 Chakra style props (`bg`, `p`, `color`, etc.) to Tailwind classes via `extractStyleProps()`.                                                                                   |
| `cn.ts`             | `clsx` + `tailwind-merge` for class merging with conflict resolution.                                                                                                                    |
| `chakra.css`        | Tailwind v4 `@theme` directive defining all Chakra design tokens (breakpoints, spacing, colors, fonts, radii).                                                                           |
| `color-palette.css` | CSS custom properties for the `colorPalette` system. Each `[data-palette="<color>"]` selector sets `--cp-solid`, `--cp-contrast`, `--cp-fg`, `--cp-subtle`, `--cp-muted`, `--cp-border`. |
| `recipes/`          | 74 recipe files. Recipes use Tailwind class strings instead of Emotion CSS objects.                                                                                                      |

See [docs/architecture.md](docs/architecture.md) for the full technical design.

## Quality Gates

All 8 parity gates must be GREEN for a valid release:

| Gate      | What it checks                               | Command               |
| --------- | -------------------------------------------- | --------------------- |
| API       | 1933 exports match baseline                  | `pnpm gate:api`       |
| Types     | `tsc --noEmit` zero errors                   | `pnpm gate:types`     |
| Runtime   | Unit test suite passes                       | `pnpm gate:runtime`   |
| A11y      | Storybook accessibility tests                | `pnpm gate:a11y`      |
| Visual    | Chromatic visual regression (optional)       | `pnpm gate:visual`    |
| Coexist   | 32 coexistence tests (8-cell matrix)         | `pnpm gate:coexist`   |
| Install   | `npm pack` + install verification            | `pnpm gate:install`   |
| Realworld | Sandbox app builds (vite-ts, next-app, etc.) | `pnpm gate:realworld` |

Run all gates at once:

```sh
pnpm gate:all
```

## Development

```sh
pnpm install
pnpm build
pnpm test
pnpm storybook
```

## Contributing

See [docs/contributing.md](docs/contributing.md) for how to add and maintain
recipes.

## License

MIT
