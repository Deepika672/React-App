import React, { Component } from "react";
import axios from "axios";
class DataComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  sortByPrice = () => {
    const sortedData = [...this.state.data].sort((a, b) => a.price - b.price);
    this.setState({ data: sortedData });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <button onClick={this.sortByPrice}>Sort by Price</button>
        <>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.title} - ${item.price}
              <br></br>
            </React.Fragment>
          ))}
        </>
      </div>
    );
  }
}

export default DataComponent;
