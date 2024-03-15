// import ImageComponent from "../../image/image-component";
// const Card = (prop) => {
//   return (
//     <div className="card" style={{ width: "100%" }}>
//       <ImageComponent />
//       <div className="card-body">
//         <h4 className="card-title">{prop.item.title}</h4>
//         <p className="card-text">Some example text.</p>
//         <a href="#" className="btn btn-primary">
//           See Profile
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Card;

// import ImageComponent from "../../image/image-component";
// const Card = (prop) => {
//   const { title, category, image} = prop.item;
//   return (
//     <div className="card" style={{ width: "100%" }}>
//       <ImageComponent imageURL={image}/>
//       <div className="card-body">
//         <h3 className="card-text">{category}</h3>
//         <h4 className="card-title">{title}</h4>
//         <a href="#" className="btn btn-primary">
//           See Profile
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Card;

// import ImageComponent from "../../image/image-component";
// const Card = (prop) => {
//   const { title, category, image, dimensions } = prop.item;
//   return (
//     <div className="card" style={{ width: "100%" }}>
//       <ImageComponent imageURL={image} dimensions={dimensions} />
//       <div className="card-body">
//         <h3 className="card-text">{category}</h3>
//         <h4 className="card-title">{title}</h4>
//         <a href="#" className="btn btn-primary">
//           See Profile
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Card;

import ImageComponent from "../../image/image-component";
const Card = (prop) => {
  const { title, category, image,dimensions} = prop.item;
  return (
    <div className="card" style={{width:"200px",height:"330px"}}>
      <ImageComponent imageURL={image}/>
      <div className="card-body">
        <b className="card-text">{category}</b>
        <p className="card-title">{title}</p>
        <a href="#" className="btn btn-primary">
          See Profile
        </a>
      </div>
    </div>
  );
};
export default Card;