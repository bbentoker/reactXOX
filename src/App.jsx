import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GameBox from './GameBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GameBox/>    
  )
}

export default App
