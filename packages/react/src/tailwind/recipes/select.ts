/**
 * Select slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/select.ts
 *
 * Uses CSS custom properties for sizing/spacing and colorPalette tokens.
 * @example
 * ```tsx
 * <Select variant="outline" size="md">
 *   <SelectLabel>Label</SelectLabel>
 *   <SelectTrigger>
 *     <SelectValueText />
 *     <SelectIndicator />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="a">Option A</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 */
export const selectSlotRecipeTw = {
  className: "chakra-select",
  slots: [
    "root",
    "label",
    "trigger",
    "indicator",
    "indicatorGroup",
    "content",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
    "control",
    "valueText",
    "clearTrigger",
  ],

  base: {
    root: "flex flex-col gap-1.5 w-full",
    trigger: [
      "flex items-center justify-between w-full",
      "min-h-[var(--select-trigger-height)]",
      "[--input-height:var(--select-trigger-height)]",
      "px-[var(--select-trigger-padding-x)]",
      "rounded-lg select-none text-start",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "placeholder-shown:text-[var(--fg-muted)]/80",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
      "data-[invalid]:border-[var(--border-error)]",
    ].join(" "),
    indicatorGroup: [
      "flex items-center gap-1",
      "absolute right-0 top-0 bottom-0",
      "px-[var(--select-trigger-padding-x)]",
      "pointer-events-none",
    ].join(" "),
    indicator: [
      "flex items-center justify-center",
      "text-[var(--fg-muted)]",
      "data-[disabled]:text-[var(--fg-subtle)]",
      "data-[invalid]:text-[var(--fg-error)]",
    ].join(" "),
    content: [
      "bg-[var(--bg-panel)] flex flex-col",
      "[--select-z-index:50]",
      "z-[calc(var(--select-z-index)+var(--layer-index,0))]",
      "rounded-lg outline-0 max-h-96 overflow-y-auto shadow-md",
      "data-[state=open]:animate-[slide-fade-in] data-[state=open]:duration-150",
      "data-[state=closed]:animate-[slide-fade-out] data-[state=closed]:duration-100",
    ].join(" "),
    item: [
      "relative select-none flex items-center gap-2",
      "cursor-pointer justify-between flex-1 text-start rounded-md",
      "data-[highlighted]:bg-[var(--bg-emphasized)]/60",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "[&_svg]:w-4 [&_svg]:h-4",
    ].join(" "),
    control: "relative",
    itemText: "flex-1",
    itemGroup: "first:mt-0",
    itemGroupLabel: "py-1 font-medium",
    label: [
      "font-medium select-none text-sm",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
    ].join(" "),
    valueText: "line-clamp-1 max-w-[80%]",
    clearTrigger: [
      "text-[var(--fg-muted)] pointer-events-auto",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "rounded-md",
    ].join(" "),
    itemIndicator: "",
  },

  variants: {
    variant: {
      outline: {
        trigger: [
          "bg-transparent border border-[var(--border-color)]",
          "data-[expanded]:border-[var(--border-emphasized)]",
        ].join(" "),
      },
      subtle: {
        trigger: "border border-transparent bg-[var(--bg-muted)]",
      },
      ghost: {
        trigger: [
          "bg-transparent",
          "data-[expanded]:bg-[var(--bg-muted)]",
        ].join(" "),
      },
    },

    size: {
      xs: {
        root: "[--select-trigger-height:2rem] [--select-trigger-padding-x:0.5rem]",
        content: "p-1 gap-1 text-xs",
        trigger: "text-xs gap-1",
        item: "py-1 px-2",
        itemGroupLabel: "py-1 px-2",
        indicator: "[&_svg]:w-3.5 [&_svg]:h-3.5",
      },
      sm: {
        root: "[--select-trigger-height:2.25rem] [--select-trigger-padding-x:0.625rem]",
        content: "p-1 text-sm",
        trigger: "text-sm gap-1",
        indicator: "[&_svg]:w-4 [&_svg]:h-4",
        item: "py-1 px-1.5",
        itemGroup: "mt-1",
        itemGroupLabel: "py-1 px-1.5",
      },
      md: {
        root: "[--select-trigger-height:2.5rem] [--select-trigger-padding-x:0.75rem]",
        content: "p-1 text-sm",
        itemGroup: "mt-1.5",
        item: "py-1.5 px-2",
        itemIndicator: "flex items-center justify-center",
        itemGroupLabel: "py-1.5 px-2",
        trigger: "text-sm gap-2",
        indicator: "[&_svg]:w-4 [&_svg]:h-4",
      },
      lg: {
        root: "[--select-trigger-height:3rem] [--select-trigger-padding-x:1rem]",
        content: "p-1.5 text-base",
        itemGroup: "mt-2",
        item: "py-2 px-3",
        itemGroupLabel: "py-2 px-3",
        trigger: "text-base py-3 gap-2",
        indicator: "[&_svg]:w-5 [&_svg]:h-5",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
