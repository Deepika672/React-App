import React, { Component } from "react";

class CircleTask extends Component {
  constructor() {
    super();
    this.state = {
      circles: [],
    };
  }

  addCircle = () => {
    this.setState((prevState) => ({
      circles: [...prevState.circles, false],
    }));
  };

  changeColor = (index) => {
    this.setState((prevState) => {
      const circles = [...prevState.circles];
      circles[index] = !circles[index]; // Toggle the clicked circle
      return { circles };
    });
  };

  render() {
    return (
      <>
        <h1>Circle task</h1>
        <button onClick={this.addCircle}>
          Add circle {this.state.circles.length}
        </button>

        {this.state.circles.map((clicked, index) => (
          <div
            key={index}
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              border: "2px solid black",
              backgroundColor: clicked ? "black" : "white",
            }}
            onClick={() => this.changeColor(index)}
          ></div>
        ))}
        {this.state.circles.length === 0 && <h2>No circles</h2>}
      </>
    );
  }
}

export default CircleTask;
