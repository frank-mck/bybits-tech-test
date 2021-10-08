const getToken = async (credentials) => {
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

export default getToken
