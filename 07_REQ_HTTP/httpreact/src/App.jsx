
import './App.css';
import { useState, useEffect } from 'react';
//4- Importanto o custom hook para que ele possa ser usado
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";


function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom   
  const{ data:items }  = useFetch(url)
  console.log(data)

  const [name, setName] = useState("");
  const [price, setPrice]= useState("");

  

  // 1 - resgatando dados
/*   useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);
      const data = await res.json();
      console.table(data);
      setProducts(data);
    }
    fetchData();
  },[]); */

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const product = {
      name: name, 
      price: price,
      
    };
    
    const res = await fetch(url, {
      method: "POST", 
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - Carregamento dinâmico

    const addedProduct = await res.json();
    setProducts((prevProducts)=>[...prevProducts, addedProduct])

    setName("");
    setPrice("");
  };

  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items.map((produto)=>(
            <li key={produto.id}>
              {produto.name} -
              R${produto.price}
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
