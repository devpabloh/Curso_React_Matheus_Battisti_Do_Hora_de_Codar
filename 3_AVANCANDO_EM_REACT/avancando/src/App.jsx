
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import {useState} from "react";
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';



function App() {
  const [userName] = useState("Maria");

  function showMenssager(){
    console.log("Evento do componente Pai")
  }

  const[message, setMessage] = useState("")

  const handleMessage = (msg)=>{
    setMessage(msg);

  };


  const pessoas = [
    {id:1,nome: "Pablo", idade:30, profissão: "contador"}, 
    {id:2,nome: "Tais", idade:22, profissão: "Professora"},
    {id:3,nome: "André", idade:32, profissão: "Servsinal"},
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

  {/* children */}
  <Container>
    <p>Esse é o componente filho, no qual será abraçado pelo Container.</p>
  </Container>
    {/* Executar função  */}
    <ExecuteFunction myFunction={showMenssager}/>

    {/* State lift */}
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage}/>
    {/* Desafio */}
    {pessoas.map((pessoas)=>(
      <UserDetails id={pessoas.id} nome={pessoas.nome} idade={pessoas.idade} profissão={pessoas.profissão}/>
    ))}
    </>
  );
}

export default App;
