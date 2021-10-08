import React from 'react'

function UserPolicy({ token }) {
  
  return (
    <div>
      <h1>User Policy</h1>
      this is my token: {token || localStorage.getItem('token')}
    </div>
  )
}

export default UserPolicy
