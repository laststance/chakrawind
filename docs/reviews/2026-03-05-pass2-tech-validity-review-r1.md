# Pass 2: Tech Validity Review (R1)

- Date: 2026-03-05
- Iteration: `Pass2-R1` (Action 1: Review)
- Method:
  - `context7` (official docs/code snippets)
  - `deepwiki` (repo-grounded synthesis)
  - `tavily` (latest public web references)

## Verified Facts (Primary Sources)

1. Chakra UI package baseline
- `@chakra-ui/react` latest is `3.34.0` as of 2026-03-05.
- Source:
  - npm package page: https://www.npmjs.com/package/@chakra-ui/react

2. Chakra UI v3 migration/runtime assumptions
- v3 setup is centered on `@chakra-ui/react` + `@emotion/react`.
- `@emotion/styled` and `framer-motion` are removed from required deps in v3 migration guidance.
- Source:
  - Chakra migration docs (context7):
    - `apps/www/content/docs/get-started/migration.mdx`
  - DeepWiki synthesis on `chakra-ui/chakra-ui`

3. shadcn CLI/registry install
- `add` command accepts component name, URL, or namespaced registry item.
- Official docs repeatedly show `npx shadcn@latest add ...` for registry URLs.
- Source:
  - https://ui.shadcn.com/docs/cli
  - https://ui.shadcn.com/docs/registry/getting-started
  - context7 (`/shadcn-ui/ui`)

4. Playwright visual/webServer assumptions
- `toHaveScreenshot` config includes `animations` and `caret`; defaults are `disabled` and `hide`.
- `webServer.command` uses a start command (`npm run start` example), compatible with our `pnpm start` policy.
- Source:
  - https://playwright.dev/docs/api/class-testconfig
  - context7 (`/microsoft/playwright`)

## Findings (Severity Ordered)

## P2-1 (S2): shadcn install command canonical form is inconsistent

- References:
  - `README.md`
  - `AGENTS.md`
  - phase/spec docs containing `npx shadcn add <...>`
- Issue:
  - Docs mix `npx shadcn add` and `npx shadcn@latest add`.
  - Registry install path should use one canonical form to reduce CLI drift ambiguity.
- Recommendation:
  - Canonicalize to `npx shadcn@latest add <registry-item-url>` in requirements/spec docs.
  - Keep non-`@latest` form only as compatibility note (optional).

## P2-2 (S2): Chakra v3 provider/runtime assumptions are not explicitly captured in baseline spec

- References:
  - `docs/plans/2026-03-05-chakrawind-design.md`
  - `docs/plans/phases/M0-bootstrap-and-baseline-lock.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- Issue:
  - Baseline lock is version-pinned, but v3 provider/runtime dependency assumptions are not explicitly codified.
  - Missing explicit note may cause harness setup drift when recreating Chakra baseline app.
- Recommendation:
  - Add baseline runtime contract for fixture/harness:
    - require `@emotion/react`
    - note v3 migration removal (`@emotion/styled`, `framer-motion`) for baseline setup
    - clarify provider composition expectation for baseline fixture.

## P2-3 (S2): Playwright visual config contract lacks explicit global `expect.toHaveScreenshot` ownership

- References:
  - `docs/specs/visual-diff-policy.md`
  - `docs/specs/coexistence-test-matrix.md`
- Issue:
  - Policy defines threshold/determinism, but not where canonical config must live (`playwright.config` global vs per-test override).
- Recommendation:
  - Add contract:
    - global defaults in Playwright config (`expect.toHaveScreenshot`)
    - per-test override only with documented reason
    - snapshot path template ownership for cross-project separation.

## Summary

- Open `S1`: 0
- Open `S2`: 3
- Open `S3`: 0

Pass2 remains `In Progress` until P2-1..P2-3 are patched and re-reviewed.
