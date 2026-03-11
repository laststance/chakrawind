import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { ThemeProvider } from "next-themes"
import { ChakraProvider } from "./components/chakra-provider"

interface LayoutProps extends React.PropsWithChildren {}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <ChakraProvider>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Outlet />
      </ThemeProvider>
    </ChakraProvider>
  )
}
