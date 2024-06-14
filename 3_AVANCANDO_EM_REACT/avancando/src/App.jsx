
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import {useState} from "react";
import CarDetails from './components/CarDetails';



function App() {
  const [userName] = useState("Maria");

  const [cars] = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km:0},
    {id:1, brand: "Kia", color: "Branco", newCar: false, km:34343},
    {id:1, brand: "Renault", color: "Azul", newCar: false, km:234},
    {id:1, brand: "Pegeout", color: "Verde", newCar: false, km:80000}
  ]

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
  {cars.map((car)=>(
      <CarDetails 
      brand={car.brand} 
      color={car.color} 
      km={car.km}
      newCar={car.newCar} 
      />
    ))}
    </>
  );
}

export default App;
