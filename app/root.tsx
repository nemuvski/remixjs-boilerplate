import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'

const isProductionMode = process.env.NODE_ENV === 'production'
const packageVersion = isProductionMode
  ? process.env.npm_package_version
  : `${process.env.npm_package_version}-${process.env.NODE_ENV}`

export const meta: V2_MetaFunction = () => {
  return [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { title: 'Remix App' },
    { name: 'application-version', content: packageVersion ?? '' },
  ]
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ]
}

const Root = () => {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default Root
