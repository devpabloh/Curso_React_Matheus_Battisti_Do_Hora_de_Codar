
const Challenge = () => {
    const a = 10;
    const b = 15;
  return (
    <div>
        <p>A:{a}</p>
        <p>B:{b}</p>
        <button onClick={()=>console.log(a+b)}>click aqui para somar!</button>

    </div>
  );
}

export default Challenge