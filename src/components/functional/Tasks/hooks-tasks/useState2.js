import React, { useState } from "react";

const UseState2 = () => {
  const [obj, setObj] = useState({ name: "Deepika", age: "21" });

  const addObjects = () => {
    setObj({ ...obj, name: "Anu", age: "21" });
  };

  return (
    <>
      <h2>Object Listing</h2>
      <p>
        Name: {obj.name}, Age: {obj.age}
      </p>
      <button onClick={addObjects}>Change Object</button>
    </>
  );
};

export default UseState2;
