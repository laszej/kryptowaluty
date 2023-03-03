import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div><h1>Nie ma takiej strony</h1></div>
    <Link to ="/">Strona główna</Link>
    </>
  )
}

export default NotFound