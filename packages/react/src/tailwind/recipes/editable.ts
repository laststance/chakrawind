/**
 * Editable slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/editable.ts
 *
 * @example
 * ```tsx
 * <Editable size="md" defaultValue="Click to edit">
 *   <EditablePreview />
 *   <EditableInput />
 *   <EditableControl>
 *     <EditableSubmitTrigger />
 *     <EditableCancelTrigger />
 *   </EditableControl>
 * </Editable>
 * ```
 */
export const editableSlotRecipeTw = {
  className: "chakra-editable",
  slots: [
    "root",
    "preview",
    "input",
    "control",
    "area",
    "textarea",
    "editTrigger",
    "submitTrigger",
    "cancelTrigger",
  ],

  base: {
    root: "inline-flex items-center relative gap-1.5 w-full",

    preview: [
      "text-[length:inherit] font-[weight:inherit] text-[align:inherit]",
      "bg-transparent rounded-lg",
      "py-1 px-1 inline-flex items-center",
      "transition-[background,color,border-color,box-shadow] duration-200",
      "cursor-text",
      "hover:bg-[var(--bg-muted)]",
      "data-[disabled]:select-none",
    ].join(" "),

    input: [
      "text-[length:inherit] font-[weight:inherit] text-[align:inherit]",
      "bg-transparent rounded-lg",
      "outline-0 py-1 px-1",
      "transition-[background,color,border-color,box-shadow] duration-200",
      "w-full",
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "placeholder:opacity-60",
    ].join(" "),

    control: "inline-flex items-center gap-1.5",
    area: "",
    textarea: "",
    editTrigger: "",
    submitTrigger: "",
    cancelTrigger: "",
  },

  variants: {
    size: {
      sm: {
        root: "text-sm",
        preview: "min-h-8",
        input: "min-h-8",
      },
      md: {
        root: "text-sm",
        preview: "min-h-9",
        input: "min-h-9",
      },
      lg: {
        root: "text-base",
        preview: "min-h-10",
        input: "min-h-10",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
