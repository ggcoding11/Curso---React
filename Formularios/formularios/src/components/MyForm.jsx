import React from 'react'
import "../components/MyForm.css"

const MyForm = () => {
  return (
    <div className="container">
      <h1>Formulário de teste</h1>

      <form action="" className="formulario">
        <div>
          <label htmlFor="nome">Nome: </label>
          <input type="text" name="" id="nome" />
        </div>

        <div>
          <label htmlFor="idade">Idade: </label>
          <input type="number" name="" id="idade" min={0} max={100}/>
        </div>

      </form>
    </div>
  )
}

export default MyForm