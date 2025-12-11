import React from "react";
import styles from "../components/Detalhes.module.css"

const Detalhes = ({ nome, marca, km }) => {
  return (
    <div>
      <h1>Carro: {nome}</h1>

      <ul className={styles["lista"]}> 
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
      </ul>
    </div>
  );
};

export default Detalhes;
