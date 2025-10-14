import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <fieldset class="campo">
        <h3>Preencha o formulário</h3>
        <form>
          <label htmlFor="">Email: </label>
          <input type="email" name="" id="" />

          <br />

          <label htmlFor="">Senha: </label>
          <input type="password" name="" id="" />
        </form>
      </fieldset>
    </>
  );
}

export default App;
