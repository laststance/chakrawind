import type { Meta } from "@storybook/react-vite"
import { DatePickerCalendarBasic } from "compositions/examples/date-picker-calendar-basic"
import { DatePickerCalendarControlled } from "compositions/examples/date-picker-calendar-controlled"
import { DatePickerCalendarDefaultValue } from "compositions/examples/date-picker-calendar-default-value"
import { DatePickerCalendarHideOutsideDays } from "compositions/examples/date-picker-calendar-hide-outside-days"
import { DatePickerCalendarLocale } from "compositions/examples/date-picker-calendar-locale"
import { DatePickerCalendarMaxSelected } from "compositions/examples/date-picker-calendar-max-selected"
import { DatePickerCalendarMinMax } from "compositions/examples/date-picker-calendar-min-max"
import { DatePickerCalendarMultiSelection } from "compositions/examples/date-picker-calendar-multi-selection"
import { DatePickerCalendarMultipleMonths } from "compositions/examples/date-picker-calendar-multiple-months"
import { DatePickerCalendarRangeSelection } from "compositions/examples/date-picker-calendar-range-selection"
import { DatePickerCalendarUnavailable } from "compositions/examples/date-picker-calendar-unavailable"
import { DatePickerCalendarWeekNumbers } from "compositions/examples/date-picker-calendar-week-numbers"
import { DatePickerCalendarWithSizes } from "compositions/examples/date-picker-calendar-with-sizes"
import { DatePickerWithTimeGrid } from "compositions/examples/date-picker-with-time-grid"
import { Box } from "../src"

export default {
  title: "Components / Date Picker Calendar",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Basic = DatePickerCalendarBasic
export const Sizes = DatePickerCalendarWithSizes
export const HideOutsideDays = DatePickerCalendarHideOutsideDays
export const Controlled = DatePickerCalendarControlled
export const DefaultValue = DatePickerCalendarDefaultValue
export const RangeSelection = DatePickerCalendarRangeSelection
export const MultiSelection = DatePickerCalendarMultiSelection
export const MinMax = DatePickerCalendarMinMax
export const UnavailableDates = DatePickerCalendarUnavailable
export const MultipleMonths = DatePickerCalendarMultipleMonths
export const Locale = DatePickerCalendarLocale
export const TimeGrid = DatePickerWithTimeGrid
export const MaxSelected = DatePickerCalendarMaxSelected
export const WeekNumbers = DatePickerCalendarWeekNumbers
