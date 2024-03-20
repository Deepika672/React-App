import React, { useState } from "react";

const UseState3 = () => {
  const [objects, setObjects] = useState([{ name: "Deepika", age: "21" }]);

  const addObjects = () => {
    // Adding a new object to the array
    setObjects([...objects, { name: "Anu", age: "21" }]);
  };

  return (
    <>
      <h2>Object Listing</h2>
      {objects.map((obj, index) => (
        <p key={index}>
          Name: {obj.name}, Age: {obj.age}
        </p>
      ))}
      <button onClick={addObjects}>Add Object</button>
    </>
  );
};

export default UseState3;
