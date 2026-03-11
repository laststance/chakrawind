import { Heading } from "@laststance/chakrawind-ui"

export const HeadingWithGradient = () => {
  return (
    <Heading
      bgGradient="to-l"
      gradientFrom="red.500"
      gradientTo="blue.500"
      bgClip="text"
    >
      The quick brown fox jumps over the lazy dog
    </Heading>
  )
}
