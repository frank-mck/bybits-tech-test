import React, { useState, useEffect } from 'react'
import { getPolicy } from '../../../utils/getPolicy'

const UserPolicy = ({ token }) => {
  const [policy, setPolicy] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [address, setAddress] = useState([])

  useEffect(() => {
    const addPolicy = async () => {
      let response = await getPolicy(token);
      setPolicy(response.policy);
      setVehicle(response.vehicle);
      setAddress(response.policy.address)
    }
    addPolicy();
  }, [token])

  return (
    <div className ='policy-form'>
      <h1 className='policy-title'>My Policy</h1>
      <hr className='line-break' />
      <div className ='policy-details'>
        <h3>Policy reference:</h3>
        <span>{ policy.policy_reference }</span>
      </div>
      <div className ='policy-details'>
        <h3>Cover type:</h3>
        <span>{ policy.cover}</span>
      </div>
      <div className ='policy-details'>
        <h3>Car:</h3>
        <span>{vehicle.make} {vehicle.model} {vehicle.colour} {vehicle.reg}</span>
      </div>
      <div className ='policy-details'>
        <h3>Address:</h3>
        <span>{address.city} {address.line_1} {address.line_2} {address.postcode}</span>
      </div>
    </div>
  )
}

export default UserPolicy
