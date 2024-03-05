// performing spread operator on arrays
// let array1=[1,2,3,4,5,6,7]
// let [x,y,...remaining]=array1
// console.log(remaining)//[3,4,5,6,7]

// performing spread operator on objects
// let obj={
//     name:"a"
// }
// let newProperty=obj
// console.log(newProperty)
// output:{name:"a"}

// updating parent child also updating
// let obj={
//     name:"a"
// }
// obj["id"]=90
// let newProperty=obj
// console.log(newProperty)
// output:{name:'a',id:90}

// Here updating child effects parent
// Shallow Copy
// let obj={
//     name:"a"
// }
// let newProperty=obj
// newProperty["id"]=90
// console.log(newProperty,obj)
// output:{name: 'a', id: 90} {name: 'a', id: 90}

// Deep Copy
// 1.Using Spread operator
// let obj={
//     name:"a"
// }
// let newProperty={...obj}
// newProperty["id"]=90
// console.log(newProperty,obj)
// output:{name:'a',id:90} {name:'a'}

//2.using object.assign()
// let obj = {
//   name: "a",
// };
// let newProperty = Object.assign({}, obj);

// obj["id"] = 90;

// console.log(obj);
// console.log(newProperty);
// output:
// {name: 'a', id: 90}
// {name: 'a'}

//3.Using JSON.parse()
let obj = {
  name: "a",
};
let newProperty = JSON.parse(JSON.stringify(obj));
newProperty.id = 80;
console.log(obj);
console.log(newProperty);
//output:{name: 'a'}
//{name: 'a', id: 80}

