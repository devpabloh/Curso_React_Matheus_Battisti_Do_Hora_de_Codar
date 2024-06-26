
import './App.css';
import { useState, useEffect } from 'react';
//4- Importanto o custom hook para que ele possa ser usado
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";


function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom   
  const{ data:items, httpConfig, loading }  = useFetch(url) //aqui ele importou os dados do data usando const{data}= useFetch(url), e usou a abordagem de alterar/ renomeou os dados para items, colocando os dois pontos :items dentro da importação const{data:items}= useFetch(url), para utilizar eles em determinadas partes no código, que agora vai utilizar na li, para puxar e renderizar os dados na tela. Se com isso der algum erro no map, que vai ser realizado utilizando os valores que os items vão trazer da API, basta criar um if(se) antes para tratar desses items que não tem ainda valores nele e o map só ser executado se tiver valores {items && items.map((product) =>())}

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
    
    /* const res = await fetch(url, {
      method: "POST", 
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - Carregamento dinâmico

    const addedProduct = await res.json();
    setProducts((prevProducts)=>[...prevProducts, addedProduct]) */
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando dados...</p>}
      <ol>
        {items && items.map((produto) => ( // items && items é uma condicional if, para quando tiver dados dos itens fazer o map, se não, não faz, isso serve para resolver os erros de quando não tiver dados.
            <li key={produto.id}>
              {produto.name} -
              R${produto.price}
            </li>
        ))}
      </ol>
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
          </label>
          {loading && <input type="submit" value={"aguarde"} disabled className='Aguarde' />}
          {!loading && <input type="submit" value={"Criar produto"} />}
        </form>
      </div>
    </div>

  );
}

export default App;
