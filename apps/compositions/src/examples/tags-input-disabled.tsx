"use client"

import { TagsInput } from "@laststance/chakrawind-ui"

export const TagsInputDisabled = () => (
  <TagsInput.Root disabled defaultValue={["React", "Chakra"]}>
    <TagsInput.Label>Disabled Tags</TagsInput.Label>

    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Can't type here" />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)
