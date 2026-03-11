import * as React from "react"
import { splitterSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/splitter"
import { cn } from "../lib/utils"

const recipe = splitterSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SplitterContextValue {}

const SplitterContext = React.createContext<SplitterContextValue>({})

function SplitterProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: SplitterContextValue
}) {
  return <SplitterContext value={value}>{children}</SplitterContext>
}

function useSplitter(): SplitterContextValue {
  return React.use(SplitterContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface SplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Splitter — root wrapper providing variant context to sub-components.
 * @example
 * <Splitter >
 *   slot sub-components
 * </Splitter>
 */
const Splitter = React.forwardRef<HTMLDivElement, SplitterProps>(
  ({ className, colorPalette, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [].filter(Boolean)

    return (
      <SplitterProvider value={{}}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </SplitterProvider>
    )
  },
)
Splitter.displayName = "Splitter"

/**
 * SplitterPanel — "panel" slot of Splitter.
 */
const SplitterPanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSplitter()
  const baseClass = recipe.base?.panel ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SplitterPanel.displayName = "SplitterPanel"

/**
 * SplitterResizeTrigger — "resizeTrigger" slot of Splitter.
 */
const SplitterResizeTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSplitter()
  const baseClass = recipe.base?.resizeTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SplitterResizeTrigger.displayName = "SplitterResizeTrigger"

/**
 * SplitterResizeTriggerIndicator — "resizeTriggerIndicator" slot of Splitter.
 */
const SplitterResizeTriggerIndicator = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSplitter()
  const baseClass = recipe.base?.resizeTriggerIndicator ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SplitterResizeTriggerIndicator.displayName = "SplitterResizeTriggerIndicator"

/**
 * SplitterResizeTriggerSeparator — "resizeTriggerSeparator" slot of Splitter.
 */
const SplitterResizeTriggerSeparator = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSplitter()
  const baseClass = recipe.base?.resizeTriggerSeparator ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
SplitterResizeTriggerSeparator.displayName = "SplitterResizeTriggerSeparator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
  SplitterResizeTriggerIndicator,
  SplitterResizeTriggerSeparator,
}
