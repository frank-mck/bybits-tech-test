import React, { useState, useEffect } from 'react'
const getPolicy = require('../../../api/getPolicy').default;

const UserPolicy = ({ token }) => {
  const [policy, setPolicy] = useState([]);
  const [proposer, setProposer] = useState([]);

  useEffect(() => {
    const addPolicy = async () => {
      let response = await getPolicy(token);
      setPolicy(response.policy);
      setProposer(response.proposer)
    }
    addPolicy();
  }, [token])

  return (
    <div>
      <h1>User Policy</h1>
      this is my cover: { policy.cover }
      this is my proposer: { proposer.first_names}
    </div>
  )
}

export default UserPolicy
