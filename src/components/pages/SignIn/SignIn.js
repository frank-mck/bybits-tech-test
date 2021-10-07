import React, {useState, useEffect} from 'react'

const SignIn = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addToken = async (e) => {
    e.preventDefault();
    const token = await fetchToken({
      "username": username, "password": password, "type": "USER_PASSWORD_AUTH"
    })
    setToken(token.access_token);
  }

  const fetchToken = async (credentials) => {
    const data = await fetch('https://api.bybits.co.uk/auth/token', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json',
        'environment': "mock",
      },      
      body: JSON.stringify(credentials),
    })
    return data.json()
  }

  return (
    <div className='signin'>
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
        <button type ='submit'>Sign In</button>
      </form>
      
    </div>
  )
}

export default SignIn
