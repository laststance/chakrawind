import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { badgeRecipeTw } from "../src/tailwind/recipes/badge"
import { buttonRecipeTw } from "../src/tailwind/recipes/button"
import { separatorRecipeTw } from "../src/tailwind/recipes/separator"
import { createTwStyled } from "../src/tailwind/tw-factory"

describe("Tailwind Recipe Integration", () => {
  describe("Button recipe", () => {
    const TwButton = createTwStyled("button", buttonRecipeTw)

    it("renders with default variant and size", () => {
      render(<TwButton data-testid="btn">Click</TwButton>)
      const el = screen.getByTestId("btn")
      // Default: size=md, variant=solid
      expect(el.className).toContain("h-10")
      expect(el.className).toContain("px-4")
      expect(el.className).toContain("inline-flex")
      expect(el.className).toContain("bg-[var(--cp-solid)]")
      expect(el.className).toContain("text-[var(--cp-contrast)]")
    })

    it("applies size=sm variant", () => {
      render(
        <TwButton data-testid="btn" size="sm">
          Click
        </TwButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("h-9")
      expect(el.className).toContain("px-3.5")
      expect(el.className).toContain("text-sm")
    })

    it("applies variant=outline", () => {
      render(
        <TwButton data-testid="btn" variant="outline">
          Click
        </TwButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("border")
      expect(el.className).toContain("text-[var(--cp-fg)]")
    })

    it("applies variant=ghost", () => {
      render(
        <TwButton data-testid="btn" variant="ghost">
          Click
        </TwButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("bg-transparent")
    })

    it("does not forward variant/size props to DOM", () => {
      render(
        <TwButton data-testid="btn" size="lg" variant="solid">
          Click
        </TwButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.getAttribute("size")).toBeNull()
      expect(el.getAttribute("variant")).toBeNull()
    })

    it("forwards regular HTML props", () => {
      render(
        <TwButton data-testid="btn" type="submit" disabled>
          Click
        </TwButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.getAttribute("type")).toBe("submit")
      expect(el.hasAttribute("disabled")).toBe(true)
    })

    it("merges style props with recipe classes", () => {
      render(
        <TwButton data-testid="btn" mt={4} mx="auto">
          Click
        </TwButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("mt-4")
      expect(el.className).toContain("mx-auto")
      // Also should have recipe base classes
      expect(el.className).toContain("inline-flex")
    })
  })

  describe("Badge recipe", () => {
    const TwBadge = createTwStyled("span", badgeRecipeTw)

    it("renders with defaults (variant=subtle, size=sm)", () => {
      render(<TwBadge data-testid="badge">New</TwBadge>)
      const el = screen.getByTestId("badge")
      expect(el.className).toContain("bg-[var(--cp-subtle)]")
      expect(el.className).toContain("text-xs")
      expect(el.className).toContain("inline-flex")
    })

    it("applies variant=solid", () => {
      render(
        <TwBadge data-testid="badge" variant="solid">
          New
        </TwBadge>,
      )
      const el = screen.getByTestId("badge")
      expect(el.className).toContain("bg-[var(--cp-solid)]")
      expect(el.className).toContain("text-[var(--cp-contrast)]")
    })

    it("applies size=lg", () => {
      render(
        <TwBadge data-testid="badge" size="lg">
          New
        </TwBadge>,
      )
      const el = screen.getByTestId("badge")
      expect(el.className).toContain("px-2.5")
      expect(el.className).toContain("min-h-7")
    })
  })

  describe("Separator recipe", () => {
    const TwSeparator = createTwStyled("hr", separatorRecipeTw)

    it("renders horizontal solid by default", () => {
      render(<TwSeparator data-testid="sep" />)
      const el = screen.getByTestId("sep")
      expect(el.className).toContain("border-solid")
      expect(el.className).toContain("border-t-[var(--separator-thickness)]")
      expect(el.className).toContain("[--separator-thickness:1px]")
    })

    it("renders vertical", () => {
      render(<TwSeparator data-testid="sep" orientation="vertical" />)
      const el = screen.getByTestId("sep")
      expect(el.className).toContain("border-l-[var(--separator-thickness)]")
    })

    it("renders dashed variant", () => {
      render(<TwSeparator data-testid="sep" variant="dashed" />)
      const el = screen.getByTestId("sep")
      expect(el.className).toContain("border-dashed")
    })

    it("applies size=lg", () => {
      render(<TwSeparator data-testid="sep" size="lg" />)
      const el = screen.getByTestId("sep")
      expect(el.className).toContain("[--separator-thickness:3px]")
    })
  })
})
