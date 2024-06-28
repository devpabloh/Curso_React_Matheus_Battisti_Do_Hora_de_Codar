import {link} from "react-router-dom";
import { useFetch} from "../hooks/useFetch";

import "../pages/home.css"

const home = () => {
    // 3 - carregamento de dados
    const url = 'http://localhost:3000/products'
    const {data: items, loading, error} = useFetch(url)
  return (
    <div>
      <h1>Produtos</h1>
      
    </div>
    
  )
}

export default home