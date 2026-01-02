import React from "react";
import MyForm from "./components/MyForm";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <MyForm
        nomeProp={"Gustavo"}
        emailProp={"gustavo123@gmail.com"}
        idadeProp={12}
        bioProp={"Sou um advogado"}
        roleProp={"admin"}
      ></MyForm>
    </div>
  );
};

export default App;
