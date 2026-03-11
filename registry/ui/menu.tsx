import * as React from "react"
import { menuSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/menu"
import { cn } from "../lib/utils"

const recipe = menuSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface MenuContextValue {
  variant?: string
  size?: string
}

const MenuContext = React.createContext<MenuContextValue>({})

function MenuProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: MenuContextValue
}) {
  return <MenuContext value={value}>{children}</MenuContext>
}

function useMenu(): MenuContextValue {
  return React.use(MenuContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  size?: string
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Menu — context provider for variant props (no DOM "root" slot).
 * Wrap sub-components with this to propagate variant/size values.
 * @example
 * <Menu variant="subtle">
 *   slot sub-components
 * </Menu>
 */
const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      className,
      variant = "subtle",
      size = "md",
      colorPalette,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <MenuProvider value={{ variant, size }}>
        <div
          className={cn(className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </MenuProvider>
    )
  },
)
Menu.displayName = "Menu"

/**
 * MenuContent — "content" slot of Menu.
 */
const MenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.content ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.content ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.content ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuContent.displayName = "MenuContent"

/**
 * MenuItem — "item" slot of Menu.
 */
const MenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.item ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.item ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.item ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuItem.displayName = "MenuItem"

/**
 * MenuItemText — "itemText" slot of Menu.
 */
const MenuItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.itemText ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemText ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemText ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuItemText.displayName = "MenuItemText"

/**
 * MenuItemIndicator — "itemIndicator" slot of Menu.
 */
const MenuItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.itemIndicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemIndicator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemIndicator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuItemIndicator.displayName = "MenuItemIndicator"

/**
 * MenuItemGroupLabel — "itemGroupLabel" slot of Menu.
 */
const MenuItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.itemGroupLabel ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemGroupLabel ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemGroupLabel ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuItemGroupLabel.displayName = "MenuItemGroupLabel"

/**
 * MenuIndicator — "indicator" slot of Menu.
 */
const MenuIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.indicator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.indicator ?? "") : "",
  ].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuIndicator.displayName = "MenuIndicator"

/**
 * MenuItemCommand — "itemCommand" slot of Menu.
 */
const MenuItemCommand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.itemCommand ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemCommand ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemCommand ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuItemCommand.displayName = "MenuItemCommand"

/**
 * MenuSeparator — "separator" slot of Menu.
 */
const MenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.separator ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.separator ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.separator ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuSeparator.displayName = "MenuSeparator"

/**
 * MenuArrow — "arrow" slot of Menu.
 */
const MenuArrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.arrow ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.arrow ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.arrow ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuArrow.displayName = "MenuArrow"

/**
 * MenuArrowTip — "arrowTip" slot of Menu.
 */
const MenuArrowTip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.arrowTip ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.arrowTip ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.arrowTip ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuArrowTip.displayName = "MenuArrowTip"

/**
 * MenuTrigger — "trigger" slot of Menu.
 */
const MenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.trigger ?? ""
  const variantClasses = [
    ctx.variant ? (recipe.variants?.variant?.[ctx.variant]?.trigger ?? "") : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.trigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuTrigger.displayName = "MenuTrigger"

/**
 * MenuTriggerItem — "triggerItem" slot of Menu.
 */
const MenuTriggerItem = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.triggerItem ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.triggerItem ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.triggerItem ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuTriggerItem.displayName = "MenuTriggerItem"

/**
 * MenuPositioner — "positioner" slot of Menu.
 */
const MenuPositioner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.positioner ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.positioner ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.positioner ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuPositioner.displayName = "MenuPositioner"

/**
 * MenuContextTrigger — "contextTrigger" slot of Menu.
 */
const MenuContextTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.contextTrigger ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.contextTrigger ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.contextTrigger ?? "") : "",
  ].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuContextTrigger.displayName = "MenuContextTrigger"

/**
 * MenuItemGroup — "itemGroup" slot of Menu.
 */
const MenuItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useMenu()
  const baseClass = recipe.base?.itemGroup ?? ""
  const variantClasses = [
    ctx.variant
      ? (recipe.variants?.variant?.[ctx.variant]?.itemGroup ?? "")
      : "",
    ctx.size ? (recipe.variants?.size?.[ctx.size]?.itemGroup ?? "") : "",
  ].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
MenuItemGroup.displayName = "MenuItemGroup"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemText,
  MenuItemIndicator,
  MenuItemGroupLabel,
  MenuIndicator,
  MenuItemCommand,
  MenuSeparator,
  MenuArrow,
  MenuArrowTip,
  MenuTrigger,
  MenuTriggerItem,
  MenuPositioner,
  MenuContextTrigger,
  MenuItemGroup,
}
