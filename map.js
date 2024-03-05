// without Map print all elements in array
// const arry=[1,2,3]
// for(let i=0;i<arry.length;i++){
//     console.log(arry[i])
// }
// output:
// 1
// 2
// 3

//without Map pushing in to another array
// const arry=[1,2,3]
// let arry2=[]
// for(let i=0;i<arry.length;i++){
//     arry2.push(arry[i])
// }
// console.log(arry2)
//output:[1,2,3]

// const arry=[1,2,3]
// let arry2=[]
// for(let i=0;i<arry.length;i++){
//     arry2.push(arry[i]*arry[i])
// }
// console.log(arry2)
//output:[1,4,9]

//Using Map:
// const arry = [1, 2, 3];
// function iteration() {
//   let newArry = arry.map((eachValue) => eachValue * eachValue);
//   console.log(newArry);
// }
// iteration();
//output:[1,4,9]

// const arry = [1, 2, 3];
// function iteration() {
//   let newArry = arry.map((eachValue) => {return });
//   console.log(newArry);
// }
// iteration();
//output:[undefined,undefined,undefined]

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
function iteration(arry) {
  let newArry = arry.map((eachValue) => {
    return eachValue.name;
  });
  console.log(newArry);
}
iteration(arry);
//output:['10kCoders', '10kCoders2', '10kCoders3']
