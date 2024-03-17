// using fetch hitting the data
// import { Component } from "react";
// import axios from "axios"
// class UsersData extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userCollection: []
//     };
//   }
//  fetchData = () => {
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((response) => {
//       this.setState({
//         userCollection: response.users,
//       });
//     });
// };
//  render() {
//     return (
//       <>
//         <h1>User Collection</h1>
//         <button onClick={this.fetchData}>Click to fetch user Data.</button>
//         {
//             this.state.userCollection.length>0 && this.state.userCollection.map(eachObject=>{
//                 return(
//                     <>
//                     <h3>Full Name:{`${eachObject.firstName} ${eachObject.lastName}`}</h3>
//                     <h2>Age:{eachObject.age}</h2>
//                     <h2>-----------------------------------------</h2>
//                     </>
//                 )
//             })
//         }
//       </>
//     );
//   }
// }
// export default UsersData;

//Using Axios to hit the Data
import React, { Component } from "react";
import axios from "axios";
class UsersData extends Component {
  constructor() {
    super();
    this.state = {
      userCollection: [],
    };
  }
  fetchData = () => {
    axios.get("https://dummyjson.com/users").then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.setState({
          userCollection: response.data.users,
        });
      } else {
        alert("something went wrong");
      }
    });
  };
  render() {
    return (
      <>
        <h1>User Collection</h1>
        <button onClick={this.fetchData}>Click to fetch user Data.</button>
        {this.state.userCollection.length > 0 &&
          this.state.userCollection.map((eachObject) => {
            return (
              <React.Fragment key={eachObject.id}>
                <h3>
                  Full Name:{`${eachObject.firstName} ${eachObject.lastName}`}
                </h3>
                <h2>Age:{eachObject.age}</h2>
                <h2>-----------------------------------------</h2>
              </React.Fragment>
            );
          })}
      </>
    );
  }
}
export default UsersData;
