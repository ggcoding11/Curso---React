import React from "react";

const FunctionProp = ({ funcao }) => {
  funcao();

  return (
    <div>
      <button onClick={funcao}>Clique aqui!</button>
    </div>
  );
};

export default FunctionProp;
