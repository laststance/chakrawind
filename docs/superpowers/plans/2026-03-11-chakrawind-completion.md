# Chakra Wind Completion — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development
> (if subagents available) or superpowers:executing-plans to implement this
> plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert all 74 Chakra UI recipes to Tailwind CSS, remove Emotion,
clean up unnecessary files, write documentation, and verify all 8 parity gates
remain GREEN.

**Architecture:** Each Emotion CSS-object recipe is converted to a Tailwind
class-string recipe following the existing button/badge/separator patterns. 10
parallel agents in isolated git worktrees handle the 71 remaining conversions.
After merging, Emotion is removed and tw-factory becomes the sole rendering
engine.

**Tech Stack:** TypeScript, Tailwind CSS v4, CVA pattern, CSS custom properties
(`--cp-*`), Vitest

**Spec:** `docs/superpowers/specs/2026-03-11-chakrawind-completion-design.md`

---

## Chunk 1: Recipe Conversion (10 Parallel Agents)

### Conversion Reference Guide

Every agent MUST follow these rules when converting recipes.

#### File Locations

- **Source:** `packages/react/src/theme/recipes/<name>.ts`
- **Output:** `packages/react/src/tailwind/recipes/<name>.ts`
- **Examples:** `packages/react/src/tailwind/recipes/button.ts` (CVA),
  `badge.ts`, `separator.ts`

#### Naming Convention

```ts
// CVA (single recipe)
export const <name>RecipeTw = { ... }

// SVA (slot recipe)
export const <name>SlotRecipeTw = { ... }
```

#### CVA Recipe Structure

```ts
export const codeRecipeTw = {
  className: "chakra-code",
  base: "...", // Tailwind class string
  variants: {
    size: {
      sm: "...", // Tailwind class string per variant value
      md: "...",
    },
    variant: {
      solid: "...",
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "solid",
  },
}
```

#### SVA (Slot) Recipe Structure

```ts
export const alertSlotRecipeTw = {
  className: "chakra-alert",
  slots: ["root", "title", "description", "indicator", "content"],
  base: {
    root: "w-full flex items-start relative rounded-xl",
    title: "font-medium",
    description: "inline",
    indicator:
      "inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] [&_svg]:w-full [&_svg]:h-full",
    content: "flex flex-1 gap-1",
  },
  variants: {
    variant: {
      subtle: {
        root: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
      },
      solid: {
        root: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
        indicator: "text-[var(--cp-contrast)]",
      },
    },
    size: {
      sm: {
        root: "gap-2 px-3 py-3 text-xs",
        indicator: "text-lg",
      },
    },
  },
  defaultVariants: { variant: "subtle", size: "md" },
}
```

#### Emotion → Tailwind Mapping

**Layout:** | Emotion | Tailwind | |---------|----------| | `display: "flex"` |
`"flex"` | | `display: "inline-flex"` | `"inline-flex"` | | `display: "none"` |
`"hidden"` | | `display: "inline"` | `"inline"` | | `display: "grid"` | `"grid"`
| | `position: "relative"` | `"relative"` | | `position: "absolute"` |
`"absolute"` | | `position: "fixed"` | `"fixed"` | | `position: "sticky"` |
`"sticky"` | | `overflow: "hidden"` | `"overflow-hidden"` | | `overflow: "auto"`
| `"overflow-auto"` |

**Sizing:** | Emotion | Tailwind | |---------|----------| | `w: "full"` |
`"w-full"` | | `w: "6"` / `width: "6"` | `"w-6"` | | `h: "6"` / `height: "6"` |
`"h-6"` | | `minW: "6"` | `"min-w-6"` | | `maxW: "xl"` | `"max-w-xl"` | |
`boxSize: "full"` | `"w-full h-full"` | | `width: "1em"` | `"w-[1em]"` |

**Spacing:** | Emotion | Tailwind | |---------|----------| | `p: "4"` /
`px: "4"` / `py: "4"` | `"p-4"` / `"px-4"` / `"py-4"` | | `gap: "2"` | `"gap-2"`
| | `m: "auto"` | `"m-auto"` | | `mt: "1"` / `mb: "2"` | `"mt-1"` / `"mb-2"` |

