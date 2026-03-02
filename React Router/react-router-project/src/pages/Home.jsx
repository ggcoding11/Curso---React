import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const url = `http://localhost:3000/produtos`;

const Home = () => {
  const data = useFetch(url, "GET");




  return <div>Home</div>;
};

export default Home;