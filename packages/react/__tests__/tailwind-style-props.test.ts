import { describe, expect, it } from "vitest"
import { cn } from "../src/tailwind/cn"
import { extractStyleProps } from "../src/tailwind/style-props"

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-4 py-2", "px-8")).toBe("py-2 px-8")
  })

  it("handles falsy values", () => {
    expect(cn("bg-red-500", false, null, undefined, "p-4")).toBe(
      "bg-red-500 p-4",
    )
  })

  it("deduplicates conflicting Tailwind classes", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })
})

describe("extractStyleProps", () => {
  it("extracts spacing props", () => {
    const [classes, rest] = extractStyleProps({ p: 4, m: 2, onClick: () => {} })
    expect(classes).toBe("p-4 m-2")
    expect(rest).toHaveProperty("onClick")
    expect(rest).not.toHaveProperty("p")
    expect(rest).not.toHaveProperty("m")
  })

  it("extracts color props with dot notation", () => {
    const [classes] = extractStyleProps({
      bg: "red.500",
      color: "gray.800",
    })
    expect(classes).toBe("bg-red-500 text-gray-800")
  })

  it("handles raw CSS color values", () => {
    const [classes] = extractStyleProps({ bg: "#ff0000" })
    expect(classes).toBe("bg-[#ff0000]")
  })

  it("extracts layout props", () => {
    const [classes] = extractStyleProps({
      w: "full",
      h: 10,
      display: "flex",
    })
    expect(classes).toBe("w-full h-10 flex")
  })

  it("extracts border radius props", () => {
    const [classes] = extractStyleProps({ rounded: "md" })
    expect(classes).toBe("rounded-md")
  })

  it("extracts flexbox props", () => {
    const [classes] = extractStyleProps({
      alignItems: "center",
      justifyContent: "between",
      gap: 4,
    })
    expect(classes).toBe("items-center justify-between gap-4")
  })

  it("ignores null/undefined/false values", () => {
    const [classes] = extractStyleProps({
      bg: null,
      color: undefined,
      truncate: false,
    })
    expect(classes).toBe("")
  })

  it("handles px/py shorthand", () => {
    const [classes] = extractStyleProps({ px: 4, py: 2 })
    expect(classes).toBe("px-4 py-2")
  })

  it("handles position props", () => {
    const [classes] = extractStyleProps({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 10,
    })
    expect(classes).toBe("absolute top-0 left-0 z-10")
  })

  it("handles decimal spacing", () => {
    const [classes] = extractStyleProps({ p: 0.5, m: 1.5 })
    expect(classes).toBe("p-0_5 m-1_5")
  })

  it("handles size props", () => {
    const [classes] = extractStyleProps({
      w: "1/2",
      maxW: "lg",
      minH: "screen",
    })
    expect(classes).toBe("w-1/2 max-w-lg min-h-screen")
  })

  it("passes through non-style props", () => {
    const [, rest] = extractStyleProps({
      id: "test",
      className: "custom",
      "data-testid": "btn",
      "aria-label": "Close",
      bg: "blue.500",
    })
    expect(rest).toEqual({
      id: "test",
      className: "custom",
      "data-testid": "btn",
      "aria-label": "Close",
    })
  })

  it("handles auto margin", () => {
    const [classes] = extractStyleProps({ mx: "auto" })
    expect(classes).toBe("mx-auto")
  })

  it("handles shadow prop", () => {
    const [classes] = extractStyleProps({ shadow: "md" })
    expect(classes).toBe("shadow-md")
  })

  it("handles truncate boolean", () => {
    const [classes] = extractStyleProps({ truncate: true })
    expect(classes).toBe("truncate")
  })

  it("handles border props", () => {
    const [classes] = extractStyleProps({
      border: "1px",
      borderColor: "gray.200",
      borderRadius: "lg",
    })
    expect(classes).toBe("border border-gray-200 rounded-lg")
  })
})
