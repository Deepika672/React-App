import React from 'react'
import Navbar from '../components/functional/navbar/navbar'
import { useContext } from 'react'
import { MessageInformation } from '../navigation/navigation'
import UseMemo from '../components/functional/hooks/memorization/useMemo'

function ContactScreen() {
  const {message}=useContext(MessageInformation)
  return (
    <div>
      <Navbar/>
      <h2>{message}</h2>
      <UseMemo/>
    </div>
    
  )
}

export default ContactScreen