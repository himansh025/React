import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}= useParams()
  return (
    <div className="bg-gray-500 text-white px-3 py-3 text-3xl">User {userid}</div>
  )
}

export default User