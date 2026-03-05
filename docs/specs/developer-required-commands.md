# Developer Required Commands (M0)

## Purpose

Define the minimum command contract developers must run to validate bootstrap health after cloning the repository.

## Command Contract

### Single-command verification

```bash
pnpm verify:m0
```

### Equivalent explicit sequence

```bash
pnpm install --frozen-lockfile
pnpm baseline:lock:verify
pnpm build
pnpm typecheck
pnpm lint
```

## Expected Result

- All commands exit with status code `0`.
- Baseline lock verification confirms:
  - `@chakra-ui/react@3.34.0`
  - `@emotion/react@11.14.0`
  - `react@19.0.0`
  - `react-dom@19.0.0`
- `build`, `typecheck`, and `lint` pass without local-only setup.

## Failure Policy

- Any non-zero exit code blocks progression to `M1`.
- Baseline version drift is treated as a fail-fast condition.
