1. Full Chakra UI reproduction with Tailwind CSS

- This goal is not considered achieved unless Chakra Wind fully reproduces
  `@laststance/chakrawind-ui@3.34.0` in Tailwind CSS.
- The target baseline is fixed to `@laststance/chakrawind-ui@3.34.0`; any parity
  or behavior claim against another version does not count toward completion.
- "Fully reproduced" means Chakra Wind matches all Chakra UI components in
  `@laststance/chakrawind-ui@3.34.0` and all parity gates are green (API, types,
  runtime, a11y, visual, coexist, install, realworld).
- Any missing component, API mismatch, type gap, runtime difference,
  accessibility regression, visual deviation, coexistence regression,
  installation-path failure, or realworld failure means this goal is not
  cleared.
- `100%` metrics must use baseline manifests generated from
  `@laststance/chakrawind-ui@3.34.0`.
- Quality Gates must use phase-scoped test wrapper commands (do not call broad
  playwright command directly).

2. Coexistence with shadcn/ui without regressions

- Chakra Wind and shadcn/ui must be usable in the same application.
- Coexistence must be validated by dedicated integration tests (`test:coexist`)
  with fixed matrix:
- preflight: on/off
- color mode: light/dark
- token override: off/on

3. Two supported installation paths

- npm package installation (`node_modules` path).
- shadcn registry installation (`npx shadcn@latest add <registry-item-url>`
  path).
