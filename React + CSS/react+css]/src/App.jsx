import React from "react";
import styles from "./App.css";

const App = () => {
  let redTitle = false;

  return (
    <div className="container">
      <h1>React + CSS</h1>
      <p style={{ color: "red", fontSize: "20px" }}>Esse é o parágrafo</p>

      <h2 className={redTitle ? "red-title" : "blue-title"}>CSS Dinâmico</h2>
    </div>
  );
};

export default App;
