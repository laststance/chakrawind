import { Progress } from "@laststance/chakrawind-ui"

export const ProgressBasic = () => {
  return (
    <Progress.Root maxW="240px">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
