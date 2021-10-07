import React from 'react'

function SignIn() {
  
  return (
    <div className='signin'>
      <form>
        <label for ='username'>User Name:</label>
          <input type='text' name='username' paceholder='Enter username...'></input> 
        <label for ='password'>Password:</label>
          <input type='text' name='password' paceholder='Enter password...'></input> 
      </form>
    </div>
  )
}

export default SignIn
