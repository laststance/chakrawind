"use client"

import { ChakraProvider, defaultSystem } from "@laststance/chakrawind-ui"
import { ThemeProvider } from "next-themes"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
