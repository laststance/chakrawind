/**
 * Registry Generator — creates shadcn-compatible registry entries from Tailwind recipes.
 *
 * Reads all 74 recipe files from `packages/react/src/tailwind/recipes/*.ts`,
 * parses them as text (no eval/import), and generates:
 *   1. `registry/ui/<component>.tsx` — React component for each recipe
 *   2. `registry/registry.json` — shadcn-compatible manifest
 *
 * Idempotent: safe to re-run. Overwrites existing files.
 *
 * @example
 * pnpm tsx scripts/registry-generate.ts
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(dirname, "..")
const RECIPES_DIR = path.join(ROOT, "packages/react/src/tailwind/recipes")
const REGISTRY_DIR = path.join(ROOT, "registry")
const REGISTRY_UI_DIR = path.join(REGISTRY_DIR, "ui")
// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CvaRecipe {
  kind: "cva"
  fileName: string
  componentName: string
  exportName: string
  variantKeys: string[]
}

interface SvaRecipe {
  kind: "sva"
  fileName: string
  componentName: string
  exportName: string
  slots: string[]
  variantKeys: string[]
}

type Recipe = CvaRecipe | SvaRecipe

interface RegistryItem {
  name: string
  type: "registry:ui"
  title: string
  description: string
  dependencies: string[]
  files: Array<{ path: string; type: "registry:ui" }>
}

interface RegistryManifest {
  $schema: string
  name: string
  description: string
  homepage: string
  items: RegistryItem[]
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Convert kebab-case or camelCase file name to PascalCase component name.
 * @param name - File name without extension (e.g., "checkbox-card", "badge")
 * @returns PascalCase string (e.g., "CheckboxCard", "Badge")
 * @example
 * toPascalCase("checkbox-card") // => "CheckboxCard"
 * toPascalCase("badge")         // => "Badge"
 */
