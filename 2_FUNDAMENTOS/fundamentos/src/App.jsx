//Components
import FirstComponent from "./components/FirstComponents";
import TemplateExpressions from "./components/TemplateExpressions";
import Event from "./components/Event"
import Challenge from "./components/Challenge"

// style - css
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from "./components/MyComponents";

function App() {
  return (
    <>
    <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponents/>
      <Event/>
      <Challenge/>
      
      
    </>
  )
}

export default App
