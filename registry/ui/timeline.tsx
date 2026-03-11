import * as React from "react"
import { timelineSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/timeline"
import { cn } from "../lib/utils"

const recipe = timelineSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TimelineContextValue {
  variant?: string
  showLastSeparator?: string
  size?: string
}

const TimelineContext = React.createContext<TimelineContextValue>({})

function TimelineProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: TimelineContextValue
}) {
  return <TimelineContext value={value}>{children}</TimelineContext>
}

function useTimeline(): TimelineContextValue {
  return React.use(TimelineContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  showLastSeparator?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Timeline — root wrapper providing variant context to sub-components.
 * @example
 * <Timeline variant="solid">
 *   slot sub-components
 * </Timeline>
 */
const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      className,
      variant = "solid",
      showLastSeparator,
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      showLastSeparator
        ? (recipe.variants?.showLastSeparator?.[showLastSeparator]?.root ?? "")
        : "",
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <TimelineProvider value={{ variant, showLastSeparator, size }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </TimelineProvider>
    )
  },
)
Timeline.displayName = "Timeline"

/**
 * TimelineItem — "item" slot of Timeline.
 */
const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]?.item ??
        "")
      : "",
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
TimelineItem.displayName = "TimelineItem"

/**
 * TimelineContent — "content" slot of Timeline.
 */
const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]?.content ??
        "")
      : "",
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
TimelineContent.displayName = "TimelineContent"

/**
 * TimelineSeparator — "separator" slot of Timeline.
 */
const TimelineSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.separator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.separator ?? "")
      : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]
          ?.separator ?? "")
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
TimelineSeparator.displayName = "TimelineSeparator"

/**
 * TimelineIndicator — "indicator" slot of Timeline.
 */
const TimelineIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]
          ?.indicator ?? "")
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
TimelineIndicator.displayName = "TimelineIndicator"

/**
 * TimelineConnector — "connector" slot of Timeline.
 */
const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.connector ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.connector ?? "")
      : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]
          ?.connector ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.connector ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
TimelineConnector.displayName = "TimelineConnector"

/**
 * TimelineTitle — "title" slot of Timeline.
 */
const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.title ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.title ?? "") : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]?.title ??
        "")
      : "",
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
TimelineTitle.displayName = "TimelineTitle"

/**
 * TimelineDescription — "description" slot of Timeline.
 */
const TimelineDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useTimeline()
  const baseClass = recipe.base?.description ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.description ?? "")
      : "",
    ctx.showLastSeparator
      ? (recipe.variants?.showLastSeparator?.[ctx.showLastSeparator]
          ?.description ?? "")
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
TimelineDescription.displayName = "TimelineDescription"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineIndicator,
  TimelineConnector,
  TimelineTitle,
  TimelineDescription,
}
