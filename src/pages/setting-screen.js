import React from 'react'
import Navbar from '../components/functional/navbar/navbar';
import ControlledComponent from '../components/functional/form/controlled';
import UseReducer from '../components/functional/hooks/useReducer/useReducer';

function SettingScreen() {
  return (
    <div>
      <Navbar/>
      <UseReducer/>
    </div>
  )
}

export default SettingScreen;