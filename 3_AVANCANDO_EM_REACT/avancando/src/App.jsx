
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import {useState} from "react";
import CarDetails from './components/CarDetails';



function App() {
  let name = "Tata"
  const [userName] = useState("Maria");
  return (
  <>

  <p>Meu primeiro projeto</p>
  <ManageData/>
  <ListRender/>
  <ConditionalRender/>
  {/* Props */}
  <ShowUserName name={userName}/> 
  {/* Destructuring */}
  <CarDetails brand="BMW" km={100000} color="Preto"/>
  {/* Loop arrays de objetos */}
  
  </>
  );
}

export default App;
