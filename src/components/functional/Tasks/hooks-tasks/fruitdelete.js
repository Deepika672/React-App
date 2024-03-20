import React, { useState } from "react";

const UseStateExample4 = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "watermelon"]);

  const addFruits = () => {
    setFruits([...fruits, "fruit"]);
  };

  const deleteFruit = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits.splice(index, 1);
    setFruits(updatedFruits);
  };

  return (
    <>
      <h2>Fruits Listing</h2>
      <button onClick={addFruits}>Add Fruits</button>
      <ol>
        {fruits.map((eachFruit, index) => (
          <li key={index}>
            {eachFruit}
            <button onClick={() => deleteFruit(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
};
export default UseStateExample4;
