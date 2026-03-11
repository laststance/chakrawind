/**
 * Tabs slot recipe — Tailwind CSS class-based version.
 * Converted from packages/react/src/theme/recipes/tabs.ts
 *
 * Uses CSS custom properties for tab sizing and indicator styling.
 * @example
 * ```tsx
 * <Tabs variant="line" size="md">
 *   <TabsList>
 *     <TabsTrigger value="one">Tab 1</TabsTrigger>
 *     <TabsTrigger value="two">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="one">Content 1</TabsContent>
 * </Tabs>
 * ```
 */
export const tabsSlotRecipeTw = {
  className: "chakra-tabs",
  slots: ["root", "trigger", "list", "content", "contentGroup", "indicator"],
  base: {
    root: [
      "[--tabs-trigger-radius:theme(borderRadius.lg)]",
      "[--tabs-indicator-shadow:theme(boxShadow.xs)]",
      "[--tabs-indicator-bg:var(--bg)]",
      "relative",
      "data-[orientation=horizontal]:block",
      "data-[orientation=vertical]:flex",
    ].join(" "),
    list: [
      "inline-flex relative isolate min-h-[var(--tabs-height)]",
      "data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col",
    ].join(" "),
    trigger: [
      "outline-0 min-w-[var(--tabs-height)] h-[var(--tabs-height)]",
      "flex items-center font-medium relative cursor-pointer gap-2",
      "focus-visible:z-[1] focus-visible:outline-2 focus-visible:outline-[var(--cp-focus-ring,theme(colors.blue.500))]",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ].join(" "),
    content: [
      "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring-color)]",
      "data-[orientation=horizontal]:w-full data-[orientation=horizontal]:pt-[var(--tabs-content-padding)]",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:ps-[var(--tabs-content-padding)]",
    ].join(" "),
    contentGroup: "",
    indicator: [
      "w-[var(--width)] h-[var(--height)]",
      "rounded-[var(--tabs-trigger-radius)]",
      "bg-[var(--tabs-indicator-bg)]",
      "shadow-[var(--tabs-indicator-shadow)]",
      "-z-[1]",
    ].join(" "),
  },

  variants: {
    fitted: {
      true: {
        root: "",
        list: "flex",
        trigger: "flex-1 text-center justify-center",
        content: "",
        contentGroup: "",
        indicator: "",
      },
    },

    justify: {
      start: {
        root: "",
        list: "justify-start",
        trigger: "",
        content: "",
        contentGroup: "",
        indicator: "",
      },
      center: {
        root: "",
        list: "justify-center",
        trigger: "",
        content: "",
        contentGroup: "",
        indicator: "",
      },
      end: {
        root: "",
        list: "justify-end",
        trigger: "",
        content: "",
        contentGroup: "",
        indicator: "",
      },
    },

    size: {
      sm: {
        root: "[--tabs-height:theme(spacing.9)] [--tabs-content-padding:theme(spacing.3)]",
        list: "",
        trigger: "py-1 px-3 text-sm",
        content: "",
        contentGroup: "",
        indicator: "",
      },
      md: {
        root: "[--tabs-height:theme(spacing.10)] [--tabs-content-padding:theme(spacing.4)]",
        list: "",
        trigger: "py-2 px-4 text-sm",
        content: "",
        contentGroup: "",
        indicator: "",
      },
      lg: {
        root: "[--tabs-height:theme(spacing.11)] [--tabs-content-padding:theme(spacing[4.5])]",
        list: "",
        trigger: "py-2 px-[1.125rem] text-base",
        content: "",
        contentGroup: "",
        indicator: "",
      },
    },

    variant: {
      line: {
        root: "",
        list: [
          "flex border-[var(--border-color)]",
          "data-[orientation=horizontal]:border-b",
          "data-[orientation=vertical]:border-e",
        ].join(" "),
        trigger: [
          "text-[var(--fg-muted)]",
          "disabled:active:bg-transparent",
          "aria-selected:text-[var(--fg)]",
          "data-[orientation=horizontal]:aria-selected:[--indicator-offset-y:-1px] data-[orientation=horizontal]:aria-selected:[--indicator-color:var(--cp-solid)]",
          "data-[orientation=horizontal]:aria-selected:shadow-[0_var(--indicator-offset-y,0)_0_0_var(--indicator-color)]",
          "data-[orientation=vertical]:aria-selected:[--indicator-offset-x:-1px]",
          "data-[orientation=vertical]:aria-selected:shadow-[var(--indicator-offset-x,0)_0_0_0_var(--indicator-color)]",
        ].join(" "),
        content: "",
        contentGroup: "",
        indicator: "",
      },

      subtle: {
        root: "",
        list: "",
        trigger: [
          "rounded-[var(--tabs-trigger-radius)]",
          "text-[var(--fg-muted)]",
          "aria-selected:bg-[var(--cp-subtle)] aria-selected:text-[var(--cp-fg)]",
        ].join(" "),
        content: "",
        contentGroup: "",
        indicator: "",
      },

      enclosed: {
        root: "",
        list: "bg-[var(--bg-muted)] p-1 rounded-xl min-h-[calc(var(--tabs-height)-4px)]",
        trigger: [
          "justify-center text-[var(--fg-muted)]",
          "rounded-[var(--tabs-trigger-radius)]",
          "aria-selected:bg-[var(--bg)] aria-selected:text-[var(--cp-fg)] aria-selected:shadow-xs",
        ].join(" "),
        content: "",
        contentGroup: "",
        indicator: "",
      },

      outline: {
        root: "",
        list: [
          "[--line-thickness:1px] [--line-offset:calc(var(--line-thickness)*-1)]",
          "border-[var(--border-color)] flex",
          "data-[orientation=horizontal]:before:content-[''] data-[orientation=horizontal]:before:absolute data-[orientation=horizontal]:before:bottom-0 data-[orientation=horizontal]:before:w-full data-[orientation=horizontal]:before:border-b-[var(--line-thickness)] data-[orientation=horizontal]:before:border-b-[var(--border-color)]",
          "data-[orientation=vertical]:before:content-[''] data-[orientation=vertical]:before:absolute data-[orientation=vertical]:before:inset-inline-[var(--line-offset)] data-[orientation=vertical]:before:h-[calc(100%-calc(var(--line-thickness)*2))] data-[orientation=vertical]:before:border-e-[var(--line-thickness)] data-[orientation=vertical]:before:border-e-[var(--border-color)]",
        ].join(" "),
        trigger: [
          "text-[var(--fg-muted)] border border-transparent",
          "aria-selected:bg-[var(--bg,white)] aria-selected:text-[var(--cp-fg)]",
          "data-[orientation=horizontal]:rounded-t-[var(--tabs-trigger-radius)] data-[orientation=horizontal]:mb-[var(--line-offset)]",
          "data-[orientation=horizontal]:aria-selected:border-[var(--border-color)] data-[orientation=horizontal]:aria-selected:border-b-transparent",
          "data-[orientation=vertical]:rounded-s-[var(--tabs-trigger-radius)] data-[orientation=vertical]:me-[var(--line-offset)]",
          "data-[orientation=vertical]:aria-selected:border-[var(--border-color)] data-[orientation=vertical]:aria-selected:border-e-transparent",
        ].join(" "),
        content: "",
        contentGroup: "",
        indicator: "",
      },

      plain: {
        root: "",
        list: "",
        trigger: [
          "text-[var(--fg-muted)]",
          "aria-selected:text-[var(--cp-fg)]",
          "rounded-[var(--tabs-trigger-radius)]",
          "&[data-selected][data-ssr]:bg-[var(--tabs-indicator-bg)] &[data-selected][data-ssr]:shadow-[var(--tabs-indicator-shadow)] &[data-selected][data-ssr]:rounded-[var(--tabs-trigger-radius)]",
        ].join(" "),
        content: "",
        contentGroup: "",
        indicator: "",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "line",
  },
}
