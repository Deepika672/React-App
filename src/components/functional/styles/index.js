//1.Inline Styling
// export default function TodoList() {
//   const style = {
//     color: "red",
//     fontSize: 20,
//   };
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li style={{ color: "blue", fontSize: 30 }}>
//           Invent new traffic lights
//         </li>
//         <li style={style}>Rehearse a movie scene</li>
//         <li style={style}>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }

//2.External Styling
//import "./index.css";
// export default function TodoList() {
//   return (
//     <>
//       <h1 className="highLightText">Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }

//3.External Module Styling
import styles from "./index.module.css";
export default function TodoList() {
  return (
    <>
      <h1 className={styles.newText}>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}
