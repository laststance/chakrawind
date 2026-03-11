import * as React from "react"
import { stepsSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/steps"
import { cn } from "../lib/utils"

const recipe = stepsSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface StepsContextValue {
  orientation?: string
  variant?: string
  size?: string
}

const StepsContext = React.createContext<StepsContextValue>({})

function StepsProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: StepsContextValue
}) {
  return <StepsContext value={value}>{children}</StepsContext>
}

function useSteps(): StepsContextValue {
  return React.use(StepsContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: string
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Steps — root wrapper providing variant context to sub-components.
 * @example
 * <Steps orientation="horizontal">
 *   slot sub-components
 * </Steps>
 */
const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "solid",
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      orientation
        ? (recipe.variants?.orientation?.[orientation]?.root ?? "")
        : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <StepsProvider value={{ orientation, variant, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </StepsProvider>
    )
  },
)
Steps.displayName = "Steps"

/**
 * StepsList — "list" slot of Steps.
 */
const StepsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.list ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.list ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.list ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.list ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsList.displayName = "StepsList"

/**
 * StepsItem — "item" slot of Steps.
 */
const StepsItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.item ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsItem.displayName = "StepsItem"

/**
 * StepsTrigger — "trigger" slot of Steps.
 */
const StepsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.trigger ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.trigger ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsTrigger.displayName = "StepsTrigger"

/**
 * StepsIndicator — "indicator" slot of Steps.
 */
const StepsIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.indicator ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsIndicator.displayName = "StepsIndicator"

/**
 * StepsSeparator — "separator" slot of Steps.
 */
const StepsSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.separator ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.separator ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.separator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.separator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsSeparator.displayName = "StepsSeparator"

/**
 * StepsContent — "content" slot of Steps.
 */
const StepsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.content ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsContent.displayName = "StepsContent"

/**
 * StepsTitle — "title" slot of Steps.
 */
const StepsTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.title ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.title ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.title ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsTitle.displayName = "StepsTitle"

/**
 * StepsDescription — "description" slot of Steps.
 */
const StepsDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.description ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.description ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.description ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsDescription.displayName = "StepsDescription"

/**
 * StepsNextTrigger — "nextTrigger" slot of Steps.
 */
const StepsNextTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.nextTrigger ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.nextTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.nextTrigger ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.nextTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsNextTrigger.displayName = "StepsNextTrigger"

/**
 * StepsPrevTrigger — "prevTrigger" slot of Steps.
 */
const StepsPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.prevTrigger ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.prevTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.prevTrigger ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.prevTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsPrevTrigger.displayName = "StepsPrevTrigger"

/**
 * StepsProgress — "progress" slot of Steps.
 */
const StepsProgress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSteps()
  const baseClass = recipe.base?.progress ?? ""
  const variantClasses = [
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.progress ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.progress ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.progress ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
StepsProgress.displayName = "StepsProgress"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Steps,
  StepsList,
  StepsItem,
  StepsTrigger,
  StepsIndicator,
  StepsSeparator,
  StepsContent,
  StepsTitle,
  StepsDescription,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsProgress,
}
