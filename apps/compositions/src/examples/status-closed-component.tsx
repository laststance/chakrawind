import type { ColorPalette } from "@laststance/chakrawind-ui"
import { Status as ChakraStatus } from "@laststance/chakrawind-ui"
import * as React from "react"

type StatusValue = "success" | "error" | "warning" | "info"

export interface StatusProps extends ChakraStatus.RootProps {
  value?: StatusValue
}

const statusMap: Record<StatusValue, ColorPalette> = {
  success: "green",
  error: "red",
  warning: "orange",
  info: "blue",
}

export const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  function Status(props, ref) {
    const { children, value = "info", ...rest } = props
    const colorPalette = rest.colorPalette ?? statusMap[value]
    return (
      <ChakraStatus.Root ref={ref} {...rest} colorPalette={colorPalette}>
        <ChakraStatus.Indicator />
        {children}
      </ChakraStatus.Root>
    )
  },
)
