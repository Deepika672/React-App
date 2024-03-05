const JsxFunctional = () => {
  const object = {
    name: "Ram",
    age: 15,
  };
  return (
    //Jsx 1st rule
    <div>
      <h2>Functional Jsx</h2>
      <h2>Good Morning {object.name}</h2>
      <h2>{object.age}</h2>
      {/* 2nd rule */}
      <button onClick={() => {}}>click</button>
      {/* 3rd rule */}
      <h3 className="hello">{object.name}</h3>
      {/* 4th rule */}
      <img
        src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
        width={100}
        height={100}
      />
    </div>
  );
};
export default JsxFunctional;
