import type { Meta } from "@storybook/react-vite"
import { DatePickerBasic } from "compositions/examples/date-picker-basic"
import { DatePickerControlled } from "compositions/examples/date-picker-controlled"
import { DatePickerDefaultValue } from "compositions/examples/date-picker-default-value"
import { DatePickerDefaultView } from "compositions/examples/date-picker-default-view"
import { DatePickerDisabled } from "compositions/examples/date-picker-disabled"
import { DatePickerFixedWeeks } from "compositions/examples/date-picker-fixed-weeks"
import { DatePickerForm } from "compositions/examples/date-picker-form"
import { DatePickerFormatParse } from "compositions/examples/date-picker-format-parse"
import { DatePickerLocale } from "compositions/examples/date-picker-locale"
import { DatePickerMinMax } from "compositions/examples/date-picker-min-max"
import { DatePickerMonthPicker } from "compositions/examples/date-picker-month-picker"
import { DatePickerMonthRange } from "compositions/examples/date-picker-month-range"
import { DatePickerMultiSelection } from "compositions/examples/date-picker-multi-selection"
import { DatePickerMultipleMonths } from "compositions/examples/date-picker-multiple-months"
import { DatePickerOpenOnClick } from "compositions/examples/date-picker-open-on-click"
import { DatePickerPresets } from "compositions/examples/date-picker-presets"
import { DatePickerRangeSelection } from "compositions/examples/date-picker-range-selection"
import { DatePickerReadOnly } from "compositions/examples/date-picker-read-only"
import { DatePickerRootProvider } from "compositions/examples/date-picker-root-provider"
import { DatePickerUnavailable } from "compositions/examples/date-picker-unavailable"
import { DatePickerWithButton } from "compositions/examples/date-picker-with-button"
import { DatePickerWithClear } from "compositions/examples/date-picker-with-clear"
import { DatePickerWithField } from "compositions/examples/date-picker-with-field"
import { DatePickerWithHeaderLayout } from "compositions/examples/date-picker-with-header-layout"
import { DatePickerWithHookForm } from "compositions/examples/date-picker-with-hook-form"
import { DatePickerWithInputGroup } from "compositions/examples/date-picker-with-input-group"
import { DatePickerWithMonthYearSelect } from "compositions/examples/date-picker-with-month-year-select"
import { DatePickerWithOutsideIcon } from "compositions/examples/date-picker-with-outside-icon"
import { DatePickerWithPlacement } from "compositions/examples/date-picker-with-placement"
import { DatePickerWithPresetsSidebar } from "compositions/examples/date-picker-with-presets-sidebar"
import { DatePickerWithSizes } from "compositions/examples/date-picker-with-sizes"
import { DatePickerWithTime } from "compositions/examples/date-picker-with-time"
import { DatePickerWithTodayButton } from "compositions/examples/date-picker-with-today-button"
import { DatePickerWithVariants } from "compositions/examples/date-picker-with-variants"
import { DatePickerYearPicker } from "compositions/examples/date-picker-year-picker"
import { DatePickerYearPickerRange } from "compositions/examples/date-picker-year-picker-range"
import { Box } from "../src"

export default {
  title: "Components / Date Picker",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DatePickerBasic
export const Sizes = DatePickerWithSizes
export const Variants = DatePickerWithVariants
export const Disabled = DatePickerDisabled
export const ReadOnly = DatePickerReadOnly
export const Controlled = DatePickerControlled
export const Store = DatePickerRootProvider
export const DefaultValue = DatePickerDefaultValue
export const DefaultView = DatePickerDefaultView
export const RangeSelection = DatePickerRangeSelection
export const MultipleSelection = DatePickerMultiSelection
export const MonthPicker = DatePickerMonthPicker
export const MonthRange = DatePickerMonthRange
export const YearPicker = DatePickerYearPicker
export const YearRange = DatePickerYearPickerRange
export const MinMax = DatePickerMinMax
export const UnavailableDates = DatePickerUnavailable
export const FormatParse = DatePickerFormatParse
export const Localization = DatePickerLocale
export const ButtonTrigger = DatePickerWithButton
export const OutsideIcon = DatePickerWithOutsideIcon
export const InputGroup = DatePickerWithInputGroup
export const ClearIcon = DatePickerWithClear
export const Placement = DatePickerWithPlacement
export const HeaderLayout = DatePickerWithHeaderLayout
export const MonthYearSelect = DatePickerWithMonthYearSelect
export const MultipleMonths = DatePickerMultipleMonths
export const Presets = DatePickerPresets
export const PresetsSidebar = DatePickerWithPresetsSidebar
export const TodayButton = DatePickerWithTodayButton
export const WithTime = DatePickerWithTime
export const Form = DatePickerForm
export const HookForm = DatePickerWithHookForm
export const Field = DatePickerWithField
export const FixedWeeks = DatePickerFixedWeeks
export const OpenOnClick = DatePickerOpenOnClick
