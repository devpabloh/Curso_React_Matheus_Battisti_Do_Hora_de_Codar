
import './App.css';

// 1 - configurando react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 2 - pages import
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Info from './pages/info';
import NotFound from "./pages/NotFound"

// 3 - Importar os componentes
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter> {/* Os elementos fora do BrowserRouter serão exibidos em todas as páginas. */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route> {/* path (caminho), element é o componente que vai ser impresso quando o usuário acessar essa rota/caminho */} 

          <Route path="/About" element={<About/>}></Route>
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product/>}></Route>
          {/* 6 - nested route */}
          <Route path='/products/:id/info' element={<Info></Info>} ></Route>
          {/* 7 - no match rout */}
          <Route path='#' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
