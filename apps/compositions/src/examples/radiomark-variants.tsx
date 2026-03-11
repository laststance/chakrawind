import { For, Radiomark, Stack } from "@laststance/chakrawind-ui"

export const RadiomarkVariants = () => {
  return (
    <Stack>
      <For each={["outline", "subtle", "solid", "inverted"]}>
        {(variant) => <Radiomark checked key={variant} variant={variant} />}
      </For>
    </Stack>
  )
}
