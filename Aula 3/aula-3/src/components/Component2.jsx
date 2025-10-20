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

  const renderForm = () => {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />
      </form>
    );
  };

  return (
    <div>
      <h1>{obj.name}</h1>
      <p>{obj.age}</p>

      <button onClick={handleClick}>Clicar</button>

      {renderForm()}
    </div>
  );
};

export default Component2;
