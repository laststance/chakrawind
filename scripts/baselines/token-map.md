# Chakra UI Token-to-Tailwind CSS Mapping

> Generated from source analysis of `packages/react/src/theme/`

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Colors](#colors)
3. [Spacing](#spacing)
4. [Sizes](#sizes)
5. [Typography](#typography)
6. [Shadows](#shadows)
7. [Borders](#borders)
8. [Border Radii](#border-radii)
9. [Z-Index](#z-index)
10. [Breakpoints](#breakpoints)
11. [Blur](#blur)
12. [Animations & Durations](#animations--durations)
13. [Easings](#easings)
14. [Aspect Ratios](#aspect-ratios)
15. [Cursors](#cursors)
16. [Semantic Tokens (Dark/Light)](#semantic-tokens)
17. [Text Styles (Composite)](#text-styles)
18. [Layer Styles (Composite)](#layer-styles)
19. [Utility Shorthands](#utility-shorthands)
20. [Custom Tailwind Extensions Needed](#custom-tailwind-extensions-needed)

---

## Architecture Overview

### How Chakra tokens work

Chakra defines tokens in `packages/react/src/theme/tokens/` as objects with
`{ value }` wrappers, registered through `defineTokens.<category>()`. These are
consumed by the styled-system's `token-dictionary.ts` which:

1. Flattens nested token objects into dot-path keys (e.g., `colors.red.500`)
2. Generates CSS custom properties with a `--chakra-` prefix (e.g.,
   `--chakra-colors-red-500`)
3. Resolves semantic tokens that reference base tokens via `{colors.red.500}`
   syntax

### Token reference patterns in code

| Pattern           | Example                        | Context                       |
| ----------------- | ------------------------------ | ----------------------------- |
| Dot-path in props | `color="red.500"`              | JSX style props               |
| Token reference   | `{colors.red.500}`             | Semantic token definitions    |
| CSS variable      | `var(--chakra-colors-red-500)` | Generated CSS output          |
| Utility mapping   | `values: "spacing"`            | preset-base.ts utility config |

### Utility-to-token binding (preset-base.ts)

Utilities in `preset-base.ts` declare which token category their values come
from:

```
width        -> "sizes"
padding      -> "spacing"
color        -> colorValues (colors + currentBg)
borderRadius -> "radii"
fontSize     -> "fontSizes"
boxShadow    -> "shadows"
zIndex       -> "zIndex"
fontFamily   -> "fonts"
```

---

## Colors

**Source:** `packages/react/src/theme/tokens/colors.ts`

### Base Colors

| Chakra Token  | Value          | Tailwind Equivalent           |
| ------------- | -------------- | ----------------------------- |
| `transparent` | `transparent`  | `transparent` (built-in)      |
| `current`     | `currentColor` | `current` (built-in)          |
| `black`       | `#09090B`      | Custom (TW default is `#000`) |
| `white`       | `#FFFFFF`      | `white` (built-in)            |

### Color Palettes (50-950 scale)

Each palette has shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

| Palette  | Chakra Reference    | TW Has Palette? | Match Quality                            |
| -------- | ------------------- | --------------- | ---------------------------------------- |
| `gray`   | `colors.gray.500`   | Yes (`gray`)    | Different values (Chakra uses zinc-like) |
| `red`    | `colors.red.500`    | Yes (`red`)     | Close but not identical                  |
| `orange` | `colors.orange.500` | Yes (`orange`)  | Close but not identical                  |
| `yellow` | `colors.yellow.500` | Yes (`yellow`)  | Close but not identical                  |
| `green`  | `colors.green.500`  | Yes (`green`)   | Close but not identical                  |
| `teal`   | `colors.teal.500`   | Yes (`teal`)    | Close but not identical                  |
| `blue`   | `colors.blue.500`   | Yes (`blue`)    | Close but not identical                  |
| `cyan`   | `colors.cyan.500`   | Yes (`cyan`)    | Close but not identical                  |
| `purple` | `colors.purple.500` | Yes (`purple`)  | Close but not identical                  |
| `pink`   | `colors.pink.500`   | Yes (`pink`)    | Close but not identical                  |

### Alpha Palettes (50-950 scale)

| Palette      | Example Value                      | TW Equivalent                               |
| ------------ | ---------------------------------- | ------------------------------------------- |
| `whiteAlpha` | `rgba(255,255,255,0.36)` for `500` | No direct equivalent; use `white/<opacity>` |
| `blackAlpha` | `rgba(0,0,0,0.36)` for `500`       | No direct equivalent; use `black/<opacity>` |

### Full Color Values

<details>
<summary>gray (zinc-like)</summary>

| Shade | Chakra    | Tailwind zinc |
| ----- | --------- | ------------- |
| 50    | `#fafafa` | `#fafafa`     |
| 100   | `#f4f4f5` | `#f4f4f5`     |
| 200   | `#e4e4e7` | `#e4e4e7`     |
| 300   | `#d4d4d8` | `#d4d4d8`     |
| 400   | `#a1a1aa` | `#a1a1ab`     |
| 500   | `#71717a` | `#71717a`     |
| 600   | `#52525b` | `#52525b`     |
| 700   | `#3f3f46` | `#3f3f46`     |
| 800   | `#27272a` | `#27272a`     |
| 900   | `#18181b` | `#18181b`     |
| 950   | `#111111` | `#09090b`     |

</details>

<details>
<summary>red</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#fef2f2` |
| 100   | `#fee2e2` |
| 200   | `#fecaca` |
| 300   | `#fca5a5` |
| 400   | `#f87171` |
| 500   | `#ef4444` |
| 600   | `#dc2626` |
| 700   | `#991919` |
| 800   | `#511111` |
| 900   | `#300c0c` |
| 950   | `#1f0808` |

</details>

<details>
<summary>orange</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#fff7ed` |
| 100   | `#ffedd5` |
| 200   | `#fed7aa` |
| 300   | `#fdba74` |
| 400   | `#fb923c` |
| 500   | `#f97316` |
| 600   | `#ea580c` |
| 700   | `#92310a` |
| 800   | `#6c2710` |
| 900   | `#3b1106` |
| 950   | `#220a04` |

</details>

<details>
<summary>yellow</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#fefce8` |
| 100   | `#fef9c3` |
| 200   | `#fef08a` |
| 300   | `#fde047` |
| 400   | `#facc15` |
| 500   | `#eab308` |
| 600   | `#ca8a04` |
| 700   | `#845209` |
| 800   | `#713f12` |
| 900   | `#422006` |
| 950   | `#281304` |

</details>

<details>
<summary>green</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#f0fdf4` |
| 100   | `#dcfce7` |
| 200   | `#bbf7d0` |
| 300   | `#86efac` |
| 400   | `#4ade80` |
| 500   | `#22c55e` |
| 600   | `#16a34a` |
| 700   | `#116932` |
| 800   | `#124a28` |
| 900   | `#042713` |
| 950   | `#03190c` |

</details>

<details>
<summary>teal</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#f0fdfa` |
| 100   | `#ccfbf1` |
| 200   | `#99f6e4` |
| 300   | `#5eead4` |
| 400   | `#2dd4bf` |
| 500   | `#14b8a6` |
| 600   | `#0d9488` |
| 700   | `#0c5d56` |
| 800   | `#114240` |
| 900   | `#032726` |
| 950   | `#021716` |

</details>

<details>
<summary>blue</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#eff6ff` |
| 100   | `#dbeafe` |
| 200   | `#bfdbfe` |
| 300   | `#a3cfff` |
| 400   | `#60a5fa` |
| 500   | `#3b82f6` |
| 600   | `#2563eb` |
| 700   | `#173da6` |
| 800   | `#1a3478` |
| 900   | `#14204a` |
| 950   | `#0c142e` |

</details>

<details>
<summary>cyan</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#ecfeff` |
| 100   | `#cffafe` |
| 200   | `#a5f3fc` |
| 300   | `#67e8f9` |
| 400   | `#22d3ee` |
| 500   | `#06b6d4` |
| 600   | `#0891b2` |
| 700   | `#0c5c72` |
| 800   | `#134152` |
| 900   | `#072a38` |
| 950   | `#051b24` |

</details>

<details>
<summary>purple</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#faf5ff` |
| 100   | `#f3e8ff` |
| 200   | `#e9d5ff` |
| 300   | `#d8b4fe` |
| 400   | `#c084fc` |
| 500   | `#a855f7` |
| 600   | `#9333ea` |
| 700   | `#641ba3` |
| 800   | `#4a1772` |
| 900   | `#2f0553` |
| 950   | `#1a032e` |

</details>

<details>
<summary>pink</summary>

| Shade | Value     |
| ----- | --------- |
| 50    | `#fdf2f8` |
| 100   | `#fce7f3` |
| 200   | `#fbcfe8` |
| 300   | `#f9a8d4` |
| 400   | `#f472b6` |
| 500   | `#ec4899` |
| 600   | `#db2777` |
| 700   | `#a41752` |
| 800   | `#6d0e34` |
| 900   | `#45061f` |
| 950   | `#2c0514` |

</details>

---

## Spacing

**Source:** `packages/react/src/theme/tokens/spacing.ts` **Used by:** margin,
padding, gap, inset, translateX/Y, scrollMargin, scrollPadding, spaceX/Y,
textIndent

| Chakra Token | Value      | Tailwind Class     | Match             |
| ------------ | ---------- | ------------------ | ----------------- |
| `0.5`        | `0.125rem` | `p-0.5` (0.125rem) | Exact             |
| `1`          | `0.25rem`  | `p-1` (0.25rem)    | Exact             |
| `1.5`        | `0.375rem` | `p-1.5` (0.375rem) | Exact             |
| `2`          | `0.5rem`   | `p-2` (0.5rem)     | Exact             |
| `2.5`        | `0.625rem` | `p-2.5` (0.625rem) | Exact             |
| `3`          | `0.75rem`  | `p-3` (0.75rem)    | Exact             |
| `3.5`        | `0.875rem` | `p-3.5` (0.875rem) | Exact             |
| `4`          | `1rem`     | `p-4` (1rem)       | Exact             |
| `4.5`        | `1.125rem` | N/A                | **Custom needed** |
| `5`          | `1.25rem`  | `p-5` (1.25rem)    | Exact             |
| `6`          | `1.5rem`   | `p-6` (1.5rem)     | Exact             |
| `7`          | `1.75rem`  | `p-7` (1.75rem)    | Exact             |
| `8`          | `2rem`     | `p-8` (2rem)       | Exact             |
| `9`          | `2.25rem`  | `p-9` (2.25rem)    | Exact             |
| `10`         | `2.5rem`   | `p-10` (2.5rem)    | Exact             |
| `11`         | `2.75rem`  | `p-11` (2.75rem)   | Exact             |
| `12`         | `3rem`     | `p-12` (3rem)      | Exact             |
| `14`         | `3.5rem`   | `p-14` (3.5rem)    | Exact             |
| `16`         | `4rem`     | `p-16` (4rem)      | Exact             |
| `20`         | `5rem`     | `p-20` (5rem)      | Exact             |
| `24`         | `6rem`     | `p-24` (6rem)      | Exact             |
| `28`         | `7rem`     | `p-28` (7rem)      | Exact             |
| `32`         | `8rem`     | `p-32` (8rem)      | Exact             |
| `36`         | `9rem`     | `p-36` (9rem)      | Exact             |
| `40`         | `10rem`    | `p-40` (10rem)     | Exact             |
| `44`         | `11rem`    | `p-44` (11rem)     | Exact             |
| `48`         | `12rem`    | `p-48` (12rem)     | Exact             |
| `52`         | `13rem`    | `p-52` (13rem)     | Exact             |
| `56`         | `14rem`    | `p-56` (14rem)     | Exact             |
| `60`         | `15rem`    | `p-60` (15rem)     | Exact             |
| `64`         | `16rem`    | `p-64` (16rem)     | Exact             |
| `72`         | `18rem`    | `p-72` (18rem)     | Exact             |
| `80`         | `20rem`    | `p-80` (20rem)     | Exact             |
| `96`         | `24rem`    | `p-96` (24rem)     | Exact             |

**Note:** Only `4.5` (1.125rem) is missing from Tailwind defaults.

---

## Sizes

**Source:** `packages/react/src/theme/tokens/sizes.ts` **Used by:** width,
height, minWidth, maxWidth, minHeight, maxHeight, flexBasis, boxSize

Sizes = spacing values + large sizes + fractional sizes + named sizes.

### Large Sizes

| Chakra Token | Value   | Tailwind `max-w-*`  | Match      |
| ------------ | ------- | ------------------- | ---------- |
| `3xs`        | `14rem` | N/A                 | **Custom** |
| `2xs`        | `16rem` | N/A                 | **Custom** |
| `xs`         | `20rem` | `max-w-xs` (20rem)  | Exact      |
| `sm`         | `24rem` | `max-w-sm` (24rem)  | Exact      |
| `md`         | `28rem` | `max-w-md` (28rem)  | Exact      |
| `lg`         | `32rem` | `max-w-lg` (32rem)  | Exact      |
| `xl`         | `36rem` | `max-w-xl` (36rem)  | Exact      |
| `2xl`        | `42rem` | `max-w-2xl` (42rem) | Exact      |
| `3xl`        | `48rem` | `max-w-3xl` (48rem) | Exact      |
| `4xl`        | `56rem` | `max-w-4xl` (56rem) | Exact      |
| `5xl`        | `64rem` | `max-w-5xl` (64rem) | Exact      |
| `6xl`        | `72rem` | `max-w-6xl` (72rem) | Exact      |
| `7xl`        | `80rem` | `max-w-7xl` (80rem) | Exact      |
| `8xl`        | `90rem` | N/A                 | **Custom** |

### Named Sizes

| Chakra Token | Value         | Tailwind Class | Match      |
| ------------ | ------------- | -------------- | ---------- |
| `max`        | `max-content` | `w-max`        | Exact      |
| `min`        | `min-content` | `w-min`        | Exact      |
| `fit`        | `fit-content` | `w-fit`        | Exact      |
| `prose`      | `60ch`        | `max-w-prose`  | Exact      |
| `full`       | `100%`        | `w-full`       | Exact      |
| `dvh`        | `100dvh`      | `h-dvh`        | Exact      |
| `svh`        | `100svh`      | `h-svh`        | Exact      |
| `lvh`        | `100lvh`      | `h-lvh`        | Exact      |
| `dvw`        | `100dvw`      | `w-dvw`        | Exact      |
| `svw`        | `100svw`      | N/A            | **Custom** |
| `lvw`        | `100lvw`      | N/A            | **Custom** |
| `vw`         | `100vw`       | `w-screen`     | Exact      |
| `vh`         | `100vh`       | `h-screen`     | Exact      |

### Fractional Sizes

All fractional sizes (1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 5/6,
1/12 through 11/12) have direct Tailwind equivalents via `w-1/2`, `w-1/3`, etc.

---

## Typography

### Font Families

**Source:** `packages/react/src/theme/tokens/fonts.ts` **Used by:** `fontFamily`
utility

| Chakra Token | Value                                         | TW Equivalent                                |
| ------------ | --------------------------------------------- | -------------------------------------------- |
| `heading`    | `Inter, -apple-system, ...sans-serif`         | Custom (TW `font-sans` uses different stack) |
| `body`       | `Inter, -apple-system, ...sans-serif`         | Custom (same as heading)                     |
| `mono`       | `SFMono-Regular, Menlo, Monaco, ...monospace` | `font-mono` (similar but not identical)      |

### Font Sizes

**Source:** `packages/react/src/theme/tokens/font-sizes.ts` **Used by:**
`fontSize` utility

| Chakra Token | Value      | TW Class    | TW Value | Match                  |
| ------------ | ---------- | ----------- | -------- | ---------------------- |
| `2xs`        | `0.625rem` | N/A         | N/A      | **Custom**             |
| `xs`         | `0.75rem`  | `text-xs`   | 0.75rem  | Exact                  |
| `sm`         | `0.875rem` | `text-sm`   | 0.875rem | Exact                  |
| `md`         | `1rem`     | `text-base` | 1rem     | Exact (different name) |
| `lg`         | `1.125rem` | `text-lg`   | 1.125rem | Exact                  |
| `xl`         | `1.25rem`  | `text-xl`   | 1.25rem  | Exact                  |
| `2xl`        | `1.5rem`   | `text-2xl`  | 1.5rem   | Exact                  |
| `3xl`        | `1.875rem` | `text-3xl`  | 1.875rem | Exact                  |
| `4xl`        | `2.25rem`  | `text-4xl`  | 2.25rem  | Exact                  |
| `5xl`        | `3rem`     | `text-5xl`  | 3rem     | Exact                  |
| `6xl`        | `3.75rem`  | `text-6xl`  | 3.75rem  | Exact                  |
| `7xl`        | `4.5rem`   | `text-7xl`  | 4.5rem   | Exact                  |
| `8xl`        | `6rem`     | `text-8xl`  | 6rem     | Exact                  |
| `9xl`        | `8rem`     | `text-9xl`  | 8rem     | Exact                  |

### Font Weights

**Source:** `packages/react/src/theme/tokens/font-weights.ts`

| Chakra Token | Value | TW Class          | Match |
| ------------ | ----- | ----------------- | ----- |
| `thin`       | `100` | `font-thin`       | Exact |
| `extralight` | `200` | `font-extralight` | Exact |
| `light`      | `300` | `font-light`      | Exact |
| `normal`     | `400` | `font-normal`     | Exact |
| `medium`     | `500` | `font-medium`     | Exact |
| `semibold`   | `600` | `font-semibold`   | Exact |
| `bold`       | `700` | `font-bold`       | Exact |
| `extrabold`  | `800` | `font-extrabold`  | Exact |
| `black`      | `900` | `font-black`      | Exact |

### Line Heights

**Source:** `packages/react/src/theme/tokens/line-heights.ts`

| Chakra Token | Value   | TW Equivalent                      |
| ------------ | ------- | ---------------------------------- |
| `shorter`    | `1.25`  | `leading-tight` (1.25) -- Exact    |
| `short`      | `1.375` | `leading-snug` (1.375) -- Exact    |
| `moderate`   | `1.5`   | `leading-normal` (1.5) -- Exact    |
| `tall`       | `1.625` | `leading-relaxed` (1.625) -- Exact |
| `taller`     | `2`     | `leading-loose` (2) -- Exact       |

**Note:** Chakra uses different names
(`shorter`/`short`/`moderate`/`tall`/`taller`) vs Tailwind
(`tight`/`snug`/`normal`/`relaxed`/`loose`). Values are identical.

### Letter Spacing

**Source:** `packages/react/src/theme/tokens/letter-spacing.ts`

| Chakra Token | Value      | TW Class           | TW Value | Match                    |
| ------------ | ---------- | ------------------ | -------- | ------------------------ |
| `tighter`    | `-0.05em`  | `tracking-tighter` | -0.05em  | Exact                    |
| `tight`      | `-0.025em` | `tracking-tight`   | -0.025em | Exact                    |
| _(none)_     | `0em`      | `tracking-normal`  | 0em      | No Chakra token for this |
| `wide`       | `0.025em`  | `tracking-wide`    | 0.025em  | Exact                    |
| `wider`      | `0.05em`   | `tracking-wider`   | 0.05em   | Exact                    |
| `widest`     | `0.1em`    | `tracking-widest`  | 0.1em    | Exact                    |

---

## Shadows

**Source:** `packages/react/src/theme/semantic-tokens/shadows.ts` **Used by:**
`boxShadow` / `shadow` utility

Shadows are **semantic tokens** with light/dark variants. They use color-mix
references.

| Chakra Token | TW Class       | Notes                                                |
| ------------ | -------------- | ---------------------------------------------------- |
| `xs`         | `shadow-xs`    | Different values; Chakra uses color tokens in shadow |
| `sm`         | `shadow-sm`    | Different values                                     |
| `md`         | `shadow-md`    | Different values                                     |
| `lg`         | `shadow-lg`    | Different values                                     |
| `xl`         | `shadow-xl`    | Different values                                     |
| `2xl`        | `shadow-2xl`   | Different values                                     |
| `inner`      | `shadow-inner` | Similar concept, different value                     |
| `inset`      | N/A            | **Custom** -- Chakra-specific inset shadow           |

**Custom extension needed:** All shadow values differ and include dark mode
variants. Best approach: define shadows as CSS custom properties and reference
them in Tailwind config.

---

## Borders

**Source:** `packages/react/src/theme/tokens/borders.ts` **Used by:** `border`,
`borderTop`, `borderLeft`, etc.

| Chakra Token | Value         | TW Equivalent                 |
| ------------ | ------------- | ----------------------------- | ----- |
| `xs`         | `0.5px solid` | N/A -- **Custom**             |
| `sm`         | `1px solid`   | `border` (1px solid) -- Close |
| `md`         | `2px solid`   | `border-2`                    | Close |
| `lg`         | `4px solid`   | `border-4`                    | Close |
| `xl`         | `8px solid`   | `border-8`                    | Close |

**Note:** Chakra borders include both width AND style in one token. Tailwind
separates width (`border-2`) and style. No `borderWidths` or `borderStyles`
categories are explicitly defined in the theme -- the utility config references
them but they resolve to native CSS values.

---

## Border Radii

**Source:** `packages/react/src/theme/tokens/radius.ts` **Used by:**
`borderRadius` / `rounded` utility

| Chakra Token | Value       | TW Class       | TW Value | Match                      |
| ------------ | ----------- | -------------- | -------- | -------------------------- |
| `none`       | `0`         | `rounded-none` | 0        | Exact                      |
| `2xs`        | `0.0625rem` | N/A            | N/A      | **Custom**                 |
| `xs`         | `0.125rem`  | `rounded-sm`   | 0.125rem | Same value, different name |
| `sm`         | `0.25rem`   | `rounded`      | 0.25rem  | Same value, different name |
| `md`         | `0.375rem`  | `rounded-md`   | 0.375rem | Exact                      |
| `lg`         | `0.5rem`    | `rounded-lg`   | 0.5rem   | Exact                      |
| `xl`         | `0.75rem`   | `rounded-xl`   | 0.75rem  | Exact                      |
| `2xl`        | `1rem`      | `rounded-2xl`  | 1rem     | Exact                      |
| `3xl`        | `1.5rem`    | `rounded-3xl`  | 1.5rem   | Exact                      |
| `4xl`        | `2rem`      | N/A            | N/A      | **Custom**                 |
| `full`       | `9999px`    | `rounded-full` | 9999px   | Exact                      |

### Semantic Radii

**Source:** `packages/react/src/theme/semantic-tokens/radii.ts`

| Token | References              | Purpose        |
| ----- | ----------------------- | -------------- |
| `l1`  | `{radii.xs}` = 0.125rem | Level 1 radius |
| `l2`  | `{radii.sm}` = 0.25rem  | Level 2 radius |
| `l3`  | `{radii.md}` = 0.375rem | Level 3 radius |

---

## Z-Index

**Source:** `packages/react/src/theme/tokens/z-indices.ts` **Used by:** `zIndex`
utility

| Chakra Token | Value        | TW Class | Match      |
| ------------ | ------------ | -------- | ---------- |
| `hide`       | `-1`         | N/A      | **Custom** |
| `base`       | `0`          | `z-0`    | Exact      |
| `docked`     | `10`         | `z-10`   | Exact      |
| `dropdown`   | `1000`       | N/A      | **Custom** |
| `sticky`     | `1100`       | N/A      | **Custom** |
| `banner`     | `1200`       | N/A      | **Custom** |
| `overlay`    | `1300`       | N/A      | **Custom** |
| `modal`      | `1400`       | N/A      | **Custom** |
| `popover`    | `1500`       | N/A      | **Custom** |
| `skipNav`    | `1600`       | N/A      | **Custom** |
| `toast`      | `1700`       | N/A      | **Custom** |
| `tooltip`    | `1800`       | N/A      | **Custom** |
| `max`        | `2147483647` | N/A      | **Custom** |

**Note:** Tailwind default z-index only goes to 50. Chakra uses a layered system
for UI overlays that needs custom extension.

---

## Breakpoints

**Source:** `packages/react/src/theme/breakpoints.ts` **Used by:** responsive
styles, `hideFrom`/`hideBelow` utilities

| Chakra BP | Value    | TW BP | TW Value | Match         |
| --------- | -------- | ----- | -------- | ------------- |
| `sm`      | `480px`  | `sm`  | `640px`  | **Different** |
| `md`      | `768px`  | `md`  | `768px`  | Exact         |
| `lg`      | `1024px` | `lg`  | `1024px` | Exact         |
| `xl`      | `1280px` | `xl`  | `1280px` | Exact         |
| `2xl`     | `1536px` | `2xl` | `1536px` | Exact         |

**Key difference:** Chakra `sm` is `480px` while Tailwind `sm` is `640px`.

---

## Blur

**Source:** `packages/react/src/theme/tokens/blurs.ts` **Used by:** `blur`,
`backdropBlur` utilities

| Chakra Token | Value       | TW Class         | TW Value | Match                      |
| ------------ | ----------- | ---------------- | -------- | -------------------------- |
| `none`       | ` ` (empty) | `blur-none`      | 0        | Equivalent                 |
| `sm`         | `4px`       | `blur-sm`        | 4px      | Exact                      |
| `md`         | `8px`       | `blur` (default) | 8px      | Exact (diff name)          |
| `lg`         | `12px`      | `blur-md`        | 12px     | Same value, different name |
| `xl`         | `16px`      | `blur-lg`        | 16px     | Same value, different name |
| `2xl`        | `24px`      | `blur-xl`        | 24px     | Same value, different name |
| `3xl`        | `40px`      | `blur-2xl`       | 40px     | Same value, different name |
| `4xl`        | `64px`      | `blur-3xl`       | 64px     | Same value, different name |

**Note:** Chakra blur scale is offset by one step from Tailwind naming.

---

## Animations & Durations

### Animations

**Source:** `packages/react/src/theme/tokens/animations.ts`

| Chakra Token | Value                                         | TW Class         | Match |
| ------------ | --------------------------------------------- | ---------------- | ----- |
| `spin`       | `spin 1s linear infinite`                     | `animate-spin`   | Exact |
| `ping`       | `ping 1s cubic-bezier(0,0,0.2,1) infinite`    | `animate-ping`   | Exact |
| `pulse`      | `pulse 2s cubic-bezier(0.4,0,0.6,1) infinite` | `animate-pulse`  | Exact |
| `bounce`     | `bounce 1s infinite`                          | `animate-bounce` | Exact |

### Keyframes

**Source:** `packages/react/src/theme/tokens/keyframes.ts`

Standard keyframes (spin, pulse, ping, bounce) match Tailwind. Additional
Chakra-specific keyframes that need custom extension:

- `bg-position`, `position`, `circular-progress`
- `expand-height`, `collapse-height`, `expand-width`, `collapse-width`
- `fade-in`, `fade-out`
- `slide-from-*`, `slide-to-*` (top/bottom/left/right, plus `-full` variants)
- `scale-in`, `scale-out`
- `marqueeX`, `marqueeY`

### Durations

**Source:** `packages/react/src/theme/tokens/durations.ts` **Used by:**
`transitionDuration`, `animationDuration`, `animationDelay`

| Chakra Token | Value   | TW Class       | TW Value | Match                      |
| ------------ | ------- | -------------- | -------- | -------------------------- |
| `fastest`    | `50ms`  | N/A            | N/A      | **Custom**                 |
| `faster`     | `100ms` | `duration-100` | 100ms    | Same value, different name |
| `fast`       | `150ms` | `duration-150` | 150ms    | Same value, different name |
| `moderate`   | `200ms` | `duration-200` | 200ms    | Same value, different name |
| `slow`       | `300ms` | `duration-300` | 300ms    | Same value, different name |
| `slower`     | `400ms` | N/A            | N/A      | **Custom**                 |
| `slowest`    | `500ms` | `duration-500` | 500ms    | Same value, different name |

---

## Easings

**Source:** `packages/react/src/theme/tokens/easings.ts` **Used by:**
`transitionTimingFunction`, `animationTimingFunction`

| Chakra Token     | Value                            | TW Equivalent        |
| ---------------- | -------------------------------- | -------------------- | ---------- |
| `ease-in`        | `cubic-bezier(0.42, 0, 1, 1)`    | `ease-in` (same)     |
| `ease-out`       | `cubic-bezier(0, 0, 0.58, 1)`    | `ease-out` (same)    |
| `ease-in-out`    | `cubic-bezier(0.42, 0, 0.58, 1)` | `ease-in-out` (same) |
| `ease-in-smooth` | `cubic-bezier(0.32, 0.72, 0, 1)` | N/A                  | **Custom** |

---

## Aspect Ratios

**Source:** `packages/react/src/theme/tokens/aspect-ratios.ts` **Used by:**
`aspectRatio` utility

| Chakra Token | Value       | TW Class        | Match                  |
| ------------ | ----------- | --------------- | ---------------------- |
| `square`     | `1 / 1`     | `aspect-square` | Exact                  |
| `landscape`  | `4 / 3`     | N/A             | **Custom**             |
| `portrait`   | `3 / 4`     | N/A             | **Custom**             |
| `wide`       | `16 / 9`    | `aspect-video`  | Exact (different name) |
| `ultrawide`  | `18 / 5`    | N/A             | **Custom**             |
| `golden`     | `1.618 / 1` | N/A             | **Custom**             |

---

## Cursors

**Source:** `packages/react/src/theme/tokens/cursor.ts` **Used by:** `cursor`
utility

| Chakra Token | Value         | TW Class             |
| ------------ | ------------- | -------------------- |
| `button`     | `pointer`     | `cursor-pointer`     |
| `checkbox`   | `default`     | `cursor-default`     |
| `disabled`   | `not-allowed` | `cursor-not-allowed` |
| `menuitem`   | `default`     | `cursor-default`     |
| `option`     | `default`     | `cursor-default`     |
| `radio`      | `default`     | `cursor-default`     |
| `slider`     | `default`     | `cursor-default`     |
| `switch`     | `pointer`     | `cursor-pointer`     |

These are semantic cursor names for components; Tailwind uses CSS cursor values
directly.

---

## Semantic Tokens

**Source:** `packages/react/src/theme/semantic-tokens/`

Semantic tokens resolve to different values based on light/dark mode conditions
(`_light` / `_dark`).

### Semantic Colors

| Token Path          | Light             | Dark              | Purpose               |
| ------------------- | ----------------- | ----------------- | --------------------- |
| `bg`                | `white` (#FFFFFF) | `black` (#09090B) | Default background    |
| `bg.subtle`         | `gray.50`         | `gray.950`        | Subtle background     |
| `bg.muted`          | `gray.100`        | `gray.900`        | Muted background      |
| `bg.emphasized`     | `gray.200`        | `gray.800`        | Emphasized background |
| `bg.inverted`       | `black`           | `white`           | Inverted background   |
| `bg.panel`          | `white`           | `gray.950`        | Panel background      |
| `bg.error`          | `red.50`          | `red.950`         | Error background      |
| `bg.warning`        | `orange.50`       | `orange.950`      | Warning background    |
| `bg.success`        | `green.50`        | `green.950`       | Success background    |
| `bg.info`           | `blue.50`         | `blue.950`        | Info background       |
| `fg`                | `black`           | `gray.50`         | Default foreground    |
| `fg.muted`          | `gray.600`        | `gray.400`        | Muted foreground      |
| `fg.subtle`         | `gray.400`        | `gray.500`        | Subtle foreground     |
| `fg.inverted`       | `gray.50`         | `black`           | Inverted foreground   |
| `fg.error`          | `red.500`         | `red.400`         | Error foreground      |
| `fg.warning`        | `orange.600`      | `orange.300`      | Warning foreground    |
| `fg.success`        | `green.600`       | `green.300`       | Success foreground    |
| `fg.info`           | `blue.600`        | `blue.300`        | Info foreground       |
| `border`            | `gray.200`        | `gray.800`        | Default border        |
| `border.muted`      | `gray.100`        | `gray.900`        | Muted border          |
| `border.subtle`     | `gray.50`         | `gray.950`        | Subtle border         |
| `border.emphasized` | `gray.300`        | `gray.700`        | Emphasized border     |
| `border.inverted`   | `gray.800`        | `gray.200`        | Inverted border       |
| `border.error`      | `red.500`         | `red.400`         | Error border          |
| `border.warning`    | `orange.500`      | `orange.400`      | Warning border        |
| `border.success`    | `green.500`       | `green.400`       | Success border        |
| `border.info`       | `blue.500`        | `blue.400`        | Info border           |

### Per-Color Semantic Tokens

Each color palette (gray, red, orange, green, blue, yellow, teal, purple, pink,
cyan) has:

| Semantic Variant     | Light References | Dark References | Purpose           |
| -------------------- | ---------------- | --------------- | ----------------- |
| `{color}.contrast`   | white/black      | white/black     | Text on solid bg  |
| `{color}.fg`         | `{color}.700`    | `{color}.300`   | Foreground accent |
| `{color}.subtle`     | `{color}.100`    | `{color}.900`   | Light fill        |
| `{color}.muted`      | `{color}.200`    | `{color}.800`   | Muted fill        |
| `{color}.emphasized` | `{color}.300`    | `{color}.700`   | Emphasized fill   |
| `{color}.solid`      | `{color}.600`    | `{color}.600`   | Solid fill        |
| `{color}.focusRing`  | `{color}.500`    | `{color}.500`   | Focus ring color  |
| `{color}.border`     | `{color}.500`    | `{color}.400`   | Border accent     |

---

## Text Styles

**Source:** `packages/react/src/theme/text-styles.ts`

Composite styles combining fontSize + lineHeight (+ letterSpacing for large
sizes).

| Token   | fontSize         | lineHeight | letterSpacing             |
| ------- | ---------------- | ---------- | ------------------------- |
| `2xs`   | `2xs` (0.625rem) | 0.75rem    | --                        |
| `xs`    | `xs` (0.75rem)   | 1rem       | --                        |
| `sm`    | `sm` (0.875rem)  | 1.25rem    | --                        |
| `md`    | `md` (1rem)      | 1.5rem     | --                        |
| `lg`    | `lg` (1.125rem)  | 1.75rem    | --                        |
| `xl`    | `xl` (1.25rem)   | 1.875rem   | --                        |
| `2xl`   | `2xl` (1.5rem)   | 2rem       | --                        |
| `3xl`   | `3xl` (1.875rem) | 2.375rem   | --                        |
| `4xl`   | `4xl` (2.25rem)  | 2.75rem    | -0.025em                  |
| `5xl`   | `5xl` (3rem)     | 3.75rem    | -0.025em                  |
| `6xl`   | `6xl` (3.75rem)  | 4.5rem     | -0.025em                  |
| `7xl`   | `7xl` (4.5rem)   | 5.75rem    | -0.025em                  |
| `label` | `sm` (0.875rem)  | 1.25rem    | -- (+ fontWeight: medium) |

Tailwind v4 `text-*` classes also set line-height, so these largely overlap. The
specific line-height pairings may differ.

---

## Layer Styles

**Source:** `packages/react/src/theme/layer-styles.ts`

Composite visual styles for component surfaces. No direct Tailwind equivalent --
these would be implemented as component classes or `@apply` directives.

| Layer Style                      | Properties                                                 |
| -------------------------------- | ---------------------------------------------------------- |
| `fill.muted`                     | bg: colorPalette.muted, color: colorPalette.fg             |
| `fill.subtle`                    | bg: colorPalette.subtle, color: colorPalette.fg            |
| `fill.surface`                   | bg: colorPalette.subtle, color: colorPalette.fg, boxShadow |
| `fill.solid`                     | bg: colorPalette.solid, color: colorPalette.contrast       |
| `outline.subtle`                 | color: colorPalette.fg, inset boxShadow                    |
| `outline.solid`                  | borderWidth: 1px, borderColor: colorPalette.solid, color   |
| `indicator.bottom/top/start/end` | Pseudo-element-based indicators                            |
| `disabled`                       | opacity: 0.5, cursor: not-allowed                          |

---

## Utility Shorthands

**Source:** `packages/react/src/preset-base.ts`

Chakra shorthand props and their Tailwind equivalents:

| Chakra Shorthand                | Full Property                    | TW Prefix                            |
| ------------------------------- | -------------------------------- | ------------------------------------ |
| `bg`                            | `background`                     | `bg-`                                |
| `w`                             | `width`                          | `w-`                                 |
| `h`                             | `height`                         | `h-`                                 |
| `m` / `mt` / `mr` / `mb` / `ml` | `margin*`                        | `m-` / `mt-` / `mr-` / `mb-` / `ml-` |
| `p` / `pt` / `pr` / `pb` / `pl` | `padding*`                       | `p-` / `pt-` / `pr-` / `pb-` / `pl-` |
| `mx` / `my`                     | `marginInline` / `marginBlock`   | `mx-` / `my-`                        |
| `px` / `py`                     | `paddingInline` / `paddingBlock` | `px-` / `py-`                        |
| `rounded`                       | `borderRadius`                   | `rounded-`                           |
| `shadow`                        | `boxShadow`                      | `shadow-`                            |
| `pos`                           | `position`                       | `static` / `relative` / etc.         |
| `minW` / `maxW`                 | `minWidth` / `maxWidth`          | `min-w-` / `max-w-`                  |
| `minH` / `maxH`                 | `minHeight` / `maxHeight`        | `min-h-` / `max-h-`                  |
| `flexDir`                       | `flexDirection`                  | `flex-row` / `flex-col`              |
| `gapX` / `gapY`                 | `columnGap` / `rowGap`           | `gap-x-` / `gap-y-`                  |
| `textDecor`                     | `textDecoration`                 | `underline` / `no-underline`         |
| `blendMode`                     | `mixBlendMode`                   | `mix-blend-*`                        |
| `bgClip`                        | `backgroundClip`                 | `bg-clip-*`                          |
| `ms` / `me`                     | `marginInlineStart/End`          | `ms-` / `me-`                        |
| `ps` / `pe`                     | `paddingInlineStart/End`         | `ps-` / `pe-`                        |

---

## Conditions (Pseudo/State Selectors)

**Source:** `packages/react/src/preset-base.ts` (`defaultConditions`)

Chakra conditions mapped to Tailwind modifiers:

| Chakra Condition   | TW Modifier          | Notes                                                                |
| ------------------ | -------------------- | -------------------------------------------------------------------- |
| `hover`            | `hover:`             | Chakra adds `@media (hover: hover)` wrapper                          |
| `active`           | `active:`            | Chakra excludes disabled/open states                                 |
| `focus`            | `focus:`             |                                                                      |
| `focusVisible`     | `focus-visible:`     |                                                                      |
| `focusWithin`      | `focus-within:`      |                                                                      |
| `disabled`         | `disabled:`          |                                                                      |
| `checked`          | Varies               | Chakra includes `data-checked`, `aria-checked`, `data-state=checked` |
| `first`            | `first:`             | Chakra uses `first-of-type`                                          |
| `last`             | `last:`              | Chakra uses `last-of-type`                                           |
| `even` / `odd`     | `even:` / `odd:`     |                                                                      |
| `dark`             | `dark:`              | Chakra: `.dark &` selector vs TW class strategy                      |
| `before` / `after` | `before:` / `after:` |                                                                      |
| `placeholder`      | `placeholder:`       |                                                                      |
| `peerFocus`        | `peer-focus:`        |                                                                      |
| `groupHover`       | `group-hover:`       |                                                                      |
| `motionReduce`     | `motion-reduce:`     |                                                                      |
| `rtl` / `ltr`      | `rtl:` / `ltr:`      |                                                                      |
| `print`            | `print:`             |                                                                      |

Many Chakra conditions (expanded, highlighted, complete, loading, current, etc.)
are Chakra-specific data-attribute selectors with no Tailwind built-in
equivalent. These would need custom variants in Tailwind.

---

## Custom Tailwind Extensions Needed

### Summary of gaps requiring `theme.extend` configuration:

#### Colors

- `black` override: `#09090B` instead of `#000`
- `whiteAlpha` and `blackAlpha` palette (50-950)
- All color shades differ at 700-950 from Tailwind defaults (Chakra uses deeper
  dark shades)

#### Spacing

- `4.5`: `1.125rem`

#### Sizes

- `3xs`: `14rem`
- `2xs`: `16rem`
- `8xl`: `90rem`
- `svw`: `100svw`
- `lvw`: `100lvw`

#### Typography

- `fonts.heading` and `fonts.body` (Inter-based stack)
- `fontSizes.2xs`: `0.625rem`
- Named line-height aliases (`shorter`, `short`, `moderate`, `tall`, `taller`)

#### Border Radii

- `2xs`: `0.0625rem`
- `4xl`: `2rem`
- Offset naming: Chakra `xs` = TW `rounded-sm`, Chakra `sm` = TW `rounded`

#### Shadows

- All shadow values are different (Chakra uses token-referenced colors in
  shadows)
- `inset` shadow token

#### Z-Index

- Full component layer stack: `dropdown` (1000), `sticky` (1100), `banner`
  (1200), `overlay` (1300), `modal` (1400), `popover` (1500), `skipNav` (1600),
  `toast` (1700), `tooltip` (1800), `max` (2147483647)
- `hide`: `-1`

#### Breakpoints

- `sm`: `480px` (Tailwind default is `640px`)

#### Blur

- Naming offset (Chakra `lg` = TW `blur-md`, etc.)

#### Durations

- `fastest`: `50ms`
- `slower`: `400ms`
- Named duration aliases (`fastest`, `faster`, `fast`, `moderate`, `slow`,
  `slower`, `slowest`)

#### Easings

- `ease-in-smooth`: `cubic-bezier(0.32, 0.72, 0, 1)`

#### Aspect Ratios

- `landscape`: `4 / 3`
- `portrait`: `3 / 4`
- `ultrawide`: `18 / 5`
- `golden`: `1.618 / 1`

#### Animations / Keyframes

- ~20 additional keyframes for slide/fade/scale/collapse/expand animations

#### Semantic Tokens (Dark Mode)

- `bg`, `fg`, `border` semantic color system with light/dark variants
- Per-color semantic variants: `contrast`, `fg`, `subtle`, `muted`,
  `emphasized`, `solid`, `focusRing`, `border`
- Semantic radii: `l1`, `l2`, `l3`
- These would be implemented as CSS custom properties toggled by dark mode class

#### Custom Variants

- Chakra-specific state conditions: `expanded`, `highlighted`, `complete`,
  `incomplete`, `loading`, `dragging`, `current`, `pressed`, `selected`,
  `grabbed`, `open`, `closed`, `underValue`, `overValue`, `atValue`, `today`,
  `unavailable`, `rangeStart`, `rangeEnd`, etc.

#### Composite Styles (No TW Equivalent)

- Text styles (fontSize + lineHeight + letterSpacing combos)
- Layer styles (fill.muted, fill.solid, outline.subtle, etc.)
- Animation styles (slide-fade-in, scale-fade-in, etc.)
- `colorPalette` system for component-level color theming
