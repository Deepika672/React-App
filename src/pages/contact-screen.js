import React from 'react'
import Navbar from '../components/functional/navbar/navbar'
import { useContext } from 'react'
import { MessageInformation } from '../navigation/navigation'
import UseMemo from '../components/functional/hooks/memorization/useMemo'
import ParentComponentMemo from '../components/functional/memo/parent'
import ParentCallback from '../components/functional/hooks/useCallback/parentCallback'

function ContactScreen() {
  const {message}=useContext(MessageInformation)
  return (
    <div>
      <Navbar/>
      <h2>{message}</h2>
      {/* <UseMemo/> */}
      <ParentComponentMemo/>
      <ParentCallback/>
    </div>
    
  )
}

export default ContactScreen