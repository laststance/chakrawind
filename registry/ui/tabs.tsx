import * as React from "react"
import { tabsSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/tabs"
import { cn } from "../lib/utils"

const recipe = tabsSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TabsContextValue {
  fitted?: string
  justify?: string
  size?: string
  variant?: string
}

const TabsContext = React.createContext<TabsContextValue>({})

function TabsProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TabsContextValue
}) {
  return <TabsContext value={value}>{children}</TabsContext>
}

function useTabs(): TabsContextValue {
  return React.use(TabsContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  fitted?: string
  justify?: string
  size?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Tabs — root wrapper providing variant context to sub-components.
 * @example
 * <Tabs fitted="fitted">
 *   slot sub-components
 * </Tabs>
 */
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      fitted,
      justify,
      size = "md",
      variant = "line",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      fitted ? (recipe.variants?.fitted?.[fitted]?.root ?? "") : "",
      justify ? (recipe.variants?.justify?.[justify]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <TabsProvider value={{ fitted, justify, size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </TabsProvider>
    )
  },
)
Tabs.displayName = "Tabs"

/**
 * TabsTrigger — "trigger" slot of Tabs.
 */
const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useTabs()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.fitted ? (recipe.variants?.fitted?.[ctx.fitted]?.trigger ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.trigger ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.trigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

/**
 * TabsList — "list" slot of Tabs.
 */
const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTabs()
  const baseClass = recipe.base?.list ?? ""
  const variantClasses = [
    ctx.fitted ? (recipe.variants?.fitted?.[ctx.fitted]?.list ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.list ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.list ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.list ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TabsList.displayName = "TabsList"

/**
 * TabsContent — "content" slot of Tabs.
 */
const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTabs()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.fitted ? (recipe.variants?.fitted?.[ctx.fitted]?.content ?? "") : "",
    ctx.justify ? (recipe.variants?.justify?.[ctx.justify]?.content ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

/**
 * TabsContentGroup — "contentGroup" slot of Tabs.
 */
const TabsContentGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTabs()
  const baseClass = recipe.base?.contentGroup ?? ""
  const variantClasses = [
    ctx.fitted
      ? (recipe.variants?.fitted?.[ctx.fitted]?.contentGroup ?? "")
      : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.contentGroup ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.contentGroup ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.contentGroup ?? "")
      : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TabsContentGroup.displayName = "TabsContentGroup"

/**
 * TabsIndicator — "indicator" slot of Tabs.
 */
const TabsIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTabs()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.fitted ? (recipe.variants?.fitted?.[ctx.fitted]?.indicator ?? "") : "",
    ctx.justify
      ? (recipe.variants?.justify?.[ctx.justify]?.indicator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TabsIndicator.displayName = "TabsIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
  TabsContentGroup,
  TabsIndicator,
}
