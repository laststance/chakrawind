"use client"

import { Box, Slider } from "@laststance/chakrawind-ui"
import { MdGraphicEq } from "react-icons/md"

export const SliderCustomization = () => {
  return (
    <Slider.Root defaultValue={[30]}>
      <Slider.Control>
        <Slider.Track bg="red.100">
          <Slider.Range bg="tomato" />
        </Slider.Track>
        <Slider.Thumb index={0} boxSize={6} borderColor="tomato">
          <Box color="tomato" as={MdGraphicEq} />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