**Flexbox:** | Emotion | Tailwind | |---------|----------| |
`alignItems: "center"` | `"items-center"` | | `alignItems: "flex-start"` |
`"items-start"` | | `justifyContent: "center"` | `"justify-center"` | |
`justifyContent: "space-between"` | `"justify-between"` | |
`flexDirection: "column"` | `"flex-col"` | | `flexDirection: "row"` |
`"flex-row"` | | `flex: "1"` | `"flex-1"` | | `flexShrink: "0"` | `"shrink-0"` |
| `flexGrow: "1"` | `"grow"` | | `flexWrap: "wrap"` | `"flex-wrap"` |

**Typography:** | Emotion | Tailwind | |---------|----------| |
`fontWeight: "medium"` | `"font-medium"` | | `fontWeight: "semibold"` |
`"font-semibold"` | | `fontWeight: "bold"` | `"font-bold"` | | `textStyle: "xs"`
| `"text-xs"` | | `textStyle: "sm"` | `"text-sm"` | | `textStyle: "md"` |
`"text-base"` | | `textStyle: "lg"` | `"text-lg"` | | `textStyle: "xl"` |
`"text-xl"` | | `textStyle: "2xl"` | `"text-2xl"` | | `lineHeight: "1"` |
`"leading-none"` | | `lineHeight: "1.2"` | `"leading-[1.2]"` | |
`textAlign: "center"` | `"text-center"` | | `textDecoration: "none"` |
`"no-underline"` | | `textDecoration: "underline"` | `"underline"` | |
`whiteSpace: "nowrap"` | `"whitespace-nowrap"` | | `textTransform: "uppercase"`
| `"uppercase"` | | `fontVariantNumeric: "tabular-nums"` | `"tabular-nums"` | |
`truncate: true` | `"truncate"` |

**Border & Radius:** | Emotion | Tailwind | |---------|----------| |
`borderWidth: "1px"` | `"border"` | | `borderColor: "transparent"` |
`"border-transparent"` | | `borderRadius: "l1"` | `"rounded-md"` | |
`borderRadius: "l2"` | `"rounded-lg"` | | `borderRadius: "l3"` | `"rounded-xl"`
| | `borderRadius: "full"` | `"rounded-full"` | | `borderRadius: "sm"` |
`"rounded-sm"` | | `borderRadius: "md"` | `"rounded-md"` | |
`borderTopRadius: "l2"` | `"rounded-t-lg"` | | `borderBottomRadius: "l2"` |
`"rounded-b-lg"` |

**Colors (colorPalette — CSS custom properties):** | Emotion | Tailwind |
|---------|----------| | `bg: "colorPalette.solid"` | `"bg-[var(--cp-solid)]"` |
| `bg: "colorPalette.subtle"` | `"bg-[var(--cp-subtle)]"` | |
`bg: "colorPalette.muted"` | `"bg-[var(--cp-muted)]"` | |
`color: "colorPalette.fg"` | `"text-[var(--cp-fg)]"` | |
`color: "colorPalette.contrast"` | `"text-[var(--cp-contrast)]"` | |
`bg: "colorPalette.solid/90"` | `"bg-[var(--cp-solid-hover)]"` |

**Colors (semantic tokens):** | Emotion | Tailwind | |---------|----------| |
`bg: "bg"` | `"bg-[var(--bg)]"` | | `bg: "bg.subtle"` |
`"bg-[var(--bg-subtle)]"` | | `bg: "bg.muted"` | `"bg-[var(--bg-muted)]"` | |
`color: "fg"` | `"text-[var(--fg)]"` | | `color: "fg.muted"` |
`"text-[var(--fg-muted)]"` | | `borderColor: "border"` |
`"border-[var(--border-color)]"` |

**Colors (direct Tailwind):** | Emotion | Tailwind | |---------|----------| |
`bg: "transparent"` | `"bg-transparent"` | | `bg: "white"` | `"bg-white"` | |
`bg: "black"` | `"bg-black"` | | `bg: "blackAlpha.500"` | `"bg-black/50"` | |
`bg: "whiteAlpha.700"` | `"bg-white/70"` |

