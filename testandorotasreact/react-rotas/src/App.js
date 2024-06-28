import './App.css';

// 1 - configurando react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 2 - pages import
import About from "../pages/About"
import Home from "../pages/home"

// 3 - Importar os componentes
import NavBar from '../components/NavBar/NavBar';

import { useFetch } from '../hooks/useFetch';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter> {/* Os elementos fora do BrowserRouter serão exibidos em todas as páginas. */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route> {/* path (caminho), element é o componente que vai ser impresso quando o usuário acessar essa rota/caminho */}

          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

