
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title/Title';

function App() {
  const n = 15
  const [nome] = useState("Pablo")
  const redTitle = false

  return (
    <>
    {/* CSS global */}
    <h1>React com CSS</h1>
    {/* CSS de componente */}
    <MyComponent/>
    <p>Esse estilo é do APP.jsx ou APP.js</p>
    {/* Inline CSS */}
    <p style={{color:"blue", padding:"25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline </p>
    {/* CSS inline dinâmico */}
    <h2 style={n < 10 ? ({color:"purple"}):({color:"pink"})}>CSS inline Dinâmico</h2>
    <h2 style={n > 10 ? ({color:"purple"}):({color:"pink"})}>CSS inline Dinâmico</h2>
    <h2 style={
      nome === "Pablo" ?
      {color:"green", background: "black"} : null
    }>Teste nome</h2>
    {/* Classe dinâmica */}
    <h2 className={redTitle ? "red-title":"title"}>Este titulo vai ter uma classe dinâmica</h2>
    {/* CSS modules */}
    <Title/>
    </>
  );
}

export default App;
