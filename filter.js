// const arry = [
//     {
//       name: "10kCoders",
//       location: "office1",
//       distance:10
//     },
//     {
//       name: "10kCoders2",
//       location: "office2",
//       distance:20
//     },
//     {
//       name: "10kCoders3",
//       location: "office3",
//       distance:100
//     },
//   ];
//   function iteration(arry) {
//     let newArry = arry.filter((eachValue) => {return eachValue.name}).reverse();
//     console.log(newArry);
//   }
//   iteration(arry);
//output: 3 objects in reverse order in array

//   function iteration(arry) {
//     let newArry = arry.filter((eachValue) => {return eachValue.distance<50});
//     console.log(newArry);
//   }
//   iteration(arry);
//   output:[{name: '10kCoders', location: 'office1', distance: 10},
//   {name: '10kCoders2', location: 'office2', distance: 20}]
// const arry = [
//   {
//     name: "10kCoders",
//     location: "office1",
//     distance: 10,
//   },
//   {
//     name: "10kCoders2",
//     location: "office2",
//     distance: 20,
//   },
//   {
//     name: "10kCoders3",
//     location: "office3",
//     distance: 100,
//   },
//   {
//     name: "10kCoders4",
//     location: "office4",
//     distance: 88,
//   },
// ];
//   function iteration(arry) {
//         let newArry = arry.filter((eachValue) => {return eachValue.distance<50&&eachValue.distance});
//         console.log(newArry);
//       }
//       iteration(arry);
// output:[{name: '10kCoders', location: 'office1', distance: 10},
//       {name: '10kCoders2', location: 'office2', distance: 20}]

const arry = [
  {
    name: "10kCoders",
    location: "office1",
    distance: 10,
  },
  {
    name: "10kCoders2",
    location: "office2",
    distance: 20,
  },
  {
    name: "10kCoders3",
    location: "office3",
    distance: 100,
  },
  {
    name: "10kCoders4",
    location: "office5",
    distance: 0,
  },
];

function iteration(arry) {
  let newArry = arry.filter(eachValue => 
    eachValue.distance);
  console.log(newArry);
}
iteration(arry);
//   output:
// [{name: '10kCoders', location: 'office1', distance: 10},
// {name: '10kCoders2', location: 'office2', distance: 20},
// {name: '10kCoders3', location: 'office3', distance: 100}]
