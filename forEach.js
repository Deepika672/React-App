const arry = [
  {
    name: "10kCoders",
    location: "office1",
  },
  {
    name: "10kCoders2",
    location: "office2",
  },
  {
    name: "10kCoders3",
    location: "office3",
  },
];
// function iteration(arry) {
//   let newArry = arry.forEach((eachValue) => {
//     return eachValue.name;
//   });
//   console.log(newArry);
// }
// iteration(arry);

// output:undefined

// function iteration(arry) {
//   let newArry = arry.forEach((eachValue) => {
//     console.log(eachValue.name);
//   });
//   console.log(newArry);
// }
// iteration(arry);
//output:10kCoders
//10kCoders2
//10kCoders3

// function iteration(arry) {
//   let newArry = arry
//     .map((eachValue) => {
//       return eachValue.name;
//     })
//     .reverse();
//   console.log(newArry);
// }
// iteration(arry);
//output:['10kCoders3', '10kCoders2', '10kCoders'

function iteration(arry) {
  let newArry = arry
    .forEach((eachValue) => {
      return eachValue.name;
    })
    .reverse();
  console.log(newArry);
}
iteration(arry);

//output:TypeError: Cannot read properties of undefined (reading 'reverse')
