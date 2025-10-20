import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from "./components/FirstComponent"
import Component2 from "./components/Component2"
import Challenge from "./components/Challenge"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Challenge></Challenge>
    </div>
  )
}

export default App
