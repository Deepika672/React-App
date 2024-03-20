import { useState } from "react";
const UseStateExample3=()=>{
    const [fruits,setFruits]=useState(["apple","banana","watermelon"])
    const addFruits=()=>{
        setFruits([...fruits,"fruit"])
    }
    return(
        <>
        <h2>Fruits Listing</h2>
        <button onClick={addFruits}>Add Fruits</button>
        <ol>
        {
            fruits.map((eachFruit,index)=><li key={index}>{eachFruit}</li>)
        }
        </ol>
        </>
    )
}
export default UseStateExample3;