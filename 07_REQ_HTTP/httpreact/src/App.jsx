
import './App.css';
import { useState, useEffect } from 'react';
const url = "http://localhost:3000/products";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchdata(){
      const res = await fetch(url);
      const data = res.json();
      setProducts(data);
    }
    fetchdata()
  },[]);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;
