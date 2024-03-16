function TextComponent(props){
  const { title } = props;
  return (
    <div>
      <h2>General Prop</h2>
      <h3>{title}</h3>
    </div>
  );
}
export default TextComponent;
