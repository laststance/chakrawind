"use client"

import { TagsInput } from "@laststance/chakrawind-ui"

export const TagsInputValidation = () => (
  <TagsInput.Root
    defaultValue={["React", "Chakra"]}
    validate={(e) => e.inputValue.length >= 3}
  >
    <TagsInput.Label>Tags (min 3 chars)</TagsInput.Label>

    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Add a tag..." />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)
