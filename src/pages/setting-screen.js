import React from 'react'
import Navbar from '../components/functional/navbar/navbar';
import ControlledComponent from '../components/functional/form/controlled';
import UseReducer from '../components/functional/hooks/useReducer/useReducer';
import useCounter from '../components/functional/hooks/customHook/useCounter';

function SettingScreen() {
  const [salary,setSalary,message]=useCounter(10000,1000)
  return (
    <div>
      <Navbar/>
      {/* <UseReducer/> */}
      <h2>salary {salary}</h2>
      <button onClick={setSalary}>Increment salary</button>
    </div>
  )
}

export default SettingScreen;