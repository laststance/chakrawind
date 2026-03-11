import { Button } from "@laststance/chakrawind-ui"
import { BeatLoader } from "react-spinners"

export const ButtonWithCustomSpinner = () => {
  return (
    <Button
      loading
      colorPalette="blue"
      spinner={<BeatLoader size={8} color="white" />}
    >
      Click me
    </Button>
  )
}
