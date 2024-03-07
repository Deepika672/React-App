// Conditional Rendering
// const ConditionalRender=()=>{
//  let marks=90
//     return(
//         <div>
//             <h3>Student Name-----Deepika</h3>
//             {
//                 marks>80?<h4>Secured A+ grade</h4>:<h4>Secured A grade</h4>
//             }
//         </div>
//     )
// }

// Nested Conditional Rendering
// const ConditionalRender = () => {
//   let marks = 50;
//   return (
//     <div>
//       <h3>Student Name-----Deepika</h3>
//       {marks > 90 ? (
//         <h4>Secured A+ grade</h4>
//       ) : marks > 80 ? (
//         <h4>Secured A grade</h4>
//       ) : marks > 60 ? (
//         <h4>Secured B+ grade</h4>
//       ) : marks > 40 ? (
//         <h4>Pass</h4>
//       ) : (
//         <h4>Better Luck next time,your near to goal</h4>
//       )}
//     </div>
//   );
// };

//List Rendering
// const ConditionalRender = () => {
//   let arrayOfObjects = [
//     {
//       name: "kiran",
//       marks: 38,
//     },
//     {
//       name: "Sree",
//       marks: 80,
//     },
//     {
//       name: "Neha",
//       marks: 90,
//     },
//     {
//       name: "Akhila",
//       marks: 85,
//     },
//   ];
//   return (
//     <div>
//       {arrayOfObjects.map((eachObject) => {
//         const { name, marks } = eachObject;
//         return (
//           <div>
//             <h4>{name}</h4>
//             <h4>Marks Obtained {marks}</h4>
//             {marks > 90 ? (
//               <h4>Secured A+ grade</h4>
//             ) : marks > 80 ? (
//               <h4>Secured A grade</h4>
//             ) : marks > 60 ? (
//               <h4>Secured B+ grade</h4>
//             ) : marks > 40 ? (
//               <h4>Pass</h4>
//             ) : (
//               <h4>Better Luck next time,your near to goal</h4>
//             )}
//             <div
//               style={{ width: "30%", height: 2, backgroundColor: "red" }}
//             ></div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

//Key Prop
const ConditionalRender = () => {
    let arrayOfObjects = [
      {
        name: "kiran",
        marks: 38,
        id:1,
      },
      {
        name: "Sree",
        marks: 80,
        id:2,
      },
      {
        name: "Neha",
        marks: 90,
        id:3,
      },
      {
        name: "Akhila",
        marks: 85,
        id:4,
      },
    ];
    return (
      <div>
        {arrayOfObjects.map((eachObject) => {
          const { name, marks,id} = eachObject;
          return (
            <div key={id}>
              <h4>Student Name is {name} and id is {id}</h4>
              <h4>Marks Obtained {marks}</h4>
              {marks > 90 ? (
                <h4>Secured A+ grade</h4>
              ) : marks > 80 ? (
                <h4>Secured A grade</h4>
              ) : marks > 60 ? (
                <h4>Secured B+ grade</h4>
              ) : marks > 40 ? (
                <h4>Pass</h4>
              ) : (
                <h4>Better Luck next time,your near to goal</h4>
              )}
              <div style={{width:"30%",height:2,backgroundColor:"red"}}></div>
              </div>
          );
  
        })}
      </div>
    );
  };
export default ConditionalRender;
