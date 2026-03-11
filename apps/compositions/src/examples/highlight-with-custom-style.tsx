import { Highlight } from "@laststance/chakrawind-ui"

export const HighlightWithCustomStyle = () => {
  return (
    <Highlight query="component" styles={{ fontWeight: "semibold" }}>
      With the Highlight component, you can spotlight words.
    </Highlight>
  )
}
