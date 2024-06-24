
import './App.css';
import { useState, useEffect } from 'react';
const url = "http://localhost:3000/products";


function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice]= useState("")

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  },[]);

  const handleSubmit = async (e)=>{

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((produtos)=>(
           <li key={produtos.id}>
            {produtos.name} 
            </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e)=>{
              setName(e.target.value)
            }} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name='price' onChange={(e)=>{
              setPrice(e.target.value)
            }} />
            <input type="submit" value={"Criar produto"} className='add-product' />
          </label>
        </form>
      </div>
    </div>

  );
}

export default App;