**Shadow:** | Emotion | Tailwind | |---------|----------| | `shadow: "sm"` |
`"shadow-sm"` | | `shadow: "md"` | `"shadow-md"` | |
`shadow: "inset 0 0 0px 1px var(--shadow-color)"` |
`"shadow-[inset_0_0_0px_1px_var(--cp-muted)]"` | |
`shadowColor: "colorPalette.muted"` | (fold into shadow value with `--cp-muted`)
|

**Pseudo-states (prefix modifiers):** | Emotion | Tailwind |
|---------|----------| | `_hover: { bg: "..." }` | `"hover:bg-..."` | |
`_focus: { ... }` | `"focus:..."` | | `_active: { ... }` | `"active:..."` | |
`_disabled: { layerStyle: "disabled" }` |
`"disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"` | |
`_disabled: { opacity: 0.4 }` | `"disabled:opacity-40"` | | `_checked: { ... }`
| `"data-[state=checked]:..."` | | `_expanded: { ... }` |
`"data-[expanded]:..."` or `"data-[state=open]:..."` | | `_selected: { ... }` |
`"aria-selected:..."` or `"data-[selected]:..."` | | `_highlighted: { ... }` |
`"data-[highlighted]:..."` | | `_indeterminate: { ... }` |
`"data-[state=indeterminate]:..."` | | `_current: { ... }` |
`"data-[current]:..."` or `"aria-[current=page]:..."` | | `_open: { ... }` |
`"data-[state=open]:..."` | | `_closed: { ... }` | `"data-[state=closed]:..."` |
| `_placeholder: { ... }` | `"placeholder:..."` | | `_placeholderShown: { ... }`
| `"placeholder-shown:..."` | | `_invalid: { ... }` | `"data-[invalid]:..."` or
`"aria-invalid:..."` | | `_icon: { width: "4" }` | `"[&_svg]:w-4"` | |
`_first: { ... }` | `"first:..."` | | `_last: { ... }` | `"last:..."` | |
`_even: { ... }` | `"even:..."` | | `_odd: { ... }` | `"odd:..."` | |
`_dark: { ... }` | `"dark:..."` | | `_focusVisible: { ... }` |
`"focus-visible:..."` |

**Transitions:** | Emotion | Tailwind | |---------|----------| |
`transitionProperty: "common"` |
`"transition-[background,color,border-color,box-shadow]"` | |
`transitionProperty: "colors"` | `"transition-colors"` | |
`transitionProperty: "opacity"` | `"transition-opacity"` | |
`transitionProperty: "transform"` | `"transition-transform"` | |
`transitionDuration: "moderate"` / `"normal"` | `"duration-200"` | |
`transitionDuration: "fast"` | `"duration-150"` | | `transitionDuration: "slow"`
| `"duration-300"` |

**Chakra-specific utilities:** | Emotion | Tailwind | |---------|----------| |
`focusVisibleRing: "outside"` |
`"focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]"`
| | `focusVisibleRing: "inside"` |
`"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]"`
| | `layerStyle: "disabled"` | `"opacity-50 cursor-not-allowed shadow-none"` | |
`userSelect: "none"` | `"select-none"` | | `cursor: "button"` /
`cursor: "pointer"` | `"cursor-pointer"` | | `isolation: "isolate"` |
`"isolate"` | | `appearance: "none"` | `"appearance-none"` | |
`verticalAlign: "middle"` | `"align-middle"` | | `outline: "0"` | `"outline-0"`
| | `outline: "none"` | `"outline-none"` | | `pointerEvents: "none"` |
`"pointer-events-none"` | | `visibility: "hidden"` | `"invisible"` | |
`srOnly: true` | `"sr-only"` |

**colorPalette in status/variant entries:** | Emotion | Handling |
|---------|----------| | `colorPalette: "blue"` | Skip in recipe — component
sets `data-palette="blue"` attribute | | Status variant with only `colorPalette`
| Leave as empty string `""` in that slot |

**Multi-line class strings:** Use `.join(" ")` for readability:

```ts
base: [
  "inline-flex items-center justify-center",
  "select-none relative rounded-lg",
].join(" "),
```

---

### Task 1: Agent 1 — Simple Singles A (CVA)

**Recipes:** code, container, heading, kbd, link, mark, skeleton **Type:** All
CVA (single recipe, `defineRecipe`)

