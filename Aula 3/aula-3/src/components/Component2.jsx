const Component2 = () => {
  const nome = "Pedrin";
  const obj = {
    name: "Heitor",
    age: 12,
  };

  const handleClick = (e) => {
    alert("oi");
    console.log(e);
  };

  return (
    <div>
      <h1>{obj.name}</h1>
      <p>{obj.age}</p>

    </div>
  );
};

export default Component2;
