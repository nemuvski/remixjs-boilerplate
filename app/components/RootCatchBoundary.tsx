import { useCatch } from '@remix-run/react'
import { Links, Meta, Scripts } from '@remix-run/react'
import type { CatchBoundaryComponent } from '@remix-run/react'

const RootCatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch()
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
        <Scripts />
      </body>
    </html>
  )
}

export default RootCatchBoundary
