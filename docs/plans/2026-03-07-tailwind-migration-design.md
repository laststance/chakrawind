# Chakra Wind — Tailwind CSS Migration Design

## Architecture: Factory-Level Emotion→Tailwind Replacement

### Approach

Replace Emotion CSS-in-JS internals with Tailwind CSS utility class generation
while preserving the identical public API surface (1933 exports).

### Key Components

1. **`packages/react/src/tailwind/chakra.css`** — Tailwind v4 `@theme` config
   mapping all Chakra tokens
2. **`packages/react/src/tailwind/cn.ts`** — `clsx` + `tailwind-merge` class
   merger
3. **`packages/react/src/tailwind/style-props.ts`** — Style prop → Tailwind
   class converter
4. **`packages/react/src/styled-system/factory.tsx`** — Modified to use Tailwind
   classes instead of Emotion

### Migration Strategy

**Phase 1: Infrastructure** ✅

- API baseline manifest (1933 exports)
- 8 parity gate commands (`gate:api`, `gate:types`, `gate:runtime`, `gate:a11y`,
  `gate:visual`, `gate:coexist`, `gate:install`, `gate:realworld`)
- Tailwind CSS v4 + CVA + tailwind-merge installed
- Style prop adapter with 19 passing tests

**Phase 2: Factory replacement** (in progress)

- Replace `createStyled` in factory.tsx to output Tailwind classes
- Replace `useRecipe` to use CVA with Tailwind classes
- Preserve `as`, `asChild`, ref forwarding

**Phase 3: Recipe migration**

- Convert each component's recipe config from CSS objects to Tailwind class
  strings
- ~110 components × recipes

**Phase 4: Component verification**

- Run all parity gates per component
- Visual regression via Chromatic

**Phase 5: Coexistence & Distribution**

- shadcn/ui coexistence tests (8-cell matrix)
- npm package build
- shadcn registry setup

### Token Mapping

| Chakra Token     | Tailwind v4 Variable | Example Class |
| ---------------- | -------------------- | ------------- |
| `colors.red.500` | `--color-red-500`    | `bg-red-500`  |
| `spacing.4`      | `--spacing-4`        | `p-4`         |
| `radii.md`       | `--radius-md`        | `rounded-md`  |
| `fontSizes.md`   | `--text-md`          | `text-md`     |
| `breakpoints.sm` | `--breakpoint-sm`    | `sm:*`        |

### Parity Gates

| Gate      | Command               | Status       |
| --------- | --------------------- | ------------ |
| API       | `pnpm gate:api`       | ✅ 1933/1933 |
| Types     | `pnpm gate:types`     | Pending      |
| Runtime   | `pnpm gate:runtime`   | Pending      |
| A11y      | `pnpm gate:a11y`      | Pending      |
| Visual    | `pnpm gate:visual`    | Pending      |
| Coexist   | `pnpm gate:coexist`   | Not started  |
| Install   | `pnpm gate:install`   | Not started  |
| Realworld | `pnpm gate:realworld` | Not started  |
