import { Highlight } from "@laststance/chakrawind-ui"

export const HighlightBasic = () => {
  return (
    <Highlight
      query="spotlight"
      styles={{ px: "0.5", bg: "orange.subtle", color: "orange.fg" }}
    >
      With the Highlight component, you can spotlight words.
    </Highlight>
  )
}
