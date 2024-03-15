// import Toast from 'react-bootstrap/Toast';
// function ToastComponent() {
//   return (
//     <Toast>
//       <Toast.Header>
//         <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
//         <strong className="me-auto">Bootstrap</strong>
//         <small>11 mins ago</small>
//       </Toast.Header>
//       <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
//     </Toast>
//   );
// }
// export default ToastComponent;

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Toast from "react-bootstrap/Toast";
// function ToastComponent() {
//   const [showA, setShowA] = useState(true);
//   const [showB, setShowB] = useState(true);
//   const toggleShowA = () => setShowA(!showA);
//   const toggleShowB = () => setShowB(!showB);
//   return (
//     <Row>
//       <Col md={6} className="mb-2">
//         <Button onClick={toggleShowA} className="mb-2">
//           Toggle Toast <strong>with</strong> Animation
//         </Button>
//         <Toast show={showA} onClose={toggleShowA}>
//           <Toast.Header>
//             <img
//               src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
//               width={50}
//               height={50}
//             />
//             <strong className="me-auto">Bootstrap</strong>
//             <small>11 mins ago</small>
//           </Toast.Header>
//           <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//       </Col>
//       <Col md={6} className="mb-2">
//         <Button onClick={toggleShowB} className="mb-2">
//           Toggle Toast <strong>without</strong> Animation
//         </Button>
//         <Toast onClose={toggleShowB} show={showB} animation={false}>
//           <Toast.Header>
//           <img
//               src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
//               width={50}
//               height={50}
//             />
//             <strong className="me-auto">Bootstrap</strong>
//             <small>11 mins ago</small>
//           </Toast.Header>
//           <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//       </Col>
//     </Row>
//   );
// }
// export default ToastComponent;

import Toast from 'react-bootstrap/Toast';
function ToastComponent() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}
export default ToastComponent;