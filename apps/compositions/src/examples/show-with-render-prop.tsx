import { Show } from "@laststance/chakrawind-ui"

export const ShowWithRenderProp = () => {
  const value: number | undefined = 10
  return <Show when={value}>{(value) => <div>Value: {value}</div>}</Show>
}
