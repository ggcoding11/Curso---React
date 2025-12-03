const Props = ({brand, km, newCar}) => {
  return (
    <div>
      <h1>Detalhes do carro</h1>

      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
      
        {newCar ? <li>Esse carro é novo</li> : <li>Esse carro é velho</li>}
      </ul>
    </div>
  );
};

export default Props;
