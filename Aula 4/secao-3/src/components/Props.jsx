const Props = ({brand, color, newCar}) => {
  return (
    <div>
      <h1>Detalhes do carro</h1>

      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {color}</li>
      
        {newCar ? <li>Esse carro é novo</li> : <li>Esse carro é velho</li>}
      </ul>
    </div>
  );
};

export default Props;
