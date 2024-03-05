// Object Destructuring
// let obj = {
//   schoolName: "chaitanya techno school",
//   students: 1000,
//   campus: [
//    {
//      name: "kphb",
//    },
//    {
//     name: "moosapeta",
//     },
//     ],
//    mainBranch: "Secunderabad",
//  };
//  const { schoolName, students, campus, mainBranch } = obj;
//  console.log(mainBranch); //---Secunderabad
//  const { schoolName, students, campus, mainBranch: PrimaryBranch } = obj;
//  console.log(PrimaryBranch);
//  output:Secunderabad

//let obj = {
//   schoolName: "chaitanya techno school",
//   students: 1000,
//   campus: [
//     {
//       name: "kphb",
//     },
//     {
//       name: "moosapeta",
//     },
//   ],
//   area: {
//     height: 300,
//     width: 250,
//   },
//   mainBranch: "Secunderabad",
// };

// const {
//   schoolName,
//   students,
//   campus,
//   mainBranch,
//   area: { height, width },
// } = obj;
// console.log(width);
//output:250

//Array Destructuring
let arry = [1, 2, 3];
let [a, b, c] = arry;
console.log(a); //--output:1
console.log(b); //--output:2
console.log(c); //--output:3

let array = [{ name: "a" }, { name: "b", age: 23 }];
let [p, q] = array;
console.log(p); //{name:'a'}
console.log(q); //{name:'b',age:23}
