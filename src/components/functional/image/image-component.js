// const ImageComponent =(props)=>{
//   const {imageURL}=props
//   console.log(imageURL,"imageURL FROM image component")
//   return(
//       <img  src={imageURL} width={100} height={100} />
//   )
// }
// export default ImageComponent;

// const ImageComponent = (props) => {
// const { imageURL, dimensions } = props;
// console.log(imageURL, "imageURL FROM image component");
// return (
//   <img src={imageURL} width={dimensions.width} height={dimensions.height} />
// );
// };
// export default ImageComponent;

const ImageComponent = () => {
  return (
    <img
      src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
      width={100}
      height={100}
    />
  );
};
export default ImageComponent;
