import * as React from "react"
import { datePickerSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/date-picker"
import { cn } from "../lib/utils"

const recipe = datePickerSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface DatePickerContextValue {
  size?: string
  hideOutsideDays?: string
  variant?: string
}

const DatePickerContext = React.createContext<DatePickerContextValue>({})

function DatePickerProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: DatePickerContextValue
}) {
  return <DatePickerContext value={value}>{children}</DatePickerContext>
}

function useDatePicker(): DatePickerContextValue {
  return React.use(DatePickerContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
  hideOutsideDays?: string
  variant?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * DatePicker — root wrapper providing variant context to sub-components.
 * @example
 * <DatePicker size="md">
 *   slot sub-components
 * </DatePicker>
 */
const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      size = "md",
      hideOutsideDays,
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
      hideOutsideDays
        ? (recipe.variants?.hideOutsideDays?.[hideOutsideDays]?.root ?? "")
        : "",
      variant ? (recipe.variants?.variant?.[variant]?.root ?? "") : "",
    ].filter(Boolean)

    return (
      <DatePickerProvider value={{ size, hideOutsideDays, variant }}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </DatePickerProvider>
    )
  },
)
DatePicker.displayName = "DatePicker"

/**
 * DatePickerControl — "control" slot of DatePicker.
 */
const DatePickerControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.control ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.control ?? "")
      : "",
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
DatePickerControl.displayName = "DatePickerControl"

/**
 * DatePickerNextTrigger — "nextTrigger" slot of DatePicker.
 */
const DatePickerNextTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.nextTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.nextTrigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.nextTrigger ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.nextTrigger ?? "")
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
DatePickerNextTrigger.displayName = "DatePickerNextTrigger"

/**
 * DatePickerPrevTrigger — "prevTrigger" slot of DatePicker.
 */
const DatePickerPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.prevTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.prevTrigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.prevTrigger ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.prevTrigger ?? "")
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
DatePickerPrevTrigger.displayName = "DatePickerPrevTrigger"

/**
 * DatePickerLabel — "label" slot of DatePicker.
 */
const DatePickerLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.label ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.label ?? "")
      : "",
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
DatePickerLabel.displayName = "DatePickerLabel"

/**
 * DatePickerTrigger — "trigger" slot of DatePicker.
 */
const DatePickerTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.trigger ?? "")
      : "",
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
DatePickerTrigger.displayName = "DatePickerTrigger"

/**
 * DatePickerPositioner — "positioner" slot of DatePicker.
 */
const DatePickerPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.positioner ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.positioner ??
        "")
      : "",
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
DatePickerPositioner.displayName = "DatePickerPositioner"

/**
 * DatePickerContent — "content" slot of DatePicker.
 */
const DatePickerContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.content ?? "")
      : "",
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
DatePickerContent.displayName = "DatePickerContent"

/**
 * DatePickerValueText — "valueText" slot of DatePicker.
 */
const DatePickerValueText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.valueText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.valueText ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.valueText ??
        "")
      : "",
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
DatePickerValueText.displayName = "DatePickerValueText"

/**
 * DatePickerView — "view" slot of DatePicker.
 */
const DatePickerView = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.view ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.view ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.view ?? "")
      : "",
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
DatePickerView.displayName = "DatePickerView"

/**
 * DatePickerClearTrigger — "clearTrigger" slot of DatePicker.
 */
const DatePickerClearTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.clearTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.clearTrigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]
          ?.clearTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.clearTrigger ?? "")
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
DatePickerClearTrigger.displayName = "DatePickerClearTrigger"

/**
 * DatePickerInput — "input" slot of DatePicker.
 */
const DatePickerInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.input ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.input ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.input ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.input ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
DatePickerInput.displayName = "DatePickerInput"

/**
 * DatePickerMonthSelect — "monthSelect" slot of DatePicker.
 */
const DatePickerMonthSelect = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.monthSelect ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.monthSelect ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.monthSelect ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.monthSelect ?? "")
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
DatePickerMonthSelect.displayName = "DatePickerMonthSelect"

/**
 * DatePickerPresetTrigger — "presetTrigger" slot of DatePicker.
 */
const DatePickerPresetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.presetTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.presetTrigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]
          ?.presetTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.presetTrigger ?? "")
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
DatePickerPresetTrigger.displayName = "DatePickerPresetTrigger"

/**
 * DatePickerRangeText — "rangeText" slot of DatePicker.
 */
const DatePickerRangeText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.rangeText ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.rangeText ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.rangeText ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.rangeText ?? "")
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
DatePickerRangeText.displayName = "DatePickerRangeText"

/**
 * DatePickerTable — "table" slot of DatePicker.
 */
const DatePickerTable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.table ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.table ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.table ?? "")
      : "",
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.table ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
DatePickerTable.displayName = "DatePickerTable"

/**
 * DatePickerTableBody — "tableBody" slot of DatePicker.
 */
const DatePickerTableBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.tableBody ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tableBody ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.tableBody ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.tableBody ?? "")
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
DatePickerTableBody.displayName = "DatePickerTableBody"

/**
 * DatePickerTableCell — "tableCell" slot of DatePicker.
 */
const DatePickerTableCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.tableCell ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tableCell ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.tableCell ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.tableCell ?? "")
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
DatePickerTableCell.displayName = "DatePickerTableCell"

/**
 * DatePickerTableCellTrigger — "tableCellTrigger" slot of DatePicker.
 */
const DatePickerTableCellTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.tableCellTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tableCellTrigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]
          ?.tableCellTrigger ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.tableCellTrigger ?? "")
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
DatePickerTableCellTrigger.displayName = "DatePickerTableCellTrigger"

/**
 * DatePickerTableHead — "tableHead" slot of DatePicker.
 */
const DatePickerTableHead = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.tableHead ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tableHead ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.tableHead ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.tableHead ?? "")
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
DatePickerTableHead.displayName = "DatePickerTableHead"

/**
 * DatePickerTableHeader — "tableHeader" slot of DatePicker.
 */
const DatePickerTableHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.tableHeader ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tableHeader ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.tableHeader ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.tableHeader ?? "")
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
DatePickerTableHeader.displayName = "DatePickerTableHeader"

/**
 * DatePickerTableRow — "tableRow" slot of DatePicker.
 */
const DatePickerTableRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.tableRow ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.tableRow ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.tableRow ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.tableRow ?? "")
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
DatePickerTableRow.displayName = "DatePickerTableRow"

/**
 * DatePickerViewControl — "viewControl" slot of DatePicker.
 */
const DatePickerViewControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.viewControl ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.viewControl ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.viewControl ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.viewControl ?? "")
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
DatePickerViewControl.displayName = "DatePickerViewControl"

/**
 * DatePickerViewTrigger — "viewTrigger" slot of DatePicker.
 */
const DatePickerViewTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.viewTrigger ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.viewTrigger ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.viewTrigger ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.viewTrigger ?? "")
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
DatePickerViewTrigger.displayName = "DatePickerViewTrigger"

/**
 * DatePickerYearSelect — "yearSelect" slot of DatePicker.
 */
const DatePickerYearSelect = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.yearSelect ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.yearSelect ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]?.yearSelect ??
        "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.yearSelect ?? "")
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
DatePickerYearSelect.displayName = "DatePickerYearSelect"

/**
 * DatePickerIndicatorGroup — "indicatorGroup" slot of DatePicker.
 */
const DatePickerIndicatorGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useDatePicker()
  const baseClass = recipe.base?.indicatorGroup ?? ""
  const variantClasses = [
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicatorGroup ?? "") : "",
    ctx.hideOutsideDays
      ? (recipe.variants?.hideOutsideDays?.[ctx.hideOutsideDays]
          ?.indicatorGroup ?? "")
      : "",
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicatorGroup ?? "")
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
DatePickerIndicatorGroup.displayName = "DatePickerIndicatorGroup"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  DatePicker,
  DatePickerControl,
  DatePickerNextTrigger,
  DatePickerPrevTrigger,
  DatePickerLabel,
  DatePickerTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerValueText,
  DatePickerView,
  DatePickerClearTrigger,
  DatePickerInput,
  DatePickerMonthSelect,
  DatePickerPresetTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerViewControl,
  DatePickerViewTrigger,
  DatePickerYearSelect,
  DatePickerIndicatorGroup,
}
