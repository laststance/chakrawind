/**
 * Drawer slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/drawer.ts
 *
 * Uses CSS custom properties for semantic tokens and z-index layering.
 * Animation properties are skipped (handled by Ark UI / CSS keyframes).
 */
export const drawerSlotRecipeTw = {
  className: "chakra-drawer",
  slots: [
    "trigger",
    "backdrop",
    "positioner",
    "content",
    "title",
    "description",
    "closeTrigger",
    "header",
    "body",
    "footer",
  ],
  base: {
    trigger: "",
    backdrop: [
      "bg-black/50 fixed left-0 top-0 w-screen h-[100dvh]",
      "z-[var(--z-index)]",
      "data-[state=open]:animate-[fade-in] data-[state=open]:duration-300",
      "data-[state=closed]:animate-[fade-out] data-[state=closed]:duration-200",
    ].join(" "),
    positioner: [
      "flex w-screen h-[100dvh] fixed left-0 top-0",
      "z-[calc(var(--drawer-z-index,50)+var(--layer-index,0))]",
      "overscroll-y-none",
    ].join(" "),
    content: [
      "flex flex-col relative w-full outline-0",
      "z-[calc(var(--drawer-z-index,50)+var(--layer-index,0))]",
      "text-sm max-h-[100dvh] text-inherit",
      "bg-[var(--bg-panel)] shadow-lg",
      "data-[state=open]:duration-500 data-[state=open]:ease-[cubic-bezier(0.32,0.72,0,1)]",
      "data-[state=closed]:duration-300 data-[state=closed]:ease-[cubic-bezier(0.32,0.72,0,1)]",
    ].join(" "),
    header: "flex items-center gap-2 flex-none px-6 pt-6 pb-4",
    body: "px-6 py-2 flex-1 overflow-auto",
    footer: "flex items-center justify-end gap-3 px-6 pt-2 pb-4",
    title: "flex-1 text-lg font-semibold",
    description: "text-[var(--fg-muted)]",
    closeTrigger: "absolute top-3 right-2",
  },

  variants: {
    size: {
      xs: { content: "max-w-xs" },
      sm: { content: "max-w-md" },
      md: { content: "max-w-lg" },
      lg: { content: "max-w-2xl" },
      xl: { content: "max-w-4xl" },
      full: { content: "max-w-screen h-[100dvh]" },
    },

    placement: {
      start: {
        positioner: "justify-start items-stretch",
        content: [
          "data-[state=open]:animate-[slide-from-left-full,fade-in]",
          "data-[state=closed]:animate-[slide-to-left-full,fade-out]",
        ].join(" "),
      },
      end: {
        positioner: "justify-end items-stretch",
        content: [
          "data-[state=open]:animate-[slide-from-right-full,fade-in]",
          "data-[state=closed]:animate-[slide-to-right-full,fade-out]",
        ].join(" "),
      },
      top: {
        positioner: "justify-stretch items-start",
        content: [
          "max-w-full",
          "data-[state=open]:animate-[slide-from-top-full,fade-in]",
          "data-[state=closed]:animate-[slide-to-top-full,fade-out]",
        ].join(" "),
      },
      bottom: {
        positioner: "justify-stretch items-end",
        content: [
          "max-w-full",
          "data-[state=open]:animate-[slide-from-bottom-full,fade-in]",
          "data-[state=closed]:animate-[slide-to-bottom-full,fade-out]",
        ].join(" "),
      },
    },

    contained: {
      true: {
        positioner: "p-4",
        content: "rounded-xl",
      },
    },
  },

  defaultVariants: {
    size: "xs",
    placement: "end",
  },
}
