function TextComp(props){
  const { title, children } = props;
  console.log(props);
  return(
  <>
    {children}
  </>
  );
}
export default TextComp;
