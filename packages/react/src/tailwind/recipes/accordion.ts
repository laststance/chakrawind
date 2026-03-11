/**
 * Accordion slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/accordion.ts
 *
 * Uses CSS custom properties for accordion sizing/spacing and colorPalette tokens.
 * @example
 * ```tsx
 * <Accordion variant="outline" size="md">
 *   <AccordionItem>
 *     <AccordionItemTrigger>Title</AccordionItemTrigger>
 *     <AccordionItemContent>
 *       <AccordionItemBody>Body text</AccordionItemBody>
 *     </AccordionItemContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export const accordionSlotRecipeTw = {
  className: "chakra-accordion",
  slots: [
    "root",
    "item",
    "itemTrigger",
    "itemContent",
    "itemBody",
    "itemIndicator",
  ],
  base: {
    root: "w-full [--accordion-radius:theme(borderRadius.lg)]",
    item: "[overflow-anchor:none]",
    itemTrigger: [
      "flex items-center text-start w-full outline-0 gap-3",
      "font-medium rounded-[var(--accordion-radius)]",
      "focus-visible:outline-2 focus-visible:outline-[var(--cp-focus-ring,theme(colors.blue.500))]",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
    ].join(" "),
    itemBody:
      "pt-[var(--accordion-padding-y)] pb-[calc(var(--accordion-padding-y)*2)]",
    itemContent: [
      "overflow-hidden rounded-[var(--accordion-radius)]",
      "data-[state=open]:animate-[expand-height,fade-in] data-[state=open]:duration-200",
      "data-[state=closed]:animate-[collapse-height,fade-out] data-[state=closed]:duration-200",
    ].join(" "),
    itemIndicator: [
      "transition-[rotate] duration-200 origin-center text-[var(--fg-subtle)]",
      "data-[state=open]:rotate-180",
      "[&_svg]:w-[1.2em] [&_svg]:h-[1.2em]",
    ].join(" "),
  },

  variants: {
    variant: {
      outline: {
        root: "",
        item: "border-b",
        itemTrigger: "",
        itemContent: "",
        itemBody: "",
        itemIndicator: "",
      },

      subtle: {
        root: "",
        item: [
          "rounded-[var(--accordion-radius)]",
          "data-[state=open]:bg-[var(--cp-subtle)]",
        ].join(" "),
        itemTrigger: "px-[var(--accordion-padding-x)]",
        itemContent: "px-[var(--accordion-padding-x)]",
        itemBody: "",
        itemIndicator: "",
      },

      enclosed: {
        root: "border rounded-[var(--accordion-radius)] divide-y overflow-hidden",
        item: "data-[state=open]:bg-[var(--bg-subtle)]",
        itemTrigger: "px-[var(--accordion-padding-x)]",
        itemContent: "px-[var(--accordion-padding-x)]",
        itemBody: "",
        itemIndicator: "",
      },

      plain: {
        root: "",
        item: "",
        itemTrigger: "",
        itemContent: "",
        itemBody: "",
        itemIndicator: "",
      },
    },

    size: {
      sm: {
        root: "[--accordion-padding-x:theme(spacing.3)] [--accordion-padding-y:theme(spacing.2)]",
        item: "",
        itemTrigger: "text-sm py-[var(--accordion-padding-y)]",
        itemContent: "",
        itemBody: "",
        itemIndicator: "",
      },
      md: {
        root: "[--accordion-padding-x:theme(spacing.4)] [--accordion-padding-y:theme(spacing.2)]",
        item: "",
        itemTrigger: "text-base py-[var(--accordion-padding-y)]",
        itemContent: "",
        itemBody: "",
        itemIndicator: "",
      },
      lg: {
        root: "[--accordion-padding-x:theme(spacing[4.5])] [--accordion-padding-y:theme(spacing[2.5])]",
        item: "",
        itemTrigger: "text-lg py-[var(--accordion-padding-y)]",
        itemContent: "",
        itemBody: "",
        itemIndicator: "",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
}
