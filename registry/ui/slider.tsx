import * as React from "react"
import { sliderSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/slider"
import { cn } from "../lib/utils"

const recipe = sliderSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SliderContextValue {
  size?: string
  variant?: string
  orientation?: string
}

const SliderContext = React.createContext<SliderContextValue>({})

function SliderProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: SliderContextValue
}) {
  return <SliderContext value={value}>{children}</SliderContext>
}

function useSlider(): SliderContextValue {
  return React.use(SliderContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  orientation?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Slider — root wrapper providing variant context to sub-components.
 * @example
 * <Slider size="md">
 *   slot sub-components
 * </Slider>
 */
const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      size = "md",
      variant = "outline",
      orientation = "horizontal",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [
      size ? (recipe.variants?.size?.[size]?.root ?? "") : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
      orientation
        ? (recipe.variants?.orientation?.[orientation]?.root ?? "")
        : "",
    ].filter(Boolean)

    return (
      <SliderProvider value={{ size, variant, orientation }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </SliderProvider>
    )
  },
)
Slider.displayName = "Slider"

/**
 * SliderLabel — "label" slot of Slider.
 */
const SliderLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.label ?? "")
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
SliderLabel.displayName = "SliderLabel"

/**
 * SliderThumb — "thumb" slot of Slider.
 */
const SliderThumb = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.thumb ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.thumb ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.thumb ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.thumb ?? "")
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
SliderThumb.displayName = "SliderThumb"

/**
 * SliderValueText — "valueText" slot of Slider.
 */
const SliderValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.valueText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.valueText ?? "")
      : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.valueText ?? "")
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
SliderValueText.displayName = "SliderValueText"

/**
 * SliderTrack — "track" slot of Slider.
 */
const SliderTrack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.track ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.track ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.track ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.track ?? "")
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
SliderTrack.displayName = "SliderTrack"

/**
 * SliderRange — "range" slot of Slider.
 */
const SliderRange = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.range ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.range ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.range ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.range ?? "")
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
SliderRange.displayName = "SliderRange"

/**
 * SliderControl — "control" slot of Slider.
 */
const SliderControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.control ?? "")
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
SliderControl.displayName = "SliderControl"

/**
 * SliderMarkerGroup — "markerGroup" slot of Slider.
 */
const SliderMarkerGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.markerGroup ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.markerGroup ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.markerGroup ?? "")
      : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.markerGroup ?? "")
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
SliderMarkerGroup.displayName = "SliderMarkerGroup"

/**
 * SliderMarker — "marker" slot of Slider.
 */
const SliderMarker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.marker ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.marker ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.marker ?? "") : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.marker ?? "")
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
SliderMarker.displayName = "SliderMarker"

/**
 * SliderDraggingIndicator — "draggingIndicator" slot of Slider.
 */
const SliderDraggingIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.draggingIndicator ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.draggingIndicator ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.draggingIndicator ?? "")
      : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.draggingIndicator ??
        "")
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
SliderDraggingIndicator.displayName = "SliderDraggingIndicator"

/**
 * SliderMarkerIndicator — "markerIndicator" slot of Slider.
 */
const SliderMarkerIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.markerIndicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.markerIndicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.markerIndicator ?? "")
      : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.markerIndicator ?? "")
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
SliderMarkerIndicator.displayName = "SliderMarkerIndicator"

/**
 * SliderMarkerLabel — "markerLabel" slot of Slider.
 */
const SliderMarkerLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useSlider()
  const baseClass = recipe.base?.markerLabel ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.markerLabel ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.markerLabel ?? "")
      : "",
    ctx.orientation
      ? (recipe.variants?.orientation?.[ctx.orientation]?.markerLabel ?? "")
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
SliderMarkerLabel.displayName = "SliderMarkerLabel"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Slider,
  SliderLabel,
  SliderThumb,
  SliderValueText,
  SliderTrack,
  SliderRange,
  SliderControl,
  SliderMarkerGroup,
  SliderMarker,
  SliderDraggingIndicator,
  SliderMarkerIndicator,
  SliderMarkerLabel,
}
