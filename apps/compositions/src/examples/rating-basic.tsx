import { RatingGroup } from "@laststance/chakrawind-ui"

export const RatingBasic = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3} size="sm">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
