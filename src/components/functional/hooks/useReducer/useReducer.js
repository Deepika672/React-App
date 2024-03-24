import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { ...state, age: state.age + action.payload };

    case "DECREMENT_AGE":
      return { ...state, age: state.age - 10 };
    case "INCREMENT_SALARY":
      return { ...state, salary: state.salary + 1000 };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "ADD_NEW_SKILL":
        return { ...state, skills: [...state.skills, "New skill added"] };
    default:
      return state;
  }
}
const initialState = {
  age: 100,
  salary: 15000,
  name: "user1",
  skills: ["html,css"],
};

function UseReducer() {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  const handleIncrementAge = () => {
    dispatch({
      type: "INCREMENT_AGE",
      payload: 10,
    });
  };
  const handleDecrementAge = () => {
    dispatch({
      type: "DECREMENT_AGE",
    });
  };
  const handleIncrementSalary = () => {
    dispatch({
      type: "INCREMENT_SALARY",
    });
  };
  const changeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: "chintu",
    });
  };
  return (
    <div>
      <h1>current name {currentState.name}</h1>
      <button onClick={changeName}>Change name</button>

      <h1>Current age:{currentState.age}</h1>
      <button onClick={handleIncrementAge}>Increment age</button>
      <button onClick={handleDecrementAge}>Decrement age</button>
      <h2>Current salary {currentState.salary}</h2>

      <button onClick={handleIncrementSalary}>Increment salary</button>
    </div>
  );
}

export default UseReducer;
