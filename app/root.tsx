import { json } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from '@remix-run/node'

/**
 * ErrorBoundary
 * @see {@link https://remix.run/docs/en/main/route/error-boundary}
 */
export { default as ErrorBoundary } from '~/components/ErrorBoundary'

export const loader = (_args: LoaderArgs) => {
  const isProd = process.env.NODE_ENV === 'production'
  const packageVersion = isProd
    ? process.env.npm_package_version
    : `${process.env.npm_package_version}-${process.env.NODE_ENV}`

  return json({ packageVersion })
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { title: 'Remix App' },
    { name: 'application-version', content: data?.packageVersion ?? '' },
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
