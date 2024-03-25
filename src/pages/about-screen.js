import React from 'react'
import Navbar from '../components/functional/navbar/navbar'
import useCounter from '../components/functional/hooks/customHook/useCounter'
import useAxios from '../components/functional/hooks/customHook/useAxios'

function AboutScreen() {
  const [counter,setCounter]=useCounter(100,10)
  const [categories]=useAxios("https://fakestoreapi.com/products/categories")
  return (
    <>
    <div>
        <Navbar/>
        <h3>{counter}</h3>
        <button onClick={setCounter}>Increment</button>
        <h1>I am from about screen</h1>
        {
          categories.length>0
          ?
          categories.map(eachString=><h2>{eachString}</h2>)
          :
          <h2>No categories Found</h2>
        }
    </div>
    </>
  )
}
export default AboutScreen
