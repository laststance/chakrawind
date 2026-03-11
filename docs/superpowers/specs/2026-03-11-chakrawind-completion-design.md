# Chakra Wind Completion Design

**Date:** 2026-03-11 **Status:** Approved **Goal:** Complete the Chakra Wind
library per Goal.md, clean up, document

## Goal.md Requirements

1. Full Chakra UI reproduction with Tailwind CSS — all parity gates green
2. Coexistence with shadcn/ui without regressions
3. Two supported installation paths (npm + shadcn registry)

## Current State

- All 8 parity gates GREEN (API, Types, Runtime, A11y, Visual, Coexist, Install,
  Realworld)
- 3/74 recipes converted to Tailwind (button, badge, separator)
- 71 recipes remain on Emotion CSS objects
- Tailwind layer infrastructure complete (tw-factory, style-props, cn,
  chakra.css, color-palette.css)

## Scope

### Phase 1: Convert All 71 Remaining Recipes (10 Parallel Agents)

**Approach:** Manual conversion, 10 concurrent subagents, each in isolated git
worktree.

**Conversion Pattern (CVA — single recipe):**

```
Emotion (packages/react/src/theme/recipes/X.ts)
→ Tailwind (packages/react/src/tailwind/recipes/X.ts)
```

Each Emotion CSS object property maps to Tailwind class strings:

- `display: "flex"` → `"flex"`
- `bg: "colorPalette.solid"` → `"bg-[var(--cp-solid)]"`
- `_hover: { bg: "colorPalette.muted" }` → `"hover:bg-[var(--cp-muted)]"`
- `_disabled: { opacity: 0.5 }` → `"disabled:opacity-50"`

**Conversion Pattern (SVA — slot recipe):** Same as CVA but with slot-keyed
objects:

```ts
export const alertRecipeTw = {
  className: "chakra-alert",
  slots: ["root", "title", "description", "indicator", "content"],
  base: {
    root: "w-full flex items-start relative rounded-xl",
    title: "font-medium",
    // ...
  },
  variants: {
    /* per-slot Tailwind classes */
  },
  defaultVariants: {
    /* same keys */
  },
}
```

**colorPalette tokens** use CSS custom properties: `--cp-solid`, `--cp-fg`,
`--cp-muted`, `--cp-subtle`, `--cp-contrast`, `--cp-border`.

#### Agent Assignment (71 recipes)

| Agent | Category           | Recipes                                                                          | Count |
| ----- | ------------------ | -------------------------------------------------------------------------------- | ----- |
| 1     | Simple Singles A   | code, container, heading, kbd, link, mark, skeleton                              | 7     |
| 2     | Simple Singles B   | skipNavLink, spinner, textarea, icon, checkmark, radiomark, colorSwatch          | 7     |
| 3     | Form Inputs        | input, inputAddon, field, fieldset, nativeSelect, numberInput, pinInput          | 7     |
| 4     | Overlays           | dialog, drawer, popover, hoverCard, tooltip, toast, actionBar                    | 7     |
| 5     | Selection Controls | checkbox, checkboxCard, radioCard, radioGroup, switch, ratingGroup, segmentGroup | 7     |
| 6     | Navigation & Lists | accordion, tabs, breadcrumb, list, listbox, treeView, scrollArea                 | 7     |
| 7     | Data Display       | alert, avatar, card, stat, status, table, dataList                               | 7     |
| 8     | Complex Inputs     | select, combobox, menu, tagsInput, fileUpload, editable, tag                     | 7     |
| 9     | Feedback           | progress, progressCircle, timeline, emptyState, blockquote, steps, collapsible   | 7     |
| 10    | Specialized        | carousel, slider, splitter, colorPicker, datePicker, qrCode, marquee, codeBlock  | 8     |

Each agent:

1. Reads original Emotion recipe from `packages/react/src/theme/recipes/`
2. Creates Tailwind recipe in `packages/react/src/tailwind/recipes/`
3. Follows existing button/badge/separator patterns exactly
4. Exports from `packages/react/src/tailwind/index.ts`

### Phase 2: Emotion Removal

After all recipes converted:

- Replace `styled-system/factory.tsx` internals with `tailwind/tw-factory.tsx`
- Remove `@emotion/react` from `package.json` dependencies
- Update `useResolvedProps` to use Tailwind class resolution
- Promote `tw-factory` as the sole factory

### Phase 3: File Cleanup

**DELETE:** | Category | Targets | |----------|---------| | Apps | `apps/www/`,
`apps/mcp/`, `apps/compositions/` | | Packages | `packages/cli/`,
`packages/charts/`, `packages/panda-preset/`, `packages/codemod/` | | Sandboxes
(skipped) | `sandbox/next-pages/`, `sandbox/panda-preset/`, `sandbox/iframe/`,
`sandbox/shadow-dom/`, `sandbox/storybook-ts/` | | Build artifacts |
`storybook-static/`, `logs/`, `coverage/`, `build-storybook.log`, `.eslintcache`
| | Misc | `media/`, `.changelog/`, `scripts/slack.ts`, `scripts/play.ts`,
`scripts/symlink.ts`, `scripts/conditions.ts` | | Root files |
`CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `.all-contributorsrc`,
`renovate.json`, `.commitlintrc`, `.lintstagedrc` |

**KEEP:** | Category | Targets | |----------|---------| | Core |
`packages/react/` (Tailwind-only after Phase 2) | | Tests |
`packages/react/__tests__/`, `tests/coexist/`, `packages/react/__stories__/` | |
Gates | `scripts/gates/`, `scripts/baselines/`, `scripts/build/` | | Registry |
`registry/` | | Storybook | `.storybook/` | | Sandboxes (5) | vite-ts, vite-jsx,
next-app, remix-ts, react-router | | CI | `.github/` | | Config | tsconfig,
vitest, vite, eslint, package.json, pnpm-workspace, Goal.md |

### Phase 4: Documentation

1. **README.md** — Project overview, installation (npm + shadcn), quick start,
   architecture
2. **docs/architecture.md** — Tailwind layer technical design (tw-factory,
   style-props, recipes, CSS custom properties)
3. **docs/coexistence.md** — shadcn/ui coexistence guide (why it works, testing
   matrix)
4. **docs/contributing.md** — How to add/maintain recipes

### Phase 5: Gate Re-verification

Run all 8 gates, confirm GREEN after Emotion removal + cleanup.

## Reference: Existing Conversion Patterns

### CVA Recipe (button.ts)

- Export: `export const buttonRecipeTw = { ... }`
- Naming: `<name>RecipeTw`
- Base styles: Tailwind class strings joined with `.join(" ")`
- Variants: Object with variant name keys → class strings
- colorPalette: `var(--cp-solid)`, `var(--cp-fg)`, etc.
- Pseudo-states: `hover:`, `focus-visible:`, `disabled:`, `data-[expanded]:`
- SVG children: `[&_svg]:w-4 [&_svg]:h-4`

### SVA Recipe (to be created)

- Same structure but with `slots` array and per-slot class objects
- Each slot key maps to a Tailwind class string

## Success Criteria

- [ ] All 74 recipes have Tailwind versions in
      `packages/react/src/tailwind/recipes/`
- [ ] Emotion dependency removed from `package.json`
- [ ] tw-factory is the sole factory (no Emotion fallback)
- [ ] All unnecessary files/directories deleted
- [ ] README.md + 3 docs written
- [ ] All 8 parity gates GREEN
