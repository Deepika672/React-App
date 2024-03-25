import { useState } from "react";
function useCounter(initial,value){
    const [count,setCount]=useState(initial)
    const handleIncrement=()=>{
        setCount(count+value)
    }
    return [count,handleIncrement,"hello"]
}
export default useCounter;