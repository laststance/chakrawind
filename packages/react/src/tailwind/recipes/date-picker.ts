/**
 * DatePicker slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/date-picker.ts
 *
 * Slots: root, control, nextTrigger, prevTrigger, label, trigger,
 *        positioner, content, valueText, view, clearTrigger, input,
 *        monthSelect, presetTrigger, rangeText, table, tableBody,
 *        tableCell, tableCellTrigger, tableHead, tableHeader,
 *        tableRow, viewControl, viewTrigger, yearSelect,
 *        indicatorGroup
 */

const chevronDownSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`

const navTriggerClasses = [
  "inline-flex items-center justify-center",
  "w-[var(--datepicker-nav-trigger-size)] h-[var(--datepicker-nav-trigger-size)]",
  "rounded-lg text-[var(--fg)]",
  "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
  "hover:bg-[var(--cp-subtle)]",
  "disabled:opacity-50",
  "[&_svg]:w-4 [&_svg]:h-4",
].join(" ")

const selectClasses = [
  "h-[var(--datepicker-select-height)]",
  "ps-2 pe-8 text-sm border rounded-lg outline-none",
  "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
  "appearance-none [field-sizing:content]",
  `bg-[image:${chevronDownSvg}]`,
  "bg-no-repeat bg-[position:right_0.375rem_center] bg-[size:1.25em]",
].join(" ")

export const datePickerSlotRecipeTw = {
  className: "chakra-date-picker",
  slots: [
    "root",
    "control",
    "nextTrigger",
    "prevTrigger",
    "label",
    "trigger",
    "positioner",
    "content",
    "valueText",
    "view",
    "clearTrigger",
    "input",
    "monthSelect",
    "presetTrigger",
    "rangeText",
    "table",
    "tableBody",
    "tableCell",
    "tableCellTrigger",
    "tableHead",
    "tableHeader",
    "tableRow",
    "viewControl",
    "viewTrigger",
    "yearSelect",
    "indicatorGroup",
  ],

  base: {
    root: [
      "flex flex-col gap-1.5 w-full",
      "[--datepicker-indicators-offset:0.75rem]",
      "disabled:opacity-50",
    ].join(" "),

    label: "text-sm font-medium",

    indicatorGroup: [
      "absolute end-[var(--datepicker-indicators-offset)]",
      "top-1/2 -translate-y-1/2",
      "flex items-center justify-center gap-1",
    ].join(" "),

    control: "flex items-center gap-2 w-full relative",

    input: [
      "flex-1 min-w-0 h-[var(--datepicker-input-height)]",
      "[--input-height:var(--datepicker-input-height)]",
      "px-[var(--datepicker-input-px)] text-sm bg-transparent",
      "rounded-lg outline-0 appearance-none text-[var(--fg)]",
      "[--focus-color:var(--cp-focus-ring)]",
      "[--error-color:var(--border-error)]",
      "placeholder:text-[var(--fg-muted)]",
      "aria-[invalid=true]:ring-[var(--error-color)]",
      "aria-[invalid=true]:border-[var(--error-color)]",
    ].join(" "),

    trigger: [
      "inline-flex items-center justify-center w-6 h-6",
      "rounded text-[var(--fg-muted)] outline-none",
      "hover:text-[var(--fg)]",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "[&_svg]:w-4 [&_svg]:h-4",
    ].join(" "),

    content: [
      "flex flex-col gap-3 p-3 min-w-[18rem]",
      "bg-[var(--bg-panel)] rounded-lg shadow-lg text-[var(--fg)]",
      "max-h-[var(--available-height)]",
      "[--date-picker-z-index:var(--z-popover)]",
      "z-[calc(var(--date-picker-z-index)+var(--layer-index,0))]",
      "outline-none",
      "data-[state=open]:animate-[scale-fade-in_150ms_ease-out]",
      "data-[state=closed]:animate-[scale-fade-out_100ms_ease-in]",
    ].join(" "),

    view: "flex flex-col gap-3",

    viewControl: [
      "flex items-center justify-between gap-2",
      "h-[var(--datepicker-nav-trigger-size)]",
    ].join(" "),

    viewTrigger: [
      "inline-flex flex-1 items-center justify-center gap-1",
      "py-1.5 px-2 text-sm font-semibold rounded-lg",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "hover:bg-[var(--cp-subtle)]",
    ].join(" "),

    prevTrigger: navTriggerClasses,
    nextTrigger: navTriggerClasses,

    rangeText: "text-sm font-semibold",

    table: "border-collapse border-spacing-0",

    tableHeader: [
      "w-[var(--table-cell-size)] py-2 text-xs font-medium",
      "text-[var(--fg-muted)] text-center uppercase",
      "[&[data-type='week-number']]:text-[var(--fg-subtle)]",
    ].join(" "),

    tableCell: [
      "py-0.5",
      "[&[data-type='week-number']]:text-[var(--fg-subtle)]",
    ].join(" "),

    tableCellTrigger: [
      "inline-flex items-center justify-center",
      "min-w-[var(--table-cell-size)] min-h-[var(--table-cell-size)]",
      "text-sm rounded-lg cursor-default relative",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "hover:bg-[var(--cp-subtle)]",
      "[[data-view=month]_&]:w-[calc(var(--table-cell-size)*1.75)]",
      "[[data-view=year]_&]:w-[calc(var(--table-cell-size)*1.75)]",
      "data-[today]:text-[var(--cp-fg)] data-[today]:font-semibold",
      "data-[today]:underline data-[today]:underline-offset-[3px] data-[today]:decoration-2",
      "data-[selected]:bg-[var(--cp-solid)] data-[selected]:text-[var(--cp-contrast)]",
      "data-[selected]:hover:bg-[var(--cp-solid)]",
      "[&[data-in-range]]:bg-[var(--cp-subtle)] [&[data-in-range]]:text-[var(--cp-fg)]",
      "[&[data-in-range]]:rounded-none [&[data-in-range]]:hover:bg-[var(--cp-subtle)]",
      "[&[data-range-start]]:bg-[var(--cp-solid)] [&[data-range-start]]:text-[var(--cp-contrast)]",
      "[&[data-range-start]]:rounded-none [&[data-range-start]]:rounded-s-lg",
      "[&[data-range-start]]:hover:bg-[var(--cp-solid)]",
      "[&[data-range-end]]:bg-[var(--cp-solid)] [&[data-range-end]]:text-[var(--cp-contrast)]",
      "[&[data-range-end]]:rounded-none [&[data-range-end]]:rounded-e-lg",
      "[&[data-range-end]]:hover:bg-[var(--cp-solid)]",
      "[&[data-range-start][data-range-end]]:rounded-lg",
      "[&[data-selected][data-in-range]]:bg-[var(--cp-solid)]",
      "[&[data-selected][data-in-range]]:text-[var(--cp-contrast)]",
      "[&[data-selected][data-in-range]]:rounded-lg",
      "[&[data-selected][data-in-range]]:hover:bg-[var(--cp-solid)]",
      "disabled:opacity-40",
    ].join(" "),

    monthSelect: selectClasses,
    yearSelect: selectClasses,

    clearTrigger: [
      "inline-flex items-center justify-center w-6 h-6 shrink-0",
      "text-xs rounded-lg text-[var(--fg-muted)]",
      "hover:text-[var(--fg)]",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "[&_svg]:w-4 [&_svg]:h-4",
    ].join(" "),

    positioner: "",
    valueText: "",
    presetTrigger: "",
    tableBody: "",
    tableHead: "",
    tableRow: "",
  },

  variants: {
    size: {
      xs: {
        root: [
          "[--datepicker-input-height:2rem]",
          "[--datepicker-input-px:0.5rem]",
          "[--datepicker-indicators-offset:0.5rem]",
        ].join(" "),
        view: [
          "[--table-cell-size:2rem]",
          "[--datepicker-nav-trigger-size:1.75rem]",
          "[--datepicker-select-height:2rem]",
        ].join(" "),
      },
      sm: {
        root: [
          "[--datepicker-input-height:2.25rem]",
          "[--datepicker-input-px:0.625rem]",
          "[--datepicker-indicators-offset:0.625rem]",
        ].join(" "),
        view: [
          "[--table-cell-size:2.25rem]",
          "[--datepicker-nav-trigger-size:2rem]",
          "[--datepicker-select-height:2.25rem]",
        ].join(" "),
      },
      md: {
        root: [
          "[--datepicker-input-height:2.5rem]",
          "[--datepicker-input-px:0.75rem]",
        ].join(" "),
        view: [
          "[--table-cell-size:2.5rem]",
          "[--datepicker-nav-trigger-size:2rem]",
          "[--datepicker-select-height:2.5rem]",
        ].join(" "),
      },
      lg: {
        root: [
          "[--datepicker-input-height:2.75rem]",
          "[--datepicker-input-px:1rem]",
        ].join(" "),
        view: [
          "[--table-cell-size:2.5rem]",
          "[--datepicker-nav-trigger-size:2.25rem]",
          "[--datepicker-select-height:2.5rem]",
        ].join(" "),
      },
      xl: {
        root: [
          "[--datepicker-input-height:3rem]",
          "[--datepicker-input-px:1.125rem]",
        ].join(" "),
        view: [
          "[--table-cell-size:2.5rem]",
          "[--datepicker-nav-trigger-size:2.25rem]",
          "[--datepicker-select-height:2.5rem]",
        ].join(" "),
      },
    },

    hideOutsideDays: {
      true: {
        tableCellTrigger: "[&[data-outside-range]]:invisible",
      },
    },

    variant: {
      outline: {
        input: [
          "bg-transparent border border-[var(--border-color)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
      },
      subtle: {
        input: [
          "border border-transparent bg-[var(--bg-muted)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-color)]",
        ].join(" "),
      },
      flushed: {
        input: [
          "bg-transparent border-b border-b-[var(--border-color)] rounded-none px-0",
          "focus-visible:border-[var(--focus-color)]",
          "focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]",
          "focus-visible:aria-[invalid=true]:border-[var(--error-color)]",
          "focus-visible:aria-[invalid=true]:shadow-[0px_1px_0px_0px_var(--error-color)]",
        ].join(" "),
        indicatorGroup: "end-0",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
