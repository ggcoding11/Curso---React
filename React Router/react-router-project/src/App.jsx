import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Navbar from "./components/Navbar";
import {Link} from "react-router-dom"

import "./App.css"

const App = () => {
  return (
    <div>
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>

          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
