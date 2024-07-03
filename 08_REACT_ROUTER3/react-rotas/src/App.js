
import './App.css';

// 1 - configurando react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// 2 - pages import
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from './pages/info';
import NotFound from "./pages/NotFound"
import Search from './pages/Search';

// 3 - Importar os componentes
import NavBar from './components/NavBar/NavBar';
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter> {/* Os elementos fora do BrowserRouter serão exibidos em todas as páginas. */}
        <NavBar/>
        {/* 9 - Search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}></Route> {/* path (caminho), element é o componente que vai ser impresso quando o usuário acessar essa rota/caminho */} 

          <Route path="/About" element={<About/>}></Route>

         {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info/>}/>

          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product/>}/>
          

          <Route path='/search' element={<Search></Search>}/>

          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to="/About"/>}/>

          {/* 7 - no match rout */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
