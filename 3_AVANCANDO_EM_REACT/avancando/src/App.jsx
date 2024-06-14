
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import {useState} from "react";
import CarDetails from './components/CarDetails';



function App() {
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
  <CarDetails brand="BMW" km={100000} color="Preto" newCar={true}/>
  {/* Loop arrays de objetos */}

  {/* children */}
  

    </>
  );
}

export default App;