- [ ] **Step 1:** Read all 7 source files:
  - `packages/react/src/theme/recipes/code.ts`
  - `packages/react/src/theme/recipes/container.ts`
  - `packages/react/src/theme/recipes/heading.ts`
  - `packages/react/src/theme/recipes/kbd.ts`
  - `packages/react/src/theme/recipes/link.ts`
  - `packages/react/src/theme/recipes/mark.ts`
  - `packages/react/src/theme/recipes/skeleton.ts`

- [ ] **Step 2:** Read existing examples for reference:
  - `packages/react/src/tailwind/recipes/button.ts`
  - `packages/react/src/tailwind/recipes/badge.ts`

- [ ] **Step 3:** Create each Tailwind recipe file:
  - `packages/react/src/tailwind/recipes/code.ts` → `export const codeRecipeTw`
  - `packages/react/src/tailwind/recipes/container.ts` →
    `export const containerRecipeTw`
  - `packages/react/src/tailwind/recipes/heading.ts` →
    `export const headingRecipeTw`
  - `packages/react/src/tailwind/recipes/kbd.ts` → `export const kbdRecipeTw`
  - `packages/react/src/tailwind/recipes/link.ts` → `export const linkRecipeTw`
  - `packages/react/src/tailwind/recipes/mark.ts` → `export const markRecipeTw`
  - `packages/react/src/tailwind/recipes/skeleton.ts` →
    `export const skeletonRecipeTw`

- [ ] **Step 4:** Verify TypeScript compiles:
      `npx tsc --noEmit --pretty packages/react/src/tailwind/recipes/code.ts`
      (repeat per file)

- [ ] **Step 5:** Commit all 7 files:
  ```bash
  git add packages/react/src/tailwind/recipes/{code,container,heading,kbd,link,mark,skeleton}.ts
  git commit -m "feat(tailwind): convert code, container, heading, kbd, link, mark, skeleton recipes"
  ```

---

### Task 2: Agent 2 — Simple Singles B (CVA)

**Recipes:** skipNavLink, spinner, textarea, icon, checkmark, radiomark,
colorSwatch **Type:** All CVA

- [ ] **Step 1–5:** Same flow as Task 1 for files:
  - Source:
    `packages/react/src/theme/recipes/{skip-nav-link,spinner,textarea,icon,checkmark,radiomark,color-swatch}.ts`
  - Output:
    `packages/react/src/tailwind/recipes/{skip-nav-link,spinner,textarea,icon,checkmark,radiomark,color-swatch}.ts`
  - Exports: `skipNavLinkRecipeTw`, `spinnerRecipeTw`, `textareaRecipeTw`,
    `iconRecipeTw`, `checkmarkRecipeTw`, `radiomarkRecipeTw`,
    `colorSwatchRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert skipNavLink, spinner, textarea, icon, checkmark, radiomark, colorSwatch recipes"
  ```

---

### Task 3: Agent 3 — Form Inputs (SVA)

**Recipes:** input, inputAddon, field, fieldset, nativeSelect, numberInput,
pinInput **Type:** input/inputAddon are CVA; field, fieldset, nativeSelect,
numberInput, pinInput are SVA

- [ ] **Step 1:** Read all 7 source files from
      `packages/react/src/theme/recipes/`
- [ ] **Step 2:** Read SVA example: alert recipe structure from Conversion
      Reference
- [ ] **Step 3:** Create 7 Tailwind recipe files in
      `packages/react/src/tailwind/recipes/`
  - CVA: `inputRecipeTw`, `inputAddonRecipeTw`
  - SVA: `fieldSlotRecipeTw`, `fieldsetSlotRecipeTw`,
    `nativeSelectSlotRecipeTw`, `numberInputSlotRecipeTw`,
    `pinInputSlotRecipeTw`
- [ ] **Step 4:** TypeScript check
- [ ] **Step 5:** Commit

  ```bash
  git commit -m "feat(tailwind): convert input, inputAddon, field, fieldset, nativeSelect, numberInput, pinInput recipes"
  ```

---

### Task 4: Agent 4 — Overlays (SVA)

