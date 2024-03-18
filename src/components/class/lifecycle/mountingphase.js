// import { Component } from "react";
// import axios from "axios";
// class MountingPhase extends Component {
//   constructor() {
//     console.log("constructor");
//     super();
//     this.state = {
//       message: "Good Morning",
//     };
//   }
//   componentDidMount(){
//     //console.log("Component Did Mount")
//     axios.get("https://fakestoreapi.com/products").then(response=>{console.log(response)})
//   }
//   render() {
//     return console.log("render");
//   }
// }
// export default MountingPhase;

//Displaying in ui
// import { Component } from "react";
// import axios from "axios";
// import DNASpinner from "../spinners/dna-spinner";
// class MountingPhase extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "Good Morning",
//       users: [],
//     };
//   }
//   componentDidMount() {
//     axios.get("https://dummyjson.com/users").then((response) => {
//       this.setState({
//         users: response.data.users,
//       });
//     });
//   }
//   render() {
//     return (
//       <>
//         {this.state.users.length > 0 ? (
//           this.state.users.map((eachObject) => {
//             return (
//               <>
//                 <h2>{eachObject.firstName}</h2>
//               </>
//             );
//           })
//         ) :
//         <>
//           <DNASpinner />
//           <h3>Please Data Fetching</h3>
//         </>
//         }
//       </>
//     );
//   }
// }
// export default MountingPhase;

//getDerivedStateFromProps
import React, { Component } from "react";
import axios from "axios";
import DNASpinner from "../spinners/dna-spinner";
class MountingPhase extends Component {
  constructor() {
    super();
    this.state = {
      message: "Good Morning",
      users: [],
      color: "red",
    };
  }
  componentDidMount() {
    axios.get("https://dummyjson.com/users").then((response) => {
      this.setState({
        users: response.data.users,
      });
    });
  }
  static getDerivedStateFromProps(props,state){
    return {color:props.favColor}

  }
  render() {
    return (
      <>
        <h3 style={{ color: this.state.color }}>Hello World</h3>
        {this.state.users.length > 0 ? (
          this.state.users.map((eachObject) => {
            return (
              <React.Fragment key={eachObject.id}>
                <h2>{eachObject.firstName}</h2>
              </React.Fragment>
            );
          })
        ) : (
          <>
            <DNASpinner />
            <h3>Please Data Fetching</h3>
          </>
        )}
      </>
    );
  }
}
export default MountingPhase;
