/**
 * Coexistence tests: Chakra Wind + shadcn/ui patterns
 *
 * Validates that Chakra Wind's Tailwind-based components and shadcn/ui-style
 * components can render together without CSS class conflicts or regressions.
 *
 * Matrix: preflight on/off x color mode light/dark x token override off/on
 */
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { badgeRecipeTw } from "../../packages/react/src/tailwind/recipes/badge"
import { buttonRecipeTw } from "../../packages/react/src/tailwind/recipes/button"
import { createTwStyled } from "../../packages/react/src/tailwind/tw-factory"
import { COEXIST_MATRIX, type CoexistMatrixEntry } from "./setup"

/**
 * Simulates a shadcn/ui-style Button component (Tailwind-only, no Chakra deps).
 * This represents a typical shadcn/ui component pattern.
 */
function ShadcnButton({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: {
  variant?: "default" | "destructive" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
  [key: string]: any
}) {
  const variantClasses: Record<string, string> = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
    destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
    outline: "border border-slate-200 bg-white hover:bg-slate-100",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
  }
  const sizeClasses: Record<string, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  }
  const cls = [
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}

/**
 * Simulates a shadcn/ui Badge component.
 */
function ShadcnBadge({
  variant = "default",
  className = "",
  children,
  ...props
}: {
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
  children?: React.ReactNode
  [key: string]: any
}) {
  const variantClasses: Record<string, string> = {
    default: "bg-slate-900 text-slate-50",
    secondary: "bg-slate-100 text-slate-900",
    destructive: "bg-red-500 text-slate-50",
    outline: "text-slate-950 border border-slate-200",
  }
  const cls = [
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={cls} {...props}>
      {children}
    </div>
  )
}

// Chakra Wind components
const ChakraButton = createTwStyled("button", buttonRecipeTw)
const ChakraBadge = createTwStyled("span", badgeRecipeTw)

describe("Coexistence: Chakra Wind + shadcn/ui", () => {
  describe.each(COEXIST_MATRIX)(
    "preflight=$preflight, colorMode=$colorMode, tokenOverride=$tokenOverride",
    (entry: CoexistMatrixEntry) => {
      it("renders both Chakra and shadcn buttons side by side", () => {
        const wrapper =
          entry.colorMode === "dark"
            ? ({ children }: { children: React.ReactNode }) => (
                <div className="dark" data-theme="dark">
                  {children}
                </div>
              )
            : undefined

        const { container } = render(
          <div>
            <ChakraButton data-testid="chakra-btn">Chakra</ChakraButton>
            <ShadcnButton data-testid="shadcn-btn">Shadcn</ShadcnButton>
          </div>,
          { wrapper },
        )

        const chakraBtn = screen.getByTestId("chakra-btn")
        const shadcnBtn = screen.getByTestId("shadcn-btn")

        // Both should render
        expect(chakraBtn).toBeInTheDocument()
        expect(shadcnBtn).toBeInTheDocument()

        // Classes should not leak between components
        expect(chakraBtn.className).toContain("inline-flex")
        expect(shadcnBtn.className).toContain("inline-flex")

        // Chakra button has recipe-specific classes
        expect(chakraBtn.className).toContain("bg-[var(--cp-solid)]")
        // shadcn button has its own classes
        expect(shadcnBtn.className).toContain("bg-slate-900")

        // No class collision: each has its own independent classes
        expect(chakraBtn.className).not.toContain("bg-slate-900")
        expect(shadcnBtn.className).not.toContain("bg-[var(--cp-solid)]")
      })

      it("renders both Chakra and shadcn badges side by side", () => {
        render(
          <div>
            <ChakraBadge data-testid="chakra-badge">Chakra</ChakraBadge>
            <ShadcnBadge data-testid="shadcn-badge">Shadcn</ShadcnBadge>
          </div>,
        )

        const chakraBadge = screen.getByTestId("chakra-badge")
        const shadcnBadge = screen.getByTestId("shadcn-badge")

        expect(chakraBadge).toBeInTheDocument()
        expect(shadcnBadge).toBeInTheDocument()

        // Chakra badge uses CSS variable approach
        expect(chakraBadge.className).toContain("bg-[var(--cp-subtle)]")
        // shadcn badge uses direct Tailwind classes
        expect(shadcnBadge.className).toContain("bg-slate-900")
      })

      it("mixes Chakra and shadcn components in the same container", () => {
        render(
          <div className="flex gap-2" data-testid="mixed-container">
            <ChakraButton variant="outline" data-testid="c-outline">
              Chakra Outline
            </ChakraButton>
            <ShadcnButton variant="outline" data-testid="s-outline">
              Shadcn Outline
            </ShadcnButton>
            <ChakraBadge variant="solid" data-testid="c-solid-badge">
              Chakra Solid
            </ChakraBadge>
            <ShadcnBadge variant="destructive" data-testid="s-destr-badge">
              Shadcn Destructive
            </ShadcnBadge>
          </div>,
        )

        // All components should coexist in the same container
        expect(screen.getByTestId("c-outline")).toBeInTheDocument()
        expect(screen.getByTestId("s-outline")).toBeInTheDocument()
        expect(screen.getByTestId("c-solid-badge")).toBeInTheDocument()
        expect(screen.getByTestId("s-destr-badge")).toBeInTheDocument()

        // Chakra outline uses CSS vars
        expect(screen.getByTestId("c-outline").className).toContain("border")
        // shadcn outline uses direct Tailwind
        expect(screen.getByTestId("s-outline").className).toContain("border")

        // Different badge variants don't conflict
        expect(screen.getByTestId("c-solid-badge").className).toContain(
          "bg-[var(--cp-solid)]",
        )
        expect(screen.getByTestId("s-destr-badge").className).toContain(
          "bg-red-500",
        )
      })

      it("token override does not break component rendering", () => {
        const tokenOverrideStyle =
          entry.tokenOverride === "on"
            ? ({ "--cp-solid": "#custom-color" } as React.CSSProperties)
            : undefined

        render(
          <div style={tokenOverrideStyle}>
            <ChakraButton data-testid="tok-chakra">Chakra</ChakraButton>
            <ShadcnButton data-testid="tok-shadcn">Shadcn</ShadcnButton>
          </div>,
        )

        // Both should still render regardless of token override
        expect(screen.getByTestId("tok-chakra")).toBeInTheDocument()
        expect(screen.getByTestId("tok-shadcn")).toBeInTheDocument()

        // shadcn is unaffected by Chakra token overrides
        expect(screen.getByTestId("tok-shadcn").className).toContain(
          "bg-slate-900",
        )
      })
    },
  )
})
