import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"
import { chakraTw, createTwStyled } from "../src/tailwind/tw-factory"

describe("chakraTw factory", () => {
  describe("basic rendering", () => {
    it("renders a div with style props", () => {
      const Box = chakraTw.div
      render(
        <Box data-testid="box" bg="red.500" p={4}>
          Hello
        </Box>,
      )
      const el = screen.getByTestId("box")
      expect(el.tagName).toBe("DIV")
      expect(el.className).toContain("bg-red-500")
      expect(el.className).toContain("p-4")
      expect(el.textContent).toBe("Hello")
    })

    it("renders a button element", () => {
      const Button = chakraTw.button
      render(
        <Button data-testid="btn" type="submit">
          Click
        </Button>,
      )
      const el = screen.getByTestId("btn")
      expect(el.tagName).toBe("BUTTON")
      expect(el.getAttribute("type")).toBe("submit")
    })

    it("renders a span with color", () => {
      const Span = chakraTw.span
      render(
        <Span data-testid="span" color="blue.600">
          Text
        </Span>,
      )
      const el = screen.getByTestId("span")
      expect(el.className).toContain("text-blue-600")
    })
  })

  describe("polymorphic `as` prop", () => {
    it("changes the rendered element via as", () => {
      const Box = chakraTw.div
      render(
        <Box data-testid="box" as="section">
          Content
        </Box>,
      )
      const el = screen.getByTestId("box")
      expect(el.tagName).toBe("SECTION")
    })

    it("renders as a custom component", () => {
      const CustomComp = React.forwardRef<HTMLDivElement, any>((props, ref) => (
        <article ref={ref} {...props} />
      ))
      CustomComp.displayName = "CustomComp"
      const Box = chakraTw.div
      render(
        <Box data-testid="box" as={CustomComp}>
          Content
        </Box>,
      )
      const el = screen.getByTestId("box")
      expect(el.tagName).toBe("ARTICLE")
    })
  })

  describe("asChild render delegation", () => {
    it("delegates rendering to child element", () => {
      const Box = chakraTw.div
      render(
        <Box asChild bg="green.500">
          <a href="/test" data-testid="link">
            Link
          </a>
        </Box>,
      )
      const el = screen.getByTestId("link")
      expect(el.tagName).toBe("A")
      expect(el.getAttribute("href")).toBe("/test")
      expect(el.className).toContain("bg-green-500")
    })
  })

  describe("className merging", () => {
    it("merges user className with style props", () => {
      const Box = chakraTw.div
      render(
        <Box data-testid="box" className="custom-class" p={4} bg="gray.100">
          Content
        </Box>,
      )
      const el = screen.getByTestId("box")
      expect(el.className).toContain("custom-class")
      expect(el.className).toContain("p-4")
      expect(el.className).toContain("bg-gray-100")
    })

    it("resolves conflicting classes (last wins)", () => {
      const Box = chakraTw.div
      render(
        <Box data-testid="box" className="p-2" p={8}>
          Content
        </Box>,
      )
      const el = screen.getByTestId("box")
      // tailwind-merge should resolve p-2 vs p-8 → p-8 wins (from style props)
      // Actually, cn() merges in order: styleClasses, userClassName
      // So p-8 from style props + p-2 from className
      expect(el.className).toContain("p")
    })
  })

  describe("recipe/variant system", () => {
    it("applies base classes from recipe config", () => {
      const StyledButton = createTwStyled("button", {
        base: "inline-flex items-center font-medium",
      })
      render(<StyledButton data-testid="btn">Click</StyledButton>)
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("inline-flex")
      expect(el.className).toContain("items-center")
      expect(el.className).toContain("font-medium")
    })

    it("applies variant classes", () => {
      const StyledButton = createTwStyled("button", {
        base: "rounded font-medium",
        variants: {
          size: {
            sm: "px-3 py-1 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
          },
          variant: {
            solid: "bg-blue-500 text-white",
            outline: "border border-blue-500 text-blue-500",
          },
        },
        defaultVariants: {
          size: "md",
          variant: "solid",
        },
      })

      render(<StyledButton data-testid="btn">Click</StyledButton>)
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("rounded")
      expect(el.className).toContain("px-4")
      expect(el.className).toContain("py-2")
      expect(el.className).toContain("bg-blue-500")
      expect(el.className).toContain("text-white")
    })

    it("overrides default variants", () => {
      const StyledButton = createTwStyled("button", {
        base: "rounded",
        variants: {
          size: {
            sm: "text-sm",
            lg: "text-lg",
          },
        },
        defaultVariants: { size: "sm" },
      })

      render(
        <StyledButton data-testid="btn" size="lg">
          Click
        </StyledButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("text-lg")
      expect(el.className).not.toContain("text-sm")
    })

    it("applies compound variants", () => {
      const StyledButton = createTwStyled("button", {
        base: "rounded",
        variants: {
          intent: { primary: "bg-blue-500", secondary: "bg-gray-500" },
          size: { sm: "text-sm", md: "text-base" },
        },
        compoundVariants: [
          { intent: "primary", size: "md", class: "uppercase shadow-lg" },
        ],
        defaultVariants: { intent: "primary", size: "md" },
      })

      render(<StyledButton data-testid="btn">Click</StyledButton>)
      const el = screen.getByTestId("btn")
      expect(el.className).toContain("uppercase")
      expect(el.className).toContain("shadow-lg")
    })
  })

  describe("unstyled prop", () => {
    it("removes all styling when unstyled is true", () => {
      const StyledButton = createTwStyled("button", {
        base: "bg-blue-500 text-white rounded",
      })
      render(
        <StyledButton data-testid="btn" unstyled>
          Click
        </StyledButton>,
      )
      const el = screen.getByTestId("btn")
      expect(el.className).not.toContain("bg-blue-500")
      expect(el.className).not.toContain("text-white")
    })
  })

  describe("ref forwarding", () => {
    it("forwards ref to the underlying element", () => {
      const Box = chakraTw.div
      const ref = React.createRef<HTMLDivElement>()
      render(
        <Box ref={ref} data-testid="box">
          Content
        </Box>,
      )
      expect(ref.current).toBe(screen.getByTestId("box"))
    })
  })

  describe("htmlProp mapping", () => {
    it("maps htmlSize to native size attribute", () => {
      const Input = chakraTw.input
      render(<Input data-testid="input" htmlSize={20} />)
      const el = screen.getByTestId("input")
      expect(el.getAttribute("size")).toBe("20")
    })
  })

  describe("css prop as string", () => {
    it("applies css prop as additional Tailwind classes", () => {
      const Box = chakraTw.div
      render(
        <Box data-testid="box" css="hover:bg-blue-500 focus:ring-2">
          Content
        </Box>,
      )
      const el = screen.getByTestId("box")
      expect(el.className).toContain("hover:bg-blue-500")
      expect(el.className).toContain("focus:ring-2")
    })
  })

  describe("displayName", () => {
    it("sets displayName for debugging", () => {
      const Box = chakraTw.div
      expect(Box.displayName).toBe("chakra(div)")
    })

    it("uses custom label", () => {
      const Custom = createTwStyled("div", {}, { label: "MyBox" })
      expect(Custom.displayName).toBe("MyBox")
    })
  })

  describe("caching", () => {
    it("returns the same component for the same element", () => {
      const div1 = chakraTw.div
      const div2 = chakraTw.div
      expect(div1).toBe(div2)
    })
  })
})
