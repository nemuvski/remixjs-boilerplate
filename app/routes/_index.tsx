import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = () => {
  return json({ message: 'It works!' })
}

const HomeRoute = () => {
  const data = useLoaderData<typeof loader>()

  return <div>{data.message}</div>
}

export default HomeRoute
