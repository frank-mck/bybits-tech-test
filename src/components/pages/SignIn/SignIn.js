import React from 'react'
import UserPolicy from '../Policy/UserPolicy'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const SignIn = () => {

  return (
    <div className='signin'>
      <form>
        <label for ='username'>User Name:</label>
          <input type='text' name='username' paceholder='Enter username...'></input> 
        <label for ='password'>Password:</label>
          <input type='text' name='password' paceholder='Enter password...'></input> 
      </form>
      <Link to='/policy' ><button color ='purple'>Sign In</button></Link>
    </div>
  )
}

export default SignIn
