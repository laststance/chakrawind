/**
 * File Upload slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/file-upload.ts
 *
 * Uses CSS custom properties for colorPalette tokens (runtime-dynamic).
 * @example
 * ```tsx
 * <FileUpload>
 *   <FileUploadDropzone>
 *     <FileUploadDropzoneContent>
 *       Drop files here
 *     </FileUploadDropzoneContent>
 *   </FileUploadDropzone>
 *   <FileUploadItemGroup>
 *     <FileUploadItem>
 *       <FileUploadItemPreview />
 *       <FileUploadItemContent>
 *         <FileUploadItemName />
 *         <FileUploadItemSizeText />
 *       </FileUploadItemContent>
 *       <FileUploadItemDeleteTrigger />
 *     </FileUploadItem>
 *   </FileUploadItemGroup>
 * </FileUpload>
 * ```
 */
export const fileUploadSlotRecipeTw = {
  className: "chakra-file-upload",
  slots: [
    "root",
    "label",
    "dropzone",
    "dropzoneContent",
    "item",
    "itemGroup",
    "itemName",
    "itemContent",
    "itemSizeText",
    "itemDeleteTrigger",
    "itemPreview",
    "trigger",
    "fileText",
  ],

  base: {
    root: "flex flex-col gap-4 w-full items-start",

    label: "font-medium text-sm",

    dropzone: [
      "bg-[var(--bg)] rounded-xl border-2 border-dashed",
      "flex items-center flex-col gap-4 justify-center",
      "min-h-48 px-3 py-2 transition-colors",
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--focus-ring-color)]",
      "hover:bg-[var(--bg-subtle)]",
      "data-[dragging]:bg-[var(--cp-subtle)]",
      "data-[dragging]:border-solid",
      "data-[dragging]:border-[var(--cp-solid)]",
    ].join(" "),

    dropzoneContent: "flex flex-col items-center text-center gap-1 text-sm",

    item: [
      "relative text-sm animate-[fade-in] duration-200",
      "bg-[var(--bg)] rounded-lg border w-full",
      "flex items-center gap-3 p-4",
    ].join(" "),

    itemGroup: ["w-full flex flex-col gap-3", "empty:hidden"].join(" "),

    itemName: "text-[var(--fg)] font-medium line-clamp-1",

    itemContent: "flex flex-col gap-0.5 flex-1",

    itemSizeText: "text-[var(--fg-muted)] text-xs",

    itemDeleteTrigger: [
      "flex items-center justify-center self-start",
      "w-5 h-5 p-[2px] text-[var(--fg-muted)] cursor-pointer",
    ].join(" "),

    itemPreview:
      "text-[var(--fg-muted)] [&_svg]:w-[1.125rem] [&_svg]:h-[1.125rem]",

    trigger: "",
    fileText: "",
  },

  defaultVariants: {},
}
