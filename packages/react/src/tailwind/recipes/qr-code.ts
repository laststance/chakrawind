/**
 * QrCode slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/qr-code.ts
 *
 * Slots: root, frame, pattern, overlay, downloadTrigger
 */
export const qrCodeSlotRecipeTw = {
  className: "chakra-qr-code",
  slots: ["root", "frame", "pattern", "overlay", "downloadTrigger"],

  base: {
    root: [
      "relative w-fit",
      "[--qr-code-overlay-size:calc(var(--qr-code-size)/3)]",
    ].join(" "),

    frame: [
      "w-[var(--qr-code-size)] h-[var(--qr-code-size)]",
      "fill-current",
    ].join(" "),

    overlay: [
      "flex items-center justify-center",
      "w-[var(--qr-code-overlay-size)] h-[var(--qr-code-overlay-size)]",
      "p-1 bg-[var(--bg)] rounded",
    ].join(" "),

    pattern: "",
    downloadTrigger: "",
  },

  variants: {
    size: {
      "2xs": { root: "[--qr-code-size:40px]" },
      xs: { root: "[--qr-code-size:64px]" },
      sm: { root: "[--qr-code-size:80px]" },
      md: { root: "[--qr-code-size:120px]" },
      lg: { root: "[--qr-code-size:160px]" },
      xl: { root: "[--qr-code-size:200px]" },
      "2xl": { root: "[--qr-code-size:240px]" },
      full: { root: "[--qr-code-size:100%]" },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
