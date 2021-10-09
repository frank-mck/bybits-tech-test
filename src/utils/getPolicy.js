const getPolicy = async (token) => {
  const policy = await fetch('https://api.bybits.co.uk/policys/details', {
    'method': 'GET',
    headers: {
      'environment': 'mock',
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json'
    }
  })
  try {
    return policy.json()
  } catch (err) {
    console.log(err)
  }
}

export { getPolicy }
