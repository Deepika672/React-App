// function iteration() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// iteration();
// output:
// 0 to 9

// function iteration() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// iteration();
//output: 0 to 9
//10

// function iteration() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// iteration();
//output:0 to 9
//Reference Error: i is not defined.

function iteration() {
  for (const i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}
iteration();
//output:0
// Error: Assignment to constant variable
