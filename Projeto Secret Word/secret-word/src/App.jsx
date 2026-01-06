import React from "react";
import "./App.css";
import { wordsList } from "./data/words";

const App = () => {
  console.log(wordsList);
  return (
    <div className="App">
      <h2>Secret word</h2>
    </div>
  );
};

export default App;
