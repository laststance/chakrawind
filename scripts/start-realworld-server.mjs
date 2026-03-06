#!/usr/bin/env node

import { createServer } from "node:http"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const DEFAULT_PORT = 4173
const CHAKRA_ROUTE_PREFIX = "/chakra"
const WIND_ROUTE_PREFIX = "/wind"
const HTML_RESPONSE_HEADERS = Object.freeze({
  "content-type": "text/html; charset=utf-8",
  "cache-control": "no-store"
})
const INDEX_ROUTE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Chakra Wind Realworld</title>
  </head>
  <body>
    <main>
      <h1>Chakra Wind Realworld Test Server</h1>
      <ul>
        <li><a href="/chakra">Open Chakra project</a></li>
        <li><a href="/wind">Open Wind project</a></li>
      </ul>
    </main>
  </body>
</html>
`
const APP_INDEX_PATHS = Object.freeze({
  chakra: resolve(process.cwd(), "apps", "realworld-twitter-chakra", "index.html"),
  wind: resolve(process.cwd(), "apps", "realworld-twitter-wind", "index.html")
})

/**
 * Reads HTML file text from disk.
 * @param {string} filePath - Absolute path to HTML file.
 * @returns {string} HTML source text.
 * @example
 * readHtmlFile("/repo/apps/realworld-twitter-chakra/index.html")
 */
const readHtmlFile = (filePath) => {
  return readFileSync(filePath, "utf8")
}

/**
 * Returns HTML payload for a request pathname.
 * @param {string} pathname - HTTP request pathname.
 * @returns {{ statusCode: number; body: string }} Response payload.
 * @example
 * resolveHtmlResponse("/chakra")
 */
const resolveHtmlResponse = (pathname) => {
  if (pathname === "/" || pathname === "/index.html") {
    return {
      statusCode: 200,
      body: INDEX_ROUTE_HTML
    }
  }

  if (pathname === CHAKRA_ROUTE_PREFIX || pathname === `${CHAKRA_ROUTE_PREFIX}/`) {
    return {
      statusCode: 200,
      body: readHtmlFile(APP_INDEX_PATHS.chakra)
    }
  }

  if (pathname === WIND_ROUTE_PREFIX || pathname === `${WIND_ROUTE_PREFIX}/`) {
    return {
      statusCode: 200,
      body: readHtmlFile(APP_INDEX_PATHS.wind)
    }
  }

  return {
    statusCode: 404,
    body: "<h1>Not Found</h1>"
  }
}

/**
 * Starts the realworld test HTTP server.
 * @returns {void}
 * @example
 * startServer()
 */
const startServer = () => {
  const port = Number(process.env.PORT ?? DEFAULT_PORT)

  const server = createServer((request, response) => {
    const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1")
    const htmlResponse = resolveHtmlResponse(requestUrl.pathname)
    response.writeHead(htmlResponse.statusCode, HTML_RESPONSE_HEADERS)
    response.end(htmlResponse.body)
  })

  server.listen(port, "127.0.0.1", () => {
    console.log(`realworld test server started on http://127.0.0.1:${port}`)
  })
}

startServer()
