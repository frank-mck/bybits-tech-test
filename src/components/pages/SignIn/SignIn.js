import React, { useState } from 'react';
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
    <div className='signin-form-container'>
      <h1 className='signin-title'>Sign In</h1>
      <hr className ='line-break' />
      <form className='signin-form' onSubmit={addToken}>
        <div className='signin-input'>
          <label>User Name:</label>
          <input 
            required
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            name='username' 
            paceholder='Enter username...'>
          </input> 
        </div>
        <div className='signin-input'>
          <label>Password:</label>
          <input
            required
            type='text'
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            paceholder='Enter password...'>
          </input> 
        </div>
        <div className='btn-container'>
          <button className='signin-btn' type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
