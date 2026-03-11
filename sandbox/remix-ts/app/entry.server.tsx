import type { EntryContext } from "@remix-run/node"
import { RemixServer } from "@remix-run/react"
import { renderToString } from "react-dom/server"

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) =>
  new Promise((resolve) => {
    const html = renderToString(
      <RemixServer context={remixContext} url={request.url} />,
    )

    responseHeaders.set("Content-Type", "text/html")

    const response = new Response(`<!DOCTYPE html>${html}`, {
      status: responseStatusCode,
      headers: responseHeaders,
    })

    resolve(response)
  })

export default handleRequest
