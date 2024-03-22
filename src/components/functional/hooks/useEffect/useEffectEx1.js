// case-1
// import { useEffect, useState } from "react"
// const UseEffectEx1=()=>{
//     const [count,setCount]=useState(0)
//     const [count1,setCount1]=useState(1)

//     useEffect(()=>{
//         document.title=`Current count ${count}`
//         console.log("use effect")
//     })
//     return(
//         <>
//         <h1>use Effect Hook Example</h1>
//         <h1>Current count {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Count Increment</button>
//         <h1>Current count {count1}</h1>
//         <button onClick={()=>{setCount1(count1+1)}}>Count1 Increment</button>
//         </>
//     )
// }
// export default UseEffectEx1;

//Case-2
// import { useEffect, useState } from "react"
// const UseEffectEx1=()=>{
//     const [count,setCount]=useState(0)
//     const [count1,setCount1]=useState(1)

//     useEffect(()=>{
//         document.title=`Current count ${count}`
//         console.log("use effect")
//     },[])
//     return(
//         <>
//         <h1>use Effect Hook Example</h1>
//         <h1>Current count {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Count Increment</button>
//         <h1>Current count {count1}</h1>
//         <button onClick={()=>{setCount1(count1+1)}}>Count1 Increment</button>
//         </>
//     )
// }
// export default UseEffectEx1;

import { useEffect, useState } from "react"
const UseEffectEx1=()=>{
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(1)

    useEffect(()=>{
        document.title=`Current count ${count}`
        console.log("use effect")
    },[count])
    return(
        <>
        <h1>use Effect Hook Example</h1>
        <h1>Current count {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Count Increment</button>
        <h1>Current count {count1}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>Count1 Increment</button>
        </>
    )
}
export default UseEffectEx1;