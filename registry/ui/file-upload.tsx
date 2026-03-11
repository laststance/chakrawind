import * as React from "react"
import { fileUploadSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/file-upload"
import { cn } from "../lib/utils"

const recipe = fileUploadSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface FileUploadContextValue {}

const FileUploadContext = React.createContext<FileUploadContextValue>({})

function FileUploadProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: FileUploadContextValue
}) {
  return <FileUploadContext value={value}>{children}</FileUploadContext>
}

function useFileUpload(): FileUploadContextValue {
  return React.use(FileUploadContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * FileUpload — root wrapper providing variant context to sub-components.
 * @example
 * <FileUpload >
 *   slot sub-components
 * </FileUpload>
 */
const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  ({ className, colorPalette, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [].filter(Boolean)

    return (
      <FileUploadProvider value={{}}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </FileUploadProvider>
    )
  },
)
FileUpload.displayName = "FileUpload"

/**
 * FileUploadLabel — "label" slot of FileUpload.
 */
const FileUploadLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.label ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadLabel.displayName = "FileUploadLabel"

/**
 * FileUploadDropzone — "dropzone" slot of FileUpload.
 */
const FileUploadDropzone = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.dropzone ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadDropzone.displayName = "FileUploadDropzone"

/**
 * FileUploadDropzoneContent — "dropzoneContent" slot of FileUpload.
 */
const FileUploadDropzoneContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.dropzoneContent ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadDropzoneContent.displayName = "FileUploadDropzoneContent"

/**
 * FileUploadItem — "item" slot of FileUpload.
 */
const FileUploadItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItem.displayName = "FileUploadItem"

/**
 * FileUploadItemGroup — "itemGroup" slot of FileUpload.
 */
const FileUploadItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.itemGroup ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItemGroup.displayName = "FileUploadItemGroup"

/**
 * FileUploadItemName — "itemName" slot of FileUpload.
 */
const FileUploadItemName = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.itemName ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItemName.displayName = "FileUploadItemName"

/**
 * FileUploadItemContent — "itemContent" slot of FileUpload.
 */
const FileUploadItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.itemContent ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItemContent.displayName = "FileUploadItemContent"

/**
 * FileUploadItemSizeText — "itemSizeText" slot of FileUpload.
 */
const FileUploadItemSizeText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.itemSizeText ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItemSizeText.displayName = "FileUploadItemSizeText"

/**
 * FileUploadItemDeleteTrigger — "itemDeleteTrigger" slot of FileUpload.
 */
const FileUploadItemDeleteTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.itemDeleteTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItemDeleteTrigger.displayName = "FileUploadItemDeleteTrigger"

/**
 * FileUploadItemPreview — "itemPreview" slot of FileUpload.
 */
const FileUploadItemPreview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.itemPreview ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadItemPreview.displayName = "FileUploadItemPreview"

/**
 * FileUploadTrigger — "trigger" slot of FileUpload.
 */
const FileUploadTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadTrigger.displayName = "FileUploadTrigger"

/**
 * FileUploadFileText — "fileText" slot of FileUpload.
 */
const FileUploadFileText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useFileUpload()
  const baseClass = recipe.base?.fileText ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
FileUploadFileText.displayName = "FileUploadFileText"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  FileUpload,
  FileUploadLabel,
  FileUploadDropzone,
  FileUploadDropzoneContent,
  FileUploadItem,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemContent,
  FileUploadItemSizeText,
  FileUploadItemDeleteTrigger,
  FileUploadItemPreview,
  FileUploadTrigger,
  FileUploadFileText,
}
