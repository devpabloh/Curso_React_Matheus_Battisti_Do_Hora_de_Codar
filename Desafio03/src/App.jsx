import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Seção 3</h1>
      {/* Como usar uma imagem que está na pasta public */}
      <div>
        <img src="/Captura de tela 2024-05-30 201537.png" alt="" />
      </div>

      {/* como usar uma imagem que está dentro do Assets 
      Você tem que importar ela como está na parte de cima da página, e depois você coloca na tag img, a tag div é opicional*/}
      <div>
        <img src="" alt="" />
      </div>

    </>
  )
}

export default App
