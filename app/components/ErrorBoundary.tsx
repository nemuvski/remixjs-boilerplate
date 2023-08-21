import { useRouteError, isRouteErrorResponse } from '@remix-run/react'

const ErrorBoundary = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
      </div>
    )
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </div>
    )
  }

  return (
    <div>
      <h1>Unknown Error</h1>
    </div>
  )
}

export default ErrorBoundary
