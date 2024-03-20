import { useState } from "react";
const UseStateExample1 = () => {
  const [counter, setCounter] = useState(0);
  //This function is used to increment the current counter value by 1.
  const handleChange = (value) => {
    switch (value) {
      case "increment":
        setCounter(counter + 1);
        break;
      case "decrement":
        setCounter(counter - 1);
        break;
      case "reset":
        setCounter(0);
        break;
    }
  };
  return (
    <>
      <h1>Use State Example</h1>
      <h3>Current Counter value {counter}</h3>
      <button onClick={() => handleChange("increment")}>Increment</button>
      <button onClick={() => handleChange("decrement")}>Decrement</button>
      <button onClick={() => handleChange("reset")}>Reset</button>
    </>
  );
};
export default UseStateExample1;
