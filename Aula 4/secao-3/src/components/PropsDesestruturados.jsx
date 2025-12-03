const PropsDesestruturados = ({marca, km, ano}) => {

  return (
    <div>
      <h1>Detalhes do carro</h1>

      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Ano: {ano}</li>
      </ul>
    </div>
  );
};

export default PropsDesestruturados;
