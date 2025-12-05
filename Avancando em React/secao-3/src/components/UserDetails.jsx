import React from "react";

const UserDetails = ({ pessoa }) => {
  return (
    <>
      <ul>
        <li>Nome: {pessoa.nome}</li>
        <li>Idade: {pessoa.idade}</li>
        <li>Profissão: {pessoa.profissao}</li>

        {pessoa.idade >= 18 ? <p>Tem idade para dirigir</p> : <p>Não tem idade para dirigir</p>}
      </ul>
    </>
  );
};

export default UserDetails;
