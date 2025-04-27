import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>oops Dear !! Something went wrong</h1>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
      <h2>{err.message}</h2>  
    </div>
  )
}

export default Error