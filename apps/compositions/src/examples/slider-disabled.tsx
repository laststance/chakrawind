import { Slider } from "@laststance/chakrawind-ui"

export const SliderDisabled = () => {
  return (
    <Slider.Root width="200px" disabled defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
