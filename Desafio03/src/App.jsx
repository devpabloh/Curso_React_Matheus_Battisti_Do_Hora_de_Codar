import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Elo from "./assets/Captura de tela 2024-05-25 161756.png"
import ManageData from './Components/ManageData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Seção 3</h1>
      {/* Como usar uma imagem que está na pasta public */}
      <div>
        <img src="/Captura de tela 2024-05-30 201537.png" alt="campeão league of legends ornn" />
      </div>

      {/* como usar uma imagem que está dentro do Assets 
      Você tem que importar ela como está na parte de cima da página, e depois você coloca na tag img, tirando as aspas duplas e colocando uma interpolação {e aqui dentro vai o nome que você deu na importação que criou}, a tag div é opicional*/}
      <div>
        <img src={Elo} alt="elo league of legends" />

        <ManageData></ManageData>
      </div>

    </>
  )
}

export default App
