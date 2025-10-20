const Challenge = () => {
  let a = 1;
  let b = 2;

  return (
    <div>
      <span>{a}</span>
      <span>{b}</span>

      <button onClick={() => {console.log(a+b)}}>Somar</button>
    </div>
  );
};

export default Challenge;