**Recipes:** dialog, drawer, popover, hoverCard, tooltip, toast, actionBar
**Type:** All SVA

- [ ] **Steps 1–5:** Same flow. All are slot recipes with multiple parts.
  - Source:
    `packages/react/src/theme/recipes/{dialog,drawer,popover,hover-card,tooltip,toast,action-bar}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `dialogSlotRecipeTw`,
    `drawerSlotRecipeTw`, `popoverSlotRecipeTw`, `hoverCardSlotRecipeTw`,
    `tooltipSlotRecipeTw`, `toastSlotRecipeTw`, `actionBarSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert dialog, drawer, popover, hoverCard, tooltip, toast, actionBar recipes"
  ```

---

### Task 5: Agent 5 — Selection Controls (SVA)

**Recipes:** checkbox, checkboxCard, radioCard, radioGroup, switch, ratingGroup,
segmentGroup **Type:** All SVA

- [ ] **Steps 1–5:** Same flow.
  - Source:
    `packages/react/src/theme/recipes/{checkbox,checkbox-card,radio-card,radio-group,switch,rating-group,segment-group}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `checkboxSlotRecipeTw`,
    `checkboxCardSlotRecipeTw`, `radioCardSlotRecipeTw`,
    `radioGroupSlotRecipeTw`, `switchSlotRecipeTw`, `ratingGroupSlotRecipeTw`,
    `segmentGroupSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert checkbox, checkboxCard, radioCard, radioGroup, switch, ratingGroup, segmentGroup recipes"
  ```

---

### Task 6: Agent 6 — Navigation & Lists (SVA)

**Recipes:** accordion, tabs, breadcrumb, list, listbox, treeView, scrollArea
**Type:** All SVA

- [ ] **Steps 1–5:** Same flow.
  - Source:
    `packages/react/src/theme/recipes/{accordion,tabs,breadcrumb,list,listbox,tree-view,scroll-area}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `accordionSlotRecipeTw`,
    `tabsSlotRecipeTw`, `breadcrumbSlotRecipeTw`, `listSlotRecipeTw`,
    `listboxSlotRecipeTw`, `treeViewSlotRecipeTw`, `scrollAreaSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert accordion, tabs, breadcrumb, list, listbox, treeView, scrollArea recipes"
  ```

---

### Task 7: Agent 7 — Data Display (SVA)

**Recipes:** alert, avatar, card, stat, status, table, dataList **Type:** All
SVA

- [ ] **Steps 1–5:** Same flow.
  - Source:
    `packages/react/src/theme/recipes/{alert,avatar,card,stat,status,table,data-list}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `alertSlotRecipeTw`,
    `avatarSlotRecipeTw`, `cardSlotRecipeTw`, `statSlotRecipeTw`,
    `statusSlotRecipeTw`, `tableSlotRecipeTw`, `dataListSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert alert, avatar, card, stat, status, table, dataList recipes"
  ```

---

### Task 8: Agent 8 — Complex Inputs (SVA)

**Recipes:** select, combobox, menu, tagsInput, fileUpload, editable, tag
**Type:** All SVA

- [ ] **Steps 1–5:** Same flow.
  - Source:
    `packages/react/src/theme/recipes/{select,combobox,menu,tags-input,file-upload,editable,tag}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `selectSlotRecipeTw`,
    `comboboxSlotRecipeTw`, `menuSlotRecipeTw`, `tagsInputSlotRecipeTw`,
    `fileUploadSlotRecipeTw`, `editableSlotRecipeTw`, `tagSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert select, combobox, menu, tagsInput, fileUpload, editable, tag recipes"
  ```

---

### Task 9: Agent 9 — Feedback (SVA)

**Recipes:** progress, progressCircle, timeline, emptyState, blockquote, steps,
collapsible **Type:** All SVA

- [ ] **Steps 1–5:** Same flow.
  - Source:
    `packages/react/src/theme/recipes/{progress,progress-circle,timeline,empty-state,blockquote,steps,collapsible}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `progressSlotRecipeTw`,
    `progressCircleSlotRecipeTw`, `timelineSlotRecipeTw`,
    `emptyStateSlotRecipeTw`, `blockquoteSlotRecipeTw`, `stepsSlotRecipeTw`,
    `collapsibleSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert progress, progressCircle, timeline, emptyState, blockquote, steps, collapsible recipes"
  ```

