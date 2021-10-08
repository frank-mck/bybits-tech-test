import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const getToken = require('../../../api/getToken').default;

const SignIn = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const addToken = async (e) => {
    e.preventDefault();
    const token = await getToken({
      "username": username, "password": password, "type": "USER_PASSWORD_AUTH"
    })
    setToken(token.access_token)
    history.push('/policy')
  }

  return (
    <div className='signin-form'>
      <form onSubmit={addToken}>
        <label>User Name:</label>
        <input 
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          name='username' 
          paceholder='Enter username...'>
        </input> 
        <label>Password:</label>
        <input
          type='text'
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          paceholder='Enter password...'>
        </input> 
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
