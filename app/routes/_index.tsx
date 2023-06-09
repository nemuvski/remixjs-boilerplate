import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderArgs, RouteComponent } from '@remix-run/node'

export const loader = (_args: LoaderArgs) => {
  return json({ message: 'It works!' })
}

const HomeRoute: RouteComponent = () => {
  const data = useLoaderData<typeof loader>()

  return <div>{data.message}</div>
}

export default HomeRoute
