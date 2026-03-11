"use client"

import { TagsInput } from "@laststance/chakrawind-ui"

const SPLIT_REGEX = /[;,]/

export const TagsInputWithDelimiter = () => (
  <TagsInput.Root delimiter={SPLIT_REGEX}>
    <TagsInput.Label>Custom Delimiters (; ,)</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Type and use ; or , to create tag..." />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)
