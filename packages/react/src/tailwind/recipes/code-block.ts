/**
 * CodeBlock slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/code-block.ts
 *
 * Slots: root, content, title, header, footer, control, overlay,
 *        code, codeText, copyTrigger, copyIndicator,
 *        collapseTrigger, collapseIndicator, collapseText
 */
export const codeBlockSlotRecipeTw = {
  className: "chakra-code-block",
  slots: [
    "root",
    "content",
    "title",
    "header",
    "footer",
    "control",
    "overlay",
    "code",
    "codeText",
    "copyTrigger",
    "copyIndicator",
    "collapseTrigger",
    "collapseIndicator",
    "collapseText",
  ],

  base: {
    root: [
      "rounded-[var(--code-block-radius)] overflow-hidden",
      "bg-[var(--bg)] text-[var(--fg)] border",
      "[--code-block-max-height:320px]",
      "[--code-block-bg:var(--bg)]",
      "[--code-block-fg:var(--fg)]",
      "[--code-block-obscured-opacity:0.5]",
      "[--code-block-obscured-blur:1px]",
      "[--code-block-line-number-width:0.75rem]",
      "[--code-block-line-number-margin:1rem]",
      "[--code-block-highlight-bg:theme(colors.teal.500/20%)]",
      "[--code-block-highlight-border:theme(colors.teal.500)]",
      "[--code-block-highlight-added-bg:theme(colors.green.500/20%)]",
      "[--code-block-highlight-added-border:theme(colors.green.500)]",
      "[--code-block-highlight-removed-bg:theme(colors.red.500/20%)]",
      "[--code-block-highlight-removed-border:theme(colors.red.500)]",
    ].join(" "),

    header: [
      "flex items-center gap-2 relative",
      "px-[var(--code-block-padding)]",
      "min-h-[var(--code-block-header-height)]",
      "mb-[calc(var(--code-block-padding)/2*-1)]",
    ].join(" "),

    title: [
      "inline-flex items-center gap-1.5 flex-1",
      "text-[var(--fg-muted)]",
    ].join(" "),

    control: "gap-1.5 inline-flex items-center",

    footer: [
      "flex items-center justify-center gap-2",
      "px-[var(--code-block-padding)]",
      "min-h-[var(--code-block-header-height)]",
    ].join(" "),

    content: [
      "relative dark",
      "rounded-b-[var(--code-block-radius)]",
      "max-h-[var(--code-block-max-height)]",
      "[&_::selection]:bg-blue-500/40",
      "data-[expanded]:max-h-none",
    ].join(" "),

    overlay: [
      "[--bg:theme(colors.black/50%)]",
      "flex items-end justify-center p-4",
      "bg-[image:linear-gradient(0deg,var(--bg)_25%,transparent_100%)]",
      "text-white min-h-20 absolute bottom-0 inset-x-0 z-[1] font-medium",
      "data-[expanded]:hidden",
    ].join(" "),

    code: [
      "font-mono leading-relaxed whitespace-pre",
      "[counter-reset:line_0]",
      "overflow-x-auto overflow-y-hidden",
    ].join(" "),

    codeText: [
      "px-[var(--code-block-padding)] py-[var(--code-block-padding)]",
      "relative block w-full",
      /* focused lines blur */
      "[&[data-has-focused]_[data-line]:not([data-focused])]:transition-[opacity,filter]",
      "[&[data-has-focused]_[data-line]:not([data-focused])]:duration-300",
      "[&[data-has-focused]_[data-line]:not([data-focused])]:ease-in-out",
      "[&[data-has-focused]_[data-line]:not([data-focused])]:opacity-[var(--code-block-obscured-opacity)]",
      "[&[data-has-focused]_[data-line]:not([data-focused])]:blur-[var(--code-block-obscured-blur)]",
      "[&[data-has-focused]:hover]:[--code-block-obscured-opacity:1]",
      "[&[data-has-focused]:hover]:[--code-block-obscured-blur:0px]",
      /* plaintext with line numbers */
      "[&[data-has-line-numbers][data-plaintext]]:ps-[calc(var(--code-block-line-number-width)+var(--code-block-line-number-margin)+var(--code-block-padding))]",
      /* data-line highlight */
      "[&_[data-line]]:relative",
      "[&_[data-line]]:pe-[var(--code-block-padding)]",
      "[&_[data-line]]:[--highlight-bg:var(--code-block-highlight-bg)]",
      "[&_[data-line]]:[--highlight-border:var(--code-block-highlight-border)]",
      "[&_[data-line][data-highlight]]:inline-block [&_[data-line][data-highlight]]:w-full",
      "[&_[data-line][data-diff]]:inline-block [&_[data-line][data-diff]]:w-full",
      "[&_[data-line][data-highlight]:after]:content-[''] [&_[data-line][data-highlight]:after]:block",
      "[&_[data-line][data-highlight]:after]:absolute [&_[data-line][data-highlight]:after]:top-0",
      "[&_[data-line][data-highlight]:after]:start-[calc(var(--code-block-padding)*-1)]",
      "[&_[data-line][data-highlight]:after]:end-0",
      "[&_[data-line][data-highlight]:after]:w-[calc(100%+var(--code-block-padding)*2)]",
      "[&_[data-line][data-highlight]:after]:h-full",
      "[&_[data-line][data-highlight]:after]:bg-[var(--highlight-bg)]",
      "[&_[data-line][data-highlight]:after]:border-s-2 [&_[data-line][data-highlight]:after]:border-s-[var(--highlight-border)]",
      "[&_[data-line][data-diff]:after]:content-[''] [&_[data-line][data-diff]:after]:block",
      "[&_[data-line][data-diff]:after]:absolute [&_[data-line][data-diff]:after]:top-0",
      "[&_[data-line][data-diff]:after]:start-[calc(var(--code-block-padding)*-1)]",
      "[&_[data-line][data-diff]:after]:end-0",
      "[&_[data-line][data-diff]:after]:w-[calc(100%+var(--code-block-padding)*2)]",
      "[&_[data-line][data-diff]:after]:h-full",
      "[&_[data-line][data-diff]:after]:bg-[var(--highlight-bg)]",
      "[&_[data-line][data-diff]:after]:border-s-2 [&_[data-line][data-diff]:after]:border-s-[var(--highlight-border)]",
      /* diff added / removed */
      "[&_[data-line][data-diff='added']]:[--highlight-bg:var(--code-block-highlight-added-bg)]",
      "[&_[data-line][data-diff='added']]:[--highlight-border:var(--code-block-highlight-added-border)]",
      "[&_[data-line][data-diff='removed']]:[--highlight-bg:var(--code-block-highlight-removed-bg)]",
      "[&_[data-line][data-diff='removed']]:[--highlight-border:var(--code-block-highlight-removed-border)]",
      /* word wrap */
      "[&[data-word-wrap][data-plaintext]]:whitespace-pre-wrap [&[data-word-wrap][data-plaintext]]:break-all",
      "[&[data-word-wrap]_[data-line]]:whitespace-pre-wrap [&[data-word-wrap]_[data-line]]:break-all",
      /* line numbers */
      "[&[data-has-line-numbers]]:[--content:counter(line)]",
      "[&[data-has-line-numbers]_[data-line]:before]:content-[var(--content)]",
      "[&[data-has-line-numbers]_[data-line]:before]:[counter-increment:line]",
      "[&[data-has-line-numbers]_[data-line]:before]:w-[var(--code-block-line-number-width)]",
      "[&[data-has-line-numbers]_[data-line]:before]:mr-[var(--code-block-line-number-margin)]",
      "[&[data-has-line-numbers]_[data-line]:before]:inline-block",
      "[&[data-has-line-numbers]_[data-line]:before]:text-end",
      "[&[data-has-line-numbers]_[data-line]:before]:select-none",
      "[&[data-has-line-numbers]_[data-line]:before]:whitespace-nowrap",
      "[&[data-has-line-numbers]_[data-line]:before]:opacity-40",
      "[&[data-has-line-numbers]_[data-diff='added']:before]:content-['+']",
      "[&[data-has-line-numbers]_[data-diff='removed']:before]:content-['-']",
    ].join(" "),

    copyTrigger: "",
    copyIndicator: "",
    collapseTrigger: "",
    collapseIndicator: "",
    collapseText: "",
  },

  variants: {
    size: {
      sm: {
        root: [
          "[--code-block-padding:1rem]",
          "[--code-block-radius:0.375rem]",
          "[--code-block-header-height:2rem]",
        ].join(" "),
        title: "text-xs",
        code: "text-xs",
      },
      md: {
        root: [
          "[--code-block-padding:1rem]",
          "[--code-block-radius:0.5rem]",
          "[--code-block-header-height:2.5rem]",
        ].join(" "),
        title: "text-xs",
        code: "text-sm",
      },
      lg: {
        root: [
          "[--code-block-padding:1.25rem]",
          "[--code-block-radius:0.75rem]",
          "[--code-block-header-height:3rem]",
        ].join(" "),
        title: "text-sm",
        code: "text-sm",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
}
