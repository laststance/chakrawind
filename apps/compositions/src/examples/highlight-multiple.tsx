import { Heading, Highlight } from "@laststance/chakrawind-ui"

export const HighlightMultiple = () => {
  return (
    <Heading lineHeight="tall">
      <Highlight
        query={["spotlight", "emphasize", "accentuate"]}
        styles={{ px: "0.5", bg: "teal.muted" }}
      >
        With the Highlight component, you can spotlight, emphasize and
        accentuate words.
      </Highlight>
    </Heading>
  )
}
