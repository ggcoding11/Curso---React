import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

import "./App.css";
import MoreInfo from "./pages/MoreInfo";
import Precos from "./pages/Precos";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";
import PaginaTeste from "./pages/PaginaTeste";
import Teste from "./components/Teste";

const App = () => {
  return (
    <div>
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Teste />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<MoreInfo />} />
          <Route path="/products/:id/info/precos" element={<Precos />} />
          <Route path="/search" element={<Search />} />
          <Route path="/teste" element={<PaginaTeste />} />
          <Route path="/company" element={<Navigate to="/about"/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
