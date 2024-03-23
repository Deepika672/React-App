import { useState, useContext } from "react";
import { MessageInformation } from "../../../navigation/navigation";

const ControlledComponent = () => {
  const [username, setUsername] = useState("");
  const [userNameError, setUserUserError] = useState("");
  const { changeLogin } = useContext(MessageInformation);

  const userNameHandler = (event) => {
    const username = event.target.value;
    setUsername(username);
    if (username.length > 15) {
      setUserUserError("username must be less than 5 characters");
    } else {
      setUserUserError("");
    }
  };

  const loginApi = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: "0lelplR",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === 200) {
          changeLogin();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    loginApi();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={username}
            onChange={userNameHandler}
          />
          {userNameError ? (
            <h5 style={{ color: "red" }}>{userNameError}</h5>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{" "}
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledComponent;
