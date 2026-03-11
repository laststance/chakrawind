/**
 * Dialog slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/dialog.ts
 *
 * Uses CSS custom properties for semantic tokens and z-index layering.
 * Animation properties are skipped (handled by Ark UI / CSS keyframes).
 */
export const dialogSlotRecipeTw = {
  className: "chakra-dialog",
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
      "bg-black/50 fixed left-0 top-0 w-[100dvw] h-[100dvh]",
      "z-[var(--z-index)]",
      "data-[state=open]:animate-[fade-in] data-[state=open]:duration-300",
      "data-[state=closed]:animate-[fade-out] data-[state=closed]:duration-200",
    ].join(" "),
    positioner: [
      "flex w-[100dvw] h-[100dvh] fixed left-0 top-0",
      "z-[calc(var(--dialog-z-index,50)+var(--layer-index,0))]",
      "justify-center overscroll-y-none",
    ].join(" "),
    content: [
      "flex flex-col relative w-full outline-0 rounded-xl text-sm",
      "my-[var(--dialog-margin,var(--dialog-base-margin))]",
      "z-[calc(var(--dialog-z-index,50)+var(--layer-index,0))]",
      "bg-[var(--bg-panel)] shadow-lg",
      "data-[state=open]:duration-200",
      "data-[state=closed]:duration-150",
    ].join(" "),
    header: "flex gap-2 flex-none px-6 pt-6 pb-4",
    body: "flex-1 px-6 pt-2 pb-6",
    footer: "flex items-center justify-end gap-3 px-6 pt-2 pb-4",
    title: "text-lg font-semibold",
    description: "text-[var(--fg-muted)]",
    closeTrigger: "absolute top-2 right-2",
  },

  variants: {
    placement: {
      center: {
        positioner: "items-center",
        content: "[--dialog-base-margin:auto] mx-auto",
      },
      top: {
        positioner: "items-start",
        content: "[--dialog-base-margin:4rem] mx-auto",
      },
      bottom: {
        positioner: "items-end",
        content: "[--dialog-base-margin:4rem] mx-auto",
      },
    },

    scrollBehavior: {
      inside: {
        positioner: "overflow-hidden",
        content: "max-h-[calc(100%-7.5rem)]",
        body: "overflow-auto",
      },
      outside: {
        positioner: "overflow-auto pointer-events-auto",
      },
    },

    size: {
      xs: { content: "max-w-sm" },
      sm: { content: "max-w-md" },
      md: { content: "max-w-lg" },
      lg: { content: "max-w-2xl" },
      xl: { content: "max-w-4xl" },
      cover: {
        positioner: "p-10",
        content: "w-full h-full [--dialog-margin:0]",
      },
      full: {
        content: [
          "max-w-[100dvw] min-h-[100dvh]",
          "[--dialog-margin:0] rounded-none",
        ].join(" "),
      },
    },

    motionPreset: {
      scale: {
        content: [
          "data-[state=open]:animate-[scale-in,fade-in]",
          "data-[state=closed]:animate-[scale-out,fade-out]",
        ].join(" "),
      },
      "slide-in-bottom": {
        content: [
          "data-[state=open]:animate-[slide-from-bottom,fade-in]",
          "data-[state=closed]:animate-[slide-to-bottom,fade-out]",
        ].join(" "),
      },
      "slide-in-top": {
        content: [
          "data-[state=open]:animate-[slide-from-top,fade-in]",
          "data-[state=closed]:animate-[slide-to-top,fade-out]",
        ].join(" "),
      },
      "slide-in-left": {
        content: [
          "data-[state=open]:animate-[slide-from-left,fade-in]",
          "data-[state=closed]:animate-[slide-to-left,fade-out]",
        ].join(" "),
      },
      "slide-in-right": {
        content: [
          "data-[state=open]:animate-[slide-from-right,fade-in]",
          "data-[state=closed]:animate-[slide-to-right,fade-out]",
        ].join(" "),
      },
      none: {},
    },
  },

  defaultVariants: {
    size: "md",
    scrollBehavior: "outside",
    placement: "top",
    motionPreset: "scale",
  },
}
