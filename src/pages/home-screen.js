import React from 'react'
import Navbar from '../components/functional/navbar/navbar';
import UseEffectEx2 from "../components/functional/hooks/useEffect/useEffectEx2"
import { useContext } from 'react';
import { MessageInformation } from '../navigation/navigation';

function HomeScreen() {
  const {message,greetings,messageChanger}=useContext(MessageInformation)
  //console.log(sharedInformation,"sharedInformation")
  return (
    <div>
        <Navbar/>
        <h2>{message}</h2>
        <h2>{greetings}</h2>
        <button onClick={messageChanger} >Click to change message</button>


        <UseEffectEx2/>
    </div>

  )
}

export default HomeScreen;