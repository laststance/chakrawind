import * as React from "react"
import { carouselSlotRecipeTw } from "../../packages/react/src/tailwind/recipes/carousel"
import { cn } from "../lib/utils"

const recipe = carouselSlotRecipeTw

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CarouselContextValue {}

const CarouselContext = React.createContext<CarouselContextValue>({})

function CarouselProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: CarouselContextValue
}) {
  return <CarouselContext value={value}>{children}</CarouselContext>
}

function useCarousel(): CarouselContextValue {
  return React.use(CarouselContext)
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  colorPalette?: string
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/**
 * Carousel — root wrapper providing variant context to sub-components.
 * @example
 * <Carousel >
 *   slot sub-components
 * </Carousel>
 */
const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, colorPalette, children, ...props }, ref) => {
    const baseClass = recipe.base?.root ?? ""
    const variantClasses = [].filter(Boolean)

    return (
      <CarouselProvider value={{}}>
        <div
          className={cn(baseClass, ...variantClasses, className)}
          ref={ref}
          data-palette={colorPalette}
          {...props}
        >
          {children}
        </div>
      </CarouselProvider>
    )
  },
)
Carousel.displayName = "Carousel"

/**
 * CarouselItemGroup — "itemGroup" slot of Carousel.
 */
const CarouselItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
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
CarouselItemGroup.displayName = "CarouselItemGroup"

/**
 * CarouselItem — "item" slot of Carousel.
 */
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
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
CarouselItem.displayName = "CarouselItem"

/**
 * CarouselControl — "control" slot of Carousel.
 */
const CarouselControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.control ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselControl.displayName = "CarouselControl"

/**
 * CarouselNextTrigger — "nextTrigger" slot of Carousel.
 */
const CarouselNextTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.nextTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselNextTrigger.displayName = "CarouselNextTrigger"

/**
 * CarouselPrevTrigger — "prevTrigger" slot of Carousel.
 */
const CarouselPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.prevTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselPrevTrigger.displayName = "CarouselPrevTrigger"

/**
 * CarouselIndicatorGroup — "indicatorGroup" slot of Carousel.
 */
const CarouselIndicatorGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.indicatorGroup ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselIndicatorGroup.displayName = "CarouselIndicatorGroup"

/**
 * CarouselIndicator — "indicator" slot of Carousel.
 */
const CarouselIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.indicator ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <span
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselIndicator.displayName = "CarouselIndicator"

/**
 * CarouselAutoplayTrigger — "autoplayTrigger" slot of Carousel.
 */
const CarouselAutoplayTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.autoplayTrigger ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <button
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselAutoplayTrigger.displayName = "CarouselAutoplayTrigger"

/**
 * CarouselProgressText — "progressText" slot of Carousel.
 */
const CarouselProgressText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.progressText ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselProgressText.displayName = "CarouselProgressText"

/**
 * CarouselAutoplayIndicator — "autoplayIndicator" slot of Carousel.
 */
const CarouselAutoplayIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const ctx = useCarousel()
  const baseClass = recipe.base?.autoplayIndicator ?? ""
  const variantClasses = [].filter(Boolean)

  return (
    <div
      className={cn(baseClass, ...variantClasses, className)}
      ref={ref}
      {...props}
    />
  )
})
CarouselAutoplayIndicator.displayName = "CarouselAutoplayIndicator"

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Carousel,
  CarouselItemGroup,
  CarouselItem,
  CarouselControl,
  CarouselNextTrigger,
  CarouselPrevTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselAutoplayTrigger,
  CarouselProgressText,
  CarouselAutoplayIndicator,
}
