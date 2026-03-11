import * as React from "react"
import { colorPickerSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/color-picker"
import { cn } from "../lib/utils"

const recipe = colorPickerSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ColorPickerContextValue {
  size?: string
  variant?: string
}

const ColorPickerContext = React.createContext<ColorPickerContextValue>({})

function ColorPickerProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ColorPickerContextValue
}) {
  return <ColorPickerContext value={value}>{children}</ColorPickerContext>
}

function useColorPicker(): ColorPickerContextValue {
  return React.use(ColorPickerContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface ColorPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * ColorPicker — root wrapper providing variant context to sub-components.
 * @example
 * <ColorPicker size="md">
 *   slot sub-components
 * </ColorPicker>
 */
const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      className,
      size = "md",
      variant = "outline",
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
    ].filter(Boolean)

    return (
      <ColorPickerProvider value={{ size, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </ColorPickerProvider>
    )
  },
)
ColorPicker.displayName = "ColorPicker"

/**
 * ColorPickerControl — "control" slot of ColorPicker.
 */
const ColorPickerControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.control ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerControl.displayName = "ColorPickerControl"

/**
 * ColorPickerLabel — "label" slot of ColorPicker.
 */
const ColorPickerLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.label ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerLabel.displayName = "ColorPickerLabel"

/**
 * ColorPickerTrigger — "trigger" slot of ColorPicker.
 */
const ColorPickerTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
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
ColorPickerTrigger.displayName = "ColorPickerTrigger"

/**
 * ColorPickerPositioner — "positioner" slot of ColorPicker.
 */
const ColorPickerPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.positioner ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.positioner ?? "")
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
ColorPickerPositioner.displayName = "ColorPickerPositioner"

/**
 * ColorPickerContent — "content" slot of ColorPicker.
 */
const ColorPickerContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
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
ColorPickerContent.displayName = "ColorPickerContent"

/**
 * ColorPickerArea — "area" slot of ColorPicker.
 */
const ColorPickerArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.area ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.area ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.area ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerArea.displayName = "ColorPickerArea"

/**
 * ColorPickerAreaThumb — "areaThumb" slot of ColorPicker.
 */
const ColorPickerAreaThumb = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.areaThumb ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.areaThumb ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.areaThumb ?? "")
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
ColorPickerAreaThumb.displayName = "ColorPickerAreaThumb"

/**
 * ColorPickerValueText — "valueText" slot of ColorPicker.
 */
const ColorPickerValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.valueText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.valueText ?? "")
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
ColorPickerValueText.displayName = "ColorPickerValueText"

/**
 * ColorPickerAreaBackground — "areaBackground" slot of ColorPicker.
 */
const ColorPickerAreaBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.areaBackground ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.areaBackground ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.areaBackground ?? "")
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
ColorPickerAreaBackground.displayName = "ColorPickerAreaBackground"

/**
 * ColorPickerChannelSlider — "channelSlider" slot of ColorPicker.
 */
const ColorPickerChannelSlider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelSlider ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.channelSlider ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelSlider ?? "")
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
ColorPickerChannelSlider.displayName = "ColorPickerChannelSlider"

/**
 * ColorPickerChannelSliderLabel — "channelSliderLabel" slot of ColorPicker.
 */
const ColorPickerChannelSliderLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelSliderLabel ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.channelSliderLabel ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelSliderLabel ?? "")
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
ColorPickerChannelSliderLabel.displayName = "ColorPickerChannelSliderLabel"

/**
 * ColorPickerChannelSliderTrack — "channelSliderTrack" slot of ColorPicker.
 */
const ColorPickerChannelSliderTrack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelSliderTrack ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.channelSliderTrack ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelSliderTrack ?? "")
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
ColorPickerChannelSliderTrack.displayName = "ColorPickerChannelSliderTrack"

/**
 * ColorPickerChannelSliderThumb — "channelSliderThumb" slot of ColorPicker.
 */
const ColorPickerChannelSliderThumb = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelSliderThumb ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.channelSliderThumb ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelSliderThumb ?? "")
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
ColorPickerChannelSliderThumb.displayName = "ColorPickerChannelSliderThumb"

/**
 * ColorPickerChannelSliderValueText — "channelSliderValueText" slot of ColorPicker.
 */
const ColorPickerChannelSliderValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelSliderValueText ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.channelSliderValueText ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelSliderValueText ?? "")
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
ColorPickerChannelSliderValueText.displayName =
  "ColorPickerChannelSliderValueText"

/**
 * ColorPickerChannelInput — "channelInput" slot of ColorPicker.
 */
const ColorPickerChannelInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelInput ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.channelInput ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelInput ?? "")
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
ColorPickerChannelInput.displayName = "ColorPickerChannelInput"

/**
 * ColorPickerTransparencyGrid — "transparencyGrid" slot of ColorPicker.
 */
const ColorPickerTransparencyGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.transparencyGrid ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.transparencyGrid ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.transparencyGrid ?? "")
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
ColorPickerTransparencyGrid.displayName = "ColorPickerTransparencyGrid"

/**
 * ColorPickerSwatchGroup — "swatchGroup" slot of ColorPicker.
 */
const ColorPickerSwatchGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.swatchGroup ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.swatchGroup ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.swatchGroup ?? "")
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
ColorPickerSwatchGroup.displayName = "ColorPickerSwatchGroup"

/**
 * ColorPickerSwatchTrigger — "swatchTrigger" slot of ColorPicker.
 */
const ColorPickerSwatchTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.swatchTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.swatchTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.swatchTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerSwatchTrigger.displayName = "ColorPickerSwatchTrigger"

/**
 * ColorPickerSwatchIndicator — "swatchIndicator" slot of ColorPicker.
 */
const ColorPickerSwatchIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.swatchIndicator ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.swatchIndicator ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.swatchIndicator ?? "")
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
ColorPickerSwatchIndicator.displayName = "ColorPickerSwatchIndicator"

/**
 * ColorPickerSwatch — "swatch" slot of ColorPicker.
 */
const ColorPickerSwatch = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.swatch ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.swatch ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.swatch ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerSwatch.displayName = "ColorPickerSwatch"

/**
 * ColorPickerEyeDropperTrigger — "eyeDropperTrigger" slot of ColorPicker.
 */
const ColorPickerEyeDropperTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.eyeDropperTrigger ?? ""
  const variantClasses = [
    ctx.size
      ? (recipe.variants?.size?.[ctx.size]?.eyeDropperTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.eyeDropperTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerEyeDropperTrigger.displayName = "ColorPickerEyeDropperTrigger"

/**
 * ColorPickerFormatTrigger — "formatTrigger" slot of ColorPicker.
 */
const ColorPickerFormatTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.formatTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.formatTrigger ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.formatTrigger ?? "")
      : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerFormatTrigger.displayName = "ColorPickerFormatTrigger"

/**
 * ColorPickerFormatSelect — "formatSelect" slot of ColorPicker.
 */
const ColorPickerFormatSelect = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.formatSelect ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.formatSelect ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.formatSelect ?? "")
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
ColorPickerFormatSelect.displayName = "ColorPickerFormatSelect"

/**
 * ColorPickerView — "view" slot of ColorPicker.
 */
const ColorPickerView = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.view ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.view ?? "") : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.view ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
ColorPickerView.displayName = "ColorPickerView"

/**
 * ColorPickerChannelText — "channelText" slot of ColorPicker.
 */
const ColorPickerChannelText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useColorPicker()
  const baseClass = recipe.base?.channelText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.channelText ?? "") : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.channelText ?? "")
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
ColorPickerChannelText.displayName = "ColorPickerChannelText"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  ColorPicker,
  ColorPickerControl,
  ColorPickerLabel,
  ColorPickerTrigger,
  ColorPickerPositioner,
  ColorPickerContent,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerValueText,
  ColorPickerAreaBackground,
  ColorPickerChannelSlider,
  ColorPickerChannelSliderLabel,
  ColorPickerChannelSliderTrack,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderValueText,
  ColorPickerChannelInput,
  ColorPickerTransparencyGrid,
  ColorPickerSwatchGroup,
  ColorPickerSwatchTrigger,
  ColorPickerSwatchIndicator,
  ColorPickerSwatch,
  ColorPickerEyeDropperTrigger,
  ColorPickerFormatTrigger,
  ColorPickerFormatSelect,
  ColorPickerView,
  ColorPickerChannelText,
}
