import { useState } from "react";

const UseState1 = () => {
  const [task, setTask] = useState(false);

  const changeTask = () => {
    setTask(!task);
  };

  return (
    <>
      <h2>Task Completed: {task.toString()}</h2>
      <button onClick={changeTask}>This is the task</button>
    </>
  );
};

export default UseState1;
