import React, { Component } from "react";
class Circles extends Component{
  constructor() {
    super();
    this.state = {
      circles: []
    };
  }

  addCircle = () => {
    const newCircle = {
      id: this.state.circles.length + 1,
    };
    const updatedCircles = this.state.circles.concat(newCircle);
    this.setState({ circles: updatedCircles });
  };

  render() {
    return (
      <div>
        <button onClick={this.addCircle}>Add Circle</button>
        <div>
          {this.state.circles.map(circle => (
            <div
              key={circle.id}
              style={{
                width: "50px",
                height: "50px",
                border:"2px solid black",
                borderRadius: "50%",
                margin: "10px",
                display: "inline-block"
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
export default Circles;
