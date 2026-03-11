/**
 * Combobox slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/combobox.ts
 *
 * Uses CSS custom properties for sizing/spacing and colorPalette tokens.
 * @example
 * ```tsx
 * <Combobox variant="outline" size="md">
 *   <ComboboxLabel>Label</ComboboxLabel>
 *   <ComboboxControl>
 *     <ComboboxInput />
 *     <ComboboxTrigger />
 *   </ComboboxControl>
 *   <ComboboxContent>
 *     <ComboboxItem value="a">Option A</ComboboxItem>
 *   </ComboboxContent>
 * </Combobox>
 * ```
 */
export const comboboxSlotRecipeTw = {
  className: "chakra-combobox",
  slots: [
    "root",
    "label",
    "control",
    "input",
    "trigger",
    "clearTrigger",
    "indicatorGroup",
    "content",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
    "empty",
  ],

  base: {
    root: "flex flex-col gap-1.5 w-full",

    label: [
      "font-medium select-none text-sm",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
    ].join(" "),

    control: [
      "relative",
      "[--padding-factor:1]",
      "[--combobox-input-padding-end:var(--combobox-input-padding-x)]",
      "[&:has([data-part=trigger]),[&:has([data-part=clear-trigger])]]:![--combobox-input-padding-end:calc(var(--combobox-input-height)*var(--padding-factor))]",
      "[&:has([data-part=trigger]):has([data-part=clear-trigger]:not([hidden]))]:![--padding-factor:1.5]",
    ].join(" "),

    input: [
      "flex items-center justify-between",
      "bg-[var(--bg-panel)] w-full",
      "min-h-[var(--combobox-input-height)]",
      "ps-[var(--combobox-input-padding-x)]",
      "pe-[var(--combobox-input-padding-end)]",
      "[--input-height:var(--combobox-input-height)]",
      "rounded-lg outline-0 select-none text-start",
      "placeholder-shown:text-[var(--fg-muted)]",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
      "[--focus-color:var(--cp-focus-ring)]",
      "[--error-color:var(--border-error)]",
      "data-[invalid]:[--focus-ring-color:var(--error-color)]",
      "data-[invalid]:border-[var(--error-color)]",
    ].join(" "),

    trigger:
      "inline-flex items-center justify-center [--input-height:var(--combobox-input-height)]",

    clearTrigger: [
      "text-[var(--fg-muted)] pointer-events-auto",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "rounded-md",
    ].join(" "),

    indicatorGroup: [
      "flex items-center justify-center gap-1",
      "absolute right-0 top-0 bottom-0",
      "px-[var(--combobox-input-padding-x)]",
      "[&_svg]:w-[var(--combobox-indicator-size)] [&_svg]:h-[var(--combobox-indicator-size)]",
      "[data-disabled]_&:opacity-50",
    ].join(" "),

    content: [
      "bg-[var(--bg-panel)] flex flex-col",
      "[--combobox-z-index:50]",
      "z-[calc(var(--combobox-z-index)+var(--layer-index,0))]",
      "rounded-lg outline-0 max-h-96 overflow-y-auto shadow-md",
      "data-[state=open]:animate-[slide-fade-in] data-[state=open]:duration-150",
      "data-[state=closed]:animate-[slide-fade-out] data-[state=closed]:duration-0",
      "&[data-empty]:not(:has([data-scope=combobox][data-part=empty])):opacity-0",
    ].join(" "),

    item: [
      "relative select-none flex items-center gap-2",
      "py-[var(--combobox-item-padding-y)]",
      "px-[var(--combobox-item-padding-x)]",
      "cursor-pointer justify-between flex-1 text-start rounded-md",
      "data-[highlighted]:bg-[var(--bg-emphasized)]/60",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "[&_svg]:w-[var(--combobox-indicator-size)] [&_svg]:h-[var(--combobox-indicator-size)]",
    ].join(" "),

    empty:
      "py-[var(--combobox-item-padding-y)] px-[var(--combobox-item-padding-x)]",
    itemText: "flex-1",
    itemGroup: "pb-[var(--combobox-item-padding-y)] last:pb-0",
    itemGroupLabel:
      "font-medium py-[var(--combobox-item-padding-y)] px-[var(--combobox-item-padding-x)]",
    itemIndicator: "",
  },

  variants: {
    variant: {
      outline: {
        input: [
          "bg-transparent border border-[var(--border-color)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
        ].join(" "),
      },
      subtle: {
        input: [
          "border border-transparent bg-[var(--bg-muted)]",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
        ].join(" "),
      },
      flushed: {
        input: [
          "bg-transparent border-b border-b-[var(--border-color)]",
          "rounded-none px-0",
          "focus-visible:border-[var(--focus-color)]",
          "focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]",
        ].join(" "),
        indicatorGroup: "px-0",
      },
    },

    size: {
      xs: {
        root: [
          "[--combobox-input-height:2rem]",
          "[--combobox-input-padding-x:0.5rem]",
          "[--combobox-indicator-size:0.875rem]",
        ].join(" "),
        input: "text-xs",
        content: [
          "[--combobox-item-padding-x:0.375rem]",
          "[--combobox-item-padding-y:0.25rem]",
          "[--combobox-indicator-size:0.875rem]",
          "p-1 text-xs",
        ].join(" "),
        trigger: "text-xs gap-1",
      },
      sm: {
        root: [
          "[--combobox-input-height:2.25rem]",
          "[--combobox-input-padding-x:0.625rem]",
          "[--combobox-indicator-size:1rem]",
        ].join(" "),
        input: "text-sm",
        content: [
          "[--combobox-item-padding-x:0.5rem]",
          "[--combobox-item-padding-y:0.375rem]",
          "[--combobox-indicator-size:1rem]",
          "p-1 text-sm",
        ].join(" "),
        trigger: "text-sm gap-1",
      },
      md: {
        root: [
          "[--combobox-input-height:2.5rem]",
          "[--combobox-input-padding-x:0.75rem]",
          "[--combobox-indicator-size:1rem]",
        ].join(" "),
        input: "text-sm",
        content: [
          "[--combobox-item-padding-x:0.5rem]",
          "[--combobox-item-padding-y:0.375rem]",
          "[--combobox-indicator-size:1rem]",
          "p-1 text-sm",
        ].join(" "),
        itemIndicator: "flex items-center justify-center",
        trigger: "text-sm gap-2",
      },
      lg: {
        root: [
          "[--combobox-input-height:3rem]",
          "[--combobox-input-padding-x:1rem]",
          "[--combobox-indicator-size:1.25rem]",
        ].join(" "),
        input: "text-base",
        content: [
          "[--combobox-item-padding-y:0.5rem]",
          "[--combobox-item-padding-x:0.75rem]",
          "[--combobox-indicator-size:1.25rem]",
          "p-1.5 text-base",
        ].join(" "),
        trigger: "text-base py-3 gap-2",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
