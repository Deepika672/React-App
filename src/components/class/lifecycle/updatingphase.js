import { Component } from "react";
class UpdatingPhase extends Component {
  state = {
    count: 0,
    color: "red",
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log("Component Did Mount");
    document.title = `current count ${this.state.count}`;
  }
  shouldComponentUpdate() {
    console.log("Should Update")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState, "previous state");
    return null;
  }
  componentDidUpdate() {
    console.log("Did Update");
    document.title = `current count ${this.state.count}`;
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State From Props");
    return { color: props.favColor };
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>Counter example {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }
}
export default UpdatingPhase;
