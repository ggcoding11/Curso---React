import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./components/Component";
import Component2 from "./components/Component2";
import ListRender from "./components/ListRender";
import TesteFuncoes from "./components/TesteFuncoes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Avançando em React</h1>
      
      <TesteFuncoes></TesteFuncoes>
    </div>
  );
}

export default App;