---

### Task 10: Agent 10 — Specialized (SVA)

**Recipes:** carousel, slider, splitter, colorPicker, datePicker, qrCode,
marquee, codeBlock **Type:** All SVA (8 recipes)

- [ ] **Steps 1–5:** Same flow.
  - Source:
    `packages/react/src/theme/recipes/{carousel,slider,splitter,color-picker,date-picker,qr-code,marquee,code-block}.ts`
  - Output: `packages/react/src/tailwind/recipes/` — `carouselSlotRecipeTw`,
    `sliderSlotRecipeTw`, `splitterSlotRecipeTw`, `colorPickerSlotRecipeTw`,
    `datePickerSlotRecipeTw`, `qrCodeSlotRecipeTw`, `marqueeSlotRecipeTw`,
    `codeBlockSlotRecipeTw`

  ```bash
  git commit -m "feat(tailwind): convert carousel, slider, splitter, colorPicker, datePicker, qrCode, marquee, codeBlock recipes"
  ```

---

### Task 11: Merge All Agent Branches

- [ ] **Step 1:** List all worktree branches created by agents 1–10
- [ ] **Step 2:** Merge each branch into main sequentially, resolving any
      conflicts in `packages/react/src/tailwind/recipes/`
- [ ] **Step 3:** Update `packages/react/src/tailwind/index.ts` to export all 74
      recipes:
  ```ts
  export { buttonRecipeTw } from "./recipes/button"
  export { badgeRecipeTw } from "./recipes/badge"
  export { separatorRecipeTw } from "./recipes/separator"
  export { codeRecipeTw } from "./recipes/code"
  // ... all 74
  ```
- [ ] **Step 4:** Verify TypeScript: `pnpm typecheck`
- [ ] **Step 5:** Commit:
  ```bash
  git commit -m "feat(tailwind): export all 74 Tailwind recipes from index"
  ```

---

## Chunk 2: Emotion Removal + Integration

### Task 12: Wire Tailwind Recipes into Component System

- [ ] **Step 1:** Read `packages/react/src/styled-system/factory.ts` to
      understand current wiring
- [ ] **Step 2:** Read how components reference recipes (e.g.,
      `packages/react/src/components/button/button.tsx`)
- [ ] **Step 3:** Replace the factory's Emotion-based `createStyled` import with
      `createTwStyled` from `tailwind/tw-factory.tsx`
- [ ] **Step 4:** Update recipe references in each component to use `*RecipeTw`
      variants
- [ ] **Step 5:** Run unit tests: `pnpm test`
- [ ] **Step 6:** Commit:
  ```bash
  git commit -m "feat: wire tailwind recipes into component system, replace Emotion factory"
  ```

### Task 13: Remove Emotion Dependency

- [ ] **Step 1:** Remove `@emotion/react` and `@emotion/styled` from
      `packages/react/package.json`
- [ ] **Step 2:** Remove any Emotion-specific imports across
      `packages/react/src/`
- [ ] **Step 3:** Remove Emotion provider from `.storybook/preview.tsx` if
      present
- [ ] **Step 4:** Update `pnpm-lock.yaml`: `pnpm install`
- [ ] **Step 5:** Verify build: `pnpm build`
- [ ] **Step 6:** Run tests: `pnpm test`
- [ ] **Step 7:** Commit:
  ```bash
  git commit -m "feat: remove Emotion dependency, Tailwind-only rendering"
  ```

### Task 14: Update Sandbox Apps for Tailwind

- [ ] **Step 1:** For each sandbox (vite-ts, vite-jsx, next-app, remix-ts,
      react-router):
  - Add `@tailwindcss/vite` plugin to vite/next config
  - Import `packages/react/src/tailwind/chakra.css` and `color-palette.css`
  - Remove any Emotion provider/setup
- [ ] **Step 2:** Build each: `cd sandbox/<name> && pnpm build`
- [ ] **Step 3:** Commit:
  ```bash
  git commit -m "feat: update 5 sandbox apps for Tailwind CSS rendering"
  ```

---

## Chunk 3: Cleanup + Documentation + Verification

