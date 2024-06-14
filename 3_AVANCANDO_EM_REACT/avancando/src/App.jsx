
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

import {useState} from "react";

function App() {
  let name = "Tata"
  const [userName] = useState("Maria");
  return (
  <>

  <p>Meu primeiro projeto</p>
  <ManageData/>
  <ListRender/>
  <ConditionalRender/>
  <ShowUserName name={userName}/> 
  </>
  );
}

export default App;
