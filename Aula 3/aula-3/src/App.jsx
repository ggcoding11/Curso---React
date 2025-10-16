import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from "./components/FirstComponent"
import Component2 from "./components/Component2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent></FirstComponent>
      <Component2></Component2>
    </div>
  )
}

export default App