### Task 15: Delete Unnecessary Files

- [ ] **Step 1:** Delete apps:

  ```bash
  rm -rf apps/www apps/mcp apps/compositions
  ```

- [ ] **Step 2:** Delete packages:

  ```bash
  rm -rf packages/cli packages/charts packages/panda-preset packages/codemod
  ```

- [ ] **Step 3:** Delete skipped sandboxes:

  ```bash
  rm -rf sandbox/next-pages sandbox/panda-preset sandbox/iframe sandbox/shadow-dom sandbox/storybook-ts
  ```

- [ ] **Step 4:** Delete build artifacts and misc:

  ```bash
  rm -rf storybook-static logs coverage media .changelog
  rm -f build-storybook.log .eslintcache
  rm -f scripts/slack.ts scripts/play.ts scripts/symlink.ts scripts/conditions.ts
  rm -f CODE_OF_CONDUCT.md CONTRIBUTING.md SECURITY.md .all-contributorsrc renovate.json .commitlintrc .lintstagedrc
  ```

- [ ] **Step 5:** Update `pnpm-workspace.yaml` to remove deleted workspace
      references
- [ ] **Step 6:** Update root `package.json` scripts to remove references to
      deleted packages
- [ ] **Step 7:** Run `pnpm install` to update lockfile
- [ ] **Step 8:** Verify build still works: `pnpm build`
- [ ] **Step 9:** Commit:
  ```bash
  git commit -m "chore: remove unnecessary apps, packages, sandboxes, and files"
  ```

### Task 16: Write README.md

- [ ] **Step 1:** Rewrite `README.md` with:
  - Project overview (Chakra UI reproduced with Tailwind CSS)
  - Installation (npm package + shadcn registry)
  - Quick start with code examples
  - Architecture overview (tw-factory, style-props, recipes, CSS custom
    properties)
  - Gate verification instructions
  - License
- [ ] **Step 2:** Commit:
  ```bash
  git commit -m "docs: rewrite README for Chakra Wind"
  ```

### Task 17: Write Architecture Documentation

- [ ] **Step 1:** Create `docs/architecture.md`:
  - How tw-factory replaces Emotion's createStyled
  - Style props → Tailwind class resolution (extractStyleProps)
  - Recipe system (CVA/SVA with Tailwind class strings)
  - CSS custom properties for colorPalette
  - Token mapping (chakra.css, color-palette.css)
- [ ] **Step 2:** Create `docs/coexistence.md`:
  - How Chakra Wind + shadcn/ui coexist (CSS vars vs direct Tailwind)
  - Testing matrix (preflight, color mode, token override)
- [ ] **Step 3:** Create `docs/contributing.md`:
  - How to add a new Tailwind recipe
  - Conversion reference guide (link to this plan's mapping table)
  - Running gates locally
- [ ] **Step 4:** Commit:
  ```bash
  git commit -m "docs: add architecture, coexistence, and contributing guides"
  ```

### Task 18: Run All 8 Parity Gates

- [ ] **Step 1:** Run: `pnpm gate:all`
- [ ] **Step 2:** Verify all 8 gates GREEN:
  - API: 1933/1933 exports
  - Types: tsc --noEmit zero errors
  - Runtime: all unit tests pass
  - A11y: storybook tests pass
  - Visual: optional (CHROMATIC_PROJECT_TOKEN)
  - Coexist: 32 matrix tests pass
  - Install: npm pack + install verified
  - Realworld: 5 sandbox builds pass
- [ ] **Step 3:** If any gate fails, fix and re-run
- [ ] **Step 4:** Final commit:
  ```bash
  git commit -m "chore: verify all 8 parity gates GREEN after Tailwind-only migration"
  ```

---

## Execution Strategy

**Phase 1 (Tasks 1–10):** Launch 10 parallel agents, each in isolated
`worktree`. Each reads its assigned Emotion recipes, creates Tailwind
equivalents, commits.

**Phase 1b (Task 11):** Merge all 10 branches sequentially.

**Phase 2 (Tasks 12–14):** Sequential. Wire recipes → remove Emotion → update
sandboxes.

**Phase 3 (Tasks 15–18):** Sequential. Cleanup → docs → gate verification.
