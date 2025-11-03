import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from "./components/Component";
import Component2 from "./components/Component2";
import ListRender from "./components/ListRender"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Avançando em React</h1>

      <Component></Component>
      <ListRender></ListRender>
      <Component2></Component2>
    </div>
  )
}

export default App
