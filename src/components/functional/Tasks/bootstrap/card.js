// const Cards = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Basic Card</h2>
//       <div className="card">
//         <div className="card-body">Basic card</div>
//       </div>
//     </div>
//   );
// };

// const Cards = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Card Header and Footer</h2>
//       <div className="card">
//         <div className="card-header">Header</div>
//         <div className="card-body">Content</div>
//         <div className="card-footer">Footer</div>
//       </div>
//     </div>
//   );
// };

// const Cards = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Cards with Contextual Classes</h2>
//       <div className="card">
//         <div className="card-body">Basic card</div>
//       </div>
//       <br />
//       <div className="card bg-primary text-white">
//         <div className="card-body">Primary card</div>
//       </div>
//       <br />
//       <div className="card bg-success text-white">
//         <div className="card-body">Success card</div>
//       </div>
//       <br />
//       <div className="card bg-info text-white">
//         <div className="card-body">Info card</div>
//       </div>
//       <br />
//       <div className="card bg-warning text-white">
//         <div className="card-body">Warning card</div>
//       </div>
//       <br />
//       <div className="card bg-danger text-white">
//         <div className="card-body">Danger card</div>
//       </div>
//       <br />
//       <div className="card bg-secondary text-white">
//         <div className="card-body">Secondary card</div>
//       </div>
//       <br />
//       <div className="card bg-dark text-white">
//         <div className="card-body">Dark card</div>
//       </div>
//       <br />
//       <div className="card bg-light text-dark">
//         <div className="card-body">Light card</div>
//       </div>
//     </div>
//   );
// };

// const Cards = () => {
//   return (
//     <div className="container mt-3">
//       <h2>Card titles, text, and links</h2>
//       <p>
//         Use .card-title to add card titles to any heading element. The
//         .card-text class is used to remove bottom margins for a p element if it
//         is the last child (or the only one) in card-body. The .card-link class
//         adds a blue color to any link, and a hover effect.
//       </p>
//       <div className="card">
//         <div className="card-body">
//           <h4 className="card-title">Card title</h4>
//           <p className="card-text">Some example text. Some example text.</p>
//           <a href="#" className="card-link">
//             Card link
//           </a>
//           <a href="#" className="card-link">
//             Another link
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

import ImageComponent from "../../image/image-component";
const Cards = () => {
  return (
    <div className="container mt-3">
      <h2>Card Image Overlay</h2>
      <p>
        Turn an image into a card background and use .card-img-overlay to
        overlay the card's text:
      </p>
      <div className="card img-fluid" style={{ width: 800,height:180}}>
        {/* <img
          className="card-img-top"
          src="../bootstrap4/img_avatar1.png"
          alt="Card image"
          style={{ width: "100%" }}
        /> */}
        <ImageComponent/>
        <div className="card-img-overlay">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">
            Some example text some example text. Some example text some example
            text. Some example text some example text. Some example text some
            example text.
          </p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default Cards;
