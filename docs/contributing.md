# Contributing

How to add, modify, and maintain Tailwind CSS recipes in Chakra Wind.

## Prerequisites

```sh
git clone https://github.com/laststance/chakrawind.git
cd chakrawind
pnpm install
pnpm build
```

## Recipe Types

Chakra Wind has two recipe patterns:

| Type         | Count | Use case                                                 | Naming convention    |
| ------------ | ----- | -------------------------------------------------------- | -------------------- |
| CVA (single) | 19    | Components with one DOM element (button, badge, input)   | `<name>RecipeTw`     |
| SVA (slot)   | 55    | Components with multiple parts (dialog, tabs, accordion) | `<name>SlotRecipeTw` |

All recipes live in `packages/react/src/tailwind/recipes/`.

## Adding a CVA Recipe

CVA recipes define a single component's styling with `base`, `variants`, and
`defaultVariants`.

### Pattern

```ts
// packages/react/src/tailwind/recipes/my-component.ts

/**
 * MyComponent recipe -- Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/my-component.ts
 */
export const myComponentRecipeTw = {
  className: "chakra-my-component",

  base: ["inline-flex items-center", "transition-colors duration-200"].join(
    " ",
  ),

  variants: {
    size: {
      sm: "h-8 text-sm px-3",
      md: "h-10 text-md px-4",
      lg: "h-12 text-lg px-5",
    },
    variant: {
      solid:
        "bg-[var(--cp-solid)] text-[var(--cp-contrast)] hover:bg-[var(--cp-solid-hover)]",
      outline:
        "border border-[var(--cp-border)] text-[var(--cp-fg)] hover:bg-[var(--cp-subtle)]",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
}
```

### Reference: button.ts

See `packages/react/src/tailwind/recipes/button.ts` for a complete CVA recipe
with all variant types, pseudo-states, and SVG child selectors.

## Adding an SVA Slot Recipe

SVA recipes define multi-part components where each slot gets its own classes.

### Pattern

```ts
// packages/react/src/tailwind/recipes/my-widget.ts

/**
 * MyWidget slot recipe -- Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/my-widget.ts
 */
export const myWidgetSlotRecipeTw = {
  className: "chakra-my-widget",
  slots: ["root", "header", "body", "footer"],

  base: {
    root: "flex flex-col rounded-xl border",
    header: "font-semibold px-4 py-3",
    body: "px-4 py-4 flex-1",
    footer: "px-4 py-3 flex justify-end gap-2",
  },

  variants: {
    size: {
      sm: {
        root: "text-sm",
        header: "px-3 py-2",
        body: "px-3 py-3",
        footer: "px-3 py-2",
      },
      md: {
        root: "text-md",
        header: "px-4 py-3",
        body: "px-4 py-4",
        footer: "px-4 py-3",
      },
    },
    variant: {
      subtle: {
        root: "bg-[var(--cp-subtle)] text-[var(--cp-fg)]",
      },
      solid: {
        root: "bg-[var(--cp-solid)] text-[var(--cp-contrast)]",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
}
```

### Reference: alert.ts

See `packages/react/src/tailwind/recipes/alert.ts` for a complete SVA recipe
with status variants, inline toggle, and per-slot sizing.

## colorPalette Token Mapping

When a recipe references dynamic colors, use CSS custom properties instead of
hard-coded Tailwind colors:

| Chakra Emotion token                 | Tailwind equivalent                |
| ------------------------------------ | ---------------------------------- |
| `bg: "colorPalette.solid"`           | `bg-[var(--cp-solid)]`             |
| `bg: "colorPalette.solid/hover"`     | `hover:bg-[var(--cp-solid-hover)]` |
| `color: "colorPalette.contrast"`     | `text-[var(--cp-contrast)]`        |
| `color: "colorPalette.fg"`           | `text-[var(--cp-fg)]`              |
| `bg: "colorPalette.subtle"`          | `bg-[var(--cp-subtle)]`            |
| `bg: "colorPalette.muted"`           | `bg-[var(--cp-muted)]`             |
| `borderColor: "colorPalette.border"` | `border-[var(--cp-border)]`        |

For static colors, use standard Tailwind classes:

| Chakra Emotion token | Tailwind class |
| -------------------- | -------------- |
| `display: "flex"`    | `flex`         |
| `bg: "gray.100"`     | `bg-gray-100`  |
| `color: "white"`     | `text-white`   |
| `opacity: 0.5`       | `opacity-50`   |

## Pseudo-State Mapping

| Chakra condition | Tailwind prefix    |
| ---------------- | ------------------ |
| `_hover`         | `hover:`           |
| `_focus`         | `focus:`           |
| `_focusVisible`  | `focus-visible:`   |
| `_active`        | `active:`          |
| `_disabled`      | `disabled:`        |
| `_expanded`      | `data-[expanded]:` |
| `_checked`       | `data-[checked]:`  |
| `_selected`      | `data-[selected]:` |
| `_placeholder`   | `placeholder:`     |

## Exporting the Recipe

After creating a recipe file, add its export to
`packages/react/src/tailwind/index.ts`:

```ts
// CVA recipe
export { myComponentRecipeTw } from "./recipes/my-component"

// SVA slot recipe
export { myWidgetSlotRecipeTw } from "./recipes/my-widget"
```

CVA recipes go under the `// CVA Recipes (19)` section. SVA recipes go under the
`// SVA Slot Recipes (55)` section. Update the count in the comment if you add a
new recipe.

## Conversion Workflow

When converting an existing Emotion recipe to Tailwind:

1. Read the original Emotion recipe in
   `packages/react/src/theme/recipes/<name>.ts`
2. Create the Tailwind recipe in `packages/react/src/tailwind/recipes/<name>.ts`
3. Map each CSS property to its Tailwind utility class
4. Replace `colorPalette.*` tokens with `var(--cp-*)` references
5. Replace pseudo-state nesting (`_hover: { ... }`) with Tailwind prefixes
   (`hover:...`)
6. Use `.join(" ")` for multi-line base/variant strings (readability)
7. Export from `packages/react/src/tailwind/index.ts`

## Running Quality Gates

After making changes, run the full gate suite:

```sh
# Run all 8 gates
pnpm gate:all

# Or run individual gates
pnpm gate:api        # Check 1933 exports match baseline
pnpm gate:types      # TypeScript compilation
pnpm gate:runtime    # Unit tests
pnpm gate:a11y       # Storybook accessibility tests
pnpm gate:visual     # Chromatic visual regression (optional)
pnpm gate:coexist    # 32 shadcn/ui coexistence tests
pnpm gate:install    # npm pack + install verification
pnpm gate:realworld  # Sandbox app builds
```

All gates must be GREEN before merging.

## Code Style

- Use `[].join(" ")` for long class strings to keep lines readable
- Group related utilities on the same line (e.g., `"px-4 py-3"`)
- Put pseudo-state classes on their own line in the array (e.g.,
  `"hover:bg-[var(--cp-muted)]"`)
- Include the JSDoc header with source file reference
- Match the original Emotion recipe's variant keys and default values exactly