function toPascalCase(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

/**
 * Convert kebab-case to camelCase.
 * @param name - Kebab-case string
 * @returns camelCase string
 * @example
 * toCamelCase("checkbox-card") // => "checkboxCard"
 */
function toCamelCase(name: string): string {
  const pascal = toPascalCase(name)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

/**
 * Convert slot name (camelCase) to PascalCase for sub-component naming.
 * @param slot - Slot name like "itemTrigger"
 * @returns PascalCase like "ItemTrigger"
 * @example
 * slotToPascal("itemTrigger") // => "ItemTrigger"
 * slotToPascal("root")        // => "Root"
 */
function slotToPascal(slot: string): string {
  return slot.charAt(0).toUpperCase() + slot.slice(1)
}

/**
 * Determine the appropriate HTML element for a given component name.
 * @param componentName - PascalCase component name
 * @returns HTML tag name
 * @example
 * htmlElementFor("Button") // => "button"
 * htmlElementFor("Input")  // => "input"
 */
function htmlElementFor(componentName: string): string {
  const lower = componentName.toLowerCase()
  if (lower === "button") return "button"
  if (lower === "input" || lower === "textarea") return lower
  if (lower === "link") return "a"
  if (lower === "heading") return "h2"
  if (lower === "separator") return "hr"
  if (lower === "table") return "table"
  if (lower === "code" || lower === "kbd" || lower === "mark") return "span"
  return "div"
}

/**
 * Determine the React HTML attributes type for an element.
 * @param element - HTML tag name
 * @returns React type string
 * @example
 * reactAttrsType("button") // => "React.ButtonHTMLAttributes<HTMLButtonElement>"
 */
function reactAttrsType(element: string): {
  attrsType: string
  refType: string
} {
  switch (element) {
    case "button":
      return {
        attrsType: "React.ButtonHTMLAttributes<HTMLButtonElement>",
        refType: "HTMLButtonElement",
      }
    case "input":
      return {
        attrsType: "React.InputHTMLAttributes<HTMLInputElement>",
        refType: "HTMLInputElement",
      }
    case "textarea":
      return {
        attrsType: "React.TextareaHTMLAttributes<HTMLTextAreaElement>",
        refType: "HTMLTextAreaElement",
      }
    case "a":
      return {
        attrsType: "React.AnchorHTMLAttributes<HTMLAnchorElement>",
        refType: "HTMLAnchorElement",
      }
    case "hr":
      return {
        attrsType: "React.HTMLAttributes<HTMLHRElement>",
        refType: "HTMLHRElement",
      }
    case "h2":
      return {
        attrsType: "React.HTMLAttributes<HTMLHeadingElement>",
        refType: "HTMLHeadingElement",
      }
    case "table":
      return {
        attrsType: "React.TableHTMLAttributes<HTMLTableElement>",
        refType: "HTMLTableElement",
      }
    case "span":
      return {
        attrsType: "React.HTMLAttributes<HTMLSpanElement>",
        refType: "HTMLSpanElement",
      }
    default:
      return {
        attrsType: "React.HTMLAttributes<HTMLDivElement>",
        refType: "HTMLDivElement",
      }
  }
}

// ---------------------------------------------------------------------------
// Parser: extract recipe metadata from source text
// ---------------------------------------------------------------------------

/**
 * Parse a recipe source file and extract metadata.
 * Does NOT eval the file — uses regex/string matching.
 * @param source - TypeScript source text
 * @param fileName - File name without extension
 * @returns Recipe metadata or null if unparseable
 * @example
 * parseRecipe(fs.readFileSync("badge.ts", "utf-8"), "badge")
 * // => { kind: "cva", fileName: "badge", componentName: "Badge", ... }
 */
function parseRecipe(source: string, fileName: string): Recipe | null {
  // Determine export name from the barrel file mapping
  const isSva = source.includes("slots:")
  const componentName = toPascalCase(fileName)

  // Find the export name (e.g., badgeRecipeTw or accordionSlotRecipeTw)
  const exportMatch = source.match(
    /export\s+const\s+(\w+(?:Recipe|SlotRecipe)Tw)\s*=/,
  )
  if (!exportMatch) {
    console.warn(`  [SKIP] ${fileName}.ts — no recipe export found`)
    return null
  }
  const exportName = exportMatch[1]

  // Extract variant keys from variants: { ... } block
  const variantKeys = extractVariantKeys(source)

  if (isSva) {
    const slots = extractSlots(source)
    return {
      kind: "sva",
      fileName,
      componentName,
      exportName,
      slots,
      variantKeys,
    }
  }

  return {
    kind: "cva",
    fileName,
    componentName,
    exportName,
    variantKeys,
  }
}

/**
 * Extract top-level variant keys from the `variants: { ... }` block.
 * @param source - Recipe source text
 * @returns Array of variant key names (e.g., ["variant", "size"])
 * @example
 * extractVariantKeys('variants: { variant: { ... }, size: { ... } }')
 * // => ["variant", "size"]
 */
function extractVariantKeys(source: string): string[] {
  // Find the variants block start
  const variantsStart = source.indexOf("variants:")
  if (variantsStart === -1) return []

  // Find the opening brace after "variants:"
  const openBrace = source.indexOf("{", variantsStart + "variants:".length)
  if (openBrace === -1) return []

  // Walk forward and collect top-level keys (depth = 1)
  const keys: string[] = []
  let depth = 0
  let i = openBrace
  let currentKey = ""
  let inString = false
  let stringChar = ""

  while (i < source.length) {
    const ch = source[i]

    // Handle string literals
    if (!inString && (ch === '"' || ch === "'" || ch === "`")) {
      inString = true
      stringChar = ch
      i++
      continue
    }
    if (inString) {
      if (ch === stringChar && source[i - 1] !== "\\") {
        inString = false
      }
      i++
      continue
    }

    if (ch === "{") {
      depth++
      if (depth === 1) {
        currentKey = ""
      }
    } else if (ch === "}") {
      depth--
      if (depth === 0) break
    } else if (depth === 1 && ch === ":") {
      // We just found a key at depth 1
      const key = currentKey.trim()
      if (key) keys.push(key)
      currentKey = ""
    } else if (depth === 1 && ch !== "," && ch !== "\n" && ch !== "\r") {
      currentKey += ch
    } else if (depth === 1 && (ch === "," || ch === "\n")) {
      currentKey = ""
    }

    i++
  }

  // Clean up keys — remove quotes
  return keys.map((k) => k.replace(/['"]/g, "").trim()).filter(Boolean)
}

/**
 * Extract slot names from `slots: [...]` array.
 * @param source - Recipe source text
 * @returns Array of slot names
 * @example
 * extractSlots('slots: ["root", "item", "trigger"]')
 * // => ["root", "item", "trigger"]
 */
function extractSlots(source: string): string[] {
  const slotsMatch = source.match(/slots:\s*\[([\s\S]*?)\]/)
  if (!slotsMatch) return []

  const inner = slotsMatch[1]
  const slots: string[] = []
  const re = /["'](\w+)["']/g
  let m: RegExpExecArray | null
  while ((m = re.exec(inner)) !== null) {
    slots.push(m[1])
  }
  return slots
}

// ---------------------------------------------------------------------------
// Code generators
// ---------------------------------------------------------------------------

/**
 * Generate a registry component file for a CVA (single-component) recipe.
 * @param recipe - Parsed CVA recipe metadata
 * @param recipeSource - Raw TypeScript source of the recipe file
 * @returns Generated .tsx file content
 */
function generateCvaComponent(recipe: CvaRecipe, recipeSource: string): string {
  const { componentName, exportName, variantKeys, fileName } = recipe
  const camelName = toCamelCase(fileName)
  const element = htmlElementFor(componentName)
  const { attrsType, refType } = reactAttrsType(element)

  // Build variant prop types
  const variantPropLines = variantKeys
    .map((key) => {
      return `  ${key}?: keyof typeof ${camelName}Variants.variants.${key}`
    })
    .join("\n")

  // Build destructured defaults from recipe source
  const defaults = extractDefaults(recipeSource)
  const destructureEntries = variantKeys
    .map((key) => {
      const def = defaults[key]
      return def ? `${key} = ${JSON.stringify(def)}` : key
    })
    .join(", ")

  // Build class composition lines
  const classLines = variantKeys
    .map((key) => {
      return `  const ${key}Class = ${camelName}Variants.variants.${key}?.[${key}] ?? ""`
    })
    .join("\n")

  const classArgs = variantKeys.map((key) => `${key}Class`).join(", ")

  const hasColorPalette = recipeSource.includes("--cp-")

  const colorPaletteProps = hasColorPalette ? `\n  colorPalette?: string` : ""
  const colorPaletteDestructure = hasColorPalette ? ", colorPalette" : ""
  const dataPaletteAttr = hasColorPalette
    ? `\n        data-palette={colorPalette}`
    : ""

  return `import * as React from "react"
import { cn } from "../lib/utils"
import { ${exportName} } from "../../packages/react/src/tailwind/recipes/${fileName}"

/**
 * Variant configuration for ${componentName}.
 * Re-exported from the Tailwind recipe for direct access.
 */
const ${camelName}Variants = ${exportName}

export interface ${componentName}Props extends ${attrsType} {
${variantPropLines}${colorPaletteProps}
}

/**
 * Chakra Wind ${componentName} — drop-in component with Tailwind utility classes.
 * @example
 * <${componentName} ${variantKeys[0] ? `${variantKeys[0]}="${defaults[variantKeys[0]] || variantKeys[0]}"` : ""}>Content</${componentName}>
 */
const ${componentName} = React.forwardRef<${refType}, ${componentName}Props>(
  ({ className, ${destructureEntries}${colorPaletteDestructure}, ...props }, ref) => {
${classLines}

    return (
      <${element}
        className={cn(${camelName}Variants.base, ${classArgs}, className)}
        ref={ref}${dataPaletteAttr}
        {...props}
      />
    )
  },
)
${componentName}.displayName = "${componentName}"

export { ${componentName}, ${camelName}Variants }
`
}

/**
 * Generate a registry component file for an SVA (multi-slot) recipe.
 * @param recipe - Parsed SVA recipe metadata
 * @param recipeSource - Raw TypeScript source of the recipe file
 * @returns Generated .tsx file content
 */
function generateSvaComponent(recipe: SvaRecipe, recipeSource: string): string {
  const { componentName, exportName, slots, variantKeys, fileName } = recipe
  const camelName = toCamelCase(fileName)

  const hasColorPalette = recipeSource.includes("--cp-")
  const defaults = extractDefaults(recipeSource)

  // Build variant prop types
  const variantPropLines = variantKeys
    .map((key) => {
      return `  ${key}?: string`
    })
    .join("\n")

  const colorPaletteProps = hasColorPalette ? `\n  colorPalette?: string` : ""

  // Build context type and provider
  const contextType = `${componentName}ContextValue`

  const hasRootSlot = slots.includes("root")

  // Build shared root-provider destructuring
  const rootDestructureParts = variantKeys.map((key) => {
    const def = defaults[key]
    return def ? `${key} = ${JSON.stringify(def)}` : key
  })

  const colorPaletteDestructure = hasColorPalette ? ", colorPalette" : ""
  const dataPaletteAttr = hasColorPalette
    ? `\n          data-palette={colorPalette}`
    : ""

  // Combine destructure parts, avoiding leading comma when variantKeys is empty
  const allDestructureParts = [...rootDestructureParts]
  if (hasColorPalette) allDestructureParts.push("colorPalette")
  const rootDestructureStr =
    allDestructureParts.length > 0 ? `${allDestructureParts.join(", ")}, ` : ""
  const ctxProviderValue =
    variantKeys.length > 0 ? `{ ${variantKeys.join(", ")} }` : "{}"

  // If there is no "root" slot, generate a synthetic root provider component
  const syntheticRootComponent = !hasRootSlot
    ? `
/**
 * ${componentName} — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <${componentName} ${variantKeys[0] ? `${variantKeys[0]}="${defaults[variantKeys[0]] || variantKeys[0]}"` : ""}>
 *   {/* slot sub-components */}
 * </${componentName}>
 */
const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, ${rootDestructureStr}children, ...props }, ref) => {
    return (
      <${componentName}Provider value={${ctxProviderValue}}>
        <div
          className={cn(className)}
          ref={ref}${dataPaletteAttr}
          {...props}
        >
          {children}
        </div>
      </${componentName}Provider>
    )
  },
)
${componentName}.displayName = "${componentName}"`
    : ""

  // Generate sub-components for each slot
  const subComponents = slots.map((slot) => {
    const subName =
      slot === "root" ? componentName : `${componentName}${slotToPascal(slot)}`
    const element = slotElementFor(slot, componentName)
    const { attrsType, refType } = reactAttrsType(element)

    const isRoot = slot === "root"

    if (isRoot) {
      // Root component provides context and renders DOM element
      return `
/**
 * ${subName} — root wrapper providing variant context to sub-components.
 * @example
 * <${subName} ${variantKeys[0] ? `${variantKeys[0]}="${defaults[variantKeys[0]] || variantKeys[0]}"` : ""}>
 *   {/* slot sub-components */}
 * </${subName}>
 */
const ${subName} = React.forwardRef<${refType}, ${componentName}Props>(
  ({ className, ${rootDestructureStr}children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
${variantKeys.map((key) => `      ${key} ? recipe.variants?.${key}?.[${key}]?.root ?? "" : "",`).join("\n")}
    ].filter(Boolean)

    return (
      <${componentName}Provider value={${ctxProviderValue}}>
        <${element}
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}${dataPaletteAttr}
          {...props}
        >
          {children}
        </${element}>
      </${componentName}Provider>
    )
  },
)
${subName}.displayName = "${subName}"`
    }

    // Non-root sub-component
    return `
/**
 * ${subName} — "${slot}" slot of ${componentName}.
 */
const ${subName} = React.forwardRef<${refType}, React.HTMLAttributes<${refType}>>(
  ({ className, ...props }, ref) => {
    const ctx = use${componentName}()
    const baseClass = recipe.base?.${slot} ?? ""
    const variantClasses = [
${variantKeys.map((key) => `      ctx.${key} ? recipe.variants?.${key}?.[ctx.${key}]?.${slot} ?? "" : "",`).join("\n")}
    ].filter(Boolean)

    return (
      <${element}
        className={cn(baseClass, ...variantClasses, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
${subName}.displayName = "${subName}"`
  })

  // Build exports list — always include componentName as root
  const exportNames = [
    ...(hasRootSlot ? [] : [componentName]),
    ...slots.map((slot) =>
      slot === "root" ? componentName : `${componentName}${slotToPascal(slot)}`,
    ),
  ]

  return `import * as React from "react"
import { cn } from "../lib/utils"
import { ${exportName} } from "../../packages/react/src/tailwind/recipes/${fileName}"

const recipe = ${exportName}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ${contextType} {
${variantKeys.map((key) => `  ${key}?: string`).join("\n")}
}

const ${componentName}Context = React.createContext<${contextType}>({})

function ${componentName}Provider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ${contextType}
}) {
  return <${componentName}Context value={value}>{children}</${componentName}Context>
}

function use${componentName}(): ${contextType} {
  return React.use(${componentName}Context)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
${variantPropLines}${colorPaletteProps}
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
${syntheticRootComponent}
${subComponents.join("\n")}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { ${exportNames.join(", ")} }
`
}

/**
 * Determine an appropriate HTML element for a named slot.
 * @param slot - Slot name (e.g., "trigger", "label", "body")
 * @param componentName - Parent component name for context
 * @returns HTML tag name
 */
function slotElementFor(slot: string, componentName: string): string {
  const lower = slot.toLowerCase()
  if (lower === "trigger" || lower.includes("trigger")) return "button"
  if (lower === "label" || lower === "description") return "span"
  if (lower === "title" || lower === "header") return "div"
  if (lower === "indicator") return "span"
  if (lower === "input" || lower === "control") return "div"
  if (lower === "body" || lower === "content") return "div"
  if (lower === "footer") return "div"
  if (lower === "backdrop" || lower === "positioner") return "div"
  if (lower === "group") return "div"
  if (lower.includes("element")) return "span"
  if (componentName === "Table" && lower === "row") return "tr"
  if (componentName === "Table" && lower === "cell") return "td"
  if (componentName === "Table" && lower === "columnheader") return "th"
  return "div"
}

/**
 * Extract defaultVariants values from recipe source text.
 * @param source - Recipe source text
 * @returns Object mapping variant key to default value string
 * @example
 * extractDefaults('defaultVariants: { size: "md", variant: "solid" }')
 * // => { size: "md", variant: "solid" }
 */
function extractDefaults(source: string): Record<string, string> {
  const result: Record<string, string> = {}
  const dvMatch = source.match(/defaultVariants:\s*\{([\s\S]*?)\}/)
  if (!dvMatch) return result

  const inner = dvMatch[1]
  const re = /(\w+):\s*["']([^"']+)["']/g
  let m: RegExpExecArray | null
  while ((m = re.exec(inner)) !== null) {
    result[m[1]] = m[2]
  }
  return result
}

// ---------------------------------------------------------------------------
// Registry manifest generator
// ---------------------------------------------------------------------------

/**
 * Generate the registry.json manifest.
 * @param recipes - All parsed recipes
 * @returns Complete manifest object
 */
function generateManifest(recipes: Recipe[]): RegistryManifest {
  const items: RegistryItem[] = [
    // Utils entry always first
    {
      name: "utils",
      type: "registry:lib" as unknown as "registry:ui",
      title: "Utilities",
      description: "Core utilities for Chakra Wind (cn, style-props).",
      dependencies: ["clsx", "tailwind-merge"],
      files: [
        {
          path: "lib/utils.ts",
          type: "registry:lib" as unknown as "registry:ui",
        },
      ],
    },
    // One entry per recipe
    ...recipes
      .sort((a, b) => a.fileName.localeCompare(b.fileName))
      .map((recipe): RegistryItem => {
        const kindLabel = recipe.kind === "sva" ? "multi-slot " : ""
        return {
          name: recipe.fileName,
          type: "registry:ui",
          title: recipe.componentName,
          description: `A Chakra Wind ${kindLabel}${recipe.componentName.toLowerCase()} component.`,
          dependencies: ["clsx", "tailwind-merge"],
          files: [
            {
              path: `ui/${recipe.fileName}.tsx`,
              type: "registry:ui",
            },
          ],
        }
      }),
  ]

  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "chakra-wind",
    description:
      "Chakra UI components powered by Tailwind CSS, compatible with shadcn/ui",
    homepage: "https://github.com/laststance/chakrawind",
    items,
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/**
 * Main entry point — reads recipes, generates registry files, writes output.
 * @example
 * pnpm tsx scripts/registry-generate.ts
 */
function main(): void {
  console.log("=== Chakra Wind Registry Generator ===\n")

  // Ensure output directories exist
  fs.mkdirSync(REGISTRY_UI_DIR, { recursive: true })

  // Read all recipe files
  const recipeFiles = fs
    .readdirSync(RECIPES_DIR)
    .filter((f) => f.endsWith(".ts"))
    .sort()

  console.log(`Found ${recipeFiles.length} recipe files\n`)

  const recipes: Recipe[] = []
  let cvaCount = 0
  let svaCount = 0

  for (const file of recipeFiles) {
    const fileName = file.replace(/\.ts$/, "")
    const filePath = path.join(RECIPES_DIR, file)
    const source = fs.readFileSync(filePath, "utf-8")

    const recipe = parseRecipe(source, fileName)
    if (!recipe) continue

    recipes.push(recipe)

    // Generate component file
    let componentSource: string
    if (recipe.kind === "cva") {
      componentSource = generateCvaComponent(recipe, source)
      cvaCount++
    } else {
      componentSource = generateSvaComponent(recipe, source)
      svaCount++
    }

    const outPath = path.join(REGISTRY_UI_DIR, `${fileName}.tsx`)
    fs.writeFileSync(outPath, componentSource, "utf-8")
    console.log(
      `  [${recipe.kind.toUpperCase()}] ${recipe.componentName} -> registry/ui/${fileName}.tsx`,
    )
  }

  // Generate registry.json
  const manifest = generateManifest(recipes)
  const manifestPath = path.join(REGISTRY_DIR, "registry.json")
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(manifest, null, 2) + "\n",
    "utf-8",
  )

  console.log(`\n--- Summary ---`)
  console.log(`  CVA components: ${cvaCount}`)
  console.log(`  SVA components: ${svaCount}`)
  console.log(`  Total:          ${recipes.length}`)
  console.log(`  Manifest:       registry/registry.json`)
  console.log(`\nDone.\n`)
}

main()
