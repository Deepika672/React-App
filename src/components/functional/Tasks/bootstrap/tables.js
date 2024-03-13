//Tables
// const Table = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Basic Table</h2>
//       <p>
//         The .table class adds basic styling (light padding and horizontal
//         dividers) to a table:
//       </p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>John</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr>
//           <tr>
//             <td>Mary</td>
//             <td>Moe</td>
//             <td>mary@example.com</td>
//           </tr>
//           <tr>
//             <td>July</td>
//             <td>Dooley</td>
//             <td>july@example.com</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Table = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Hover Rows</h2>
//       <p>
//         The .table-hover class enables a hover state (grey background on mouse
//         over) on table rows:
//       </p>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>John</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr>
//           <tr>
//             <td>Mary</td>
//             <td>Moe</td>
//             <td>mary@example.com</td>
//           </tr>
//           <tr>
//             <td>July</td>
//             <td>Dooley</td>
//             <td>july@example.com</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Table = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Contextual Classes</h2>
//       <p>
//         Contextual classes can be used to color the table, table rows or table
//         cells. The classes that can be used are: .table-primary, .table-success,
//         .table-info, .table-warning, .table-danger, .table-active,
//         .table-secondary, .table-light and .table-dark:
//       </p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Default</td>
//             <td>Defaultson</td>
//             <td>def@somemail.com</td>
//           </tr>
//           <tr className="table-primary">
//             <td>Primary</td>
//             <td>Joe</td>
//             <td>joe@example.com</td>
//           </tr>
//           <tr className="table-success">
//             <td>Success</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr>
//           <tr className="table-danger">
//             <td>Danger</td>
//             <td>Moe</td>
//             <td>mary@example.com</td>
//           </tr>
//           <tr className="table-info">
//             <td>Info</td>
//             <td>Dooley</td>
//             <td>july@example.com</td>
//           </tr>
//           <tr className="table-warning">
//             <td>Warning</td>
//             <td>Refs</td>
//             <td>bo@example.com</td>
//           </tr>
//           <tr className="table-active">
//             <td>Active</td>
//             <td>Activeson</td>
//             <td>act@example.com</td>
//           </tr>
//           <tr className="table-secondary">
//             <td>Secondary</td>
//             <td>Secondson</td>
//             <td>sec@example.com</td>
//           </tr>
//           <tr className="table-light">
//             <td>Light</td>
//             <td>Angie</td>
//             <td>angie@example.com</td>
//           </tr>
//           <tr className="table-dark">
//             <td>Dark</td>
//             <td>Bo</td>
//             <td>bo@example.com</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

const Table = () => {
  return (
    <div className="container mt-3">
      <h2>Responsive Table</h2>
      <p>
        The .table-responsive class adds a scrollbar to the table when needed:
      </p>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
              <th>Sex</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anna</td>
              <td>Pitt</td>
              <td>35</td>
              <td>New York</td>
              <td>USA</td>
              <td>Female</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;