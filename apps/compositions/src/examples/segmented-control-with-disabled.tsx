import { SegmentGroup } from "@laststance/chakrawind-ui"

export const SegmentedControlWithDisabled = () => {
  return (
    <SegmentGroup.Root disabled defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
}
